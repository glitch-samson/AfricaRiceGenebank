import { database } from '@/lib/adminAuth';

export type PublicAccession = { accession: string; name: string; taxon: string | null; doi: string | null };

function searchTerms(query: string): string[] {
    const cleaned = query.toLowerCase().replace(/[^a-z0-9.\s-]/g, ' ');
    const tokens = cleaned.split(/\s+/).filter(Boolean);
    const terms = new Set<string>();

    for (const token of tokens) {
        if (token.length >= 3) terms.add(token);
    }

    for (let i = 0; i < tokens.length - 1; i += 1) {
        if (/^[a-z]{1,6}$/.test(tokens[i]) && /^\d{2,}$/.test(tokens[i + 1])) {
            terms.add(`${tokens[i]}${tokens[i + 1]}`);
            terms.add(`${tokens[i]}-${tokens[i + 1]}`);
        }
    }

    const accessionLike = query.match(/\b[A-Za-z]{1,8}[-_]?[0-9]{2,}\b/g) ?? [];
    for (const match of accessionLike) {
        terms.add(match.toLowerCase());
    }

    return Array.from(terms).slice(0, 6);
}

export function looksLikeCatalogueQuery(query: string): boolean {
    const q = query.toLowerCase();
    if (/\b(accession|accessions|catalogue|catalog|doi|lookup|look up|find|search)\b/.test(q)) return true;
    return /[A-Za-z]{1,8}[-_]?[0-9]{2,}/.test(query);
}

export async function searchPublicAccessions(query: string): Promise<PublicAccession[]> {
    const terms = searchTerms(query);
    if (terms.length === 0) return [];
    try {
        const filters = terms.flatMap((term) => [`accession.ilike.%${term}%`, `name.ilike.%${term}%`, `taxon.ilike.%${term}%`]);
        const { data, error } = await database().from('accessions').select('accession, name, taxon, doi').or(filters.join(',')).limit(8);
        if (error) return [];
        return (data ?? []) as PublicAccession[];
    } catch {
        return [];
    }
}
