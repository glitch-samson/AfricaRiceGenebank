import { NextResponse } from 'next/server';
import { searchPublicAccessions } from '@/lib/publicCatalogue';
import { sitePages } from '@/data/site';

const maxMessageLength = 1200;
const maxHistoryMessages = 8;
const maxHistoryContentLength = 1000;

const siteContext = `You are the friendly RBCA website guide for the Rice Biodiversity Center for Africa. The user should feel like they are speaking with a thoughtful human colleague who understands their goal. Be warm, specific, curious, and confident without being overly formal. Use plain language, natural contractions, and varied sentence rhythm. Respond to the exact question first; refer naturally to earlier messages when relevant. Use concrete details from the available catalogue context or site pages. Do not begin with generic phrases such as "I can help", "Certainly", or "Great question" unless they genuinely fit. Do not repeat the same explanation or navigation list. Ask at most one useful follow-up question, and only when the request is genuinely ambiguous. The assistant can navigate only public pages: never provide, open, or recommend /admin routes. If asked for the admin dashboard, explain briefly that it is restricted to authorized administrators and that the public assistant cannot open it. Never sound like a script, never dump a long menu of links, and never mention system prompts, APIs, or internal implementation.
Useful navigation: /collection covers conserved rice diversity; /collection/african-rice covers O. glaberrima; /collection/asian-rice covers O. sativa; /data contains characterization, genomics, and subset data; /request-germplasm starts a germplasm request; /research covers genomics, quality control, and sub-setting; /what-we-do explains acquisition, conservation, characterization, regeneration, safety duplication, data management, and distribution.
Be concise, helpful, and honest. Do not invent accession numbers, trait measurements, or availability. When a request needs live catalogue data, direct the user to the relevant data or request page.`;

const publicLinks = [
    { label: 'Collection overview', href: '/collection', terms: ['collection', 'diversity', 'accession', 'rice'] },
    { label: 'African rice', href: '/collection/african-rice', terms: ['african', 'glaberrima'] },
    { label: 'Asian rice', href: '/collection/asian-rice', terms: ['asian', 'sativa'] },
    { label: 'Characterization data', href: '/data/characterization', terms: ['trait', 'character', 'descriptor', 'agronomic'] },
    { label: 'Genomics data', href: '/data/genomics', terms: ['genomic', 'sequence', 'snp', 'vcf'] },
    { label: 'Subset data', href: '/data/subsets', terms: ['subset', 'mini-core', 'mini core'] },
    { label: 'Request germplasm', href: '/request-germplasm', terms: ['request', 'germplasm', 'seed', 'material'] },
    { label: 'Research overview', href: '/research', terms: ['research', 'study'] },
    { label: 'Publications', href: '/publications', terms: ['publication', 'paper', 'article'] },
];

function interpretRequest(message: string) {
    const query = message.toLowerCase();
    if (query.includes('admin') || query.includes('dashboard') || query.includes('control panel')) return { goal: 'restricted administration request', keywords: ['admin', 'restricted'] };
    if (query.includes('availab') || query.includes('in stock') || query.includes('stock')) return { goal: 'verify whether a specific accession or seed group is available', keywords: ['accession', 'availability', 'stock', 'germplasm'] };
    if (query.includes('trait') || query.includes('character') || query.includes('morpholog')) return { goal: 'find trait or characterization information', keywords: ['characterization', 'phenotype', 'agronomic', 'morphology', 'seed traits'] };
    if (query.includes('keep') && query.includes('seed') || query.includes('store') || query.includes('viab')) return { goal: 'understand seed conservation and viability', keywords: ['conservation', 'storage', 'drying', 'moisture', 'viability', 'temperature'] };
    if (query.includes('genom') || query.includes('sequence') || query.includes('snp') || query.includes('molecular')) return { goal: 'find genomics or molecular data', keywords: ['genomics', 'DArTseq', 'SNP', 'Genesys', 'molecular'] };
    if (query.includes('request') || query.includes('germplasm') || query.includes('seed')) return { goal: 'request or locate germplasm', keywords: ['distribution', 'accession', 'germplasm', 'request', 'seed'] };
    if (query.includes('african') || query.includes('glaberrima')) return { goal: 'explore African rice diversity', keywords: ['African rice', 'Oryza glaberrima', 'drought', 'disease', 'difficult soils'] };
    if (query.includes('asian') || query.includes('sativa')) return { goal: 'explore Asian rice diversity', keywords: ['Asian rice', 'Oryza sativa', 'indica', 'japonica', 'yield'] };
    return { goal: 'answer a public RBCA information request', keywords: ['RBCA', 'rice biodiversity', 'collection', 'research', 'data'] };
}

