import { browseCatalogue, countPublishedAccessions, formatCatalogueAccession, searchCatalogue, type CatalogueAccession } from '@/lib/chat/catalogue';
import { retrieveKnowledge, suggestedLinks, catalogueFields, missingCatalogueFields, type ChatLink } from '@/lib/chat/knowledge';
import { needsRequestLink, type ChatIntent, type IntentResult } from '@/lib/chat/intent';

/**
 * Layer 4 (validation) and the deterministic answer generator.
 *
 * The plan decides which real data source a message needs before the model
 * runs, and `buildGroundedReply` produces a grounded answer whenever no model
 * answer is available. Every sentence in it comes from website content or the
 * website database, which is what makes the no-model path safe.
 */

export type RetrievalPlan = {
    useSearch: boolean;
    useBrowse: boolean;
    query: string;
    reason: string;
};

const broadBrowse =
    /\b(available|availability|what (seeds|accessions|material|germplasm)|do you have|what do you have|list|show me|browse|catalogue|catalog|collection|holdings|inventory|all)\b/i;

/**
 * Intents whose answer lives in the website's own published content rather than
 * in the accession table. A germplasm request question wants the procedure even
 * when it also mentions the collection, so it never trades on a record list.
 */
const contentAnswered: ChatIntent[] = ['GERMPLASM_REQUEST', 'NEWSLETTER', 'REQUEST_STATUS'];

/** Navigation and contact answers may still cite records, so they skip the
 *  catalogue only when the visitor is not asking what the site holds. */
const navigationAnswered: ChatIntent[] = ['WEBSITE_NAVIGATION', 'CONTACT'];

/** Questions that really are about whether a specific record exists. */
const recordLookupIntents: ChatIntent[] = ['ACCESSION_SEARCH', 'VARIETY_SEARCH', 'AVAILABILITY_SEARCH'];

/** True when the visitor is asking whether a specific record exists - the only
 *  case in which "no such accession" is a meaningful answer. */
export function asksAboutRecord(intent: IntentResult): boolean {
    return Boolean(intent.entities.accessionCodes[0]) || recordLookupIntents.includes(intent.intent);
}

/** Wording that tells a visitor a record could not be found. */
export function claimsMissingRecord(text: string): boolean {
    return /couldn'?t find|could not find|no such accession|no record|doesn'?t exist|not in (the |our )?catalogue|isn'?t in (the |our )?catalogue/i.test(
        text,
    );
}

export function planRetrieval(message: string, intent: IntentResult): RetrievalPlan {
    const accession = intent.entities.accessionCodes[0] ?? '';
    const query = accession || message;

    if (!intent.needsData) {
        return { useSearch: false, useBrowse: false, query: '', reason: 'no data required' };
    }

    if (intent.intent === 'AVAILABILITY_SEARCH' && !accession) {
        return { useSearch: false, useBrowse: true, query: '', reason: 'availability question answered from bounded catalogue sample' };
    }

    // Searching the accession table with the wording of a procedure or navigation
    // question turns "How do I request seeds?" into an accession nobody asked
    // about, and the visitor is told no such accession exists. Answer those from
    // published site content instead.
    const asksWhatIsHeld = broadBrowse.test(message);
    if (!accession && (contentAnswered.includes(intent.intent) || (navigationAnswered.includes(intent.intent) && !asksWhatIsHeld))) {
        return {
            useSearch: false,
            useBrowse: false,
            query: '',
            reason: 'procedure or navigation answer, no catalogue lookup',
        };
    }

    if (broadBrowse.test(message) && !accession) {
        return { useSearch: false, useBrowse: true, query: '', reason: 'broad discovery question answered from bounded catalogue sample' };
    }

    if (intent.searchTerms.length > 0) {
        return { useSearch: true, useBrowse: false, query, reason: `catalogue search for "${query}"` };
    }

    return { useSearch: false, useBrowse: true, query: '', reason: 'fallback bounded catalogue sample' };
}

export type RetrievalOutcome = {
    catalogue: CatalogueAccession[];
    total?: number;
    truncated: boolean;
    found: boolean;
    strategy: string;
    query: string;
    failed: boolean;
    links: ChatLink[];
    sources: string[];
};

/** Layer 4 — execute the plan and validate what actually came back. */
export async function runRetrieval(plan: RetrievalPlan): Promise<RetrievalOutcome | null> {
    if (!plan.useSearch && !plan.useBrowse) return null;

    const outcome: RetrievalOutcome = {
        catalogue: [],
        total: undefined,
        truncated: false,
        found: false,
        strategy: 'none',
        query: plan.query,
        failed: false,
        links: [],
        sources: [],
    };

    try {
        const result = plan.useSearch ? await searchCatalogue(plan.query, 8) : await browseCatalogue(10);
        outcome.catalogue = result.records;
        outcome.total = plan.useBrowse ? result.total : undefined;
        outcome.truncated = result.truncated;
        outcome.found = result.found;
        outcome.strategy = result.strategy;
        if (result.found) outcome.sources.push('AfricaRice Gene Bank records (website database)');
    } catch (error) {
        console.error('[chat.planner] retrieval failed', {
            query: plan.query,
            mode: plan.useSearch ? 'search' : 'browse',
            error: (error as Error)?.message,
        });
        outcome.failed = true;
    }

    return outcome;
}


