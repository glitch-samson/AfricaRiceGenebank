import { NextResponse } from 'next/server';
import { database, isAdmin } from '@/lib/adminAuth';

export async function GET() {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { data, error } = await database().from('survey_responses').select('*').order('submitted_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not load responses.' }, { status: 500 });
    return NextResponse.json({ responses: data ?? [] });
}
