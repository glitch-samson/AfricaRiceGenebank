import {
    browseCatalogue,
    countPublishedAccessions,
    formatCatalogueAccession,
    searchCatalogue,
    type CatalogueAccession,
    type CatalogueSearchResult,
} from '@/lib/chat/catalogue';
import { getPageContext, navigationIndex, websiteSource, type ChatLink } from '@/lib/chat/knowledge';

/**
 * Layer 3 (data part) of the assistant architecture: the read-only tools the
 * model may call. Every tool is backed by website content or the website
 * database; none of them can write, and none of them accept SQL.
 */

export type ToolResult = {
    tool: string;
    ok: boolean;
    /** True when the underlying data source failed (drives the error reply). */
    failed?: boolean;
    summary: string;
    /** Real records the model may quote and the UI may render as cards. */
    records: CatalogueAccession[];
    /** Catalogue total when the tool knows it. */
    total?: number;
    truncated?: boolean;
    links: ChatLink[];
    sources: string[];
};

export type ToolCallRequest = { name: string; arguments: Record<string, unknown> };

export type ToolDefinition = {
    name: string;
    description: string;
    parameters: {
        type: 'object';
        properties: Record<string, { type: string; description: string }>;
        required: string[];
    };
};

const catalogueSource = 'AfricaRice Gene Bank records (website database)';
const maxRecordsInToolOutput = 12;

const emptyResult = (tool: string, summary: string, extra: Partial<ToolResult> = {}): ToolResult => ({
    tool,
    ok: true,
    summary,
    records: [],
    links: [],
    sources: [],
    ...extra,
});

function sanitizeText(value: unknown, maxLength = 120): string {
    return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, maxLength) : '';
}

function sanitizeLimit(value: unknown, fallback: number, max: number): number {
    const parsed = typeof value === 'number' ? value : Number.parseInt(String(value ?? ''), 10);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.min(Math.max(Math.trunc(parsed), 1), max);
}

const requestLink: ChatLink = { label: 'Request germplasm (Genesys, CIV033)', href: '/request-germplasm' };
const contactLink: ChatLink = { label: 'Contact the genebank', href: '/contact' };

const availabilityNotice =
    'IMPORTANT: the website catalogue stores identity records only (accession code, name, taxon, DOI). It contains no stock, availability, quantity, viability or distribution status, so availability CANNOT be confirmed from this source. Never state or imply that material is available or unavailable; direct the visitor to the Genesys request workflow (institute CIV033), where AfricaRice checks stock when a request is submitted.';

function describeSearch(result: CatalogueSearchResult, requested: string): string {
    if (!result.found) {
        return `No catalogue record in the website database matches "${requested}" (no strategy matched). Do not invent an accession; if useful, ask the visitor to confirm the code or offer real alternatives from browse_catalogue.`;
    }
    const rows = result.records.slice(0, maxRecordsInToolOutput).map(formatCatalogueAccession).join('\n');
    return `Catalogue records found in the website database for "${requested}" (strategy: ${result.strategy}, ${result.records.length} record(s) shown):\n${rows}`;
}

export const toolDefinitions: ToolDefinition[] = [
    {
        name: 'search_accessions',
        description:
            'Search the website accession catalogue by accession code, variety name or partial term (for example "NERICA 1", "IR64", "TOG 123", "ROK"). Use this whenever a visitor asks whether the genebank has a specific accession, variety or code.',
        parameters: {
            type: 'object',
            properties: {
                query: { type: 'string', description: 'The accession code, variety name or partial term to search for.' },
                limit: { type: 'number', description: 'Maximum number of records to return (1-25, default 8).' },
            },
            required: ['query'],
        },
    },
    {
        name: 'get_accession_details',
        description:
            'Fetch the published catalogue record(s) for one specific accession code. Use this after a visitor gives an exact code and wants details, or when you need to confirm a record before answering.',
        parameters: {
            type: 'object',
            properties: {
                accession: { type: 'string', description: 'The accession code, for example "NERICA 1" or "TOG 123".' },
            },
            required: ['accession'],
        },
    },
    {
        name: 'browse_catalogue',
        description:
            'Return a bounded, alphabetical sample of accessions held in the website catalogue. Use this for broad questions about what the catalogue contains, or to offer real follow-up options after a failed search.',
        parameters: {
            type: 'object',
            properties: {
                limit: { type: 'number', description: 'Maximum number of records to return (1-40, default 10).' },
            },
            required: [],
        },
    },
    {
        name: 'count_catalogue_accessions',
        description:
            'Count the accession records currently published in the website database. Use this only when a visitor asks how many records the website catalogue contains; published website figures about the whole collection come from the website content, not from this tool.',
        parameters: { type: 'object', properties: {}, required: [] },
    },
    {
        name: 'check_seed_availability',
        description:
            'Use this whenever a visitor asks whether seeds or accessions are available, in stock, how much is available, or about quantities or viability. It checks the website database and reports honestly what can and cannot be confirmed.',
        parameters: {
            type: 'object',
            properties: {
                accession: { type: 'string', description: 'Optional accession code or variety to check, for example "NERICA 1".' },
            },
            required: [],
        },
    },
    {
        name: 'get_site_page_context',
        description:
            'Return the published website content for one route so procedural, contact, collection, data or research answers stay grounded. Provide the route path, for example "/request-germplasm" or "/contact".',
        parameters: {
            type: 'object',
            properties: {
                href: { type: 'string', description: 'Website route path beginning with "/", for example "/request-germplasm".' },
            },
            required: ['href'],
        },
    },
    {
        name: 'list_website_pages',
        description:
            'List every public website page the assistant can link to. Use this before recommending navigation so links are never invented.',
        parameters: { type: 'object', properties: {}, required: [] },
    },
];

