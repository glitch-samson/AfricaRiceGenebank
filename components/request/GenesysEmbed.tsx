'use client';

import { useEffect, useState } from 'react';

export type GenesysConfig = {
    enabled: boolean;
    apiUrl: string;
    apiToken: string;
    clientId: string;
    clientKey: string;
    captchaSiteKey: string;
    assetsUrl: string;
    instituteCode: string;
    shoppingCartEnabled: boolean;
};

type GenesysWindow = Window & { genesys?: { showGenesysUI?: (container: HTMLElement, config: Record<string, unknown>) => void } };

function loadAsset(url: string, type: 'script' | 'style') {
    return new Promise<void>((resolve, reject) => {
        const selector = type === 'script' ? `script[src="${url}"]` : `link[href="${url}"]`;
        if (document.querySelector(selector)) return resolve();
        const element = type === 'script' ? document.createElement('script') : document.createElement('link');
        if (type === 'script') {
            element.setAttribute('src', url);
            element.setAttribute('async', 'false');
        } else {
            element.setAttribute('rel', 'stylesheet');
            element.setAttribute('href', url);
        }
        element.addEventListener('load', () => resolve(), { once: true });
        element.addEventListener('error', () => reject(new Error('Genesys asset failed to load')), { once: true });
        document.head.appendChild(element);
    });
}

function waitForGenesys(timeout = 5000) {
    return new Promise<GenesysWindow['genesys']>((resolve) => {
        const started = Date.now();
        const check = () => {
            const api = (window as GenesysWindow).genesys;
            if (api?.showGenesysUI) return resolve(api);
            if (Date.now() - started >= timeout) return resolve(undefined);
            window.setTimeout(check, 100);
        };
        check();
    });
}

export default function GenesysEmbed({ config }: { config: GenesysConfig }) {
    const [state, setState] = useState<'loading' | 'ready' | 'missing' | 'error'>('loading');

    useEffect(() => {
        let cancelled = false;
        const start = async () => {
            if (!config.enabled) {
                setState('missing');
                return;
            }
            const required = [config.apiUrl, config.apiToken, config.clientId, config.clientKey, config.captchaSiteKey, config.assetsUrl, config.instituteCode];
            if (required.some((value) => !value)) {
                setState('missing');
                return;
            }
            try {
                const baseUrl = config.assetsUrl.replace(/\/$/, '');
                await loadAsset(`${baseUrl}/genesys-deps.css`, 'style');
                await loadAsset(`${baseUrl}/genesys-deps.js`, 'script');
                await loadAsset(`${baseUrl}/genesys-ui.js`, 'script');
                const api = await waitForGenesys();
                if (cancelled) return;
                const container = document.getElementById('genesys-container');
                if (!container || !api?.showGenesysUI) throw new Error('Genesys UI is unavailable');
                api.showGenesysUI(container, {
                    apiUrl: config.apiUrl,
                    apiToken: config.apiToken,
                    clientId: config.clientId,
                    clientKey: config.clientKey,
                    captchaSiteKey: config.captchaSiteKey,
                    filter: { institute: { code: [config.instituteCode] } },
                    accession: {
                        overviews: {
                            'institute.code': true,
                            'institute.country.code3': true,
                            aegis: true,
                        },
                        table: { ancest: true },
                        accessionNumberSort: 'seqNo',
                    },
                    bibliography: { enabled: true },
                    shoppingCart: { enabled: config.shoppingCartEnabled, requestApprovers: true },
                });
                setState('ready');
            } catch {
                if (!cancelled) setState('error');
            }
        };
        void start();
        return () => { cancelled = true; };
    }, [config]);

    return <div className="genesys-embed-shell"><div id="genesys-container" aria-live="polite" />{state === 'loading' && <div className="genesys-state"><span className="genesys-spinner" /><h3>Preparing the accession catalogue</h3><p>Loading the AfricaRice collection, filters, secure cart, and request workflow.</p></div>}{state === 'missing' && <UnavailableState title="Request service is not configured" message="The Genesys request service is missing deployment configuration. Please contact the site administrator." />}{state === 'error' && <UnavailableState title="Request service is temporarily unavailable" message="The Genesys catalogue could not be loaded. You can open the AfricaRice collection directly while the service is restored." />}{state === 'ready' && <p className="genesys-accessibility-note">Use the Genesys catalogue above to search accessions, add them to your cart, and submit your request.</p>}</div>;
}

function UnavailableState({ title, message }: { title: string; message: string }) {
    return <div className="genesys-state genesys-config-state"><span className="genesys-state-mark">!</span><h3>{title}</h3><p>{message}</p><a href="https://www.genesys-pgr.org/wiews/CIV033" target="_blank" rel="noreferrer" className="btn-primary-dark">Open AfricaRice in Genesys ↗</a></div>;
}
