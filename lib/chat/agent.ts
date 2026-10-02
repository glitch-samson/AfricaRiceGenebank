import { classifyIntent, isLinkExplicitlyRequested, type IntentResult } from '@/lib/chat/intent';
import { countPublishedAccessions, type CatalogueAccession } from '@/lib/chat/catalogue';
import {
    catalogueFields,
    missingCatalogueFields,
    navigationIndex,
    resolveLinkPaths,
    retrieveKnowledge,
    siteSummary,
    suggestedLinks,
    websiteSource,
    type ChatLink,
    type KnowledgeChunk,
} from '@/lib/chat/knowledge';
import { asksAboutRecord, buildGroundedReply, claimsMissingRecord, planRetrieval, runRetrieval, type RetrievalOutcome } from '@/lib/chat/planner';
import { executeToolCall, toolDefinitionsForApi, type ToolResult } from '@/lib/chat/tools';

/**
 * Layer 1 (conversation) to Layer 6 (response).
 *
 * The model reasons and writes; every fact it may state comes from the tool
 * results or the retrieved website content injected here. Tool calls are
 * executed server-side through lib/chat/tools.ts â€” the model never sees
 * credentials and can never run SQL.
 */

export type ChatHistoryMessage = { role: 'user' | 'assistant'; content: string };

export type ChatAgentRequest = {
    message: string;
    history: ChatHistoryMessage[];
    page: string;
};

export type ChatAgentResponse = {
    reply: string;
    source: 'ai' | 'catalogue' | 'website' | 'expert' | 'error';
    links: ChatLink[];
    results: CatalogueAccession[];
    suggestions: string[];
    sources: string[];
    intent: string;
    usedData: boolean;
};

const maxToolIterations = 4;
const maxToolResultChars = 4000;
const maxReplyChars = 4000;

type RuntimeConfig = { apiKey: string; baseUrl: string; model: string };

