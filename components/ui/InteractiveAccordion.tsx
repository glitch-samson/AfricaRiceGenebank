'use client';

import { useState } from 'react';

interface AccordionItem {
    id: string;
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    tag?: string;
}

export default function InteractiveAccordion({
    items,
    defaultOpenIndex = 0,
}: {
    items: AccordionItem[];
    defaultOpenIndex?: number;
}) {
    const [openId, setOpenId] = useState<string | null>(items[defaultOpenIndex]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="interactive-accordion">
            {items.map((item, index) => {
                const isOpen = openId === item.id;
                return (
                    <div key={item.id} className={`accordion-row ${isOpen ? 'is-open' : ''}`}>
                        <button
                            type="button"
                            className="accordion-trigger"
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                            aria-controls={`accordion-content-${item.id}`}
                            id={`accordion-btn-${item.id}`}
                        >
                            <span className="accordion-index">0{index + 1}</span>
                            <div className="accordion-titles">
                                <span className="accordion-title">{item.title}</span>
                                {item.subtitle && (
                                    <span className="accordion-subtitle">{item.subtitle}</span>
                                )}
                            </div>
                            {item.tag && <span className="accordion-tag">{item.tag}</span>}
                            <span className="accordion-icon" aria-hidden="true">
                                {isOpen ? '−' : '+'}
                            </span>
                        </button>
                        <div
                            id={`accordion-content-${item.id}`}
                            role="region"
                            aria-labelledby={`accordion-btn-${item.id}`}
                            className={`accordion-body ${isOpen ? 'show' : ''}`}
                        >
                            <div className="accordion-inner">{item.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
