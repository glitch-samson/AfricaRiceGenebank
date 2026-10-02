import { NextResponse } from 'next/server';
import { runChatAgent } from '@/lib/chat/agent';

export const dynamic = 'force-dynamic';

// The agent can make two provider calls (one transient retry) plus catalogue
// lookups, so allow enough wall-clock time for it to answer instead of being
// cut short by the default platform function timeout.
export const maxDuration = 60;

/**
 * Public chat endpoint. Thin transport layer only:
 * validation -> agent (intent, retrieval, tools, reasoning, response).
 * All database access happens server-side inside lib/chat/*.
 */
export async function POST(request: Request) {
    let payload: unknown;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: 'A JSON body with a message is required.' }, { status: 400 });
    }

    const body = (payload ?? {}) as { message?: unknown; history?: unknown; page?: unknown };
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (!message) {
        return NextResponse.json({ error: 'A message is required.' }, { status: 400 });
    }

    try {
        const result = await runChatAgent({
            message,
            history: Array.isArray(body.history) ? (body.history as never) : [],
            page: typeof body.page === 'string' ? body.page : '/',
        });
        return NextResponse.json(result);
    } catch (error) {
        console.error('[api.chat] unhandled failure', { error: (error as Error)?.message });
        return NextResponse.json(
            {
                reply:
                    "I'm having trouble reaching the Gene Bank records right now. Please try again in a moment — and if it keeps failing, the genebank team can help directly through the contact page.",
                source: 'error',
                links: [{ label: 'Contact the genebank', href: '/contact' }],
                results: [],
                suggestions: ['Try again', 'How do I request seeds?'],
                sources: [],
                intent: 'UNKNOWN',
                usedData: false,
            },
            { status: 500 },
        );
    }
}
