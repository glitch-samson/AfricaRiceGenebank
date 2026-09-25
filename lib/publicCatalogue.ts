import { database } from '@/lib/adminAuth';

export type PublicAccession = { accession: string; name: string; taxon: string | null; doi: string | null };

export async function searchPublicAccessions(query: string): Promise<PublicAccession[]> {
    const terms = query.toLowerCase().replace(/[^a-z0-9.\s-]/g, ' ').split(/\s+/).filter((term) => term.length >= 3).slice(0, 5);
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
