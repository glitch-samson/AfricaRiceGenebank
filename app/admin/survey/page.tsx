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
    survey_slug?: string | null;
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

type QuestionKind = 'text' | 'email' | 'textarea' | 'select' | 'multi' | 'matrix' | 'rank';
type ManagedQuestion = { id: string; number: string; label: string; type: QuestionKind; options?: string[]; required?: boolean };

const questionKinds: Array<{ value: QuestionKind; label: string }> = [
    { value: 'text', label: 'Short text' },
    { value: 'textarea', label: 'Long text' },
    { value: 'email', label: 'Email' },
    { value: 'select', label: 'Single choice' },
    { value: 'multi', label: 'Multiple choice' },
    { value: 'matrix', label: 'Rating matrix' },
    { value: 'rank', label: 'Ranking' },
];

function normalizeQuestions(questions: unknown[]) {
    return questions.flatMap((question, index) => {
        if (!question || typeof question !== 'object') return [];
        const item = question as Partial<ManagedQuestion>;
        if (!item.id || !item.label) return [];
        const type = questionKinds.some((kind) => kind.value === item.type) ? item.type! : 'text';
        return [{ id: item.id, number: item.number || `Q${index + 1}`, label: item.label, type, options: Array.isArray(item.options) ? item.options.filter((option): option is string => typeof option === 'string') : [], required: Boolean(item.required) }];
    });
}

function QuestionBuilder({ questions, onChange }: { questions: ManagedQuestion[]; onChange: (questions: ManagedQuestion[]) => void }) {
    const [number, setNumber] = useState('');
    const [label, setLabel] = useState('');
    const [type, setType] = useState<QuestionKind>('text');
    const [options, setOptions] = useState('');
    const [required, setRequired] = useState(false);
    const needsOptions = type === 'select' || type === 'multi' || type === 'matrix' || type === 'rank';
    const addQuestion = () => {
        if (!label.trim()) return;
        onChange([...questions, { id: `question_${Date.now()}`, number: number.trim() || `Q${questions.length + 1}`, label: label.trim(), type, options: needsOptions ? options.split('\n').map((option) => option.trim()).filter(Boolean) : [], required }]);
        setNumber('');
        setLabel('');
        setType('text');
        setOptions('');
        setRequired(false);
    };
    const updateQuestion = (id: string, changes: Partial<ManagedQuestion>) => onChange(questions.map((question) => question.id === id ? { ...question, ...changes } : question));
    return <div className="admin-question-builder"><div className="admin-question-builder-heading"><div><span className="section-eyebrow">Question builder</span><h3>{questions.length} question{questions.length === 1 ? '' : 's'}</h3></div></div><div className="admin-question-list">{questions.map((question, index) => <article className="admin-question-item" key={question.id}><span className="admin-question-index">{index + 1}</span><div className="admin-question-fields"><div className="admin-question-row"><input value={question.number} onChange={(event) => updateQuestion(question.id, { number: event.target.value })} aria-label={`Question ${index + 1} number`} placeholder="Q1" /><input className="admin-question-label" value={question.label} onChange={(event) => updateQuestion(question.id, { label: event.target.value })} aria-label={`Question ${index + 1} label`} placeholder="Question text" /><select value={question.type} onChange={(event) => updateQuestion(question.id, { type: event.target.value as QuestionKind })} aria-label={`Question ${index + 1} type`}>{questionKinds.map((kind) => <option value={kind.value} key={kind.value}>{kind.label}</option>)}</select><button type="button" className="admin-question-remove" onClick={() => onChange(questions.filter((item) => item.id !== question.id))}>Remove</button></div>{question.options && question.options.length > 0 && <small className="admin-question-options">Options: {question.options.join(' · ')}</small>}</div></article>)}</div><div className="admin-question-add"><div className="admin-question-row"><input value={number} onChange={(event) => setNumber(event.target.value)} aria-label="New question number" placeholder={`Q${questions.length + 1}`} /><input className="admin-question-label" value={label} onChange={(event) => setLabel(event.target.value)} aria-label="New question label" placeholder="Enter question text" /><select value={type} onChange={(event) => setType(event.target.value as QuestionKind)} aria-label="New question type">{questionKinds.map((kind) => <option value={kind.value} key={kind.value}>{kind.label}</option>)}</select><button type="button" className="btn-secondary-outline" onClick={addQuestion}>Add question</button></div>{needsOptions && <label className="form-field admin-question-options-field"><span>Answer options, one per line</span><textarea value={options} onChange={(event) => setOptions(event.target.value)} rows={3} placeholder={'Yes\nNo'} /></label>}<label className="admin-question-required"><input type="checkbox" checked={required} onChange={(event) => setRequired(event.target.checked)} /> Required question</label></div></div>;
}

