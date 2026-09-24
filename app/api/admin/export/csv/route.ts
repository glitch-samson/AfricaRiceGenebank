import { NextResponse } from 'next/server';
import { database, isAdmin } from '@/lib/adminAuth';

function csvCell(value: unknown) { return `"${String(value ?? '').replace(/"/g, '""')}"`; }

export async function GET() {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { data, error } = await database().from('survey_responses').select('*').order('submitted_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not export responses.' }, { status: 500 });
    const rows = data ?? [];
    const keys = ['id', 'response_uuid', 'respondent_name', 'email', 'institution', 'position', 'country', 'submitted_at', 'answers'];
    const csv = [keys.join(','), ...rows.map((row) => keys.map((key) => csvCell(key === 'answers' ? JSON.stringify(row[key] ?? {}) : row[key])).join(','))].join('\n');
    return new NextResponse(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="rbca-survey-responses.csv"' } });
}
