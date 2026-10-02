import { NextResponse } from 'next/server';
import { executeToolCall, knownToolNames, type ToolCallRequest } from '@/lib/chat/tools';

export const dynamic = 'force-dynamic';

/**
 * Read-only tool endpoint.
 *
 * The assistant executes tools in-process (see lib/chat/agent.ts); this route
 * exposes the same validated tool surface directly so it can be exercised by
 * the smoke tests in scripts/chat-smoke.mjs. It cannot write data.
 */
export async function GET() {
    return NextResponse.json({ tools: knownToolNames });
}

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, error: 'A JSON body is required.' }, { status: 400 });
    }

    const payload = (body ?? {}) as { tool_name?: unknown; parameters?: unknown; name?: unknown; arguments?: unknown };
    const name = typeof payload.tool_name === 'string' ? payload.tool_name : typeof payload.name === 'string' ? payload.name : '';
    if (!name) {
        return NextResponse.json({ success: false, error: 'Tool name is required.', tools: knownToolNames }, { status: 400 });
    }

    if (!knownToolNames.includes(name)) {
        return NextResponse.json({ success: false, error: `Unknown tool: ${name}`, tools: knownToolNames }, { status: 404 });
    }

    const rawArgs = payload.parameters ?? payload.arguments;
    const args = rawArgs && typeof rawArgs === 'object' ? (rawArgs as Record<string, unknown>) : {};
    const call: ToolCallRequest = { name, arguments: args };
    const result = await executeToolCall(call);

    return NextResponse.json({
        success: result.ok,
        tool_name: result.tool,
        data: { records: result.records, total: result.total, truncated: result.truncated },
        formatted: result.summary,
        sources: result.sources,
        links: result.links,
    });
}
