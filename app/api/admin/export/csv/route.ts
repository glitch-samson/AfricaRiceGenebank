import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

function csvCell(value: unknown) { return `"${String(value ?? '').replace(/"/g, '""')}"`; }

export async function GET() {
    if ((await cookies()).get('rbca_admin')?.value !== 'authenticated') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return NextResponse.json({ error: 'Server is not configured.' }, { status: 500 });
    const { data, error } = await createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } }).from('survey_responses').select('*').order('submitted_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not export responses.' }, { status: 500 });
    const rows = data ?? [];
    const keys = ['id', 'response_uuid', 'respondent_name', 'email', 'institution', 'position', 'country', 'submitted_at', 'answers'];
    const csv = [keys.join(','), ...rows.map((row) => keys.map((key) => csvCell(key === 'answers' ? JSON.stringify(row[key] ?? {}) : row[key])).join(','))].join('\n');
    return new NextResponse(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="rbca-survey-responses.csv"' } });
}
