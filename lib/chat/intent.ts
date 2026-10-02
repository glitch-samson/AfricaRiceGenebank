import { buildSearchTerms, extractAccessionCandidates } from '@/lib/chat/catalogue';

/**
 * Layer 2 of the assistant architecture: intent + entity recognition.
 *
 * These rules never decide the answer on their own. They give the language
 * model a strong hint (intent, extracted accession codes, which filters the
 * website can and cannot support) and they drive the deterministic fallback
 * used when no AI provider is configured.
 */

export type ChatIntent =
    | 'GENERAL_CONVERSATION'
    | 'GENERAL_INFORMATION'
    | 'WEBSITE_NAVIGATION'
    | 'ACCESSION_SEARCH'
    | 'VARIETY_SEARCH'
    | 'AVAILABILITY_SEARCH'
    | 'COUNTRY_SEARCH'
    | 'TRAIT_SEARCH'
    | 'GERMPLASM_REQUEST'
    | 'REQUEST_STATUS'
    | 'NEWSLETTER'
    | 'CONTACT'
    | 'DATA_OR_PUBLICATION'
    | 'UNKNOWN';

export type UnsupportedFacet =
    | 'availability'
    | 'quantity'
    | 'country'
    | 'trait'
    | 'ecosystem'
    | 'request_status'
    | 'pricing'
    | 'people';

export type IntentEntities = {
    accessionCodes: string[];
    taxon?: 'glaberrima' | 'sativa' | 'wild' | 'interspecific';
    country?: string;
    trait?: string;
    ecosystem?: string;
};

export type IntentResult = {
    intent: ChatIntent;
    /** True when answering honestly requires catalogue/site lookup. */
    needsData: boolean;
    /** True when the model must be told a requested field is not in the data. */
    needsClarification: boolean;
    entities: IntentEntities;
    /** Fields the user asked about that the published data does not contain. */
    unsupported: UnsupportedFacet[];
    searchTerms: string[];
    guidance: string;
};

