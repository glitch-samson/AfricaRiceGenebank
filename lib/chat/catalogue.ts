import { database } from '@/lib/adminAuth';

/**
 * Server-side, read-only data access for the public accession catalogue.
 *
 * The only catalogue source the website owns is the Supabase `accessions`
 * table. Its real columns are: accession, name, taxon, doi (see
 * supabase/migrations/20260918000000_rbca_backend.sql). There is deliberately
 * NO availability, quantity, stock, viability, country or trait column, so
 * nothing in this module may ever claim those facts.
 */

export type CatalogueAccession = {
    accession: string;
    name: string;
    taxon: string | null;
    doi: string | null;
};

export type CatalogueSearchResult = {
    found: boolean;
    exactMatch: boolean;
    strategy: 'exact' | 'normalized' | 'partial' | 'browse' | 'none';
    records: CatalogueAccession[];
    total: number;
    truncated: boolean;
    query: string;
};

export type CatalogueHealth = { reachable: boolean; error?: string };

const selectColumns = 'accession,name,taxon,doi';
const maxSearchRecords = 25;
const maxBrowseRecords = 40;
const maxFilterTerms = 8;

const numberWords: Record<string, string> = {
    one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', ten: '10',
    eleven: '11', twelve: '12', thirteen: '13', fourteen: '14', fifteen: '15', sixteen: '16', seventeen: '17',
    eighteen: '18', nineteen: '19', twenty: '20',
};

/** Accessions and variety codes must be looked up case-insensitively. */
export function normalizeAccessionTerm(value: string): string {
    return (value ?? '')
        .toLowerCase()
        .replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\b/g, (word) => numberWords[word] ?? word)
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * PostgREST filters are injected into an `or=(...)` expression, so every term
 * must be stripped of characters that could break out of that expression.
 */
export function sanitizeFilterTerm(term: string): string {
    return (term ?? '')
        .replace(/[^A-Za-z0-9 ._-]/g, ' ')
        .replace(/\./g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 60);
}

/** Accession-like tokens: `NERICA 1`, `IR64`, `TOG-123`, `WAB_56`, `IRGC 104009`. */
export function extractAccessionCandidates(query: string): string[] {
    const normalized = normalizeAccessionTerm(query).toUpperCase();
    const candidates = new Set<string>();
    const pattern = /\b([A-Z]{1,8})\s?[-_]?\s?(\d{1,6})\b/g;

    let match = pattern.exec(normalized);
    while (match) {
        // Spaced form first so it is the one echoed back to the visitor.
        candidates.add(`${match[1]} ${match[2]}`);
        candidates.add(`${match[1]}-${match[2]}`);
        candidates.add(`${match[1]}${match[2]}`);
        match = pattern.exec(normalized);
    }

    return Array.from(candidates).slice(0, 6);
}

const stopWords = new Set([
    'the', 'and', 'for', 'with', 'you', 'your', 'have', 'has', 'any', 'are', 'can', 'does', 'did', 'what', 'which',
    'show', 'find', 'search', 'give', 'tell', 'about', 'please', 'from', 'that', 'this', 'there', 'their', 'them',
    'into', 'accession', 'accessions', 'variety', 'varieties', 'seed', 'seeds', 'rice', 'available', 'availability',
    'genebank', 'gene', 'bank', 'example', 'like', 'list', 'want', 'need', 'looking', 'look',
]);

/** Candidate search terms, ordered from most specific to least specific. */
export function buildSearchTerms(query: string): string[] {
    const cleaned = sanitizeFilterTerm(normalizeAccessionTerm(query));
    const terms = new Set<string>();

    if (cleaned.length >= 3) terms.add(cleaned);

    for (const candidate of extractAccessionCandidates(query)) {
        const safe = sanitizeFilterTerm(candidate);
        if (safe.length >= 2) terms.add(safe);
    }

    const tokens = cleaned.toLowerCase().split(' ').filter(Boolean);
    for (const token of tokens) {
        if (token.length >= 3 && !stopWords.has(token)) terms.add(token);
    }

    for (let index = 0; index < tokens.length - 1; index += 1) {
        if (stopWords.has(tokens[index]) || stopWords.has(tokens[index + 1])) continue;
        const pair = `${tokens[index]} ${tokens[index + 1]}`;
        if (pair.length >= 5) terms.add(pair);
    }

    return Array.from(terms).slice(0, maxFilterTerms);
}

function relevance(record: CatalogueAccession, terms: string[]): number {
    const accession = record.accession?.toLowerCase() ?? '';
    const name = record.name?.toLowerCase() ?? '';
    const taxon = record.taxon?.toLowerCase() ?? '';
    let score = 0;

    terms.forEach((term, index) => {
        const needle = term.toLowerCase();
        const weight = Math.max(1, maxFilterTerms - index);
        if (accession === needle) score += 100 * weight;
        else if (name === needle) score += 80 * weight;
        else if (accession.startsWith(needle)) score += 40 * weight;
        else if (name.startsWith(needle)) score += 30 * weight;
        else if (accession.includes(needle)) score += 15 * weight;
        else if (name.includes(needle)) score += 10 * weight;
        else if (taxon.includes(needle)) score += 5 * weight;
    });

    return score;
}

