'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const closeNav = () => {
        setOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name: string) => {
        setActiveDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <header className="world-site-header">
            {/* Main Navbar */}
            <div className="nav-shell">
                <Link className="brand" href="/" onClick={closeNav}>
                    <img className="brand-logo" src="/files/img/africarice.png" alt="AfricaRice" />
                    <span className="brand-copy">
                        <b>RBCA</b>
                        <small>Rice Biodiversity Center for Africa</small>
                    </span>
                </Link>

                <button
                    className="menu-toggle"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle navigation menu"
                >
                    {open ? '✕ Close' : '☰ Menu'}
                </button>

                <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
                    <Link className="nav-link" href="/" onClick={closeNav}>
                        Home
                    </Link>

                    {/* About Dropdown */}
                    <div className="nav-item-dropdown">
                        <button
                            type="button"
                            className="nav-dropdown-btn"
                            onClick={() => toggleDropdown('about')}
                            aria-expanded={activeDropdown === 'about'}
                        >
                            About <span className="caret">▾</span>
                        </button>
                        <div className={`nav-dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
                            <Link href="/about" onClick={closeNav}>
                                <strong>Center Overview & Mission</strong>
                                <small>Mandate, history & Dr. Monty P. Jones legacy</small>
                            </Link>
                            <Link href="/about#inauguration" onClick={closeNav}>
                                <strong>Inauguration & Facilities</strong>
                                <small>M'bé Research Station & cold vault engineering</small>
                            </Link>
                            <Link href="/about#governance" onClick={closeNav}>
                                <strong>Leadership & Partners</strong>
                                <small>CGIAR Genebank Platform & Crop Trust</small>
                            </Link>
                        </div>
                    </div>

                    {/* Collection Dropdown */}
                    <div className="nav-item-dropdown">
                        <button
                            type="button"
                            className="nav-dropdown-btn"
                            onClick={() => toggleDropdown('collection')}
                            aria-expanded={activeDropdown === 'collection'}
                        >
                            Collection <span className="caret">▾</span>
                        </button>
                        <div className={`nav-dropdown-menu ${activeDropdown === 'collection' ? 'show' : ''}`}>
                            <Link href="/collection" onClick={closeNav}>
                                <strong>All Species & Gene Pools</strong>
                                <small>Over 21,300 conserved rice accessions</small>
                            </Link>
                            <Link href="/collection/african-rice" onClick={closeNav}>
                                <strong>African Rice (O. glaberrima)</strong>
                                <small>Indigenous West African rice & mini-core</small>
                            </Link>
                            <Link href="/collection/asian-rice" onClick={closeNav}>
                                <strong>Asian Rice (O. sativa)</strong>
                                <small>Indica & japonica ecologies across Africa</small>
                            </Link>
                            <Link href="/collection/interspecifics" onClick={closeNav}>
                                <strong>Interspecifics (NERICA & ARICA)</strong>
                                <small>Sativa × glaberrima breeding breakthroughs</small>
                            </Link>
                            <Link href="/collection/wild-relatives" onClick={closeNav}>
                                <strong>Wild Relatives (5 Species)</strong>
                                <small>O. longistaminata, barthii, punctata, etc.</small>
                            </Link>
                        </div>
                    </div>

                    {/* What We Do Dropdown */}
                    <div className="nav-item-dropdown">
                        <button
                            type="button"
                            className="nav-dropdown-btn"
                            onClick={() => toggleDropdown('operations')}
                            aria-expanded={activeDropdown === 'operations'}
                        >
                            What We Do <span className="caret">▾</span>
                        </button>
                        <div className={`nav-dropdown-menu ${activeDropdown === 'operations' ? 'show' : ''}`}>
                            <Link href="/what-we-do" onClick={closeNav}>
                                <strong>The 7 Routine Operations Loop</strong>
                                <small>From field collecting to global distribution</small>
                            </Link>
                            <Link href="/what-we-do/acquisition" onClick={closeNav}>
                                <strong>Acquisition & Collecting</strong>
                                <small>Field missions & international donations</small>
                            </Link>
                            <Link href="/what-we-do/conservation" onClick={closeNav}>
                                <strong>Conservation & Cold Vaults</strong>
                                <small>STS, MTS (2-5°C), and LTS (-20°C)</small>
                            </Link>
                            <Link href="/what-we-do/safety-duplication" onClick={closeNav}>
                                <strong>Safety Duplication</strong>
                                <small>NCGRP Fort Collins & Svalbard Seed Vault</small>
                            </Link>
                            <Link href="/what-we-do/regeneration" onClick={closeNav}>
                                <strong>Regeneration & Multiplication</strong>
                                <small>Field rejuvenation & genetic purity QC</small>
                            </Link>
                            <Link href="/what-we-do/characterization" onClick={closeNav}>
                                <strong>Characterization</strong>
                                <small>Standardized 60+ agro-morphological traits</small>
                            </Link>
                            <Link href="/what-we-do/distribution" onClick={closeNav}>
                                <strong>Global Distribution</strong>
                                <small>124,000+ seed samples sent across 57 nations</small>
                            </Link>
                            <Link href="/what-we-do/data-management" onClick={closeNav}>
                                <strong>Data Management & DOIs</strong>
                                <small>GRIN-Global & Genesys integration</small>
                            </Link>
                        </div>
                    </div>

                    {/* Research Dropdown */}
                    <div className="nav-item-dropdown">
                        <button
                            type="button"
                            className="nav-dropdown-btn"
                            onClick={() => toggleDropdown('research')}
                            aria-expanded={activeDropdown === 'research'}
                        >
                            Research <span className="caret">▾</span>
                        </button>
                        <div className={`nav-dropdown-menu ${activeDropdown === 'research' ? 'show' : ''}`}>
                            <Link href="/research" onClick={closeNav}>
                                <strong>Research Overview</strong>
                                <small>Translating diversity into farmer resilience</small>
                            </Link>
                            <Link href="/research/genomics" onClick={closeNav}>
                                <strong>Genomics of Genebanks</strong>
                                <small>DArTseq SNP profiling of 9,120 accessions</small>
                            </Link>
                            <Link href="/research/quality-control" onClick={closeNav}>
                                <strong>Quality Control & Purity</strong>
                                <small>KASP markers & genetic identity checks</small>
                            </Link>
                            <Link href="/research/sub-setting" onClick={closeNav}>
                                <strong>Sub-setting & Mini-Cores</strong>
                                <small>Representative diversity panels for breeding</small>
                            </Link>
                        </div>
                    </div>

                    {/* Open Data Dropdown */}
                    <div className="nav-item-dropdown">
                        <button
                            type="button"
                            className="nav-dropdown-btn"
                            onClick={() => toggleDropdown('data')}
                            aria-expanded={activeDropdown === 'data'}
                        >
                            Data <span className="caret">▾</span>
                        </button>
                        <div className={`nav-dropdown-menu ${activeDropdown === 'data' ? 'show' : ''}`}>
                            <Link href="/data" onClick={closeNav}>
                                <strong>FAIR Data Portal</strong>
                                <small>Open access scientific datasets</small>
                            </Link>
                            <Link href="/data/subsets" onClick={closeNav}>
                                <strong>Subset Matrices</strong>
                                <small>O. glaberrima mini-core accession lists</small>
                            </Link>
                            <Link href="/data/genomics" onClick={closeNav}>
                                <strong>Genomics Datasets</strong>
                                <small>SNP matrices, VCF files & PCA maps</small>
                            </Link>
                            <Link href="/data/characterization" onClick={closeNav}>
                                <strong>Characterization Data</strong>
                                <small>Agronomic traits & descriptor tables</small>
                            </Link>
                        </div>
                    </div>

                    <Link className="nav-link" href="/publications" onClick={closeNav}>
                        Publications
                    </Link>

                    <Link className="nav-cta-btn" href="/request-germplasm" onClick={closeNav}>
                        <span>Request Germplasm</span>
                        <span className="arrow-icon">↗</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