const greetings = /^(hi|hey|hello|yo|good (morning|afternoon|evening)|how are you|how'?s it going|thanks|thank you|cheers|bye|goodbye|see you)\b/i;
const smallTalkOnly = /^[^?]{0,40}$/;

const countryList = [
    'nigeria', 'sierra leone', 'ghana', 'liberia', 'guinea', 'mali', 'senegal', 'gambia', 'burkina faso',
    'cote d ivoire', "cote d'ivoire", 'ivory coast', 'benin', 'togo', 'niger', 'chad', 'cameroon', 'gabon',
    'congo', 'uganda', 'kenya', 'tanzania', 'mozambique', 'madagascar', 'rwanda', 'burundi', 'ethiopia',
    'sudan', 'egypt', 'zambia', 'malawi', 'zimbabwe', 'south africa', 'gambia', 'guinea bissau', 'mauritania',
    'burkina', 'india', 'philippines', 'china', 'japan', 'indonesia', 'thailand', 'vietnam', 'bangladesh',
    'brazil', 'colombia', 'peru',
];

/** Ecology / ecosystem terms the website mentions but the catalogue cannot filter on. */
const ecosystemList = ['upland', 'lowland', 'irrigated', 'rainfed', 'mangrove', 'deepwater', 'aerobic'];

const traitList = [
    'drought', 'salinity', 'salt', 'heat', 'flood', 'flooding', 'submergence', 'waterlogging', 'iron toxicity',
    'rymv', 'yellow mottle', 'gall midge', 'blast', 'bacterial blight', 'xa21', 'lodging', 'amylose', 'aroma',
    'grain quality', 'yield', 'maturity', 'tillering', 'weed competitiveness', 'cold tolerance', 'pest resistance',
    'disease resistance', 'protein', 'zinc', 'biofortification', 'phenology', 'stress tolerance',
];

export function isRestrictedRequest(message: string): boolean {
    return /\b(admin dashboard|staff login|control panel|service role|service_role|supabase key|api key|credentials|password|sql dump|database credentials|env file)\b/i.test(
        message,
    );
}

export function isLinkExplicitlyRequested(message: string): boolean {
    const q = message.toLowerCase();
    if (/\b(link|links|url|urls|webpage|web page|website|page)\b/i.test(q)) return true;
    if (/\b(give|send|share|provide|show)\s+(me\s+)?(a\s+|the\s+)?(link|url|path|page|direction)\b/i.test(q)) return true;
    if (/\bwhere\s+(can\s+i|to|do\s+i|should\s+i)\s+(find|get|see|access|download|view|browse|go)\b/i.test(q)) return true;
    if (/\bhow\s+(can\s+i|do\s+i)\s+(get\s+to|access|navigate\s+to|reach|go\s+to|request|order|submit)\b/i.test(q)) return true;
    if (/\b(take|direct|point|navigate|lead|guide)\s+me\s+to\b/i.test(q)) return true;
    return false;
}

function detectTaxon(q: string): IntentEntities['taxon'] {
    if (/\b(wild relative|wild relatives|longistaminata|barthii|punctata|brachyantha|eichingeri|\bwild\b)/.test(q)) return 'wild';
    if (/\b(interspecific|nerica|arica|hybrid)\b/.test(q)) return 'interspecific';
    if (/\b(glaberrima|african rice)\b/.test(q)) return 'glaberrima';
    if (/\b(sativa|asian rice)\b/.test(q)) return 'sativa';
    return undefined;
}

function extractEntities(message: string): IntentEntities {
    const q = message.toLowerCase();
    const entities: IntentEntities = { accessionCodes: extractAccessionCandidates(message) };
    const taxon = detectTaxon(q);
    if (taxon) entities.taxon = taxon;
    const country = countryList.find((candidate) => q.includes(candidate));
    if (country) entities.country = country;
    const trait = traitList.find((candidate) => q.includes(candidate));
    if (trait) entities.trait = trait;
    const ecosystem = ecosystemList.find((candidate) => q.includes(candidate));
    if (ecosystem) entities.ecosystem = ecosystem;
    return entities;
}

function detectUnsupported(message: string, entities: IntentEntities): UnsupportedFacet[] {
    const q = message.toLowerCase();
    const facets = new Set<UnsupportedFacet>();

    // Existence questions ("do you have NERICA 1?") are answerable from the
    // published catalogue, so only explicit stock wording counts as a facet.
    if (/\b(available|availability|in stock|out of stock|stock level|quantity|how much|how many seeds|viability|germination|distribution status|can i get|still available)\b/.test(q)) {
        facets.add('availability');
    }
    if (/\b(quantity|how much|how many seeds|grams|kg|kilos|packet size|seed weight)\b/.test(q)) facets.add('quantity');
    if (/\b(country of origin|origin country|from which country|provenance|passport data)\b/.test(q)) facets.add('country');
    if (entities.country && /\b(accessions?|varieties|seeds?|germplasm|material)\b/.test(q) && /\b(from|in|of)\b/.test(q)) facets.add('country');
    if (entities.trait && /\b(accessions?|varieties|lines|germplasm|material|which|find|search|list|show)\b/.test(q)) facets.add('trait');
    if (entities.ecosystem && /\b(accessions?|varieties|seeds?|germplasm|material)\b/.test(q)) facets.add('ecosystem');
    if (/\b(status of (my|the) (request|order)|track (my )?(request|order)|my request|did you (receive|ship)|has my (request|order))\b/.test(q)) facets.add('request_status');
    if (/\b(price|prices|cost|costs|fee|fees|payment)\b/.test(q)) facets.add('pricing');
    if (/\b(genebank manager|who (is|runs) the genebank|staff|team|curator|head of)\b/.test(q)) facets.add('people');

    return Array.from(facets);
}

export function classifyIntent(message: string): IntentResult {
    const raw = (message ?? '').trim();
    const q = raw.toLowerCase();
    const entities = extractEntities(raw);
    const unsupported = detectUnsupported(raw, entities);
    const searchTerms = buildSearchTerms(raw);
    const wordCount = q.split(/\s+/).filter(Boolean).length;

    const finish = (intent: ChatIntent, needsData: boolean, guidance: string, needsClarification = false): IntentResult => ({
        intent,
        needsData,
        guidance,
        needsClarification,
        entities,
        unsupported,
        searchTerms,
    });

    // 1. Pure social language must never trigger a database query.
    if (greetings.test(q) && wordCount <= 6 && !entities.accessionCodes.length && !/\b(accession|seed|variet|germplasm|available)\b/.test(q)) {
        return finish('GENERAL_CONVERSATION', false, 'Pure social message: reply naturally, do not query any data source.');
    }

    if (isRestrictedRequest(raw)) {
        return finish(
            'WEBSITE_NAVIGATION',
            false,
            'The visitor asked about admin/internal resources. Politely explain that administrative areas, credentials and internal records are not available to the public assistant, then offer the public route that helps them (contact or request page).',
        );
    }

    if (/\b(newsletter|subscribe|email updates|mailing list|updates by email)\b/.test(q)) {
        return finish('NEWSLETTER', true, 'Newsletter sign-up is offered on the site; use the /contact page knowledge and the published newsletter notice.');
    }

    if (unsupported.includes('request_status')) {
        return finish(
            'REQUEST_STATUS',
            false,
            'Request tracking is not stored on this website. Explain honestly that a submitted request is handled by the genebank team (Genesys and e-mail), then link the request and contact pages.',
        );
    }

    if (
        /\b(how do i request|how to request|how can i request|requesting seeds|process for requesting|procedure for requesting|how do i get seeds)\b/.test(q) ||
        // Broader phrasing ("what do I do to get seeds from your collection?").
        // Stock wording is excluded so "what seeds can I get?" stays an
        // availability question and keeps its honest no-stock-data answer.
        (!unsupported.includes('availability') &&
            /\b(how|where|what)\b/.test(q) &&
            /\b(request|order|obtain|submit|apply for|get|receive)\b/.test(q) &&
            /\b(seed|seeds|germplasm|material|accession|sample)\b/.test(q))
    ) {
        return finish('GERMPLASM_REQUEST', true, 'Explain the real request workflow and link the request page.');
    }

    if (entities.accessionCodes.length > 0) {
        return finish(
            'ACCESSION_SEARCH',
            true,
            'The visitor named a specific accession code: verify it with the catalogue tools before answering, never assume it exists.',
        );
    }

    if (unsupported.includes('availability') && /\b(seed|seeds|germplasm|accession|accessions|variet|material|what do you have|what seeds)\b/.test(q)) {
        return finish(
            'AVAILABILITY_SEARCH',
            true,
            'Availability and stock are NOT part of the website catalogue data. State that clearly, list real catalogue records only as identity records, and point to the Genesys request workflow for current stock.',
        );
    }

    if (unsupported.includes('country') && /\b(accession|accessions|variet|seed|seeds|germplasm|material)\b/.test(q)) {
        return finish(
            'COUNTRY_SEARCH',
            true,
            'Country of origin is not in the website catalogue data. Say so plainly and offer the closest verifiable help (collection pages, Genesys, or the contact page).',
        );
    }

    if (unsupported.includes('trait') && /\b(accession|accessions|variet|seed|seeds|germplasm|material|which|find|search|show|list)\b/.test(q)) {
        return finish(
            'TRAIT_SEARCH',
            true,
            'Per-accession trait data is not in the website catalogue table. Say so, then point to the characterization and genomics data pages plus Genesys for trait filtering.',
        );
    }

    if (unsupported.includes('ecosystem')) {
        return finish(
            'TRAIT_SEARCH',
            true,
            'The website describes upland/lowland/irrigated ecology but the catalogue table cannot filter by ecology. Say so, then point to Genesys trait filtering, the collection pages, and the contact page.',
        );
    }

    if (
        (/\b(what|which|show|list|find|search|do you have|are there)\b/.test(q) && /\b(variet|varieties|cultivar|nerica|rok|tog|wab|arica)\b/.test(q)) ||
        (entities.taxon && /\b(variet|show|list|find|search)\b/.test(q))
    ) {
        return finish('VARIETY_SEARCH', true, 'Search the catalogue by variety or group name and present real records only.');
    }

    if (/\b(accession|accessions|germplasm|catalogue|catalog|holdings|do you have|what do you have|inventory)\b/.test(q)) {
        return finish('ACCESSION_SEARCH', true, 'Look up the catalogue for real records before answering.');
    }

    if (/\b(data|dataset|download|genom|snp|dartseq|trait data|characterization data|mini-?core|subset|publication|paper|journal|doi)\b/.test(q)) {
        return finish('DATA_OR_PUBLICATION', true, 'Answer from the website data and publications page content.');
    }

    if (/\b(contact|email|phone|telephone|address|visit|located|location|where is|reach|get in touch)\b/.test(q)) {
        return finish('CONTACT', true, 'Use the real contact details published on the Contact page.');
    }

    if (/\b(how do i|how to|where can i|where do i|how can i|navigate|go to|page for|link to)\b/.test(q)) {
        return finish('WEBSITE_NAVIGATION', true, 'Answer with the real website route(s) from the navigation list.');
    }

    if (
        /\b(rbca|africarice|africa rice|genebank|gene bank|collection|glaberrima|sativa|nerica|arica|conservation|storage|regeneration|characterization|distribution|safety duplication|grin-global|genesys|smta|itpgrfa|cgiar)\b/.test(
            q,
        )
    ) {
        return finish('GENERAL_INFORMATION', true, 'Answer from the retrieved website content listed in the prompt.');
    }

    return finish(
        'UNKNOWN',
        searchTerms.length > 0,
        searchTerms.length > 0
            ? 'Intent is unclear but accession-like terms were found: use catalogue tools only if the message really is accession-related, otherwise converse naturally and ask one short clarifying question.'
            : 'Intent is unclear and no accession-like terms were found: converse naturally, do not query any data source, and ask one short clarifying question if needed.',
    );
}

export function needsRequestLink(message: string): boolean {
    const q = message.toLowerCase();
    return (
        /\b(request|order|get seed|how to request|sample|smta|material transfer|ship|distribut|cart|obtain|acquire|apply for)\b/i.test(q) ||
        /\b(how do i|how can i|where do i|can i get|i'?d like|i would like|looking for)\b.*\b(seed|seeds|germplasm|material|accession)\b/i.test(q)
    );
}
