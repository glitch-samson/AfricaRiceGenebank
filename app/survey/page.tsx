'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import { allSurveyQuestions, surveySections, SurveyQuestion } from '@/lib/survey';

type Answers = Record<string, string | string[] | Record<string, string>>;

type SurveyType = 'molecular' | 'feedback' | 'nars';
type PublishedSurvey = { id: number; slug: string; title: string; description: string | null; questions: SurveyQuestion[] };
const supportedQuestionTypes = new Set(['text', 'email', 'textarea', 'select', 'multi', 'matrix', 'rank']);

function normalizePublishedSurveys(value: unknown): PublishedSurvey[] {
    if (!Array.isArray(value)) return [];
    return value.flatMap((survey) => {
        if (!survey || typeof survey !== 'object') return [];
        const item = survey as { id?: number; slug?: string; title?: string; description?: string | null; questions?: unknown };
        if (typeof item.id !== 'number' || !item.slug || !item.title) return [];
        const questions = Array.isArray(item.questions) ? item.questions.flatMap((question, index) => {
            if (!question || typeof question !== 'object') return [];
            const itemQuestion = question as Partial<SurveyQuestion>;
            if (!itemQuestion.id || !itemQuestion.label) return [];
            const isEmailQuestion = itemQuestion.type === 'email' || /email/i.test(`${itemQuestion.id} ${itemQuestion.label}`);
            return [{ id: itemQuestion.id, number: itemQuestion.number || `Q${index + 1}`, label: itemQuestion.label, type: isEmailQuestion ? 'email' : supportedQuestionTypes.has(itemQuestion.type || '') ? itemQuestion.type : 'text', options: Array.isArray(itemQuestion.options) ? itemQuestion.options.filter((option): option is string => typeof option === 'string') : [], required: itemQuestion.required === true }];
        }) : [];
        return [{ id: item.id, slug: item.slug, title: item.title, description: item.description || null, questions }];
    });
}

const surveyCatalog: Array<{ type: SurveyType; eyebrow: string; title: string; description: string; time: string; questions: string; accent: string }> = [
    { type: 'molecular', eyebrow: 'CGIAR Genebank Accelerator', title: 'Molecular Characterisation', description: 'Map your genebank capacity, sequencing experience, infrastructure, data practice, and appetite for collaborative DSI generation.', time: '15–20 min', questions: '54 questions', accent: 'gold' },
    { type: 'feedback', eyebrow: 'AfricaRice Genebank', title: 'Genebank User Feedback', description: 'Tell us how AfricaRice germplasm supports your work, from material requests and useful traits to seed quality and service delivery.', time: '5–7 min', questions: '11 questions', accent: 'green' },
    { type: 'nars', eyebrow: 'NARS Partners', title: 'Rice Genetic Resources Evaluation', description: 'Share the stress traits, facilities, hotspot locations, and conservation priorities that could shape future collaboration with AfricaRice.', time: '3–5 min', questions: '9 questions', accent: 'blue' },
];