export type GroundedReply = {
    reply: string;
    links: ChatLink[];
    suggestions: string[];
    source: 'catalogue' | 'website' | 'expert' | 'error';
};

const availabilitySentence =
    `One thing I should be clear about: the website catalogue holds identity records only (${catalogueFields.join(', ')}). ` +
    `It does not contain ${missingCatalogueFields.slice(0, 3).join(', ')}, so I cannot confirm availability from it. ` +
    `AfricaRice checks stock when a request is submitted through the Genesys workflow (institute CIV033).`;

function recordList(records: CatalogueAccession[], max = 6): string {
    return records
        .slice(0, max)
        .map((record) => {
            const extras = [
                record.name && record.name !== record.accession ? record.name : '',
                record.taxon ? `*${record.taxon}*` : '',
                record.doi ? `DOI ${record.doi}` : '',
            ]
                .filter(Boolean)
                .join(' — ');
            return `• **${record.accession}**${extras ? ` — ${extras}` : ''}`;
        })
        .join('\n');
}

/**
 * Deterministic, fully grounded answer. Used when the AI provider is not
 * configured or unreachable, and as the safety net for model answers.
 */
export function buildGroundedReply(
    message: string,
    intent: IntentResult,
    retrieval: RetrievalOutcome | null,
    catalogueTotal: number | null,
): GroundedReply {
    const links = suggestedLinks(message, 2);

    if (retrieval?.failed) {
        return {
            reply:
                "I'm unable to reach the Gene Bank catalogue records right now, so I can't verify that for you. Please try again in a moment — and if it keeps failing, the genebank team can help directly through the contact page.",
            links: [{ label: 'Contact the genebank', href: '/contact' }],
            suggestions: ['Try the request page', 'Contact the genebank'],
            source: 'error',
        };
    }

    if (intent.intent === 'GENERAL_CONVERSATION') {
        return {
            reply:
                "Hello! I'm the RBCA genebank assistant. I can look up accessions in the AfricaRice catalogue, explain how the genebank works, help you start a germplasm request, or take you to the right page. What would you like to do?",
            links: [],
            suggestions: ['Do you have NERICA 1?', 'What is in the collection?', 'How do I request seeds?'],
            source: 'expert',
        };
    }

    const records = retrieval?.catalogue ?? [];
    const namedAccession = intent.entities.accessionCodes[0] ?? '';
    const browseSample = retrieval ? retrieval.strategy === 'browse' || !retrieval.query : false;
    const exactHit = retrieval?.strategy === 'exact' || retrieval?.strategy === 'normalized';
    const facetUnanswerable = intent.unsupported.some((facet) => facet === 'country' || facet === 'trait' || facet === 'ecosystem');
    // A browse sample must never read as a match for an accession the visitor
    // named, and a filter the published data cannot support must be disclosed
    // rather than answered with an unrelated list of records.
    const listable = records.length > 0 && !(browseSample && namedAccession) && !(facetUnanswerable && !exactHit);

    if (listable) {
        const query = retrieval?.query ?? message;
        const total = retrieval?.total;
        const isExact = exactHit;
        if (isExact && records.length === 1) {
            return {
                reply: `Yes — I found **${records[0].accession}** in the AfricaRice Gene Bank catalogue records.\n\n${availabilitySentence}\n\nTell me what you need the material for and I can help you take the next step.`,
                links: links.length > 0 ? links : [{ label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' }],
                suggestions: ['What else is in the catalogue?', 'How do I submit a germplasm request?'],
                source: 'catalogue',
            };
        }

        if (browseSample) {
            const count = total ?? records.length;
            return {
                reply: `This website currently publishes ${count} accession record${count === 1 ? '' : 's'}${records.length < count ? `, and the first ${records.length} are listed here` : ''}:\n\n${recordList(records)}\n\nIf you had one particular accession in mind, tell me the code and I can check that record on its own.\n\n${availabilitySentence}`,
                links: links.length > 0 ? links : [{ label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' }],
                suggestions: ['Do you have NERICA 1?', 'How do I request seeds?'],
                source: 'catalogue',
            };
        }

        const searchedLabel = (namedAccession || query || '').slice(0, 60);
        return {
            reply: `I found ${records.length} accession record${records.length === 1 ? '' : 's'} in this website's catalogue${searchedLabel ? ` matching "${searchedLabel}"` : ''}:\n\n${recordList(records)}\n\n${availabilitySentence}\n\nWould you like me to narrow this down by accession code or variety name?`,
            links: links.length > 0 ? links : [{ label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' }],
            suggestions: ['How do I request seeds?', 'What is in the collection?'],
            source: 'catalogue',
        };
    }

    if (retrieval && !retrieval.found) {
        // "No match" only answers a record question. When a lookup ran for a
        // question that was never about a specific accession, fall through to the
        // website-content and request-process answers below instead of reporting a
        // miss for something the visitor never asked to look up.
        const recordQuestion =
            asksAboutRecord(intent) || retrieval.strategy === 'exact' || retrieval.strategy === 'normalized';

        if (recordQuestion) {
            const emptyCatalogue =
                catalogueTotal === 0
                    ? `The accession catalogue published on this website is currently empty, so I have no accession records to match against.\n\n`
                    : '';
            const searched = (namedAccession || retrieval.query || '').replace(/\s+/g, ' ').trim().slice(0, 60);
            return {
                reply:
                    `I couldn't find an accession ${searched ? `matching "${searched}"` : 'matching that description'} in the accession records published on this website.\n\n${emptyCatalogue}` +
                    `A couple of possibilities: the code may be formatted differently (for example "NERICA one" versus "NERICA 1"), or the record may not be published on this site yet — the full collection is searchable in the Genesys catalogue under institute CIV033.\n\n` +
                    `If you can confirm the accession code or the variety name, I'll search again.`,
                links: [
                    { label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' },
                    { label: 'Contact the genebank', href: '/contact' },
                ],
                suggestions: ['Check another accession', 'How do I request seeds?'],
                source: 'catalogue',
            };
        }
    }

    if (intent.intent === 'AVAILABILITY_SEARCH' || intent.unsupported.includes('availability')) {
        const sample = records.length > 0 ? `For reference, catalogue records I can see include:\n\n${recordList(records)}\n\n` : '';
        return {
            reply: `I can't confirm seed availability from the website data, and I don't want to guess.\n\n${availabilitySentence}\n\n${sample}The request page embeds the Genesys catalogue for institute CIV033: you can search it, add accessions to your cart and submit a request, and the genebank team then checks the material and prepares it for dispatch.`,
            links: [{ label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' }],
            suggestions: ['How do I submit a request?', 'What is in the collection?'],
            source: 'website',
        };
    }

    if (intent.unsupported.includes('request_status')) {
        return {
            reply:
                'This website does not publish request tracking. Once a request is submitted through the Genesys workflow, the AfricaRice genebank team handles it and communicates with you directly by e-mail. If you need an update, the contact page lists the genebank team and station details.',
            links: [
                { label: 'Contact the genebank', href: '/contact' },
                { label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' },
            ],
            suggestions: ['How do I submit a request?', 'Contact the genebank'],
            source: 'website',
        };
    }

    if (intent.unsupported.includes('country') || intent.unsupported.includes('trait') || intent.unsupported.includes('ecosystem')) {
        const facet = intent.unsupported.includes('country')
            ? 'country of origin'
            : intent.unsupported.includes('trait')
              ? 'per-accession trait data'
              : 'upland/lowland ecology';
        return {
            reply:
                `I don't have ${facet} in the data this website publishes, so I can't filter accessions that way — and I won't guess.\n\n` +
                `The website describes the collection in aggregate, and the Genesys catalogue for institute CIV033 supports searching by origin and traits. The characterization and genomics pages explain which datasets exist and how to request them.`,
            links: [
                { label: 'Collection overview', href: '/collection' },
                { label: 'Characterization data', href: '/data/characterization' },
            ],
            suggestions: ['What is in the collection?', 'How do I request seeds?'],
            source: 'website',
        };
    }

    // A request question is answered with the request procedure itself: the
    // generic content match can rank an on-topic-looking page (the collection
    // overview, for example) above the workflow and leave the visitor without
    // the steps they actually asked for.
    const requestQuestion = intent.intent === 'GERMPLASM_REQUEST' || needsRequestLink(message);

    const chunks = retrieveKnowledge(message, '/', 2);
    if (chunks.length > 0 && !requestQuestion) {
        const primary = chunks[0];
        return {
            reply: `${primary.text}\n\nIf you'd like, I can take you to the page where this is explained in full, or go deeper on any part of it.`,
            links: links.length > 0 ? links : [{ label: primary.title, href: primary.href }],
            suggestions: ['How do I request seeds?', 'What is in the collection?'],
            source: 'website',
        };
    }

    if (requestQuestion) {
        return {
            reply:
                'Germplasm requests go through the request page, which embeds the Genesys catalogue for institute CIV033: browse and add accessions to your cart, enter your delivery details, accept the SMTA, complete the CAPTCHA, and submit. AfricaRice then checks the material, prepares the seed, and coordinates phytosanitary documentation and dispatch. The site states material is provided free of charge for research, breeding, education and conservation.',
            links: [{ label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' }],
            suggestions: ['What is in the collection?', 'Contact the genebank'],
            source: 'website',
        };
    }

    return {
        reply:
            'I can help with the AfricaRice rice collections, conservation and genebank operations, accession lookups in the catalogue, the data and publications this site publishes, and the germplasm request process. What would you like to look at?',
        links: [],
        suggestions: ['Do you have NERICA 1?', 'How do I request seeds?', 'What data do you publish?'],
        source: 'expert',
    };
}
