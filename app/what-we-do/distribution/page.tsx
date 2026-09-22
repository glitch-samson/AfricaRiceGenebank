import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function DistributionPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Global Distribution & SMTA' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 06 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">Free Access for Research</DataBadge>
                                <DataBadge variant="slate">FAO Treaty SMTA</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Global Germplasm <em>Distribution</em>
                            </h1>
                            <p className="world-page-lead">
                                A conserved collection creates true societal impact when living seeds reach plant breeders and researchers. AfricaRice provides small, disease-free seed samples free of charge to legitimate scientists and educators worldwide, strictly governed by the Standard Material Transfer Agreement (SMTA) of the FAO International Treaty.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Submit Germplasm Request ↗
                                </Link>
                                <a
                                    href="https://www.fao.org/plant-treaty/areas-of-work/the-multilateral-system/smta/en/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Review Official FAO SMTA Text ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/dist/slide1.jpg"
                                alt="Inspecting and packaging seed envelopes for global dispatch"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Certified seed samples prepared for international courier dispatch • M'bé</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Rail */}
            <section className="facts-strip-section">
                <div className="section-shell">
                    <div className="facts-strip-grid">
                        <StatCard
                            value="124,604"
                            label="Total Dispatched Samples"
                            sublabel="1995 to present historical total"
                            source="AfricaRice Distribution Records"
                        />
                        <StatCard
                            value="164"
                            label="Recipient Institutions"
                            sublabel="NARS, CGIAR centers, universities & NGOs"
                            source="Official Transfer Registry"
                        />
                        <StatCard
                            value="57"
                            label="Countries Worldwide"
                            sublabel="Across Africa, Asia, Europe, and the Americas"
                            source="SMTA Global Reporting"
                        />
                        <StatCard
                            value="Free"
                            label="Cost of Germplasm"
                            sublabel="Global public good under international treaty"
                            source="FAO ITPGRFA Mandate"
                        />
                    </div>
                </div>
            </section>

            {/* Distribution Breakdown & Legal Framework */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Multilateral Access System</span>
                            <h2 className="section-main-heading">
                                The Standard Material <em>Transfer Agreement (SMTA)</em>
                            </h2>
                            <p className="editorial-lead">
                                Every sample distributed by the AfricaRice Genebank is accompanied by the Standard Material Transfer Agreement (SMTA), a legally binding contract established under Article 12 of the International Treaty on Plant Genetic Resources for Food and Agriculture.
                            </p>
                            <p>
                                The SMTA ensures that:
                            </p>
                            <ul className="bullet-feature-list">
                                <li><strong>Public Good Guarantee:</strong> Recipients agree not to claim any intellectual property rights (patents or plant breeder's rights) that limit the facilitated access to the germplasm or its genetic parts or components in the form received.</li>
                                <li><strong>Benefit-Sharing:</strong> If a commercial variety is developed incorporating material from the multilateral system, mandatory or voluntary contributions are made to the FAO Benefit-Sharing Fund to support smallholder farmers in developing nations.</li>
                                <li><strong>Research & Training Only:</strong> Samples are intended exclusively for food and agricultural breeding, research, and educational purposes.</li>
                            </ul>

                            <h3>Phytosanitary & Quarantine Protocols</h3>
                            <p>
                                Every dispatched packet is accompanied by an official <strong>International Phytosanitary Certificate</strong> issued by the National Plant Protection Organization (NPPO / Direction de la Protection des Végétaux, Côte d'Ivoire), verifying that the seed lot is free from quarantine pests, nematodes, and seed-borne viruses.
                            </p>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <h4>Distribution by Species</h4>
                                <div className="species-share-progress">
                                    <div className="share-row">
                                        <span>Asian Rice (O. sativa)</span>
                                        <strong>~65%</strong>
                                    </div>
                                    <div className="share-bar"><div style={{ width: '65%' }} /></div>

                                    <div className="share-row">
                                        <span>African Rice (O. glaberrima)</span>
                                        <strong>~25%</strong>
                                    </div>
                                    <div className="share-bar"><div style={{ width: '25%' }} /></div>

                                    <div className="share-row">
                                        <span>Interspecific Lines (NERICA)</span>
                                        <strong>~8%</strong>
                                    </div>
                                    <div className="share-bar"><div style={{ width: '8%' }} /></div>

                                    <div className="share-row">
                                        <span>Wild Relatives (Oryza spp.)</span>
                                        <strong>~2%</strong>
                                    </div>
                                    <div className="share-bar"><div style={{ width: '2%' }} /></div>
                                </div>

                                <Link href="/request-germplasm" className="btn-primary-dark full-width">
                                    Start an SMTA Seed Order ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Request Workflow */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Dispatch Procedure</span>
                        <h2 className="section-main-heading">
                            How to Receive Seeds from <em>AfricaRice</em>
                        </h2>
                        <p className="section-subtext">
                            From accession selection to courier delivery at your research facility.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'step-1-identification',
                                title: '01. Identify Accessions via Genesys or RBCA Trait Data',
                                subtitle: 'Select accession IDs matching your breeding or research criteria',
                                tag: 'Online Search',
                                content: (
                                    <p>
                                        Browse the online Genesys portal (Institute Code CIV033) or our phenotypic trait catalogs to identify the specific accession numbers (e.g. TOG 5681, RAM 23) needed for your experiment.
                                    </p>
                                ),
                            },
                            {
                                id: 'step-2-import-permit',
                                title: '02. Obtain National Import Permit & Phytosanitary Requirements',
                                subtitle: 'Provided by your country’s agricultural ministry or quarantine service',
                                tag: 'Regulatory Step',
                                content: (
                                    <p>
                                        Before international dispatch, the recipient must provide a valid Plant Import Permit issued by their national plant quarantine authorities specifying any mandatory treatment declarations.
                                    </p>
                                ),
                            },
                            {
                                id: 'step-3-smta-signing',
                                title: '03. Review and Sign the Standard Material Transfer Agreement (SMTA)',
                                subtitle: 'Executed electronically via Easy-SMTA or paper signature',
                                tag: 'Legal Step',
                                content: (
                                    <p>
                                        The authorized representative of the recipient institution signs the SMTA terms electronically or via standard hard copy, confirming compliance with FAO multilateral rules.
                                    </p>
                                ),
                            },
                            {
                                id: 'step-4-inspection-dispatch',
                                title: '04. Quarantine Inspection, Packaging & Courier Dispatch',
                                subtitle: 'Tracked international air freight with full passport documentation',
                                tag: 'Courier Dispatch',
                                content: (
                                    <p>
                                        Seed lots (typically 25 to 50 seeds per accession) are weighed, heat-sealed in protective envelopes, inspected by government quarantine officers, and dispatched via international courier directly to your laboratory.
                                    </p>
                                ),
                            },
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