const shortSurveyQuestions: Record<'feedback' | 'nars', SurveyQuestion[]> = {
    feedback: [
        { id: 'q1_email', number: 'Q1', label: 'Please enter your e-mail address.', type: 'email' },
        { id: 'q2_institution', number: 'Q2', label: 'Please enter your institution.', type: 'text' },
        { id: 'q3_group', number: 'Q3', label: 'Which group best classifies your institution?', type: 'select', options: ['CGIAR Center', 'NARS', 'University', 'Individual', 'Famer'] },
        { id: 'q4_requested', number: 'Q4', label: 'Have you requested germplasm from AfricaRice Genebank at least once?', type: 'select', options: ['Yes', 'No'] },
        { id: 'q5_traits', number: 'Q5', label: 'Which traits inform your decision to use AfricaRice germplasm?', type: 'multi', options: ['Drought Resistance', 'Heat Resistance', 'Flooding Resistance', 'Salinity', 'Insect Resistance', 'Pests Resistance', 'Diseases', 'Yield', 'Quality/nutrition'] },
        { id: 'q6_results', number: 'Q6', label: 'What results have you received from AfricaRice germplasm?', type: 'multi', options: ['Still being evaluated', 'Scientific publication', 'Characterization and evaluation data', 'Identification of traits', 'Genes/markers generated', 'Expanded germplasm options', 'Advanced breeding lines', 'Improved variety or new cultivar', 'Digital sequence information generated', 'Direct planting material'] },
        { id: 'q7_future_traits', number: 'Q7', label: 'What traits would inform your future requests?', type: 'multi', options: ['Drought resistance', 'Nutrition/quality enhancing', 'Resistance to other diseases', 'Yield enhancing', 'Salinity tolerance', 'Resistance to insect pests', 'Heat tolerance', 'Tolerance to waterlogging', 'Resistance to other pests', 'Other traits (specify)'] },
        { id: 'q8_usage', number: 'Q8', label: 'What percentage of AfricaRice accessions are used in your research and non-research activities?', type: 'text' },
        { id: 'q9_seed_quality', number: 'Q9', label: 'How would you rate the quality of seeds received?', type: 'select', options: ['High', 'Average', 'Poor'] },
        { id: 'q10_service', number: 'Q10', label: 'How would you rate germplasm service delivery?', type: 'select', options: ['High', 'Average', 'Poor'] },
        { id: 'q11_comments', number: 'Q11', label: 'How could AfricaRice improve germplasm distribution services?', type: 'textarea' },
    ],
    nars: [
        { id: 'q1_name', number: 'Q1', label: 'Nom et Prénoms (Full Name)', type: 'text' },
        { id: 'q2_institution', number: 'Q2', label: 'Institution de Provenance (Affiliated Institution)', type: 'text' },
        { id: 'q3_email', number: 'Q3', label: 'Adresse Email (Email Address)', type: 'email' },
        { id: 'q4_contact', number: 'Q4', label: 'Contact WhatsApp (Phone Number with WhatsApp Access)', type: 'text' },
        { id: 'q5_traits', number: 'Q5', label: 'Which stress traits are you most interested in screening for?', type: 'multi', options: ['Drought tolerance', 'Salinity tolerance', 'Heat tolerance', 'Iron toxicity', 'Anaerobic germination', 'Flood tolerance', 'Disease resistance', 'Pest resistance (AfRGM)', 'Nutrient-use efficiency', 'Others (please specify)'] },
        { id: 'q6_facilities', number: 'Q6', label: 'What facilities are available in your country or institution?', type: 'multi', options: ['Laboratory', 'Field testing stations', 'Greenhouse', 'Controlled environment chambers', 'Others (please specify)'] },
        { id: 'q7_hotspot', number: 'Q7', label: 'Do you have access to hotspot locations for screening the selected traits?', type: 'select', options: ['Yes', 'No'] },
        { id: 'q8_location', number: 'Q8', label: 'Please provide the location details (department, region, or village).', type: 'textarea' },
        { id: 'q9_conservation', number: 'Q9', label: 'Are valuable rice genetic resources in your country endangered and in need of conservation or collection?', type: 'select', options: ['Yes', 'No'] },
    ],
};

function QuestionField({ question, answers, setAnswers }: { question: SurveyQuestion; answers: Answers; setAnswers: (id: string, value: Answers[string]) => void }) {
    const value = answers[question.id] ?? (question.type === 'multi' ? [] : question.type === 'matrix' || question.type === 'rank' ? {} : '');
    const updateMulti = (option: string, checked: boolean) => {
        const selected = Array.isArray(value) ? value : [];
        setAnswers(question.id, checked ? [...selected, option] : selected.filter((item) => item !== option));
    };

    if (question.type === 'multi') return <fieldset className="survey-options"><legend>{question.label}</legend>{question.options?.map((option) => <label className="survey-option" key={option}><input type="checkbox" checked={Array.isArray(value) && value.includes(option)} onChange={(event) => updateMulti(option, event.target.checked)} /> <span>{option}</span></label>)}</fieldset>;
    if (question.type === 'matrix' || question.type === 'rank') {
        const matrix = typeof value === 'object' && !Array.isArray(value) ? value : {};
        return <fieldset className="survey-matrix"><legend>{question.label}{question.required ? ' *' : ''}</legend>{question.options?.map((row) => <label className="survey-matrix-row" key={row}><span>{row}</span><select required={question.required} value={matrix[row] ?? ''} onChange={(event) => setAnswers(question.id, { ...matrix, [row]: event.target.value })}><option value="">Select</option>{(question.type === 'rank' ? ['1', '2', '3'] : ['1', '2', '3', '4', '5']).map((option) => <option key={option} value={option}>{option}</option>)}</select></label>)}</fieldset>;
    }
    if (question.type === 'select') return <label className="form-field"><span>{question.number}: {question.label}{question.required ? ' *' : ''}</span><select required={question.required} value={String(value)} onChange={(event) => setAnswers(question.id, event.target.value)}><option value="">Select an answer</option>{question.options?.map((option) => <option key={option}>{option}</option>)}</select></label>;
    return <label className="form-field"><span>{question.number}: {question.label}{question.required ? ' *' : ''}</span>{question.type === 'textarea' ? <textarea required={question.required} rows={4} value={String(value)} onChange={(event) => setAnswers(question.id, event.target.value)} /> : <input type={question.type === 'email' ? 'email' : 'text'} required={question.required || question.type === 'email'} value={String(value)} onChange={(event) => setAnswers(question.id, event.target.value)} />}</label>;
}

