import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

interface OperationStage {
    step: string;
    title: string;
    description: string;
    metrics: string;
    image: string;
    href: string;
}

const stages: OperationStage[] = [
    {
        step: '01',
        title: 'Collection & Acquisition',
        description:
            'Systematic field exploration missions across 28 member states, coupled with documented germplasm transfers from NARS, ORSTOM, IRAT, IITA, and CIAT under the Nagoya Protocol.',
        metrics: '21,300+ Registered Samples',
        image: '/files/img/operation/acqslide1.jpg',
        href: '/what-we-do/acquisition',
    },
    {
        step: '02',
        title: 'Conservation & Cold Vaults',
        description:
            'Precision desiccation in a 15–19°C drying room down to 5–6% seed moisture, followed by hermetic sealing in tri-laminated foil packets inside our −20°C Long-Term Storage (LTS) base vault.',
        metrics: '−20°C LTS • 2–5°C MTS • 15–19°C STS',
        image: '/files/img/operation/conservation/slide1.jpg',
        href: '/what-we-do/conservation',
    },
    {
        step: '03',
        title: 'Safety Duplication',
        description:
            'Double-tier risk mitigation under "Black Box" legal agreements: primary duplicate deposits at USDA-ARS NCGRP in Fort Collins (USA) and secondary deposits deep in the Svalbard Global Seed Vault (Norway).',
        metrics: 'Svalbard Global Seed Vault & NCGRP',
        image: '/files/img/operation/duplslide1.jpg',
        href: '/what-we-do/safety-duplication',
    },
    {
        step: '04',
        title: 'Regeneration & Multiplication',
        description:
            'Replenishing seed stocks when inventory drops below 100g or viability falls below 85% (cultivated) or 75% (wild relatives), using isolated field plots at M\'bé and greenhouse bagging to protect genetic identity.',
        metrics: '100g Inventory Trigger • 85% Viability Threshold',
        image: '/files/img/operation/regen/slide1.jpg',
        href: '/what-we-do/regeneration',
    },
    {
        step: '05',
        title: 'Characterization',
        description:
            'Recording over 60 standardized agro-morphological descriptors (phenology, plant height, tillering, ligules, panicle traits, and grain attributes) across at least 10 representative plants per accession.',
        metrics: '60+ International Standard Descriptors',
        image: '/files/img/operation/charslide1.jpg',
        href: '/what-we-do/characterization',
    },
    {
        step: '06',
        title: 'Global Distribution',
        description:
            'Providing small, viable, disease-free seed packets free of charge to breeders, universities, and research institutions worldwide under the FAO Standard Material Transfer Agreement (SMTA).',
        metrics: '124,604 Samples • 164 Institutions • 57 Nations',
        image: '/files/img/operation/dist/slide1.jpg',
        href: '/what-we-do/distribution',
    },
    {
        step: '07',
        title: 'Database Management',
        description:
            'Maintaining authoritative passport, phenotypic, and genomic records within GRIN-Global Community Edition (GGCE), fully synchronized with Genesys and assigning permanent Digital Object Identifiers (DOIs).',
        metrics: '14,114 DOIs • Genesys CIV033 Registry',
        image: '/files/img/operation/dataslide.jpg',
        href: '/what-we-do/data-management',
    },
];

export default function WhatWeDoPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'What We Do / Routine Operations' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">FAO Genebank Standards</DataBadge>
                                <DataBadge variant="emerald">7-Stage Routine Cycle</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Routine Genebank <em>Operations Pipeline</em>
                            </h1>
                            <p className="world-page-lead">
                                The management of genetic resources at the Dr. Monty P. Jones Rice Biodiversity Center for Africa is governed by international scientific protocols. From field acquisition to cryogenic conservation and global distribution, every operation safeguards physiological viability and genetic purity.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Request Germplasm (SMTA) ↗
                                </Link>
                                <a
                                    href="https://www.fao.org/plant-treaty/en/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    FAO Plant Treaty Standards ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/conservation/slide1.jpg"
                                alt="Genebank technician inspecting seed envelopes inside cold storage"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Cold vault stewardship at AfricaRice Research Station • M'bé</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facts Rail */}
            <section className="facts-strip-section">
                <div className="section-shell">
                    <div className="facts-strip-grid">
                        <StatCard
                            value="7"
                            label="Core Routine Stages"
                            sublabel="Covering acquisition to distribution"
                        />
                        <StatCard
                            value="15–19°C"
                            label="Drying Room"
                            sublabel="14–18% RH moisture reduction"
                        />
                        <StatCard
                            value="−20°C"
                            label="Base Vault Storage"
                            sublabel="Preserved for 50–100+ years"
                        />
                        <StatCard
                            value="124,604"
                            label="Dispatched Samples"
                            sublabel="Delivered across 57 countries"
                        />
                    </div>
                </div>
            </section>

            {/* 7 Stages Directory */}
            <section className="operations-stages-directory">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">End-to-End Workflow</span>
                        <h2 className="section-main-heading">
                            The 7 Operational <em>Pillars</em>
                        </h2>
                        <p className="section-subtext">
                            Explore each stage in the preservation cycle of Africa's rice biodiversity.
                        </p>
                    </div>

                    <div className="stages-flow-list">
                        {stages.map((stage) => (
                            <div key={stage.step} className="stage-flow-card">
                                <div className="stage-card-badge-col">
                                    <span className="stage-num-tag">{stage.step}</span>
                                    <div className="stage-connector-line" />
                                </div>

                                <div className="stage-card-img-wrap">
                                    <img src={stage.image} alt={stage.title} />
                                </div>

                                <div className="stage-card-content-wrap">
                                    <div className="stage-metric-pill">{stage.metrics}</div>
                                    <h3>{stage.title}</h3>
                                    <p>{stage.description}</p>
                                    <Link href={stage.href} className="stage-read-link">
                                        Read Complete {stage.title} Procedures <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
