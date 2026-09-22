import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="world-footer">
            {/* Partners & Governance Tier */}
            <div className="footer-partners-bar">
                <div className="footer-shell">
                    <span className="partners-title">Operating in Partnership with Global Agricultural Leaders</span>
                    <div className="partner-badges-grid">
                        <div className="partner-badge-item">
                            <img src="/files/img/cgiar.png" alt="CGIAR Genebank Platform" />
                            <span>CGIAR Genebank Platform</span>
                        </div>
                        <div className="partner-badge-item">
                            <img src="/files/img/CropTrust.png" alt="Global Crop Diversity Trust" />
                            <span>Global Crop Diversity Trust</span>
                        </div>
                        <div className="partner-badge-item">
                            <img src="/files/img/ar.png" alt="AfricaRice" />
                            <span>Africa Rice Center (28 Member States)</span>
                        </div>
                        <div className="partner-badge-item">
                            <div className="partner-text-badge">
                                <strong>FAO ITPGRFA</strong>
                                <small>International Plant Treaty</small>
                            </div>
                        </div>
                        <div className="partner-badge-item">
                            <div className="partner-text-badge">
                                <strong>Svalbard Seed Vault</strong>
                                <small>Safety Duplicate Depository</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Multi-Column Directory */}
            <div className="footer-main-directory">
                <div className="footer-shell footer-grid">
                    {/* Column 1: Organization & Mandate */}
                    <div className="footer-col footer-col-brand">
                        <Link className="footer-brand" href="/">
                            <img className="brand-logo" src="/files/img/africarice.png" alt="AfricaRice Logo" />
                            <div className="footer-brand-text">
                                <strong>Dr. Monty P. Jones RBCA</strong>
                                <span>Rice Biodiversity Center for Africa</span>
                            </div>
                        </Link>
                        <p className="footer-mandate-p">
                            Safeguarding over 21,300 rice accessions in trust for humanity. As one of 11 international CGIAR genebanks, we conserve, characterize, and distribute genetic resources to advance climate resilience and food sovereignty across Africa.
                        </p>
                        <div className="footer-station-pills">
                            <span className="station-pill">📍 M'bé Station, Bouaké, Côte d'Ivoire</span>
                            <span className="station-pill">📍 Cotonou Station, Benin</span>
                        </div>
                    </div>

                    {/* Column 2: The Collection */}
                    <div className="footer-col">
                        <h4>Rice Biodiversity</h4>
                        <ul>
                            <li><Link href="/collection">Collection Overview</Link></li>
                            <li><Link href="/collection/african-rice">African Rice (<em>O. glaberrima</em>)</Link></li>
                            <li><Link href="/collection/asian-rice">Asian Rice (<em>O. sativa</em>)</Link></li>
                            <li><Link href="/collection/interspecifics">Interspecifics (NERICA & ARICA)</Link></li>
                            <li><Link href="/collection/wild-relatives">Wild Relatives (5 Species)</Link></li>
                            <li><Link href="/data/subsets">Mini-Core Collections</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Routine Operations */}
                    <div className="footer-col">
                        <h4>Routine Operations</h4>
                        <ul>
                            <li><Link href="/what-we-do">The 7 Genebank Stages</Link></li>
                            <li><Link href="/what-we-do/acquisition">Acquisition & Field Missions</Link></li>
                            <li><Link href="/what-we-do/conservation">Conservation & Cold Vaults</Link></li>
                            <li><Link href="/what-we-do/safety-duplication">Svalbard & NCGRP Duplication</Link></li>
                            <li><Link href="/what-we-do/regeneration">Field Regeneration at M'bé</Link></li>
                            <li><Link href="/what-we-do/characterization">Agro-Morphological Traits</Link></li>
                            <li><Link href="/what-we-do/distribution">Distribution & SMTA</Link></li>
                            <li><Link href="/what-we-do/data-management">GRIN-Global & DOIs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Research & Open Data */}
                    <div className="footer-col">
                        <h4>Science & Data</h4>
                        <ul>
                            <li><Link href="/research">Research Programs</Link></li>
                            <li><Link href="/research/genomics">Genomics of Genebanks (DArTseq)</Link></li>
                            <li><Link href="/research/quality-control">Molecular Quality Control</Link></li>
                            <li><Link href="/research/sub-setting">Sub-setting & Diversity Panels</Link></li>
                            <li><Link href="/data">FAIR Data Portal</Link></li>
                            <li><Link href="/data/genomics">Genotypic SNP Datasets</Link></li>
                            <li><Link href="/publications">Scientific Publications & Books</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Access & Legal */}
                    <div className="footer-col">
                        <h4>Access & Compliance</h4>
                        <ul>
                            <li><Link href="/request-germplasm" className="footer-cta-link">Order Seeds via SMTA ↗</Link></li>
                            <li><Link href="/survey">Recipient Evaluation Survey</Link></li>
                            <li><Link href="/about">Dr. Monty Jones Legacy</Link></li>
                            <li><Link href="/contact">Visiting & Contacts</Link></li>
                            <li>
                                <a href="https://www.genesys-pgr.org/wiews/CIV033" target="_blank" rel="noreferrer">
                                    Genesys CIV033 Registry ↗
                                </a>
                            </li>
                            <li>
                                <a href="https://www.fao.org/plant-treaty/en/" target="_blank" rel="noreferrer">
                                    FAO Plant Treaty ↗
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Disclaimer & Legal Bar */}
            <div className="footer-bottom-bar">
                <div className="footer-shell footer-bottom-flex">
                    <div className="footer-legal-copy">
                        © {new Date().getFullYear()} Rice Biodiversity Center for Africa (RBCA) • AfricaRice. All genetic materials are conserved and made available under the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA).
                    </div>
                    <div className="footer-bottom-links">
                        <Link href="/contact">Contact Leadership</Link>
                        <span>•</span>
                        <Link href="/request-germplasm">SMTA Terms</Link>
                        <span>•</span>
                        <Link href="/data">Open Access Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
