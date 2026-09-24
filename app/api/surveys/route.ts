import { NextResponse } from 'next/server';
import { database } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';

export async function GET() {
    const { data, error } = await database()
        .from('surveys')
        .select('id, slug, title, description, questions, status, updated_at')
        .eq('status', 'published')
        .order('updated_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not load published surveys.' }, { status: 500 });
    return NextResponse.json({ surveys: data ?? [] });
}
