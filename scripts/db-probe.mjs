// Read-only diagnostic probe for the RBCA Supabase catalogue.
// Usage: node scripts/db-probe.mjs
// Loads credentials from .env (server side only). Never prints secrets.

import { readFileSync } from 'node:fs';

const env = Object.fromEntries(
    readFileSync(new URL('../.env', import.meta.url), 'utf8')
        .split(/\r?\n/)
        .filter((line) => line.includes('=') && !line.trim().startsWith('#'))
        .map((line) => {
            const index = line.indexOf('=');
            return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^['"]+|['"]+$/g, '')];
        })
);

const url = env.SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
    console.error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing from .env');
    process.exit(1);
}

async function probe(path) {
    const response = await fetch(`${url}/rest/v1/${path}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: 'count=exact' },
    });
    const text = await response.text();
    return { status: response.status, range: response.headers.get('content-range'), body: text.slice(0, 400) };
}

const targets = [
    'accessions?select=accession,name,taxon,doi&limit=5',
    'accessions?select=accession,availability&limit=1',
    'accessions?select=accession,country&limit=1',
];

for (const target of targets) {
    try {
        const result = await probe(target);
        console.log(`${target} -> ${result.status} ${result.range ?? ''} ${result.body}`);
    } catch (error) {
        console.log(`${target} -> ERROR ${error.message}`);
    }
}

// Total distinct counts to understand catalogue size (count only, no rows).
try {
    const response = await fetch(`${url}/rest/v1/accessions?select=accession&limit=1`, {
        headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: 'count=exact', Range: '0-0' },
    });
    console.log('accessions count header:', response.headers.get('content-range'));
} catch (error) {
    console.log('count probe failed:', error.message);
}
