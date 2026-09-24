import { NextResponse } from 'next/server';
import { database } from '@/lib/adminAuth';

export async function POST(request: Request) {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    const { error } = await database().from('newsletter_subscribers').upsert({ email, email_normalized: email, status: 'subscribed', subscribed_at: new Date().toISOString() }, { onConflict: 'email_normalized' });
    if (error) return NextResponse.json({ error: 'Could not save your subscription.' }, { status: 500 });
    return NextResponse.json({ ok: true });
}
