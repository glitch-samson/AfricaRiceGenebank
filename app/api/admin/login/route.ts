import { NextResponse } from 'next/server';
import { authenticateAdmin, setAdminSession } from '@/lib/adminAuth';

export async function POST(request: Request) {
    const { email = '', password = '' } = await request.json().catch(() => ({}));
    const identity = await authenticateAdmin(String(email), String(password));
    if (!identity) return NextResponse.json({ error: 'Invalid admin credentials or inactive admin profile.' }, { status: 401 });
    await setAdminSession(identity);
    return NextResponse.json({ ok: true, email: identity.email });
}
