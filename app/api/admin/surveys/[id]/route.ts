import { NextResponse } from 'next/server';
import { database, isAdmin } from '@/lib/adminAuth';

function validStatus(value: unknown): value is 'draft' | 'published' | 'archived' {
    return value === 'draft' || value === 'published' || value === 'archived';
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const id = Number((await params).id);
    if (!Number.isInteger(id)) return NextResponse.json({ error: 'Invalid survey id.' }, { status: 400 });
    const body = await request.json().catch(() => ({}));
    const values: Record<string, unknown> = {};
    if (typeof body.title === 'string' && body.title.trim()) values.title = body.title.trim();
    if (typeof body.description === 'string') values.description = body.description.trim() || null;
    if (Array.isArray(body.questions)) values.questions = body.questions;
    if (validStatus(body.status)) values.status = body.status;
    if (!Object.keys(values).length) return NextResponse.json({ error: 'No valid changes supplied.' }, { status: 400 });
    const { data, error } = await database().from('surveys').update(values).eq('id', id).select('*').single();
    if (error) return NextResponse.json({ error: 'Could not update survey.' }, { status: 400 });
    return NextResponse.json({ survey: data });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const id = Number((await params).id);
    if (!Number.isInteger(id)) return NextResponse.json({ error: 'Invalid survey id.' }, { status: 400 });
    const { error } = await database().from('surveys').delete().eq('id', id);
    if (error) return NextResponse.json({ error: 'Could not delete survey.' }, { status: 400 });
    return NextResponse.json({ ok: true });
}