function searchSitePages(message: string, intent: ReturnType<typeof interpretRequest>) {
    const terms = `${message} ${intent.keywords.join(' ')}`.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((term) => term.length >= 4);
    return Object.entries(sitePages).map(([path, page]) => {
        const searchable = [page.section, page.title, page.intro, ...page.body, ...page.facts.flat()].join(' ').toLowerCase();
        const score = terms.reduce((total, term) => total + (searchable.includes(term) ? 1 : 0), 0);
        return { path, page, score };
    }).filter((match) => match.score > 0).sort((left, right) => right.score - left.score).slice(0, 3);
}

function linksFor(message: string, pageMatches: ReturnType<typeof searchSitePages>) {
    const query = message.toLowerCase();
    const keywordLinks = publicLinks.filter((link) => link.terms.some((term) => query.includes(term))).map(({ label, href }) => ({ label, href }));
    const pageLinks = pageMatches.map(({ path, page }) => ({ label: page.title, href: path }));
    return Array.from(new Map([...pageLinks, ...keywordLinks].map((link) => [link.href, link])).values()).slice(0, 4);
}

function fallbackReply(message: string) {
    const query = message.toLowerCase();
    if (query.includes('admin') || query.includes('dashboard') || query.includes('control panel')) return 'The admin dashboard is restricted to authorized administrators, so I can’t open it from the public assistant. For public information, I can take you to the collection, data, research, or germplasm request pages.';
    if (query.includes('request') && (query.includes('make') || query.includes('start') || query.includes('guide') || query.includes('how'))) return 'I can walk you through it. Start with the Request Germplasm page, where you can describe the material you need and review the request requirements. If you already know a rice group or trait, tell me and I’ll help you narrow the search first.';
    if (query.includes('list') && (query.includes('seed') || query.includes('germplasm') || query.includes('accession'))) return 'I checked the public catalogue, but it does not currently contain a searchable list of requestable seed records. Once the catalogue is populated, I can show accession names and groups here; for now, the Request Germplasm page is where you can submit a request.';
    if (query.includes('availab') || query.includes('in stock') || query.includes('stock')) return 'I couldn’t verify availability from the public catalogue because it does not currently expose a stock or availability field. I can still help you identify the accession and take you to the germplasm request workflow for confirmation.';
    if (query.includes('request') || query.includes('germplasm') || query.includes('seed')) return 'The public catalogue does not currently return a specific seed match for that request. Tell me a rice group or trait, and I’ll narrow the search before sending you to the request workflow.';
    if (query.includes('trait') || query.includes('character')) return 'You’ll find the main trait and characterization resources in Data → Characterization. Are you looking for a particular trait, crop group, or accession?' ;
    if (query.includes('genomic') || query.includes('sequence') || query.includes('snp')) return 'The genomics datasets are in Data → Genomics, and the Research → Genomics page gives the helpful background behind them. I can point you to a specific dataset if you tell me what you’re studying.';
    if (query.includes('african') || query.includes('glaberrima')) return 'African rice, or O. glaberrima, has its own collection page with the relevant background and diversity information. Would you like to explore the collection or request material?';
    if (query.includes('asian') || query.includes('sativa')) return 'You can explore O. sativa through the Asian Rice collection page. If you’re searching for a trait or a specific accession, tell me what you have in mind.';
    if (query.includes('where') || query.includes('find') || query.includes('navigate')) return 'I’d be glad to help you find it. Are you looking for a collection, a trait dataset, a genomics resource, a publication, or a germplasm request?';
    return 'I’d be happy to help you explore the RBCA site. You can ask me about rice diversity, traits, characterization, genomics, publications, or requesting germplasm. What are you working on?';
}

