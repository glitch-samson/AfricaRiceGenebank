import { NextResponse } from 'next/server';
import { database, isAdmin } from '@/lib/adminAuth';

function validStatus(value: unknown): value is 'draft' | 'published' | 'archived' {
    return value === 'draft' || value === 'published' || value === 'archived';
}

function payload(body: Record<string, unknown>) {
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const slug = typeof body.slug === 'string' ? body.slug.trim().toLowerCase() : '';
    const description = typeof body.description === 'string' ? body.description.trim() : null;
    const questions = Array.isArray(body.questions) ? body.questions : [];
    const status = validStatus(body.status) ? body.status : 'draft';
    if (!title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
    return { title, slug, description, questions, status };
}

export async function GET() {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { data, error } = await database().from('surveys').select('*').order('updated_at', { ascending: false });
    if (error) return NextResponse.json({ error: 'Could not load surveys.' }, { status: 500 });
    return NextResponse.json({ surveys: data ?? [] });
}

export async function POST(request: Request) {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await request.json().catch(() => ({}));
    const values = payload(body);
    if (!values) return NextResponse.json({ error: 'Title and a valid slug are required.' }, { status: 400 });
    const { data, error } = await database().from('surveys').insert(values).select('*').single();
    if (error) return NextResponse.json({ error: error.code === '23505' ? 'That survey slug already exists.' : 'Could not create survey.' }, { status: 400 });
    return NextResponse.json({ survey: data }, { status: 201 });
}
