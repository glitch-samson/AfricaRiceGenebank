import { NextResponse } from 'next/server';
import { database, isAdmin } from '@/lib/adminAuth';

function csvCell(value: unknown) { return `"${String(value ?? '').replace(/"/g, '""')}"`; }
function answerText(value: unknown) { return Array.isArray(value) ? value.join(', ') : value && typeof value === 'object' ? JSON.stringify(value) : String(value ?? ''); }

export async function GET(request: Request) {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const requestUrl = new URL(request.url);
    const survey = requestUrl.searchParams.get('survey') || '';
    const question = requestUrl.searchParams.get('question') || '';
    const questionValue = requestUrl.searchParams.get('value') || '';
    const { data, error } = await database().from('survey_responses').select('*').order('submitted_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not export responses.' }, { status: 500 });
    const allRows = data ?? [];
    const rows = allRows.filter((row) => {
        const rowSurvey = row.survey_slug || (row.answers as Record<string, unknown> | null)?._survey_type || '';
        const answers = row.answers && typeof row.answers === 'object' ? row.answers as Record<string, unknown> : {};
        return (!survey || rowSurvey === survey)
            && (!question || (Object.prototype.hasOwnProperty.call(answers, question) && (!questionValue || answerText(answers[question]).toLowerCase().includes(questionValue.toLowerCase()))));
    });
    const answerKeys = Array.from(new Set(rows.flatMap((row) => Object.keys((row.answers ?? {}) as Record<string, unknown>)))).filter((key) => key !== '_survey_type').sort();
    const keys = ['id', 'response_uuid', 'survey_slug', 'respondent_name', 'email', 'institution', 'position', 'country', 'submitted_at', ...answerKeys];
    const csv = '\ufeff' + [keys.join(','), ...rows.map((row) => {
        const answers = (row.answers ?? {}) as Record<string, unknown>;
        return keys.map((key) => csvCell(key in answers ? Array.isArray(answers[key]) || typeof answers[key] === 'object' ? JSON.stringify(answers[key]) : answers[key] : row[key as keyof typeof row])).join(',');
    })].join('\r\n');
    return new NextResponse(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="rbca-survey-responses.csv"' } });
}
