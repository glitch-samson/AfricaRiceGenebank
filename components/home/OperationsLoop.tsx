'use client';

import { useState } from 'react';
import Link from 'next/link';
import DataBadge from '@/components/ui/DataBadge';

interface OperationStep {
    step: string;
    title: string;
    shortDesc: string;
    detailedDesc: string;
    keyMetrics: string;
    image: string;
    href: string;
}

const routineOperations: OperationStep[] = [
    {
        step: '01',
        title: 'Collection & Acquisition',
        shortDesc: 'Systematic exploration and international germplasm transfers.',
        detailedDesc:
            'Direct collecting expeditions conducted across 28 African nations since the 1970s, supplemented by germplasm donations from NARS, ORSTOM, IRAT, IITA, and CIAT. Material enters under strict Nagoya Protocol and ITPGRFA compliance.',
        keyMetrics: '21,300+ registered samples • 85% African origin',
        image: '/files/img/operation/acqslide1.jpg',
        href: '/what-we-do/acquisition',
    },
    {
        step: '02',
        title: 'Seed Health & Drying',
        shortDesc: 'Moisture desiccation and seed-borne disease quarantine.',
        detailedDesc:
            'Incoming seed lots undergo phytosanitary inspection to eliminate pathogens, followed by controlled drying at 15–19°C and 14–18% relative humidity until seed moisture reaches 5–6% for prolonged physiological longevity.',
        keyMetrics: '5–6% seed moisture target • 15–19°C drying room',
        image: '/files/img/operation/conservation/1.jpg',
        href: '/what-we-do/conservation',
    },
    {
        step: '03',
        title: 'Tri-Tier Conservation',
        shortDesc: 'Short, Medium, and Long-Term cold vault preservation.',
        detailedDesc:
            'Working stocks are kept in STS. Active collections for research distribution are conserved in MTS (2–5°C, ~35% RH). Base collections are sealed in tri-laminated aluminum foil packets at LTS (−21°C to −16°C) for 50–100+ years.',
        keyMetrics: '−20°C Base Vault • 2–5°C Active Vault • 60k capacity',
        image: '/files/img/operation/conservation/slide1.jpg',
        href: '/what-we-do/conservation',
    },
    {
        step: '04',
        title: 'Safety Duplication',
        shortDesc: 'Double-tier risk mitigation under "Black Box" treaties.',
        detailedDesc:
            'Genetically identical backups are deposited abroad. Primary backup is housed at USDA-ARS NCGRP in Fort Collins, USA. Secondary backup is secured deep within Arctic permafrost at the Svalbard Global Seed Vault, Norway.',
        keyMetrics: 'Svalbard Global Vault • NCGRP Fort Collins, USA',
        image: '/files/img/operation/duplslide1.jpg',
        href: '/what-we-do/safety-duplication',
    },
    {
        step: '05',
        title: 'Regeneration & Purity',
        shortDesc: 'Seed replenishment under controlled field & greenhouse isolation.',
        detailedDesc:
            'Triggered when seed stock drops below 100g or viability falls below 85% (cultivated) or 75% (wild relatives). Grown at M’bé station during post-rainy dry seasons with greenhouse isolation and molecular marker QC to prevent outcrossing.',
        keyMetrics: '100g stock threshold • 85% germination threshold',
        image: '/files/img/operation/regen/slide1.jpg',
        href: '/what-we-do/regeneration',
    },
    {
        step: '06',
        title: 'Characterization',
        shortDesc: 'Agronomic, morphological, and biochemical descriptor recording.',
        detailedDesc:
            'Standardized evaluation of over 60 traits (plant height, tillering, flowering, ligule, awns, panicle length, grain dimensions, and amylose content) measured across at least 10 plants per accession to build searchable trait profiles.',
        keyMetrics: '60+ agro-morphological traits • 10 plants per accession',
        image: '/files/img/operation/charslide1.jpg',
        href: '/what-we-do/characterization',
    },
    {
        step: '07',
        title: 'Global Distribution',
        shortDesc: 'Free seed access under the FAO Standard Material Transfer Agreement.',
        detailedDesc:
            'Small documented seed samples dispatched to breeders, scientists, and educators worldwide. Over 124,604 samples delivered to 164 institutions across 57 countries, accompanied by phytosanitary certificates and digital passports.',
        keyMetrics: '124,604 samples dispatched • 164 institutions in 57 countries',
        image: '/files/img/operation/dist/slide1.jpg',
        href: '/what-we-do/distribution',
    },
];

export default function OperationsLoop() {
    const [activeIdx, setActiveIdx] = useState(0);
    const curr = routineOperations[activeIdx];

    return (
        <section className="operations-loop-section" id="routine-operations">
            <div className="section-shell">
                <div className="section-header-row">
                    <div>
                        <span className="section-eyebrow">03 / Genebank Stewardship</span>
                        <h2 className="section-main-heading">
                            The 7 Routine Operations <em>Pipeline</em>
                        </h2>
                        <p className="section-subtext">
                            From the initial field collecting expedition to long-term cryogenic storage and global seed dispatch, every grain follows strict international standards.
                        </p>
                    </div>
                    <div className="operations-link-wrap">
                        <Link href="/what-we-do" className="btn-secondary-outline">
                            View Operations Overview ↗
                        </Link>
                    </div>
                </div>

                {/* Horizontal Step Selector */}
                <div className="operations-steps-bar">
                    {routineOperations.map((op, idx) => (
                        <button
                            key={op.step}
                            type="button"
                            className={`op-step-btn ${activeIdx === idx ? 'is-active' : ''}`}
                            onClick={() => setActiveIdx(idx)}
                        >
                            <span className="step-num">{op.step}</span>
                            <span className="step-label">{op.title}</span>
                        </button>
                    ))}
                </div>

                {/* Active Operation Detailed Showcase */}
                <div className="operation-display-card">
                    <div className="op-card-content">
                        <div className="op-card-badge-row">
                            <DataBadge variant="gold">Phase {curr.step} of 07</DataBadge>
                            <DataBadge variant="forest">{curr.keyMetrics}</DataBadge>
                        </div>
                        <h3>{curr.title}</h3>
                        <p className="op-short-desc">{curr.shortDesc}</p>
                        <p className="op-detailed-desc">{curr.detailedDesc}</p>

                        <div className="op-action-row">
                            <Link href={curr.href} className="btn-primary-dark">
                                Read Full {curr.title} Protocols <span>↗</span>
                            </Link>
                            <Link href="/request-germplasm" className="text-link-arrow">
                                How to request conserved seed samples <span>→</span>
                            </Link>
                        </div>
                    </div>

                    <div className="op-card-media">
                        <img src={curr.image} alt={curr.title} />
                        <div className="op-media-caption">
                            <span>M'bé Research Station Operations</span>
                            <small>Verified AfricaRice Genebank Procedure</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