export function formatCatalogueAccession(record: CatalogueAccession): string {
    const parts = [record.accession];
    if (record.name && record.name !== record.accession) parts.push(`name: ${record.name}`);
    if (record.taxon) parts.push(`taxon: ${record.taxon}`);
    if (record.doi) parts.push(`DOI: ${record.doi}`);
    return parts.join(' | ');
}

export async function countPublishedAccessions(): Promise<number | null> {
    try {
        const { count, error } = await database().from('accessions').select('accession', { count: 'exact', head: true });
        if (error) return null;
        return typeof count === 'number' ? count : null;
    } catch {
        return null;
    }
}

export async function getCatalogueHealth(): Promise<CatalogueHealth> {
    try {
        const { error } = await database().from('accessions').select('accession', { count: 'exact', head: true });
        if (error) return { reachable: false, error: error.message };
        return { reachable: true };
    } catch (error) {
        return { reachable: false, error: (error as Error).message };
    }
}

const emptySearch = (query: string): CatalogueSearchResult => ({
    found: false,
    exactMatch: false,
    strategy: 'none',
    records: [],
    total: 0,
    truncated: false,
    query,
});

/**
 * Layered accession search: exact code match, then normalised/partial match on
 * accession, name and taxon, then a graceful empty result.
 */
export async function searchCatalogue(query: string, limit = 8): Promise<CatalogueSearchResult> {
    const safeLimit = Math.min(Math.max(Math.trunc(limit) || 8, 1), maxSearchRecords);
    const trimmed = (query ?? '').trim();
    if (trimmed.length < 2) return emptySearch(trimmed);

    const terms = buildSearchTerms(trimmed);
    if (terms.length === 0) return emptySearch(trimmed);

    try {
        // Step 1 — exact code match on the raw and normalised forms.
        const exactForms = Array.from(new Set([trimmed, normalizeAccessionTerm(trimmed), trimmed.toUpperCase()]))
            .map((form) => sanitizeFilterTerm(form))
            .filter((form) => form.length >= 2);

        if (exactForms.length > 0) {
            const exactFilters = exactForms.flatMap((form) => [`accession.ilike.${form}`, `name.ilike.${form}`]).join(',');
            const { data, error } = await database().from('accessions').select(selectColumns).or(exactFilters).limit(5);
            if (!error && data && data.length > 0) {
                return {
                    found: true,
                    exactMatch: true,
                    strategy: 'exact',
                    records: data as CatalogueAccession[],
                    total: data.length,
                    truncated: false,
                    query: trimmed,
                };
            }
        }

        // Step 2/3 — normalised + partial matching across all published fields.
        const filters = terms
            .flatMap((term) => [`accession.ilike.%${term}%`, `name.ilike.%${term}%`, `taxon.ilike.%${term}%`])
            .join(',');
        const { data, error } = await database().from('accessions').select(selectColumns).or(filters).limit(safeLimit);
        if (error) return emptySearch(trimmed);

        const records = ((data ?? []) as CatalogueAccession[])
            .map((record) => ({ record, score: relevance(record, terms) }))
            .filter((entry) => entry.score > 0)
            .sort((a, b) => b.score - a.score || a.record.accession.localeCompare(b.record.accession))
            .map((entry) => entry.record);

        if (records.length === 0) return emptySearch(trimmed);

        const normalizedQuery = normalizeAccessionTerm(trimmed);
        const exactish = terms.some((term) => normalizeAccessionTerm(term) === normalizedQuery);
        return {
            found: true,
            exactMatch: exactish,
            strategy: exactish ? 'normalized' : 'partial',
            records,
            total: records.length,
            truncated: records.length >= safeLimit,
            query: trimmed,
        };
    } catch (error) {
        console.error('[chat.catalogue] search failed', { query: trimmed, error: (error as Error).message });
        throw error;
    }
}

/** Bounded browse of the published catalogue (never a full-table dump). */
export async function browseCatalogue(limit = 10): Promise<CatalogueSearchResult> {
    const safeLimit = Math.min(Math.max(Math.trunc(limit) || 10, 1), maxBrowseRecords);
    try {
        const { data, error } = await database()
            .from('accessions')
            .select(selectColumns)
            .order('accession', { ascending: true })
            .limit(safeLimit);
        if (error) return emptySearch('');
        const records = (data ?? []) as CatalogueAccession[];
        const total = await countPublishedAccessions();
        return {
            found: records.length > 0,
            exactMatch: false,
            strategy: 'browse',
            records,
            total: total ?? records.length,
            truncated: (total ?? records.length) > records.length,
            query: '',
        };
    } catch (error) {
        console.error('[chat.catalogue] browse failed', { error: (error as Error).message });
        throw error;
    }
}

/** Details for a specific accession code, with normalised fallback matching. */
export async function getCatalogueAccession(accession: string): Promise<CatalogueAccession[]> {
    const result = await searchCatalogue(accession, 5);
    return result.records;
}
