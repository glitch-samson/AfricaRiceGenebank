import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

function database() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error('Supabase server environment is not configured');
    return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

async function authorized() { return (await cookies()).get('rbca_admin')?.value === 'authenticated'; }

export async function GET() {
    if (!(await authorized())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { data, error } = await database().from('survey_responses').select('*').order('submitted_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not load responses.' }, { status: 500 });
    return NextResponse.json({ responses: data ?? [] });
}
