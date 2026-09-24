import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    const { password } = await request.json().catch(() => ({ password: '' }));
    const expected = process.env.SURVEY_ADMIN_PASSWORD;
    const valid = expected?.startsWith('$2') ? await bcrypt.compare(password, expected) : Boolean(expected && password === expected);
    if (!valid) return NextResponse.json({ error: 'Invalid admin credentials.' }, { status: 401 });
    const response = NextResponse.json({ ok: true });
    response.cookies.set('rbca_admin', 'authenticated', { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 8 });
    return response;
}