const builtInSurveys = [
    { slug: 'molecular-characterisation', title: 'Molecular Characterisation' },
    { slug: 'genebank-user-feedback', title: 'Genebank User Feedback' },
    { slug: 'rice-genetic-resources-evaluation', title: 'Rice Genetic Resources Evaluation' },
];

function responseSurveySlug(response: ResponseRow) {
    return response.survey_slug || String(response.answers._survey_type || '');
}

function answerText(value: unknown) {
    if (Array.isArray(value)) return value.join(', ');
    if (value && typeof value === 'object') return JSON.stringify(value);
    return String(value ?? '');
}

function questionLabel(surveys: Survey[], surveySlug: string, questionId: string) {
    const question = surveys.find((survey) => survey.slug === surveySlug)?.questions.find((item) => {
        if (!item || typeof item !== 'object') return false;
        return (item as { id?: string }).id === questionId;
    });
    if (question && typeof question === 'object') {
        const item = question as { number?: string; label?: string };
        return `${item.number ? `${item.number}: ` : ''}${item.label || questionId}`;
    }
    return questionId;
}

function responseMatches(response: ResponseRow, query: string, country: string) {
    const searchable = [response.respondent_name, response.email, response.institution, response.country].join(' ').toLowerCase();
    return searchable.includes(query.toLowerCase()) && (!country || response.country === country);
}