function runtime(): RuntimeConfig {
    return {
        apiKey: process.env.AI_API_KEY ?? '',
        baseUrl: (process.env.AI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta/openai/').replace(/\/+$/, ''),
        model: process.env.AI_MODEL || 'gemini-3.5-flash',
    };
}

function sanitizeHistory(history: unknown, lastUserMessage: string): ChatHistoryMessage[] {
    if (!Array.isArray(history)) return [];
    const cleaned = history
        .filter(
            (item): item is ChatHistoryMessage =>
                Boolean(
                    item &&
                        typeof item === 'object' &&
                        ((item as { role?: string }).role === 'user' || (item as { role?: string }).role === 'assistant') &&
                        typeof (item as { content?: unknown }).content === 'string',
                ),
        )
        .slice(-8)
        .map((item) => ({ role: item.role, content: item.content.slice(0, 1200) }));

    const last = cleaned.at(-1);
    if (last?.role === 'user' && last.content.trim() === lastUserMessage.trim()) cleaned.pop();
    return cleaned;
}

function dedupe<T>(items: T[], key: (item: T) => string, max: number): T[] {
    const seen = new Set<string>();
    const output: T[] = [];
    for (const item of items) {
        const id = key(item);
        if (seen.has(id)) continue;
        seen.add(id);
        output.push(item);
        if (output.length >= max) break;
    }
    return output;
}

export function buildSystemPrompt(
    page: string,
    intent: IntentResult,
    chunks: KnowledgeChunk[],
    retrieval: RetrievalOutcome | null,
    directive: string,
): string {
    const navLines = navigationIndex()
        .map((entry) => `${entry.href} â€” ${entry.label}`)
        .join('\n');

    const websiteLines =
        chunks.length > 0
            ? chunks.map((chunk) => `[${chunk.href}] ${chunk.title}\n${chunk.text}`).join('\n\n')
            : 'No specific website page matched this message.';

    const hintLines = [
        `Detected intent: ${intent.intent}`,
        intent.needsData
            ? 'This question needs catalogue or website data â€” never answer it from memory.'
            : 'This question does not need a data lookup; answer conversationally.',
        intent.entities.accessionCodes.length > 0
            ? `Accession-like codes detected in the visitor message: ${intent.entities.accessionCodes.join(', ')}. Verify them with the catalogue tools.`
            : 'No accession code was detected in the visitor message.',
        `Unsupported fields the visitor touched: ${intent.unsupported.length > 0 ? intent.unsupported.join(', ') : 'none'}.`,
        `Intent guidance: ${intent.guidance}`,
    ];

    const catalogueLines = retrieval
        ? retrieval.found
            ? retrieval.catalogue
                  .map(
                      (record) =>
                          `${record.accession}${record.name && record.name !== record.accession ? ` (${record.name})` : ''}${record.taxon ? ` â€” ${record.taxon}` : ''}${record.doi ? ` â€” DOI ${record.doi}` : ''}`,
                  )
                  .join('\n')
            : 'No catalogue record matched the visitor message.'
        : 'No catalogue lookup was performed for this message.';

    return `You are the RBCA Genebank Assistant on the public website of the Dr. Monty P. Jones Rice Biodiversity Center for Africa (RBCA), the AfricaRice genebank at M'bÃ©, CÃ´te d'Ivoire.

WHO YOU ARE
- A knowledgeable, warm, human-sounding colleague: helpful, concise, never robotic.
- You may hold normal conversation (greetings, thanks, small talk, clarifying questions) freely.
- You may explain general agronomy, genetics and plant-genebank concepts in your own words.

WHAT YOU MAY STATE AS FACT
1. Facts published on this website (WEBSITE CONTENT below, including its page figures).
2. Accession records returned by your tools or listed in CATALOGUE RECORDS below (fields: ${catalogueFields.join(', ')}).
Nothing else. If neither source has the answer, say plainly that the website data does not include it and offer the best verified next step (request page, relevant page, or contact page).

PROHIBITIONS
- Never invent accession codes, variety names, availability, stock, quantity, viability, country of origin, passport data, traits, prices, dates, staff, procedures or policies.
- Never infer availability from the existence of a record. The catalogue has no ${missingCatalogueFields.join(', ')}. Never say or imply available, in stock, out of stock, or a quantity/percentage; explain that stock is checked by the genebank team when a request is submitted through Genesys (institute CIV033).
- If a lookup finds nothing, say so and offer real alternatives only from tool results.
- Never mention database structure, table or column names, SQL, APIs, keys, credentials, or staff-only areas; if asked, say internal areas and credentials are not available to the public assistant.

TOOLS
- search_accessions: specific accession, variety or code questions.
- get_accession_details: confirm one exact code before answering.
- check_seed_availability: availability, stock, quantity or viability questions â€” follow its output.
- browse_catalogue: broad questions about what the catalogue contains, and real alternatives.
- count_catalogue_accessions: only when asked how many records the catalogue publishes.
- get_site_page_context / list_website_pages: navigation, procedures, contact, collection questions.
- Use conversation history to resolve follow-ups ("which of those are available?" refers to accessions already discussed).
- If a tool fails, say the records cannot be reached right now; never invent a value or show technical errors.

LINKS
- Only recommend routes listed under AVAILABLE WEBSITE ROUTES, returned in "links" so the interface can render buttons.

RESPONSE FORMAT
Return JSON only, no markdown fences:
{"reply":"natural-language answer","links":["/route"],"suggestions":["short follow-up question"],"clarify":false}
- "reply": plain text, at most ~180 words; list items on their own lines starting with "- ". Bold sparingly for accession codes, italics for scientific names. No headings, tables or HTML.
- "links": 0-3 real routes, most useful first. "suggestions": 0-3 short follow-up questions. "clarify": true only when one detail is genuinely needed before answering.

CONVERSATION RULES
- Greetings and thanks: reply briefly and naturally, no data lookup.
- Ambiguous requests: ask one short clarifying question instead of guessing.
- Correct politely using real retrieved data; never silently substitute a different accession.
- Only report that an accession could not be found when the visitor named an accession or variety, or asked what the catalogue holds. Procedure, navigation and contact questions are answered from the retrieved website content — never tell those visitors a record is missing.
- Do not refuse ordinary conversation, and avoid repeating the same sentence patterns each turn.

Current visitor page: ${page}

DETECTED INTENT HINTS
${hintLines.join('\n')}

RETRIEVED WEBSITE CONTENT (source: ${websiteSource})
${websiteLines}

CATALOGUE RECORDS (source: AfricaRice Gene Bank records â€” website database)
${catalogueLines}

${directive}

AVAILABLE WEBSITE ROUTES
${navLines}

PUBLISHED WEBSITE SUMMARY FIGURES
${siteSummary}`;
}

type ModelParsed = { reply: string; links: string[]; suggestions: string[]; clarify: boolean };

function stripCodeFence(text: string): string {
    const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    return (fenced ? fenced[1] : text).trim();
}

/** Parse the model's JSON answer, tolerating plain-text answers. */
export function parseAssistantJson(raw: string): ModelParsed {
    const text = stripCodeFence(raw ?? '');
    const candidates = [text];
    const braceMatch = text.match(/\{[\s\S]*\}/);
    if (braceMatch) candidates.push(braceMatch[0]);

    for (const candidate of candidates) {
        try {
            const parsed = JSON.parse(candidate);
            if (parsed && typeof parsed.reply === 'string' && parsed.reply.trim()) {
                return {
                    reply: parsed.reply.trim(),
                    links: Array.isArray(parsed.links) ? parsed.links.filter((item: unknown): item is string => typeof item === 'string') : [],
                    suggestions: Array.isArray(parsed.suggestions)
                        ? parsed.suggestions
                              .filter((item: unknown): item is string => typeof item === 'string' && item.trim().length > 0)
                              .slice(0, 3)
                        : [],
                    clarify: parsed.clarify === true,
                };
            }
        } catch {
            // try the next candidate
        }
    }

    const plain = text.replace(/^\s*```(?:json)?|```\s*$/g, '').trim();
    return { reply: plain || (raw ?? '').trim(), links: [], suggestions: [], clarify: false };
}

function toolMessageContent(result: ToolResult): string {
    const payload = result.summary.length > maxToolResultChars ? `${result.summary.slice(0, maxToolResultChars)}…` : result.summary;
    return `TOOL ${result.tool} (${result.ok ? 'ok' : 'failed'}):\n${payload}`;
}

function fallbackDirective(intent: IntentResult): string {
    if (!intent.needsData || intent.unsupported.length === 0) return 'No catalogue lookup is needed for this message.';
    return `Note: the visitor asked for ${intent.unsupported.join(', ')}, which the website catalogue does not contain. Be explicit about that instead of guessing.`;
}


function retryDirective(intent: IntentResult): string {
    const availabilityNote = intent.unsupported.includes('availability')
        ? ' Do not state or imply availability; explain that stock is confirmed by the genebank team through the Genesys request workflow.'
        : '';
    return `Now answer the visitor directly using only the tool results and website content above. Return JSON only, under 180 words.${availabilityNote}`;
}

type ModelToolCall = { id: string; name: string; arguments: Record<string, unknown> };
type ModelMessage =
    | { role: 'system' | 'user' | 'assistant'; content: string; tool_calls?: Array<{ id: string; type: 'function'; function: { name: string; arguments: string } }> }
    | { role: 'tool'; content: string; tool_call_id: string };

type ModelLoopResult = {
    content: string | null;
    failed: boolean;
    toolResults: ToolResult[];
};

function parseToolCalls(raw: unknown): ModelToolCall[] {
    if (!Array.isArray(raw)) return [];
    return raw
        .map((call) => {
            const fn = (call as { function?: { name?: unknown; arguments?: unknown } })?.function;
            const name = typeof fn?.name === 'string' ? fn.name : '';
            const argsRaw = typeof fn?.arguments === 'string' ? fn.arguments : '{}';
            let args: Record<string, unknown> = {};
            try {
                const parsed = JSON.parse(argsRaw);
                if (parsed && typeof parsed === 'object') args = parsed as Record<string, unknown>;
            } catch {
                args = {};
            }
            const id = typeof (call as { id?: unknown }).id === 'string' ? (call as { id: string }).id : `${name}-${Math.random().toString(36).slice(2, 8)}`;
            return { id, name, arguments: args };
        })
        .filter((call) => call.name.length > 0);
}

/** Layer 5 — the tool-calling loop. Returns the model's final answer text. */
async function runModelLoop(config: RuntimeConfig, systemPrompt: string, history: ChatHistoryMessage[], message: string): Promise<ModelLoopResult> {
    const tools = toolDefinitionsForApi();
    let messages: ModelMessage[] = [
        { role: 'system', content: systemPrompt },
        ...history.map((item) => ({ role: item.role, content: item.content }) as ModelMessage),
        { role: 'user', content: message },
    ];

    const toolResults: ToolResult[] = [];

    for (let iteration = 0; iteration < maxToolIterations; iteration += 1) {
        let response: Response | null = null;

        // Providers throttle with transient 429/503 responses under load, so
        // retry once after a short backoff before falling back to the
        // deterministic grounded answer.
        for (let attempt = 0; attempt < 2; attempt += 1) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 20000);

            try {
                const candidate = await fetch(`${config.baseUrl}/chat/completions`, {
                    method: 'POST',
                    signal: controller.signal,
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${config.apiKey}` },
                    body: JSON.stringify({ model: config.model, temperature: 0.4, tools, tool_choice: 'auto', messages }),
                });
                clearTimeout(timeout);

                if (candidate.status !== 429 && candidate.status < 500) {
                    response = candidate;
                    break;
                }

                if (attempt === 1) {
                    response = candidate;
                    break;
                }

                console.warn('[chat.agent] provider throttled, retrying once', { iteration, status: candidate.status });
                await new Promise((resolve) => setTimeout(resolve, 1200));
            } catch (error) {
                clearTimeout(timeout);
                console.error('[chat.agent] model request failed', { iteration, error: (error as Error)?.message });
                return { content: null, failed: true, toolResults };
            }
        }

        if (!response) return { content: null, failed: true, toolResults };

        if (!response.ok) {
            const body = await response.text().catch(() => '');
            console.error('[chat.agent] model returned an error status', { iteration, status: response.status, body: body.slice(0, 300) });
            return { content: null, failed: true, toolResults };
        }

        const payload = await response.json().catch(() => null);
        const choice = payload?.choices?.[0]?.message;
        if (!choice) {
            console.error('[chat.agent] model response missing choices', { iteration });
            return { content: null, failed: true, toolResults };
        }

        const toolCalls = parseToolCalls(choice.tool_calls);
        if (toolCalls.length === 0) {
            const content = typeof choice.content === 'string' ? choice.content : '';
            return { content, failed: false, toolResults };
        }

        const assistantToolCalls = toolCalls.map((call) => ({
            id: call.id,
            type: 'function' as const,
            function: { name: call.name, arguments: JSON.stringify(call.arguments ?? {}) },
        }));

        messages = [
            ...messages,
            { role: 'assistant', content: typeof choice.content === 'string' ? choice.content : '', tool_calls: assistantToolCalls },
        ];

        for (const call of toolCalls) {
            const result = await executeToolCall({ name: call.name, arguments: call.arguments });
            toolResults.push(result);
            messages = [...messages, { role: 'tool', content: toolMessageContent(result), tool_call_id: call.id }];
        }
    }

    console.warn('[chat.agent] tool iteration cap reached');
    return { content: null, failed: true, toolResults };
}



/**
 * Layers 1-6 orchestrated end to end. Never throws: any failure degrades to a
 * grounded deterministic answer or a clear "records unavailable" message.
 */
export async function runChatAgent(request: ChatAgentRequest): Promise<ChatAgentResponse> {
    const message = request.message.trim().slice(0, 1200);
    const page = request.page?.startsWith('/') && !request.page.startsWith('/admin') ? request.page : '/';
    const history = sanitizeHistory(request.history, message);

    const intent = classifyIntent(message);
    const chunks = intent.needsData ? retrieveKnowledge(message, page, 4) : [];
    const plan = planRetrieval(message, intent);

    let retrieval: RetrievalOutcome | null = null;
    let catalogueTotal: number | null = null;

    try {
        retrieval = await runRetrieval(plan);
        if (plan.useBrowse || plan.useSearch) catalogueTotal = await countPublishedAccessions();
    } catch (error) {
        console.error('[chat.agent] retrieval stage failed', { intent: intent.intent, error: (error as Error)?.message });
        retrieval = retrieval ?? {
            catalogue: [],
            truncated: false,
            found: false,
            strategy: 'none',
            query: plan.query,
            failed: true,
            links: [],
            sources: [],
        };
    }

    const config = runtime();
    let modelParsed: ModelParsed | null = null;
    let modelFailed = false;
    let toolResults: ToolResult[] = [];

    if (config.apiKey) {
        const directive = `PREFETCHED DATA FOR THIS MESSAGE (already retrieved server-side; only call a tool if you need something else):\n${fallbackDirective(intent)}`;
        try {
            const loop = await runModelLoop(config, buildSystemPrompt(page, intent, chunks, retrieval, directive), history, message);
            toolResults = loop.toolResults;
            modelFailed = loop.failed;
            if (loop.content) modelParsed = parseAssistantJson(loop.content);
        } catch (error) {
            console.error('[chat.agent] model loop threw', { error: (error as Error)?.message });
            modelFailed = true;
        }
    } else {
        console.warn('[chat.agent] AI_API_KEY is not configured; using grounded deterministic answers.');
    }

    const fallback = buildGroundedReply(message, intent, retrieval, catalogueTotal);
    const fallbackLinks = fallback.links;
    const fallbackSuggestions = fallback.suggestions;

    // Records shown to the UI come from real tool/retrieval results only.
    const cardRecords = dedupe<CatalogueAccession>(
        [...toolResults.flatMap((result) => result.records), ...(retrieval?.catalogue ?? [])],
        (record) => record.accession,
        5,
    );

    const toolSources = Array.from(new Set(toolResults.flatMap((result) => result.sources)));
    const sources = Array.from(
        new Set([...toolSources, ...(retrieval?.sources ?? []), ...(intent.needsData ? chunks.map(() => websiteSource) : [])]),
    );

    const usedData = toolsWereUsed(toolResults) || Boolean(retrieval?.found);

    // The grounded reply also validates the model's answer: reporting a missing
    // accession for a question that was never about a record contradicts the
    // retrieval plan, so the deterministic answer is served instead.
    const contradictsPlan = Boolean(modelParsed) && !asksAboutRecord(intent) && claimsMissingRecord(modelParsed?.reply ?? '');
    if (contradictsPlan) {
        console.warn('[chat.agent] model reported a missing accession for a non-record question; serving grounded answer', {
            intent: intent.intent,
        });
    }

    if (modelParsed && !contradictsPlan) {
        const modelLinks = resolveLinkPaths(modelParsed.links);
        const links = modelLinks.length > 0 ? modelLinks : isLinkExplicitlyRequested(message) ? fallbackLinks : [];
        return {
            reply: modelParsed.reply.slice(0, maxReplyChars),
            source: 'ai',
            links: dedupe<ChatLink>(links, (link) => link.href, 3),
            results: cardRecords,
            suggestions: modelParsed.suggestions.length > 0 ? modelParsed.suggestions : fallbackSuggestions.slice(0, 2),
            sources,
            intent: intent.intent,
            usedData,
        };
    }

    if (modelFailed) {
        console.warn('[chat.agent] falling back to grounded deterministic answer', { intent: intent.intent });
    }

    return {
        reply: fallback.reply,
        source: fallback.source,
        links: fallbackLinks,
        results: cardRecords,
        suggestions: fallbackSuggestions,
        sources,
        intent: intent.intent,
        usedData,
    };
}

function toolsWereUsed(results: ToolResult[]): boolean {
    return results.some((result) => result.ok && (result.records.length > 0 || result.sources.includes(websiteSource)));
}
