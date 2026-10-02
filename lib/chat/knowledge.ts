import { defaultPage, sitePages } from '@/data/site';
import type { RoutePage } from '@/types/site';

/**
 * Layer 3 (website part) of the assistant architecture: the approved public
 * website content that AfricaRice-specific facts may be quoted from.
 *
 * Two grounding sources exist for the assistant:
 *   1. this file  — content published on the RBCA website;
 *   2. lib/chat/catalogue.ts — the accession records in the website database.
 * Nothing else may be presented as a fact about RBCA.
 */

export type ChatLink = { label: string; href: string };

export type KnowledgeChunk = {
    href: string;
    title: string;
    text: string;
    keywords: string[];
    source: string;
};

/** Every public route the assistant is allowed to link to. */
export const publicLinks: Record<string, ChatLink> = {
    '/': { label: 'Home', href: '/' },
    '/about': { label: 'About RBCA', href: '/about' },
    '/collection': { label: 'Collection overview', href: '/collection' },
    '/collection/african-rice': { label: 'African rice (O. glaberrima)', href: '/collection/african-rice' },
    '/collection/asian-rice': { label: 'Asian rice (O. sativa)', href: '/collection/asian-rice' },
    '/collection/wild-relatives': { label: 'Wild rice relatives', href: '/collection/wild-relatives' },
    '/collection/interspecifics': { label: 'Interspecific genotypes (NERICA/ARICA)', href: '/collection/interspecifics' },
    '/data': { label: 'Open data portal', href: '/data' },
    '/data/characterization': { label: 'Characterization data', href: '/data/characterization' },
    '/data/genomics': { label: 'Genomics data & SNPs', href: '/data/genomics' },
    '/data/subsets': { label: 'Subset & mini-core data', href: '/data/subsets' },
    '/request-germplasm': { label: 'Request germplasm', href: '/request-germplasm' },
    '/research': { label: 'Research overview', href: '/research' },
    '/research/genomics': { label: 'Genomics research', href: '/research/genomics' },
    '/research/quality-control': { label: 'Molecular quality control', href: '/research/quality-control' },
    '/research/sub-setting': { label: 'Sub-setting & diversity panels', href: '/research/sub-setting' },
    '/publications': { label: 'Publications & reports', href: '/publications' },
    '/what-we-do': { label: 'Genebank operations', href: '/what-we-do' },
    '/what-we-do/conservation': { label: 'Conservation operations', href: '/what-we-do/conservation' },
    '/what-we-do/acquisition': { label: 'Acquisition operations', href: '/what-we-do/acquisition' },
    '/what-we-do/regeneration': { label: 'Regeneration operations', href: '/what-we-do/regeneration' },
    '/what-we-do/characterization': { label: 'Field characterization', href: '/what-we-do/characterization' },
    '/what-we-do/distribution': { label: 'Distribution operations', href: '/what-we-do/distribution' },
    '/what-we-do/safety-duplication': { label: 'Safety duplication', href: '/what-we-do/safety-duplication' },
    '/what-we-do/data-management': { label: 'Data management & GRIN-Global', href: '/what-we-do/data-management' },
    '/contact': { label: 'Contact RBCA', href: '/contact' },
    '/survey': { label: 'Visitor feedback surveys', href: '/survey' },
};

export const websiteSource = 'AfricaRice website records';