export function toolDefinitionsForApi() {
    return toolDefinitions.map((tool) => ({
        type: 'function' as const,
        function: { name: tool.name, description: tool.description, parameters: tool.parameters },
    }));
}

export const knownToolNames = toolDefinitions.map((tool) => tool.name);

/** Execute one model-requested tool call. Never throws; failures are reported. */
export async function executeToolCall(call: ToolCallRequest): Promise<ToolResult> {
    const name = sanitizeText(call?.name, 60);
    const args = (call?.arguments ?? {}) as Record<string, unknown>;

    if (!knownToolNames.includes(name)) {
        const safeName = name || 'unknown';
        console.warn('[chat.tools] refused unknown tool', { tool: safeName });
        return { tool: safeName, ok: false, failed: true, summary: `Unknown tool "${safeName}" was refused.`, records: [], links: [], sources: [] };
    }

    try {
        switch (name) {
            case 'search_accessions': {
                const query = sanitizeText(args.query, 120);
                if (query.length < 2) {
                    return emptyResult(name, 'No usable search term was supplied; ask the visitor for the accession code or variety name.');
                }
                const limit = sanitizeLimit(args.limit, 8, 25);
                const result = await searchCatalogue(query, limit);
                return {
                    tool: name,
                    ok: true,
                    summary: describeSearch(result, query),
                    records: result.records,
                    truncated: result.truncated,
                    links: result.found ? [requestLink] : [],
                    sources: result.found ? [catalogueSource] : [],
                };
            }

            case 'get_accession_details': {
                const accession = sanitizeText(args.accession, 60);
                if (accession.length < 2) {
                    return emptyResult(name, 'No accession code was supplied; ask the visitor which accession they mean.');
                }
                const result = await searchCatalogue(accession, 5);
                return {
                    tool: name,
                    ok: true,
                    summary: result.found
                        ? `Published record(s) for "${accession}" from the website database (strategy: ${result.strategy}):\n${result.records.map(formatCatalogueAccession).join('\n')}`
                        : `The website database contains no record for "${accession}". Do not guess; offer to search a corrected code or browse real alternatives.`,
                    records: result.records,
                    links: result.found ? [requestLink] : [],
                    sources: result.found ? [catalogueSource] : [],
                };
            }

            case 'browse_catalogue': {
                const limit = sanitizeLimit(args.limit, 10, 40);
                const result = await browseCatalogue(limit);
                return {
                    tool: name,
                    ok: true,
                    summary: result.found
                        ? `Sample of ${result.records.length} of ${result.total} accession record(s) published in the website database:\n${result.records.map(formatCatalogueAccession).join('\n')}`
                        : 'The website catalogue returned no accession records.',
                    records: result.records,
                    total: result.total,
                    truncated: result.truncated,
                    links: result.found ? [requestLink] : [],
                    sources: result.found ? [catalogueSource] : [],
                };
            }

            case 'count_catalogue_accessions': {
                const total = await countPublishedAccessions();
                if (total === null) {
                    console.error('[chat.tools] count_catalogue_accessions failed');
                    return {
                        tool: name,
                        ok: false,
                        failed: true,
                        summary: 'The website catalogue could not be counted right now.',
                        records: [],
                        links: [contactLink],
                        sources: [],
                    };
                }
                return emptyResult(
                    name,
                    `The website database currently publishes ${total} accession record(s). Quote this as "records published in the website catalogue"; the larger collection figures published on the website pages come from the website content instead.`,
                );
            }

            case 'check_seed_availability': {
                const accession = sanitizeText(args.accession, 60);
                const result = accession.length >= 2 ? await searchCatalogue(accession, 5) : await browseCatalogue(10);
                const recordLine = result.found
                    ? `Website database record(s)${accession ? ` for "${accession}"` : ''}:\n${result.records.map(formatCatalogueAccession).join('\n')}`
                    : `The website database returned no record${accession ? ` for "${accession}"` : ''}.`;
                return {
                    tool: name,
                    ok: true,
                    summary: `${availabilityNotice}\n${recordLine}`,
                    records: result.records,
                    total: result.total,
                    truncated: result.truncated,
                    links: [requestLink, contactLink],
                    sources: result.found ? [catalogueSource] : [],
                };
            }

            case 'get_site_page_context': {
                const href = sanitizeText(args.href, 80);
                const page = href.startsWith('/') ? getPageContext(href) : undefined;
                if (!page) {
                    return emptyResult(
                        name,
                        `No published website content is registered for "${href}". Use list_website_pages to pick a real route.`,
                    );
                }
                return {
                    tool: name,
                    ok: true,
                    summary: `Website content for ${page.href} (${page.title}):\n${page.text}`,
                    records: [],
                    links: [{ label: page.title, href: page.href }],
                    sources: [websiteSource],
                };
            }

            case 'list_website_pages': {
                const pages = navigationIndex();
                return {
                    tool: name,
                    ok: true,
                    summary: `Public website pages available for linking:\n${pages.map((page) => `${page.href} — ${page.label}`).join('\n')}`,
                    records: [],
                    links: [],
                    sources: [websiteSource],
                };
            }

            default:
                return emptyResult(name, 'This tool is not implemented.');
        }
    } catch (error) {
        console.error('[chat.tools] tool failed', { tool: name, error: (error as Error)?.message });
        return {
            tool: name,
            ok: false,
            failed: true,
            summary: `The tool "${name}" failed because the underlying data source is unavailable right now. Do not invent a result; tell the visitor the records cannot be reached at the moment and suggest trying again shortly.`,
            records: [],
            links: [contactLink],
            sources: [],
        };
    }
}