export default function SurveyAdminPage() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authResolved, setAuthResolved] = useState(false);
    const [responses, setResponses] = useState<ResponseRow[]>([]);
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [surveyTitle, setSurveyTitle] = useState('');
    const [surveySlug, setSurveySlug] = useState('');
    const [surveyDescription, setSurveyDescription] = useState('');
    const [createQuestions, setCreateQuestions] = useState<ManagedQuestion[]>([]);
    const [editingSurveyId, setEditingSurveyId] = useState<number | null>(null);
    const [editingQuestions, setEditingQuestions] = useState<ManagedQuestion[]>([]);
    const [surveyModal, setSurveyModal] = useState<'create' | 'edit' | null>(null);
    const [surveyError, setSurveyError] = useState('');
    const [selected, setSelected] = useState<ResponseRow | null>(null);
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState('');
    const [surveyFilter, setSurveyFilter] = useState('');
    const [questionFilter, setQuestionFilter] = useState('');
    const [questionValue, setQuestionValue] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const load = async () => {
        setLoading(true);
        const response = await fetch('/api/admin/responses', { cache: 'no-store' });
        if (!response.ok) {
            setLoggedIn(false);
            setAuthResolved(true);
            setLoading(false);
            return;
        }
        setResponses((await response.json()).responses ?? []);
        const surveyResponse = await fetch('/api/admin/surveys', { cache: 'no-store' });
        if (surveyResponse.ok) setSurveys((await surveyResponse.json()).surveys ?? []);
        setLoggedIn(true);
        setAuthResolved(true);
        setLoading(false);
    };

    useEffect(() => { void load(); }, []);

    const logout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        setLoggedIn(false);
        setResponses([]);
    };

    const createSurvey = async (event: React.FormEvent) => {
        event.preventDefault();
        setSurveyError('');
        const response = await fetch('/api/admin/surveys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: surveyTitle, slug: surveySlug, description: surveyDescription, questions: createQuestions }) });
        const result = await response.json();
        if (!response.ok) return setSurveyError(result.error ?? 'Could not create survey.');
        setSurveys((current) => [result.survey, ...current]);
        setSurveyTitle('');
        setSurveySlug('');
        setSurveyDescription('');
        setCreateQuestions([]);
        setSurveyModal(null);
    };

    const beginQuestionEdit = (survey: Survey) => {
        setEditingSurveyId(survey.id);
        setEditingQuestions(normalizeQuestions(survey.questions));
        setSurveyError('');
        setSurveyModal('edit');
    };

    const saveQuestions = async (survey: Survey) => {
        const response = await fetch(`/api/admin/surveys/${survey.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ questions: editingQuestions }) });
        if (!response.ok) return setSurveyError('Could not save survey questions.');
        const result = await response.json();
        setSurveys((current) => current.map((item) => item.id === survey.id ? result.survey : item));
        setEditingSurveyId(null);
        setEditingQuestions([]);
        setSurveyModal(null);
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
    const surveyChoices = useMemo(() => Array.from(new Map([...builtInSurveys, ...surveys.map((survey) => ({ slug: survey.slug, title: survey.title }))].map((survey) => [survey.slug, survey])).values()), [surveys]);
    const questionOptions = useMemo(() => Array.from(new Set(responses.filter((response) => !surveyFilter || responseSurveySlug(response) === surveyFilter).flatMap((response) => Object.keys(response.answers).filter((key) => key !== '_survey_type')))).sort(), [responses, surveyFilter]);
    const filtered = useMemo(() => responses.filter((response) => {
        const answer = questionFilter ? answerText(response.answers[questionFilter]) : '';
        return responseMatches(response, query, country)
            && (!surveyFilter || responseSurveySlug(response) === surveyFilter)
            && (!questionFilter || (Object.prototype.hasOwnProperty.call(response.answers, questionFilter) && (!questionValue || answer.toLowerCase().includes(questionValue.toLowerCase()))));
    }), [responses, query, country, surveyFilter, questionFilter, questionValue]);
    const institutions = new Set(responses.map((response) => response.institution).filter(Boolean)).size;
    const latest = responses[0]?.submitted_at;
    const exportQuery = new URLSearchParams();
    if (surveyFilter) exportQuery.set('survey', surveyFilter);
    if (questionFilter) exportQuery.set('question', questionFilter);
    if (questionValue) exportQuery.set('value', questionValue);

    if (!authResolved) return <main className="admin-loading" aria-label="Loading admin workspace"><div className="admin-loading-mark">RB</div><span>Checking admin session</span></main>;

    if (!loggedIn) return <main className="admin-shell"><div className="admin-login"><span className="section-eyebrow">RBCA administration</span><h1>Sign in required</h1><p>Open the admin control center first, then enter the survey workspace from there.</p><a className="btn-primary-dark" href="/admin">Go to admin sign in</a></div></main>;

    return <main className="admin-app">
        <aside className="admin-sidebar"><a href="/" className="admin-brand"><span className="admin-brand-mark">RB</span><span><strong>RBCA</strong><small>Control center</small></span></a><nav className="admin-nav" aria-label="Administration"><span className="admin-nav-label">Workspace</span><a href="/admin">Overview</a><a className="is-active" href="/admin/survey">Surveys & responses</a><a className="is-disabled" href="#newsletter">Newsletter <small>soon</small></a><span className="admin-nav-label">Manage</span><a className="is-disabled" href="#content">Site content <small>planned</small></a><a className="is-disabled" href="#users">People & access <small>planned</small></a><a className="is-disabled" href="#settings">Settings <small>planned</small></a></nav><div className="admin-sidebar-footer"><a href="/">View public site ↗</a><button onClick={() => void logout()}>Sign out</button></div></aside>
        <section className="admin-main">
        <div className="admin-header">
            <div><span className="section-eyebrow">RBCA survey administration</span><h1>Response dashboard</h1><p>Monitor, inspect, and export every submitted survey response.</p></div>
            <div className="admin-actions"><button className="btn-secondary-outline" onClick={() => void load()} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh'}</button><a className="btn-primary-dark" href={`/api/admin/export/csv${exportQuery.toString() ? `?${exportQuery}` : ''}`}>Download Excel CSV</a><button className="admin-logout" onClick={() => void logout()}>Sign out</button></div>
        </div>
        <section className="admin-metrics" aria-label="Survey summary">
            <div className="admin-metric"><span>Total responses</span><strong>{responses.length}</strong><small>All submitted records</small></div>
            <div className="admin-metric"><span>Institutions</span><strong>{institutions}</strong><small>Distinct organisations</small></div>
            <div className="admin-metric"><span>Countries</span><strong>{countries.length}</strong><small>Represented in responses</small></div>
            <div className="admin-metric"><span>Latest submission</span><strong>{latest ? new Date(latest).toLocaleDateString() : '—'}</strong><small>{latest ? new Date(latest).toLocaleTimeString() : 'No submissions yet'}</small></div>
        </section>
        <section className="admin-survey-manager">
            <div className="admin-section-heading"><div><span className="section-eyebrow">Survey builder</span><h2>Create and manage surveys</h2></div><div className="admin-section-actions"><span className="admin-result-count">{surveys.length} configured</span><button className="btn-primary-dark" type="button" onClick={() => { setSurveyTitle(''); setSurveySlug(''); setSurveyDescription(''); setCreateQuestions([]); setSurveyError(''); setSurveyModal('create'); }}>New survey</button></div></div>
            {surveyError && <p role="alert" className="survey-error">{surveyError}</p>}
            <div className="admin-survey-list">{surveys.map((survey) => <article className="admin-survey-item" key={survey.id}><div className="admin-survey-summary"><strong>{survey.title}</strong><small>/{survey.slug} · Updated {new Date(survey.updated_at).toLocaleDateString()}</small>{survey.description && <p>{survey.description}</p>}<span className="admin-question-count">{survey.questions.length} question{survey.questions.length === 1 ? '' : 's'}</span></div><div className="admin-survey-actions"><select value={survey.status} onChange={(event) => void updateSurveyStatus(survey, event.target.value as Survey['status'])} aria-label={`Status for ${survey.title}`}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select><button type="button" className="btn-secondary-outline" onClick={() => beginQuestionEdit(survey)}>Edit questions</button><button type="button" className="admin-close" onClick={() => void deleteSurvey(survey)} aria-label={`Delete ${survey.title}`}>×</button></div></article>)}</div>
        </section>
        <div className="admin-toolbar"><label className="admin-search"><span>Search respondents</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, email, institution…" /></label><label className="admin-filter"><span>Survey</span><select value={surveyFilter} onChange={(event) => { setSurveyFilter(event.target.value); setQuestionFilter(''); }}><option value="">All surveys</option>{surveyChoices.map((survey) => <option value={survey.slug} key={survey.slug}>{survey.title}</option>)}</select></label><label className="admin-filter"><span>Question answered</span><select value={questionFilter} onChange={(event) => setQuestionFilter(event.target.value)}><option value="">Any question</option>{questionOptions.map((key) => <option value={key} key={key}>{questionLabel(surveys, surveyFilter, key)}</option>)}</select></label><label className="admin-search admin-question-search"><span>Answer contains</span><input value={questionValue} onChange={(event) => setQuestionValue(event.target.value)} placeholder="Optional answer text" disabled={!questionFilter} /></label><label className="admin-filter"><span>Country</span><select value={country} onChange={(event) => setCountry(event.target.value)}><option value="">All countries</option>{countries.map((item) => <option key={item}>{item}</option>)}</select></label><span className="admin-result-count">Showing {filtered.length} of {responses.length}</span></div>
        <div className="admin-workspace">
            <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Submitted</th><th>Survey</th><th>Respondent</th><th>Institution</th><th>Country</th><th>Email</th>{questionFilter && <th>Selected answer</th>}</tr></thead><tbody>{filtered.map((response) => <tr className={selected?.id === response.id ? 'is-selected' : ''} key={response.response_uuid} onClick={() => setSelected(response)}><td>{new Date(response.submitted_at).toLocaleDateString()}</td><td>{surveyChoices.find((survey) => survey.slug === responseSurveySlug(response))?.title || responseSurveySlug(response) || 'Unassigned'}</td><td><strong>{response.respondent_name || 'Anonymous'}</strong><small>{response.position || 'No position provided'}</small></td><td>{response.institution || '—'}</td><td>{response.country || '—'}</td><td>{response.email}</td>{questionFilter && <td>{answerText(response.answers[questionFilter]) || '—'}</td>}</tr>)}</tbody></table>{filtered.length === 0 && <p className="admin-empty">No responses match the current filters.</p>}</div>
            <aside className="admin-detail">{selected ? <><div className="admin-detail-header"><div><span className="section-eyebrow">Response detail</span><h2>{selected.respondent_name || 'Anonymous respondent'}</h2><p>{selected.email}</p></div><button className="admin-close" onClick={() => setSelected(null)} aria-label="Close response details">×</button></div><dl className="admin-meta"><div><dt>Institution</dt><dd>{selected.institution || 'Not provided'}</dd></div><div><dt>Country</dt><dd>{selected.country || 'Not provided'}</dd></div><div><dt>Submitted</dt><dd>{new Date(selected.submitted_at).toLocaleString()}</dd></div></dl><h3>All answers</h3><pre>{JSON.stringify(selected.answers, null, 2)}</pre></> : <div className="admin-detail-empty"><span className="section-eyebrow">Response detail</span><h2>Select a response</h2><p>Choose a row to inspect the complete structured answer set.</p></div>}</aside>
        </div>
        {surveyModal === 'create' && <div className="admin-modal-overlay" role="presentation" onMouseDown={() => setSurveyModal(null)}><div className="admin-modal" role="dialog" aria-modal="true" aria-labelledby="create-survey-title" onMouseDown={(event) => event.stopPropagation()}><div className="admin-modal-header"><div><span className="section-eyebrow">Survey builder</span><h2 id="create-survey-title">Create a new survey</h2><p>Set the survey details and add its questions before publishing.</p></div><button type="button" className="admin-close" onClick={() => setSurveyModal(null)} aria-label="Close create survey dialog">×</button></div><form className="admin-survey-modal-form" onSubmit={createSurvey}><label className="form-field"><span>Title</span><input value={surveyTitle} onChange={(event) => setSurveyTitle(event.target.value)} placeholder="Molecular characterisation survey" required /></label><label className="form-field"><span>Slug</span><input value={surveySlug} onChange={(event) => setSurveySlug(event.target.value)} placeholder="molecular-characterisation" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" required /></label><label className="form-field"><span>Description</span><textarea value={surveyDescription} onChange={(event) => setSurveyDescription(event.target.value)} placeholder="Short description for respondents" rows={3} /></label><QuestionBuilder questions={createQuestions} onChange={setCreateQuestions} /><div className="admin-editor-actions"><button type="button" className="btn-secondary-outline" onClick={() => setSurveyModal(null)}>Cancel</button><button className="btn-primary-dark" type="submit">Create draft</button></div></form></div></div>}
        {surveyModal === 'edit' && editingSurveyId !== null && <div className="admin-modal-overlay" role="presentation" onMouseDown={() => setSurveyModal(null)}><div className="admin-modal" role="dialog" aria-modal="true" aria-labelledby="edit-survey-title" onMouseDown={(event) => event.stopPropagation()}><div className="admin-modal-header"><div><span className="section-eyebrow">Question manager</span><h2 id="edit-survey-title">Edit survey questions</h2><p>{surveys.find((survey) => survey.id === editingSurveyId)?.title}</p></div><button type="button" className="admin-close" onClick={() => setSurveyModal(null)} aria-label="Close edit survey dialog">×</button></div><QuestionBuilder questions={editingQuestions} onChange={setEditingQuestions} /><div className="admin-editor-actions"><button type="button" className="btn-secondary-outline" onClick={() => setSurveyModal(null)}>Cancel</button><button type="button" className="btn-primary-dark" onClick={() => { const survey = surveys.find((item) => item.id === editingSurveyId); if (survey) void saveQuestions(survey); }}>Save questions</button></div></div></div>}
        </section>
    </main>;
}