function ShortSurvey({ type, onBack }: { type: 'feedback' | 'nars'; onBack: () => void }) {
    const [answers, setAnswersState] = useState<Answers>({});
    const [submitted, setSubmitted] = useState(false);
    const questions = shortSurveyQuestions[type];
    const setAnswer = (id: string, value: Answers[string]) => setAnswersState((current) => ({ ...current, [id]: value }));
    const submit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await fetch('/api/survey/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ surveyType: type, answers }) });
        if (response.ok) setSubmitted(true);
    };
    if (submitted) return <div className="survey-container-box survey-complete"><span className="survey-complete-mark">✓</span><h2>Thank you for sharing your experience.</h2><p>Your response will help AfricaRice improve how it conserves, evaluates, and shares rice genetic resources.</p><button className="btn-primary-dark" onClick={onBack}>Explore another survey</button></div>;
    const catalog = surveyCatalog.find((item) => item.type === type)!;
    return <div className="survey-container-box"><button className="survey-back-link" onClick={onBack}>← All surveys</button><div className="survey-form-heading"><span className={`survey-icon ${catalog.accent}`}>{type === 'feedback' ? '↗' : '⌁'}</span><div><span className="section-eyebrow">{catalog.eyebrow}</span><h2>{catalog.title}</h2><p>{catalog.time} · {catalog.questions}</p></div></div><form onSubmit={submit} className="survey-form-inner short-survey-form">{questions.map((question) => <QuestionField key={question.id} question={question} answers={answers} setAnswers={setAnswer} />)}<div className="survey-btn-row flex-between"><button type="button" className="btn-secondary-outline" onClick={onBack}>Back</button><button type="submit" className="btn-primary-dark">Submit response ↗</button></div></form></div>;
}

