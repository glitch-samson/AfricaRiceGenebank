'use client';

import { useEffect, useState } from 'react';

const modules = [
    { href: '/admin/survey', icon: '⌬', title: 'Surveys', description: 'Create, publish, manage, and review survey responses.', status: 'Active', tone: 'gold' },
    { href: '#newsletter', icon: '✉', title: 'Newsletter', description: 'Plan campaigns, manage subscribers, and review delivery performance.', status: 'Coming soon', tone: 'blue' },
    { href: '#content', icon: '▤', title: 'Site content', description: 'Manage pages, publications, datasets, and featured resources.', status: 'Planned', tone: 'green' },
    { href: '#users', icon: '◌', title: 'People & access', description: 'Manage administrators, permissions, and activity history.', status: 'Planned', tone: 'slate' },
];

type Response = { institution: string | null; country: string | null; submitted_at: string };

export default function AdminDashboard() {
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [responses, setResponses] = useState<Response[]>([]);
    const [error, setError] = useState('');

    const load = async () => {
        const response = await fetch('/api/admin/responses', { cache: 'no-store' });
        if (!response.ok) return setLoggedIn(false);
        setResponses((await response.json()).responses ?? []);
        setLoggedIn(true);
    };
    useEffect(() => { void load(); }, []);

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
        if (!response.ok) return setError('Invalid admin password.');
        setError('');
        await load();
    };

    const signOut = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        setLoggedIn(false);
        setResponses([]);
    };

    if (!loggedIn) return <main className="admin-shell"><div className="admin-login"><span className="section-eyebrow">RBCA administration</span><h1>Control center</h1><p>Sign in to manage surveys, responses, and future RBCA communication tools.</p><form onSubmit={login}><label className="form-field"><span>Admin password</span><input type="password" required autoFocus value={password} onChange={(event) => setPassword(event.target.value)} /></label><button className="btn-primary-dark" type="submit">Enter dashboard</button>{error && <p className="survey-error" role="alert">{error}</p>}</form></div></main>;

    const institutions = new Set(responses.map((response) => response.institution).filter(Boolean)).size;
    const countries = new Set(responses.map((response) => response.country).filter(Boolean)).size;
    const latest = responses[0]?.submitted_at;

    return <main className="admin-app"><aside className="admin-sidebar"><a href="/" className="admin-brand"><span className="admin-brand-mark">RB</span><span><strong>RBCA</strong><small>Control center</small></span></a><nav className="admin-nav" aria-label="Administration"><span className="admin-nav-label">Workspace</span><a className="is-active" href="/admin">Overview</a><a href="/admin/survey">Surveys & responses</a><a className="is-disabled" href="#newsletter">Newsletter <small>soon</small></a><span className="admin-nav-label">Manage</span><a className="is-disabled" href="#content">Site content <small>planned</small></a><a className="is-disabled" href="#users">People & access <small>planned</small></a><a className="is-disabled" href="#settings">Settings <small>planned</small></a></nav><div className="admin-sidebar-footer"><a href="/">View public site ↗</a><button onClick={() => void signOut()}>Sign out</button></div></aside><section className="admin-main"><header className="admin-topbar"><div><span className="section-eyebrow">Wednesday · 23 September 2026</span><h1>Good morning, administrator.</h1></div><button className="admin-refresh" onClick={() => void load()}>↻ Refresh data</button></header><section className="admin-welcome"><div><span className="section-eyebrow">RBCA operations</span><h2>One place to steward the whole digital genebank.</h2><p>Start with surveys today. Newsletter, content, and team workflows are ready to grow into this same workspace.</p></div><a className="btn-primary-dark" href="/admin/survey">Open survey workspace →</a></section><section className="admin-metrics" aria-label="Workspace overview"><div className="admin-metric"><span>Survey responses</span><strong>{responses.length}</strong><small>Across all submitted forms</small></div><div className="admin-metric"><span>Institutions reached</span><strong>{institutions}</strong><small>Distinct organisations</small></div><div className="admin-metric"><span>Countries represented</span><strong>{countries}</strong><small>From response records</small></div><div className="admin-metric"><span>Last activity</span><strong>{latest ? new Date(latest).toLocaleDateString() : '—'}</strong><small>{latest ? new Date(latest).toLocaleTimeString() : 'Waiting for first response'}</small></div></section><div className="admin-section-heading"><div><span className="section-eyebrow">Modules</span><h2>What would you like to manage?</h2></div><span className="admin-live-label"><i /> System online</span></div><section className="admin-module-grid">{modules.map((module) => <a href={module.href} className={`admin-module-card ${module.tone}`} key={module.title}><span className="admin-module-icon">{module.icon}</span><span className="admin-module-status">{module.status}</span><h3>{module.title}</h3><p>{module.description}</p><strong>{module.status === 'Active' ? 'Open workspace →' : 'Prepare module →'}</strong></a>)}</section><section className="admin-next"><div><span className="section-eyebrow">Next layer</span><h2>Built to extend without rebuilding.</h2><p>New tools can share the same authentication, navigation, audit trail, and reporting patterns as they are introduced.</p></div><div className="admin-next-list"><span>01 <b>Newsletter campaigns</b></span><span>02 <b>Content publishing</b></span><span>03 <b>Team permissions</b></span></div></section></section></main>;
}