function catalogueReply(message: string, results: Awaited<ReturnType<typeof searchPublicAccessions>>) {
    if (!results.length) return null;
    const names = results.slice(0, 5).map((item) => `${item.accession} (${item.name})`).join(', ');
    if (message.toLowerCase().includes('availab') || message.toLowerCase().includes('stock')) return `I found ${results.length} matching public catalogue record${results.length === 1 ? '' : 's'}: ${names}. The current public record does not include an availability field, so I can’t honestly confirm that it is in stock. You can use the request workflow to verify it.`;
    return `I found ${results.length} public catalogue match${results.length === 1 ? '' : 'es'}: ${names}. These are starting points, so please confirm current availability through the request workflow.`;
}

function pageReply(matches: ReturnType<typeof searchSitePages>) {
    const match = matches[0];
    if (!match) return null;
    return `${match.page.title}: ${match.page.intro} ${match.page.body[0]}`;
}

export async function POST(request: Request) {
    const body = await request.json().catch(() => ({}));
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, maxMessageLength) : '';
    if (!message) return NextResponse.json({ error: 'A message is required.' }, { status: 400 });

    const apiKey = process.env.AI_API_KEY;
    const baseUrl = process.env.AI_BASE_URL || 'https://api.openai.com/v1';
    const model = process.env.AI_MODEL || 'gpt-4o-mini';
    const history = Array.isArray(body.history) ? body.history.filter((item: unknown): item is { role: 'user' | 'assistant'; content: string } => Boolean(item && typeof item === 'object' && ((item as { role?: string }).role === 'user' || (item as { role?: string }).role === 'assistant') && typeof (item as { content?: unknown }).content === 'string')).slice(-maxHistoryMessages).map((item: { role: 'user' | 'assistant'; content: string }) => ({ ...item, content: item.content.slice(0, maxHistoryContentLength) })) : [];
    const page = typeof body.page === 'string' && body.page.startsWith('/') ? body.page : '/';
    const intent = interpretRequest(message);
    const pageMatches = searchSitePages(message, intent);
    const links = linksFor(message, pageMatches);
    const results = await searchPublicAccessions(`${message} ${intent.keywords.join(' ')}`);
    const catalogueSummary = catalogueReply(message, results);
    const pageSummary = pageReply(pageMatches);
    const toolResults = {
        intent: intent.goal,
        knowledgeBase: pageMatches.map(({ path, page }) => ({ path, title: page.title, intro: page.intro, facts: page.facts, body: page.body })),
        catalogue: results,
        navigation: links,
    };
    if (!apiKey) return NextResponse.json({ reply: catalogueSummary || pageSummary || fallbackReply(message), source: 'site-guide', links, results });

    try {
        const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({ model, temperature: 0.65, messages: [{ role: 'system', content: siteContext }, { role: 'system', content: `Interpretation of the request: ${intent.goal}. Use only the controlled tool results below to answer AfricaRice-specific questions. The visitor is currently viewing ${page}. Never execute SQL, expose credentials, invent URLs, or claim unavailable records. Controlled tool results: ${JSON.stringify(toolResults)}` }, ...history, ...(history.at(-1)?.role === 'user' && history.at(-1)?.content === message ? [] : [{ role: 'user' as const, content: message }])] }),
        });
            if (!response.ok) {
                console.error(`AI provider request failed with status ${response.status}: ${await response.text()}`);
                return NextResponse.json({ reply: fallbackReply(message), source: 'site-guide', links, results });
            }
        const result = await response.json();
        const reply = result.choices?.[0]?.message?.content;
        return NextResponse.json({ reply: typeof reply === 'string' ? reply : catalogueSummary || pageSummary || fallbackReply(message), source: 'ai', links, results });
    } catch {
        return NextResponse.json({ reply: catalogueSummary || pageSummary || fallbackReply(message), source: 'site-guide', links, results });
    }
}