function DynamicSurvey({ survey, onBack }: { survey: PublishedSurvey; onBack: () => void }) {
    const [answers, setAnswersState] = useState<Answers>({});
    const [respondentEmail, setRespondentEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const hasEmailQuestion = survey.questions.some((question) => question.type === 'email' || /email/i.test(`${question.id} ${question.label}`));
    const setAnswer = (id: string, value: Answers[string]) => setAnswersState((current) => ({ ...current, [id]: value }));
    const submit = async (event: FormEvent) => {
        event.preventDefault();
        setError(false);
        const emailQuestion = survey.questions.find((question) => question.type === 'email' || /email/i.test(`${question.id} ${question.label}`));
        const answerEmail = emailQuestion ? String(answers[emailQuestion.id] ?? '').trim() : '';
        const missingRequired = survey.questions.some((question) => {
            if (!question.required) return false;
            const value = answers[question.id];
            return value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0);
        });
        if (missingRequired) {
            setError(true);
            return;
        }
        const response = await fetch('/api/survey/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ surveySlug: survey.slug, respondentEmail: respondentEmail.trim() || answerEmail, answers }) });
        if (response.ok) setSubmitted(true);
        else setError(true);
    };
    if (submitted) return <div className="survey-container-box survey-complete"><span className="survey-complete-mark">✓</span><h2>Thank you for sharing your response.</h2><p>Your answers have been recorded and will help guide AfricaRice Genebank work.</p><button className="btn-primary-dark" onClick={onBack}>Explore another survey</button></div>;
    if (survey.questions.length === 0) return <div className="survey-container-box"><button className="survey-back-link" onClick={onBack}>← All surveys</button><h2>{survey.title}</h2><p>This survey is published but has no questions yet. Please check back soon.</p></div>;
    return <div className="survey-container-box"><button className="survey-back-link" onClick={onBack}>← All surveys</button><div className="survey-form-heading"><span className="survey-icon blue">⌁</span><div><span className="section-eyebrow">AfricaRice Genebank</span><h2>{survey.title}</h2><p>{survey.questions.length} questions</p></div></div><form onSubmit={submit} className="survey-form-inner short-survey-form">{!hasEmailQuestion && <label className="form-field"><span>Email address</span><input type="email" required value={respondentEmail} onChange={(event) => setRespondentEmail(event.target.value)} /></label>}{survey.questions.map((question) => <QuestionField key={question.id} question={question} answers={answers} setAnswers={setAnswer} />)}<div className="survey-btn-row flex-between"><button type="button" className="btn-secondary-outline" onClick={onBack}>Back</button><button type="submit" className="btn-primary-dark">Submit response ↗</button></div>{error && <p role="alert" className="survey-error">We could not save your response. Please check the required email field and try again.</p>}</form></div>;
}

export default function SurveyPage() {
    const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);
    const [publishedSurveys, setPublishedSurveys] = useState<PublishedSurvey[]>([]);
    const [section, setSection] = useState(0);
    const [answers, setAnswersState] = useState<Answers>({});
    const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    useEffect(() => {
        fetch('/api/surveys', { cache: 'no-store' }).then((response) => response.ok ? response.json() : { surveys: [] }).then((result) => setPublishedSurveys(normalizePublishedSurveys(result.surveys))).catch(() => setPublishedSurveys([]));
    }, []);
    const current = surveySections[section];
    const visibleQuestions = useMemo(() => current.questions.filter((question) => {
        if (!question.conditional) return true;
        if (question.conditional.includes('Q10a')) return answers.q10a_involved === 'Yes';
        if (question.conditional.includes('Q14')) return answers.q14_wgs === 'Yes, for a plant genome';
        if (question.conditional.includes('Q20')) return answers.q20_ploidy_knowledge === 'Yes, for some crops';
        if (question.conditional.includes('Q29a')) return answers.q29a_computing !== 'No, we rely on external collaborators';
        if (question.conditional.includes('Q36a')) return answers.q36a_collaborate === 'Yes';
        if (question.conditional.includes('Q36c')) return answers.q36c_broader === 'Yes';
        if (question.conditional.includes('Q41')) return answers.q41_law === 'Yes, existing law / regulation';
        if (question.conditional.includes('Q42')) return answers.q42_policy === 'Yes' || answers.q42_policy === 'Under development';
        if (question.conditional.includes('Q43')) return answers.q43_uncertainty === 'Yes, considerable uncertainty';
        if (question.conditional.includes('Q44')) return answers.q44_partnership === 'Yes';
        if (question.conditional.includes('Q47')) return question.conditional.includes('not Not interested') ? answers.q47_interest !== 'Not interested' : answers.q47_interest === 'Not interested';
        return true;
    }), [answers, current]);

    const setAnswer = (id: string, value: Answers[string]) => setAnswersState((currentAnswers) => ({ ...currentAnswers, [id]: value }));
    const submit = async (event: FormEvent) => {
        event.preventDefault();
        if (section < surveySections.length - 1) return setSection(section + 1);
        setStatus('saving');
        const response = await fetch('/api/survey/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ surveyType: 'molecular', answers }) });
        setStatus(response.ok ? 'success' : 'error');
    };

    if (!selectedSurvey) return <div className="world-page-container"><div className="section-shell"><Breadcrumbs items={[{ label: 'Survey Hub' }]} /></div><section className="survey-hub-hero"><div className="section-shell"><span className="section-eyebrow">AfricaRice Genebank · Have your say</span><h1>Choose the survey that fits <em>your work.</em></h1><p>Every response helps us make rice diversity more useful, more accessible, and better protected for the next generation.</p><div className="survey-hub-signals"><span><strong>{surveyCatalog.length + publishedSurveys.length}</strong> survey paths</span><span><strong>1</strong> shared purpose</span><span><strong>100%</strong> practical impact</span></div></div></section><section className="reading-content-section"><div className="section-shell"><div className="survey-catalog">{surveyCatalog.map((survey, index) => <button className={`survey-choice-card ${survey.accent}`} key={survey.type} onClick={() => { setSelectedSurvey(survey.type); setSection(0); }}><span className="survey-card-number">0{index + 1}</span><span className={`survey-icon ${survey.accent}`}>{survey.type === 'molecular' ? '⌬' : survey.type === 'feedback' ? '↗' : '⌁'}</span><span className="section-eyebrow">{survey.eyebrow}</span><h2>{survey.title}</h2><p>{survey.description}</p><span className="survey-card-meta"><b>{survey.time}</b><span>{survey.questions}</span><strong>Start survey →</strong></span></button>)}{publishedSurveys.filter((survey) => !surveyCatalog.some((item) => item.type === survey.slug)).map((survey, index) => <button className="survey-choice-card blue" key={survey.slug} onClick={() => { setSelectedSurvey(survey.slug); setSection(0); }}><span className="survey-card-number">0{surveyCatalog.length + index + 1}</span><span className="survey-icon blue">⌁</span><span className="section-eyebrow">AfricaRice Genebank</span><h2>{survey.title}</h2><p>{survey.description || 'Share your experience and help shape future genebank work.'}</p><span className="survey-card-meta"><b>Online survey</b><span>{survey.questions.length} questions</span><strong>Start survey →</strong></span></button>)}</div><div className="survey-hub-note"><span>Not sure where to begin?</span> Choose Molecular Characterisation if you manage or support a genebank; choose User Feedback if you have requested AfricaRice germplasm; choose NARS Evaluation if you are exploring stress screening or conservation partnerships.</div></div></section></div>;

    const dynamicSurvey = publishedSurveys.find((survey) => survey.slug === selectedSurvey);
    if (dynamicSurvey) return <div className="world-page-container"><div className="section-shell"><Breadcrumbs items={[{ label: 'Survey Hub' }, { label: dynamicSurvey.title }]} /></div><section className="reading-content-section survey-flow-section"><div className="section-shell"><DynamicSurvey survey={dynamicSurvey} onBack={() => setSelectedSurvey(null)} /></div></section></div>;

    if (selectedSurvey !== 'molecular') return <div className="world-page-container"><div className="section-shell"><Breadcrumbs items={[{ label: 'Survey Hub' }, { label: surveyCatalog.find((survey) => survey.type === selectedSurvey)?.title || '' }]} /></div><section className="reading-content-section survey-flow-section"><div className="section-shell"><ShortSurvey type={selectedSurvey as 'feedback' | 'nars'} onBack={() => setSelectedSurvey(null)} /></div></section></div>;

    if (status === 'success') return <div className="world-page-container"><section className="reading-content-section"><div className="section-shell"><div className="survey-container-box form-success-banner"><div className="success-icon">✓</div><h1>Thank you for contributing.</h1><p>Your molecular characterisation survey response has been recorded.</p><button className="btn-primary-dark" onClick={() => { setAnswersState({}); setSection(0); setStatus('idle'); }}>Submit another response</button></div></div></section></div>;

    return <div className="world-page-container"><div className="section-shell"><Breadcrumbs items={[{ label: 'Molecular Characterisation Survey' }]} /></div><section className="world-page-hero"><div className="section-shell"><div className="page-hero-grid"><div className="page-hero-text"><div className="hero-badge-row"><DataBadge variant="gold">CGIAR Genebank Accelerator</DataBadge><DataBadge variant="emerald">AoW5</DataBadge></div><h1 className="world-page-title">Molecular Characterisation <em>Survey</em></h1><p className="world-page-lead">Survey of National Genebank Managers: strengthening NARS partner capacity for integrated in-situ and ex-situ conservation.</p></div><div className="page-hero-media"><img src="/files/cgiarsurvey/images/overview.jpg" alt="Rice genetic resources in a genebank" className="hero-rounded-image" /></div></div></div></section><section className="reading-content-section" id="survey-start"><div className="section-shell"><div className="survey-container-box"><div className="survey-progress-header"><strong>Section {section + 1} of {surveySections.length}</strong><span>{allSurveyQuestions.length} questions</span></div><h2>{current.title}</h2><p className="survey-note">Fields marked with a question number are saved as structured answers. Conditional questions appear when relevant.</p><form onSubmit={submit} className="survey-form-inner">{visibleQuestions.map((question) => <QuestionField key={question.id} question={question} answers={answers} setAnswers={setAnswer} />)}<div className="survey-btn-row flex-between">{section > 0 && <button type="button" className="btn-secondary-outline" onClick={() => setSection(section - 1)}>← Previous</button>}<button type="submit" className="btn-primary-dark">{section === surveySections.length - 1 ? (status === 'saving' ? 'Submitting…' : 'Submit survey') : 'Continue →'}</button></div>{status === 'error' && <p role="alert" className="survey-error">We could not save your response. Please try again.</p>}</form></div></div></section></div>;
}
