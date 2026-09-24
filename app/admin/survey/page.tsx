'use client';

import { useEffect, useMemo, useState } from 'react';

type ResponseRow = {
    id: number;
    response_uuid: string;
    respondent_name: string | null;
    email: string;
    institution: string | null;
    position?: string | null;
    country: string | null;
    submitted_at: string;
    answers: Record<string, unknown>;
};

type Survey = {
    id: number;
    slug: string;
    title: string;
    description: string | null;
    questions: unknown[];
    status: 'draft' | 'published' | 'archived';
    updated_at: string;
};

function responseMatches(response: ResponseRow, query: string, country: string) {
    const searchable = [response.respondent_name, response.email, response.institution, response.country].join(' ').toLowerCase();
    return searchable.includes(query.toLowerCase()) && (!country || response.country === country);
}

export default function SurveyAdminPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [responses, setResponses] = useState<ResponseRow[]>([]);
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [surveyTitle, setSurveyTitle] = useState('');
    const [surveySlug, setSurveySlug] = useState('');
    const [surveyDescription, setSurveyDescription] = useState('');
    const [surveyError, setSurveyError] = useState('');
    const [selected, setSelected] = useState<ResponseRow | null>(null);
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const load = async () => {
        setLoading(true);
        const response = await fetch('/api/admin/responses', { cache: 'no-store' });
        if (!response.ok) {
            setLoggedIn(false);
            setLoading(false);
            return;
        }
        setResponses((await response.json()).responses ?? []);
        const surveyResponse = await fetch('/api/admin/surveys', { cache: 'no-store' });
        if (surveyResponse.ok) setSurveys((await surveyResponse.json()).surveys ?? []);
        setLoggedIn(true);
        setLoading(false);
    };

    useEffect(() => { void load(); }, []);

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
        if (!response.ok) return setError('Invalid admin credentials or inactive admin profile.');
        await load();
    };

    const logout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        setLoggedIn(false);
        setResponses([]);
    };

    const createSurvey = async (event: React.FormEvent) => {
        event.preventDefault();
        setSurveyError('');
        const response = await fetch('/api/admin/surveys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: surveyTitle, slug: surveySlug, description: surveyDescription, questions: [] }) });
        const result = await response.json();
        if (!response.ok) return setSurveyError(result.error ?? 'Could not create survey.');
        setSurveys((current) => [result.survey, ...current]);
        setSurveyTitle('');
        setSurveySlug('');
        setSurveyDescription('');
    };

    const updateSurveyStatus = async (survey: Survey, status: Survey['status']) => {
        const response = await fetch(`/api/admin/surveys/${survey.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
        if (!response.ok) return setSurveyError('Could not update survey status.');
        const result = await response.json();
        setSurveys((current) => current.map((item) => item.id === survey.id ? result.survey : item));
    };

    const deleteSurvey = async (survey: Survey) => {
        if (!window.confirm(`Delete "${survey.title}"?`)) return;
        const response = await fetch(`/api/admin/surveys/${survey.id}`, { method: 'DELETE' });
        if (!response.ok) return setSurveyError('Could not delete survey.');
        setSurveys((current) => current.filter((item) => item.id !== survey.id));
    };

    const countries = useMemo(() => Array.from(new Set(responses.map((response) => response.country).filter(Boolean))).sort() as string[], [responses]);
    const filtered = useMemo(() => responses.filter((response) => responseMatches(response, query, country)), [responses, query, country]);
    const institutions = new Set(responses.map((response) => response.institution).filter(Boolean)).size;
    const latest = responses[0]?.submitted_at;

    if (!loggedIn) return <main className="admin-shell"><div className="admin-login"><span className="section-eyebrow">RBCA survey administration</span><h1>Survey dashboard</h1><p>Sign in with an administrator profile to manage surveys and response archives.</p><form onSubmit={login}><label className="form-field"><span>Admin email</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoFocus /></label><label className="form-field"><span>Password</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label><button className="btn-primary-dark" type="submit">Sign in</button>{error && <p role="alert" className="survey-error">{error}</p>}</form></div></main>;

    return <main className="admin-shell">
        <div className="admin-header">
            <div><span className="section-eyebrow">RBCA survey administration</span><h1>Response dashboard</h1><p>Monitor, inspect, and export every submitted survey response.</p></div>
            <div className="admin-actions"><button className="btn-secondary-outline" onClick={() => void load()} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh'}</button><a className="btn-primary-dark" href="/api/admin/export/csv">Download CSV</a><button className="admin-logout" onClick={() => void logout()}>Sign out</button></div>
        </div>
        <section className="admin-metrics" aria-label="Survey summary">
            <div className="admin-metric"><span>Total responses</span><strong>{responses.length}</strong><small>All submitted records</small></div>
            <div className="admin-metric"><span>Institutions</span><strong>{institutions}</strong><small>Distinct organisations</small></div>
            <div className="admin-metric"><span>Countries</span><strong>{countries.length}</strong><small>Represented in responses</small></div>
            <div className="admin-metric"><span>Latest submission</span><strong>{latest ? new Date(latest).toLocaleDateString() : '—'}</strong><small>{latest ? new Date(latest).toLocaleTimeString() : 'No submissions yet'}</small></div>
        </section>
        <section className="admin-survey-manager">
            <div className="admin-section-heading"><div><span className="section-eyebrow">Survey builder</span><h2>Create and manage surveys</h2></div><span className="admin-result-count">{surveys.length} configured</span></div>
            <form className="admin-survey-form" onSubmit={createSurvey}><label className="form-field"><span>Title</span><input value={surveyTitle} onChange={(event) => setSurveyTitle(event.target.value)} placeholder="Molecular characterisation survey" required /></label><label className="form-field"><span>Slug</span><input value={surveySlug} onChange={(event) => setSurveySlug(event.target.value)} placeholder="molecular-characterisation" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" required /></label><label className="form-field"><span>Description</span><input value={surveyDescription} onChange={(event) => setSurveyDescription(event.target.value)} placeholder="Short description for respondents" /></label><button className="btn-primary-dark" type="submit">Create draft</button></form>
            {surveyError && <p role="alert" className="survey-error">{surveyError}</p>}
            <div className="admin-survey-list">{surveys.map((survey) => <article className="admin-survey-item" key={survey.id}><div><strong>{survey.title}</strong><small>/{survey.slug} · Updated {new Date(survey.updated_at).toLocaleDateString()}</small>{survey.description && <p>{survey.description}</p>}</div><div className="admin-survey-actions"><select value={survey.status} onChange={(event) => void updateSurveyStatus(survey, event.target.value as Survey['status'])} aria-label={`Status for ${survey.title}`}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select><button className="admin-close" onClick={() => void deleteSurvey(survey)} aria-label={`Delete ${survey.title}`}>×</button></div></article>)}</div>
        </section>
        <div className="admin-toolbar"><label className="admin-search"><span>Search responses</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, email, institution…" /></label><label className="admin-filter"><span>Country</span><select value={country} onChange={(event) => setCountry(event.target.value)}><option value="">All countries</option>{countries.map((item) => <option key={item}>{item}</option>)}</select></label><span className="admin-result-count">Showing {filtered.length} of {responses.length}</span></div>
        <div className="admin-workspace">
            <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Submitted</th><th>Respondent</th><th>Institution</th><th>Country</th><th>Email</th></tr></thead><tbody>{filtered.map((response) => <tr className={selected?.id === response.id ? 'is-selected' : ''} key={response.response_uuid} onClick={() => setSelected(response)}><td>{new Date(response.submitted_at).toLocaleDateString()}</td><td><strong>{response.respondent_name || 'Anonymous'}</strong><small>{response.position || 'No position provided'}</small></td><td>{response.institution || '—'}</td><td>{response.country || '—'}</td><td>{response.email}</td></tr>)}</tbody></table>{filtered.length === 0 && <p className="admin-empty">No responses match the current filters.</p>}</div>
            <aside className="admin-detail">{selected ? <><div className="admin-detail-header"><div><span className="section-eyebrow">Response detail</span><h2>{selected.respondent_name || 'Anonymous respondent'}</h2><p>{selected.email}</p></div><button className="admin-close" onClick={() => setSelected(null)} aria-label="Close response details">×</button></div><dl className="admin-meta"><div><dt>Institution</dt><dd>{selected.institution || 'Not provided'}</dd></div><div><dt>Country</dt><dd>{selected.country || 'Not provided'}</dd></div><div><dt>Submitted</dt><dd>{new Date(selected.submitted_at).toLocaleString()}</dd></div></dl><h3>All answers</h3><pre>{JSON.stringify(selected.answers, null, 2)}</pre></> : <div className="admin-detail-empty"><span className="section-eyebrow">Response detail</span><h2>Select a response</h2><p>Choose a row to inspect the complete structured answer set.</p></div>}</aside>
        </div>
    </main>;
}