const extraChunks: KnowledgeChunk[] = [
    {
        href: '/',
        title: 'Home — Dr. Monty P. Jones Rice Biodiversity Center for Africa (RBCA)',
        keywords: ['home', 'rbca', 'africarice', 'genebank', 'mandate', 'cgiar', 'about'],
        source: websiteSource,
        text: `RBCA is the AfricaRice genebank at M'bé near Bouaké, Côte d'Ivoire. Published figures on the site: 21,035 accessions held in trust on the home page, 21,300+ registered samples on the collection and operations pages, 85% of material originating in Africa, and capacity for about 60,000 accessions. AfricaRice is a CGIAR centre and RBCA is one of the 11 CGIAR genebanks.`,
    },
    {
        href: '/request-germplasm',
        title: 'Requesting germplasm — the real website workflow',
        keywords: ['request', 'order', 'smta', 'cart', 'genesys', 'civ033', 'phytosanitary', 'shipping', 'cost', 'free'],
        source: websiteSource,
        text: `The request page embeds the Genesys PGR catalogue filtered to institute CIV033. Published steps: (01) browse the collection and search AfricaRice accessions by species, traits, origin, subsets and available data; (02) build a cart by adding accessions; (03) complete the request by reviewing the cart, providing delivery details, accepting the SMTA and passing the CAPTCHA; (04) AfricaRice reviews the request, prepares the material, and coordinates phytosanitary documentation and dispatch. The site states the material is provided free of charge for research, breeding, education and conservation. Request status is handled by the genebank team through the Genesys workflow and e-mail: the website publishes no request-tracking service.`,
    },
    {
        href: '/contact',
        title: 'Contact details published on the website',
        keywords: ['contact', 'email', 'phone', 'address', 'mbé', 'cotonou', 'manager', 'visit', 'newsletter'],
        source: websiteSource,
        text: `M'bé station (primary genebank facility): AfricaRice Research Station, 01 BP 2551, Bouaké 01, Côte d'Ivoire; telephone +225 27 22 48 09 20; fax +225 27 31 63 25 78; Genebank Manager Dr. Marie-Noelle Ndjiondjop (m.ndjiondjop@cgiar.org); facilities include cold vaults (STS, MTS, LTS), a seed health laboratory and a 200 ha irrigated experimental farm. Cotonou station (Benin): 01 B.P. 2031, Cotonou; telephone +229 21 35 01 88. The contact page also hosts the inquiry form and the newsletter prompt.`,
    },
];

function pageToChunk(href: string, page: RoutePage): KnowledgeChunk {
    const facts = page.facts.map(([value, label]) => `${value} ${label}`).join('; ');
    const steps = page.steps.map(([title, detail]) => `${title}: ${detail}`).join(' ');
    return {
        href,
        title: `${page.section} — ${page.title}`,
        keywords: href.split('/').filter(Boolean),
        source: websiteSource,
        text: `${page.intro} ${page.body.join(' ')} Figures: ${facts}. ${steps}`,
    };
}

export const knowledgeChunks: KnowledgeChunk[] = [
    ...extraChunks,
    ...Object.entries(sitePages).map(([href, page]) => pageToChunk(href, page)),
    pageToChunk('/', defaultPage),
];

export const siteSummary = `RBCA (Dr. Monty P. Jones Rice Biodiversity Center for Africa) is the AfricaRice genebank at M'bé near Bouaké, Côte d'Ivoire, with a second station in Cotonou, Benin. Published website figures: 21,035 accessions held in trust, 21,300+ registered samples, ~85% African origin, ~17% O. glaberrima, ~79% O. sativa, ~3% interspecific, ~1% wild relatives; 124,604 samples distributed to 164 institutions in 57 countries; 9,120 accessions genotyped with 31,739 DArTseq SNPs; 14,114 permanent DOIs; Genesys institute code CIV033.`;

/** The catalogue fields the website actually publishes. */
export const catalogueFields = ['accession code', 'name', 'taxon', 'DOI'];

/** Fields people often expect that the website catalogue does NOT contain. */
export const missingCatalogueFields = [
    'availability / stock status',
    'seed quantity',
    'viability or germination percentage',
    'country of origin / passport data',
    'per-accession trait or characterization scores',
    'distribution or request status',
];

