'use client';

import { FormEvent, useEffect, useRef, useState, ReactNode } from 'react';

type ChatLink = { label: string; href: string };
type CatalogueResult = { accession: string; name: string; taxon: string | null; doi: string | null };
type Message = {
    role: 'user' | 'assistant';
    content: string;
    links?: ChatLink[];
    results?: CatalogueResult[];
    suggestions?: string[];
    sources?: string[];
    error?: boolean;
};

const initialGreeting: Message = {
    role: 'assistant',
    content:
        "Hello! I'm the RBCA genebank assistant. I can look up accessions in the AfricaRice catalogue, explain how the genebank and its collections work, point you to the data and publications this site publishes, and walk you through a germplasm request. What would you like to do?",
    suggestions: ['Do you have NERICA 1?', 'What is in the collection?', 'How do I request seeds?'],
};

const starters = [
    'Do you have NERICA 1?',
    'What is in the collection?',
    'How do I request seeds?',
    'What data do you publish?',
];

const retryMessage = "I'm having trouble reaching the Gene Bank records right now. Please try again, or use the contact page to reach the genebank team directly.";

function formatInlineText(text: string): ReactNode[] {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
            return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
}

function renderFormattedMessage(content: string) {
    const rawParagraphs = content.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
    if (rawParagraphs.length === 0) return <p>{content}</p>;

    return rawParagraphs.map((paragraph, pIdx) => {
        const lines = paragraph.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
        const isBulletList = lines.length > 1 && lines.every((l) => /^[•\-\*]\s+|^\d+\.\s+/.test(l));

        if (isBulletList) {
            const isNumbered = /^\d+\.\s+/.test(lines[0]);
            const items = lines.map((l) => l.replace(/^[•\-\*]\s+|^\d+\.\s+/, ''));
            if (isNumbered) {
                return (
                    <ol key={pIdx}>
                        {items.map((item, idx) => (
                            <li key={idx}>{formatInlineText(item)}</li>
                        ))}
                    </ol>
                );
            }
            return (
                <ul key={pIdx}>
                    {items.map((item, idx) => (
                        <li key={idx}>{formatInlineText(item)}</li>
                    ))}
                </ul>
            );
        }

        return <p key={pIdx}>{formatInlineText(paragraph)}</p>;
    });
}

export default function ChatAssistant() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([initialGreeting]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (open) {
            scrollToBottom();
            inputRef.current?.focus();
        }
    }, [open, messages, loading]);

    const resetChat = () => {
        setMessages([initialGreeting]);
        setInput('');
    };

    const ask = async (event?: FormEvent, preset?: string) => {
        event?.preventDefault();
        const question = (preset ?? input).trim();
        if (!question || loading) return;

        setInput('');
        setMessages((current) => [...current, { role: 'user', content: question }]);
        setLoading(true);

        try {
            const history = [...messages, { role: 'user' as const, content: question }]
                .slice(-8)
                .map(({ role, content }) => ({ role, content }));

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: question, history, page: window.location.pathname }),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok && !result?.reply) {
                throw new Error(`HTTP error ${response.status}`);
            }

            if (!result?.reply) {
                throw new Error('Empty assistant response');
            }

            setMessages((current) => [
                ...current,
                {
                    role: 'assistant',
                    content: result.reply,
                    links: result.links ?? [],
                    results: result.results ?? [],
                    suggestions: result.suggestions ?? [],
                    sources: result.source === 'error' ? [] : (result.sources ?? []),
                    error: result.source === 'error' || response.status >= 500,
                },
            ]);
        } catch {
            setMessages((current) => [
                ...current,
                {
                    role: 'assistant',
                    content: retryMessage,
                    links: [{ label: 'Contact the genebank', href: '/contact' }],
                    error: true,
                    suggestions: ['Try again', 'How do I request seeds?'],
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {open && (
                <section className="chat-assistant-panel" aria-label="RBCA genebank assistant">
                    <header className="chat-assistant-header">
                        <div>
                            <span className="section-eyebrow">RBCA Assistant</span>
                            <h2>How can I help?</h2>
                        </div>
                        <div className="chat-assistant-header-actions">
                            {messages.length > 1 && (
                                <button
                                    type="button"
                                    className="chat-assistant-btn"
                                    onClick={resetChat}
                                    title="Start a new conversation"
                                    aria-label="Start a new conversation"
                                >
                                    New chat
                                </button>
                            )}
                            <button
                                type="button"
                                className="chat-assistant-close"
                                onClick={() => setOpen(false)}
                                aria-label="Close assistant"
                            >
                                ×
                            </button>
                        </div>
                    </header>

                    <div className="chat-assistant-messages" aria-live="polite">
                        {messages.map((message, index) => (
                            <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                                <span>{message.role === 'assistant' ? 'RB' : 'You'}</span>
                                <div className={`chat-message-body${message.error ? ' chat-message-error' : ''}`}>
                                    {renderFormattedMessage(message.content)}

                                    {message.results && message.results.length > 0 && (
                                        <div className="chat-catalogue-results">
                                            {message.results.map((result) => (
                                                <article key={result.accession}>
                                                    <strong>{result.accession}</strong>
                                                    <span>{result.name}</span>
                                                    {result.taxon && <small><em>{result.taxon}</em></small>}
                                                    {result.doi && (
                                                        <small>
                                                            <a href={`https://doi.org/${result.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')}`} target="_blank" rel="noreferrer">
                                                                {result.doi}
                                                            </a>
                                                        </small>
                                                    )}
                                                </article>
                                            ))}
                                        </div>
                                    )}

                                    {message.links && message.links.length > 0 && (
                                        <div className="chat-message-links">
                                            {message.links.map((link) => (
                                                <a href={link.href} key={link.href}>
                                                    <span>{link.label}</span>
                                                    <span>→</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {message.sources && message.sources.length > 0 && (
                                        <p className="chat-message-source">Source: {message.sources.join(' · ')}</p>
                                    )}

                                    {index === messages.length - 1 &&
                                        !loading &&
                                        message.role === 'assistant' &&
                                        message.suggestions &&
                                        message.suggestions.length > 0 && (
                                            <div className="chat-message-suggestions">
                                                {message.suggestions.map((suggestion) => (
                                                    <button type="button" key={suggestion} onClick={() => void ask(undefined, suggestion)}>
                                                        {suggestion}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="chat-message assistant">
                                <span>RB</span>
                                <div className="chat-message-body">
                                    <p className="chat-typing">
                                        Let me check that for you
                                        <span className="chat-typing-dots">
                                            <span className="chat-typing-dot" />
                                            <span className="chat-typing-dot" />
                                            <span className="chat-typing-dot" />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {messages.length === 1 && (
                        <div className="chat-starters">
                            {starters.map((starter) => (
                                <button type="button" key={starter} onClick={() => void ask(undefined, starter)}>
                                    {starter}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className="chat-assistant-form" onSubmit={(event) => void ask(event)}>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Ask me anything about the genebank…"
                            aria-label="Ask the RBCA assistant"
                        />
                        <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
                            ↑
                        </button>
                    </form>
                </section>
            )}

            <button
                type="button"
                className={`chat-assistant-launcher ${open ? 'is-open' : ''}`}
                onClick={() => setOpen((current) => !current)}
                aria-expanded={open}
                aria-label={open ? 'Close RBCA assistant' : 'Open RBCA assistant'}
            >
                <span className="chat-assistant-orb">RB</span>
                <span>{open ? 'Close' : 'Ask RBCA'}</span>
            </button>
        </>
    );
}
