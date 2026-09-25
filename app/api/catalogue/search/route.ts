import { NextResponse } from 'next/server';
import { searchPublicAccessions } from '@/lib/publicCatalogue';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const query = new URL(request.url).searchParams.get('q')?.trim() ?? '';
    if (!query) return NextResponse.json({ results: [] });
    return NextResponse.json({ results: await searchPublicAccessions(query) });
}