function tokenize(value: string): string[] {
    return (value ?? '')
        .toLowerCase()
        .replace(/[^a-z0-9'\s]/g, ' ')
        .split(/\s+/)
        .filter((token) => token.length >= 3);
}

/** Retrieval over the published website content (Layer 3, website source). */
export function retrieveKnowledge(message: string, page = '/', limit = 4): KnowledgeChunk[] {
    const tokens = tokenize(message);
    const q = (message ?? '').toLowerCase();

    const scored = knowledgeChunks.map((chunk) => {
        const haystack = `${chunk.title} ${chunk.text} ${chunk.keywords.join(' ')} ${chunk.href}`.toLowerCase();
        let score = 0;

        for (const token of tokens) {
            if (haystack.includes(token)) score += 3;
        }
        for (const keyword of chunk.keywords) {
            if (keyword.length >= 3 && q.includes(keyword)) score += 5;
        }
        if (chunk.href === page) score += 4;

        return { chunk, score };
    });

    scored.sort((a, b) => b.score - a.score);

    const picked: KnowledgeChunk[] = [];
    const seen = new Set<string>();
    for (const item of scored) {
        if (item.score <= 0) break;
        if (seen.has(item.chunk.href)) continue;
        seen.add(item.chunk.href);
        picked.push(item.chunk);
        if (picked.length >= limit) break;
    }

    return picked;
}

export function getPageContext(href: string): KnowledgeChunk | undefined {
    return knowledgeChunks.find((chunk) => chunk.href === href);
}

/** Map model-provided paths onto real public routes; unknown paths are dropped. */
export function resolveLinkPaths(paths: unknown): ChatLink[] {
    if (!Array.isArray(paths)) return [];
    const seen = new Set<string>();
    const resolved: ChatLink[] = [];

    for (const raw of paths) {
        if (typeof raw !== 'string') continue;
        const trimmed = raw.trim();
        if (!trimmed.startsWith('/') || trimmed.startsWith('/admin')) continue;
        const clean = trimmed.length > 1 && trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
        if (seen.has(clean)) continue;
        seen.add(clean);
        const known = publicLinks[clean];
        if (known) resolved.push(known);
        if (resolved.length >= 3) break;
    }

    return resolved;
}

/** Deterministic navigation suggestions used when no model links are returned. */
export function suggestedLinks(message: string, max = 2): ChatLink[] {
    const q = (message ?? '').toLowerCase();
    const table: Array<[RegExp, string]> = [
        [/request|order|smta|cart|obtain|acquire|seed sample|distribut/, '/request-germplasm'],
        [/germplasm|accession|accessions|catalogue|catalog|variet|nerica|rok|tog|arica/, '/request-germplasm'],
        [/african rice|glaberrima/, '/collection/african-rice'],
        [/asian rice|sativa|indica|japonica/, '/collection/asian-rice'],
        [/wild|relative|longistaminata|barthii/, '/collection/wild-relatives'],
        [/interspecific|nerica|arica/, '/collection/interspecifics'],
        [/genom|snp|dartseq|marker/, '/data/genomics'],
        [/trait|character|phenotyp|morpholog/, '/data/characterization'],
        [/subset|mini-?core|core collection|panel/, '/data/subsets'],
        [/publication|paper|journal|doi|report/, '/publications'],
        [/data|dataset|download/, '/data'],
        [/conserv|storage|cold|vault|moisture|temperature/, '/what-we-do/conservation'],
        [/regenerat|viability|germination/, '/what-we-do/regeneration'],
        [/acquisition|collecting|donation/, '/what-we-do/acquisition'],
        [/safety|duplicat|svalbard|fort collins/, '/what-we-do/safety-duplication'],
        [/grin|ggce|data management/, '/what-we-do/data-management'],
        [/quality control|kasp|purity/, '/research/quality-control'],
        [/research|sub-?setting|bioinformat/, '/research'],
        [/contact|email|phone|telephone|visit|located|address/, '/contact'],
        [/survey|feedback/, '/survey'],
        [/about|mandate|history|where is rbca/, '/about'],
        [/collection|holdings/, '/collection'],
    ];

    const links: ChatLink[] = [];
    const seen = new Set<string>();
    for (const [pattern, href] of table) {
        if (!pattern.test(q)) continue;
        if (seen.has(href)) continue;
        seen.add(href);
        links.push(publicLinks[href]);
        if (links.length >= max) break;
    }
    return links;
}

/** Navigation index shown to the model so it never invents a route. */
export function navigationIndex(): Array<{ href: string; label: string }> {
    return Object.values(publicLinks);
}
