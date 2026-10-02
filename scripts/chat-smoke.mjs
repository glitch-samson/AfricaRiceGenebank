// End-to-end smoke tests for the RBCA chat assistant.
//
// Usage (a dev server must be running on the same port):
//   node scripts/chat-smoke.mjs
//   node scripts/chat-smoke.mjs http://localhost:3000
//
// Ground truth comes from the website database itself, so the tests assert that
// the assistant's claims match real data instead of hardcoded expectations.

import { readFileSync } from 'node:fs';

const base = (process.argv[2] || process.env.CHAT_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');

const env = Object.fromEntries(
    readFileSync(new URL('../.env', import.meta.url), 'utf8')
        .split(/\r?\n/)
        .filter((line) => line.includes('=') && !line.trim().startsWith('#'))
        .map((line) => {
            const index = line.indexOf('=');
            return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^['"]+|['"]+$/g, '')];
        }),
);

async function selectAccessions(query = '') {
    const url = `${env.SUPABASE_URL}/rest/v1/accessions?select=accession,name,taxon,doi${query}`;
    const response = await fetch(url, {
        headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` },
    });
    if (!response.ok) throw new Error(`supabase probe failed: ${response.status}`);
    return response.json();
}

async function ask(message, history = [], page = '/') {
    const started = Date.now();
    const response = await fetch(`${base}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history, page }),
    });
    const body = await response.json().catch(() => ({}));
    return { status: response.status, ms: Date.now() - started, body };
}

const results = [];
function check(name, condition, detail) {
    results.push({ name, pass: Boolean(condition), detail });
    console.log(`${condition ? 'PASS' : 'FAIL'}  ${name}${detail ? `\n      ${String(detail).replace(/\n/g, '\n      ')}` : ''}`);
}

const lower = (text) => (text || '').toLowerCase();


