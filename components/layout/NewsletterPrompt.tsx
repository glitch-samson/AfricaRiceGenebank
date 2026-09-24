'use client';

import { FormEvent, useEffect, useState } from 'react';

const dismissedKey = 'rbca-newsletter-dismissed';

export default function NewsletterPrompt() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (window.localStorage.getItem(dismissedKey)) return;
        const timer = window.setTimeout(() => setOpen(true), 1400);
        return () => window.clearTimeout(timer);
    }, []);

    const close = () => {
        window.localStorage.setItem(dismissedKey, 'true');
        setOpen(false);
    };

    const subscribe = async (event: FormEvent) => {
        event.preventDefault();
        setStatus('saving');
        setMessage('');
        const response = await fetch('/api/newsletter/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
        const result = await response.json();
        if (!response.ok) {
            setStatus('error');
            setMessage(result.error ?? 'Please try again.');
            return;
        }
        setStatus('success');
        setMessage('You are subscribed. Thank you.');
        window.localStorage.setItem(dismissedKey, 'true');
        window.setTimeout(() => setOpen(false), 1200);
    };

    if (!open) return null;
    return <div className="newsletter-overlay" role="dialog" aria-modal="true" aria-labelledby="newsletter-title"><div className="newsletter-prompt"><button className="newsletter-close" type="button" onClick={close} aria-label="Close newsletter signup">×</button><span className="section-eyebrow">RBCA field notes</span><h2 id="newsletter-title">Stay close to the collection.</h2><p>Receive occasional updates on rice diversity, new data, and germplasm access.</p>{status === 'success' ? <p className="newsletter-success" role="status">{message}</p> : <form onSubmit={subscribe}><label className="form-field"><span>Email address</span><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.org" autoFocus /></label><button className="btn-primary-dark" type="submit" disabled={status === 'saving'}>{status === 'saving' ? 'Subscribing…' : 'Subscribe'}</button>{status === 'error' && <p className="survey-error" role="alert">{message}</p>}</form>}<button className="newsletter-dismiss" type="button" onClick={close}>No thanks</button></div></div>;
}
