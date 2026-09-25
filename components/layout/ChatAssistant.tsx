'use client';

import { FormEvent, useState } from 'react';

type ChatLink = { label: string; href: string };
type CatalogueResult = { accession: string; name: string; taxon: string | null; doi: string | null };
type Message = { role: 'user' | 'assistant'; content: string; links?: ChatLink[]; results?: CatalogueResult[] };

const starters = [
    'Where can I find African rice accessions?',
    'Which traits are available in the collection?',
    'How do I request germplasm?',
];

export default function ChatAssistant() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello. I can help you navigate RBCA, find accession and trait information, and point you to the right data or request page.' },
    ]);

    const ask = async (event?: FormEvent, preset?: string) => {
        event?.preventDefault();
        const question = (preset ?? input).trim();
        if (!question || loading) return;
        setInput('');
        setMessages((current) => [...current, { role: 'user', content: question }]);
        setLoading(true);
        try {
            const history = [...messages, { role: 'user' as const, content: question }].slice(-8).map(({ role, content }) => ({ role, content }));
            const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: question, history, page: window.location.pathname }) });
            const result = await response.json();
            setMessages((current) => [...current, { role: 'assistant', content: result.reply ?? 'I could not find an answer just now. Please try the collection or data pages.', links: result.links ?? [], results: result.results ?? [] }]);
        } catch {
            setMessages((current) => [...current, { role: 'assistant', content: 'The assistant is temporarily unavailable. You can still browse the collection and data pages from the main navigation.' }]);
        } finally {
            setLoading(false);
        }
    };

    return <>
        {open && <section className="chat-assistant-panel" aria-label="RBCA assistant">
            <header className="chat-assistant-header"><div><span className="section-eyebrow">RBCA guide</span><h2>Ask the genebank</h2></div><button type="button" className="chat-assistant-close" onClick={() => setOpen(false)} aria-label="Close assistant">×</button></header>
            <div className="chat-assistant-messages" aria-live="polite">{messages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}><span>{message.role === 'assistant' ? 'RB' : 'You'}</span><div><p>{message.content}</p>{message.results && message.results.length > 0 && <div className="chat-catalogue-results">{message.results.map((result) => <article key={result.accession}><strong>{result.accession}</strong><span>{result.name}</span>{result.taxon && <small>{result.taxon}</small>}</article>)}</div>}{message.links && message.links.length > 0 && <div className="chat-message-links">{message.links.map((link) => <a href={link.href} key={link.href}>{link.label} <span>→</span></a>)}</div>}</div></div>)}{loading && <div className="chat-message assistant"><span>RB</span><p className="chat-typing">Searching the genebank…</p></div>}</div>
            {messages.length === 1 && <div className="chat-starters">{starters.map((starter) => <button type="button" key={starter} onClick={() => void ask(undefined, starter)}>{starter}</button>)}</div>}
            <form className="chat-assistant-form" onSubmit={(event) => void ask(event)}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about traits, data, or navigation…" aria-label="Ask the RBCA assistant" /><button type="submit" disabled={loading || !input.trim()} aria-label="Send message">↑</button></form>
        </section>}
        <button type="button" className={`chat-assistant-launcher ${open ? 'is-open' : ''}`} onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? 'Close RBCA assistant' : 'Open RBCA assistant'}><span className="chat-assistant-orb">RB</span><span>{open ? 'Close' : 'Ask RBCA'}</span></button>
    </>;
}
