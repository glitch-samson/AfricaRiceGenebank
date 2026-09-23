import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function database() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error('Supabase server environment is not configured');
    return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

function rankedChoices(value: unknown) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
    const ranked = Object.entries(value as Record<string, unknown>)
        .filter(([, rank]) => ['1', '2', '3'].includes(String(rank)))
        .sort(([, left], [, right]) => Number(left) - Number(right));
    const ranks = ranked.map(([, rank]) => Number(rank));
    return ranked.length === 3 && new Set(ranks).size === 3 ? ranked.map(([label]) => label) : null;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const surveyType = body?.surveyType === 'feedback' || body?.surveyType === 'nars' ? body.surveyType : 'molecular';
        const answers = { ...(body?.answers ?? {}), _survey_type: surveyType };
        const emailAnswer = surveyType === 'nars' ? answers.q3_email : surveyType === 'feedback' ? answers.q1_email : answers.q2_email;
        const email = typeof emailAnswer === 'string' ? emailAnswer.trim() : '';
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });

        const record = {
            respondent_name: typeof answers.q1_name === 'string' ? answers.q1_name : null,
            email,
            email_normalized: email.toLowerCase(),
            institution: typeof answers.q3_institution === 'string' ? answers.q3_institution : typeof answers.q2_institution === 'string' ? answers.q2_institution : null,
            position: typeof answers.q4_position === 'string' ? answers.q4_position : null,
            country: typeof answers.q5_country === 'string' ? answers.q5_country : null,
            answers,
            q34_constraint: answers.q34_constraint ?? null,
            q38_ranked_needs: surveyType === 'molecular' ? rankedChoices(answers.q38_needs) : null,
            q43_uncertainty: answers.q43_uncertainty ?? null,
            q50_ranked_support: surveyType === 'molecular' ? rankedChoices(answers.q50_support) : null,
            submitted_at: new Date().toISOString(),
        };
        if (surveyType === 'molecular' && (!record.q38_ranked_needs || !record.q50_ranked_support)) return NextResponse.json({ error: 'Q38 and Q50 each require exactly three unique ranks.' }, { status: 400 });
        const { error } = await database().from('survey_responses').upsert(record, { onConflict: 'email_normalized' });
        if (error) return NextResponse.json({ error: 'Could not save survey response.' }, { status: 500 });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: 'Could not save survey response.' }, { status: 500 });
    }
}