async function main() {
    console.log(`Chat smoke tests against ${base}\n`);

    const catalogue = await selectAccessions('&limit=30');
    const first = catalogue[0] ?? null;
    const second = catalogue[1] ?? null;
    console.log(`Database ground truth: ${catalogue.length} accession record(s) sampled${first ? `, first = ${first.accession}` : ''}\n`);

    // 1. General conversation — friendly, and no data claim.
    const hello = await ask('Hello, how are you?');
    check('1. general conversation', hello.status === 200 && /hello|hi\b|doing well|glad/i.test(hello.body.reply ?? ''), `intent=${hello.body.intent} reply="${(hello.body.reply ?? '').slice(0, 160)}"`);
    check('1b. general conversation claims no database use', hello.body.usedData !== true, `usedData=${hello.body.usedData}`);

    // 2. Exact accession (a real record from the database).
    if (first) {
        const exact = await ask(`Do you have ${first.accession}?`);
        check(
            '2. exact accession search',
            exact.status === 200 && lower(exact.body.reply).includes(lower(first.accession)) && !/couldn't find|could not find/i.test(exact.body.reply ?? ''),
            `reply="${(exact.body.reply ?? '').slice(0, 200)}" results=${(exact.body.results ?? []).map((r) => r.accession).join(', ')}`,
        );
        check('2b. exact accession carries a data source', (exact.body.sources ?? []).length > 0, `sources=${JSON.stringify(exact.body.sources)}`);

        const words = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten' };
        const numeric = first.accession.match(/^([A-Za-z ]+?)\s?(\d{1,2})$/);
        if (numeric && words[Number(numeric[2])]) {
            const spelled = await ask(`Do you have ${numeric[1].trim()} ${words[Number(numeric[2])]}?`);
            check('2c. number-word normalisation ("NERICA one")', lower(spelled.body.reply).includes(lower(first.accession)), `reply="${(spelled.body.reply ?? '').slice(0, 160)}"`);
        }
    }

    // 3. Non-existent accession — must admit it, never fabricate.
    const missing = await ask('Do you have ZZZ 9999?');
    check('3. non-existent accession reported honestly', /couldn't find|could not find|not in|no record|not published/i.test(missing.body.reply ?? ''), `reply="${(missing.body.reply ?? '').slice(0, 220)}"`);
    check('3b. no invented record for a missing code', !(missing.body.results ?? []).some((row) => (row.accession ?? '').includes('ZZZ')), `results=${JSON.stringify((missing.body.results ?? []).map((r) => r.accession))}`);

    // 4. Broad availability question — no fabricated availability.
    const broad = await ask('What seeds do you have available?');
    const broadReply = broad.body.reply ?? '';
    check('4. broad availability question answered', broad.status === 200 && broadReply.length > 40, `reply="${broadReply.slice(0, 200)}"`);
    check('4b. no unsupported availability claim', !/\b(is|are) (currently )?available\b/i.test(broadReply) && !/\bout of stock\b/i.test(broadReply), 'no availability assertion');
    check('4c. points to the real request route', (broad.body.links ?? []).some((link) => link.href === '/request-germplasm'), `links=${JSON.stringify((broad.body.links ?? []).map((l) => l.href))}`);

    // 5. Follow-up keeps context through history.
    if (first) {
        const history = [
            { role: 'user', content: `Do you have ${first.accession}?` },
            { role: 'assistant', content: `I found ${first.accession} in the catalogue records.` },
        ];
        const followUp = await ask('How much of it is available?', history);
        check('5. follow-up keeps context', followUp.status === 200 && !/which seed|what seed are you referring to/i.test(followUp.body.reply ?? ''), `reply="${(followUp.body.reply ?? '').slice(0, 200)}"`);
        check('5b. follow-up invents no quantity', !/\b\d+\s?(g|kg|grams|kilos|seeds?)\b[^.]*\bavailab/i.test(followUp.body.reply ?? ''), 'no invented quantity');
    }

    // 6. Navigation must return a real route.
    const nav = await ask('How do I request seeds?');
    const navLinks = (nav.body.links ?? []).map((link) => link.href);
    check('6. navigation answers with the real request route', navLinks.includes('/request-germplasm'), `links=${JSON.stringify(navLinks)}`);
    check('6b. navigation never returns an admin route', navLinks.every((href) => !href.startsWith('/admin')), `links=${JSON.stringify(navLinks)}`);

    // 6c. The body matters too: a procedure question must be answered with the
    // procedure, never as an accession lookup that came back empty.
    const procedureReply = nav.body.reply ?? '';
    check(
        '6c. request question explains the procedure, not a record miss',
        !/couldn'?t find|could not find|no record|not published/i.test(procedureReply) && /genesys|request|smta|submit/i.test(procedureReply),
        `intent=${nav.body.intent} reply="${procedureReply.slice(0, 240)}"`,
    );

    // 6d. Same failure class reached through navigation/contact phrasing.
    const contactNav = await ask('Where do I email my germplasm request?');
    check(
        '6d. contact phrasing never claims a missing accession',
        !/couldn'?t find|could not find|no record/i.test(contactNav.body.reply ?? ''),
        `intent=${contactNav.body.intent} reply="${(contactNav.body.reply ?? '').slice(0, 200)}"`,
    );

    // 7. Ambiguous / partial code.
    const ambiguous = await ask('Do you have IR64?');
    check('7. ambiguous query returns a usable answer', ambiguous.status === 200 && (ambiguous.body.reply ?? '').length > 30, `intent=${ambiguous.body.intent} reply="${(ambiguous.body.reply ?? '').slice(0, 220)}"`);

    // 8. Empty result path.
    const emptyish = await ask('Show me the accession QQQ 77777');
    check('8. empty result handled gracefully', /couldn't find|could not find|no record|not published/i.test(emptyish.body.reply ?? ''), `reply="${(emptyish.body.reply ?? '').slice(0, 220)}"`);

    // 9. Broad matches must all exist in the database.
    const breadth = await ask('What accessions are in the catalogue?');
    const breadthRecords = (breadth.body.results ?? []).map((record) => record.accession);
    check('9. broad catalogue question returns real records', breadthRecords.length > 0 || /empty|no accession/i.test(breadth.body.reply ?? ''), `records=${breadthRecords.join(', ')}`);
    if (catalogue.length > 0) {
        const allowed = new Set(catalogue.map((row) => row.accession));
        const fabricated = breadthRecords.filter((accession) => !allowed.has(accession));
        check('9b. every returned accession exists in the database', fabricated.length === 0, `fabricated=${fabricated.join(', ') || 'none'}`);
    }

    // 10. Unsupported facets must be disclosed, not guessed.
    const countryQuestion = await ask('What accessions are available from Sierra Leone?');
    check('10. unsupported country filter disclosed', /don't have|do not have|not in|does not contain|cannot/i.test(countryQuestion.body.reply ?? ''), `intent=${countryQuestion.body.intent} reply="${(countryQuestion.body.reply ?? '').slice(0, 220)}"`);

    // 11. Record-count question answered from the database.
    const countQuestion = await ask('How many accessions are in the website catalogue?');
    check('11. catalogue count question answered', (countQuestion.body.reply ?? '').length > 0, `reply="${(countQuestion.body.reply ?? '').slice(0, 220)}"`);

    // 12. Tool endpoint returns real records.
    const toolProbe = second ?? first;
    if (toolProbe) {
        const details = await fetch(`${base}/api/chat/tools`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tool_name: 'get_accession_details', parameters: { accession: toolProbe.accession } }),
        }).then((response) => response.json());
        check(
            '12. tool endpoint returns the real record',
            (details.data?.records ?? []).some((record) => record.accession === toolProbe.accession),
            `records=${(details.data?.records ?? []).map((r) => r.accession).join(', ')}`,
        );
    }

    // 13. Unknown / write-like tools are refused.
    const unknownTool = await fetch(`${base}/api/chat/tools`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool_name: 'drop_table', parameters: {} }),
    });
    check('13. unknown/write-like tool refused', unknownTool.status === 404, `status=${unknownTool.status}`);

    // 14. Injection-style input must not break the endpoint.
    const injection = await ask("Do you have '); DROP TABLE accessions; --");
    check('14. injection-style input handled safely', injection.status === 200, `status=${injection.status} reply="${(injection.body.reply ?? '').slice(0, 140)}"`);

    // 15. A named accession that does not match must never show unrelated records.
    check('15. unmatched accession never shows unrelated records', (emptyish.body.results ?? []).length === 0, `results=${(emptyish.body.results ?? []).map((r) => r.accession).join(', ') || '(none)'}`);

    // 16. Regression guard: an empty quoted query reads as a broken answer.
    const emptyQuote = [breadth.body.reply, countQuestion.body.reply, countryQuestion.body.reply, injection.body.reply, emptyish.body.reply]
        .filter(Boolean)
        .find((text) => /for\s+""|matching\s+""/.test(text));
    check('16. no empty quoted search phrase in replies', !emptyQuote, emptyQuote ? `found: "${String(emptyQuote).slice(0, 140)}"` : 'no empty quoted query');

    const passed = results.filter((result) => result.pass).length;
    console.log(`\n${passed}/${results.length} checks passed`);
    if (passed !== results.length) process.exitCode = 1;
}

main().catch((error) => {
    console.error('smoke test harness failed:', error.message);
    process.exitCode = 1;
});

