import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

const cookieName = 'rbca_admin';
const sessionLifetime = 60 * 60 * 8;

type AdminIdentity = { id: string; email: string };

function config() {
    return {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        sessionSecret: process.env.ADMIN_SESSION_SECRET,
    };
}

function adminDatabase() {
    const { url, serviceKey } = config();
    if (!url || !serviceKey) throw new Error('Supabase server environment is not configured');
    return createClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
}

function signature(value: string, secret: string) {
    return createHmac('sha256', secret).update(value).digest('hex');
}

export async function authenticateAdmin(email: string, password: string): Promise<AdminIdentity | null> {
    const { url, publishableKey } = config();
    if (!url || !publishableKey) return null;
    const authClient = createClient(url, publishableKey, { auth: { autoRefreshToken: false, persistSession: false } });
    const { data, error } = await authClient.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
    if (error || !data.user) return null;
    const { data: profile, error: profileError } = await adminDatabase()
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .maybeSingle();
    if (profileError || profile?.role !== 'admin') return null;
    return { id: data.user.id, email: data.user.email ?? email.trim().toLowerCase() };
}

export async function setAdminSession(identity: AdminIdentity) {
    const { sessionSecret } = config();
    if (!sessionSecret) throw new Error('ADMIN_SESSION_SECRET is not configured');
    const issuedAt = Math.floor(Date.now() / 1000);
    const value = `${identity.id}.${issuedAt}`;
    const token = `${value}.${signature(value, sessionSecret)}`;
    (await cookies()).set(cookieName, token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: sessionLifetime,
    });
}

export async function clearAdminSession() {
    (await cookies()).delete(cookieName);
}

export async function isAdmin() {
    const { sessionSecret } = config();
    if (!sessionSecret) return false;
    const token = (await cookies()).get(cookieName)?.value;
    if (!token) return false;
    const [userId, issuedAt, receivedSignature] = token.split('.');
    if (!userId || !issuedAt || !receivedSignature || Number.isNaN(Number(issuedAt))) return false;
    if (Math.floor(Date.now() / 1000) - Number(issuedAt) > sessionLifetime) return false;
    const expectedSignature = signature(`${userId}.${issuedAt}`, sessionSecret);
    const received = Buffer.from(receivedSignature, 'hex');
    const expected = Buffer.from(expectedSignature, 'hex');
    if (received.length !== expected.length || !timingSafeEqual(received, expected)) return false;
    const { data: profile } = await adminDatabase().from('profiles').select('role').eq('id', userId).maybeSingle();
    return profile?.role === 'admin';
}

export function database() {
    return adminDatabase();
}
