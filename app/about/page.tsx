import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import VideoPlayer from '@/components/ui/VideoPlayer';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="world-page-container">
            {/* Breadcrumbs */}
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'About RBCA' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Inaugurated February 21, 2020</DataBadge>
                                <DataBadge variant="emerald">1 of 11 CGIAR Genebanks</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Dr. Monty P. Jones Rice Biodiversity Center for Africa
                            </h1>
                            <p className="world-page-lead">
                                Conserving the world's most comprehensive repository of African rice genetic diversity in trust for humanity, under the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA).
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Access Germplasm (SMTA) ↗
                                </Link>
                                <Link href="/collection" className="btn-secondary-outline">
                                    Explore the Collection
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/about/genebank/slide1.jpg"
                                alt="Rice Biodiversity Center for Africa genebank facility at M'bé"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>📍 AfricaRice Research Station • M'bé, Bouaké, Côte d'Ivoire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Rail */}
            <section className="facts-strip-section">
                <div className="section-shell">
                    <div className="facts-strip-grid">
                        <div className="fact-strip-item">
                            <strong>21,300+</strong>
                            <span>Registered Accessions Conserved</span>
                            <small>Largest African rice collection globally</small>
                        </div>
                        <div className="fact-strip-item">
                            <strong>85%</strong>
                            <span>African Native Provenance</span>
                            <small>Indigenous germplasm from 28 nations</small>
                        </div>
                        <div className="fact-strip-item">
                            <strong>60,000</strong>
                            <span>Total Facility Vault Capacity</span>
                            <small>Under optimal cryogenic standards</small>
                        </div>
                        <div className="fact-strip-item">
                            <strong>−20°C</strong>
                            <span>Base Vault Conservation Temp</span>
                            <small>Tri-laminated hermetic foil storage</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Feature & Facility Overview */}
            <section className="about-video-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Virtual Facility Tour</span>
                        <h2 className="section-main-heading">
                            State-of-the-Art <em>Cryogenic Infrastructure</em>
                        </h2>
                        <p className="section-subtext">
                            A guided look inside our research station in M'bé, near Bouaké, Côte d'Ivoire, showing the seed drying rooms, germination laboratories, and deep freeze vaults.
                        </p>
                    </div>

                    <div className="about-video-wrapper">
                        <VideoPlayer
                            src="/files/vdo/v1.mp4"
                            poster="/files/img/about/genebank/slide1.jpg"
                            title="Inside the Rice Biodiversity Center for Africa (RBCA)"
                            subtitle="AfricaRice Research Station, M'bé, Côte d'Ivoire"
                            chapters={[
                                { time: 0, title: "01. Center Overview & Location at M'bé" },
                                { time: 9, title: "02. Seed Health, Purity & Drying at 15°C" },
                                { time: 18, title: "03. Active (4°C) & Base (−20°C) Cold Vaults" },
                                { time: 27, title: "04. Germination Testing & Global Dispatch" },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Historical Milestone & Dr. Monty Jones Tribute */}
            <section className="history-tribute-section" id="inauguration">
                <div className="section-shell">
                    <div className="two-col-grid align-center">
                        <div className="tribute-content">
                            <span className="section-eyebrow">Legacy & Dedication</span>
                            <h2 className="section-main-heading">
                                Honoring <em>Dr. Monty P. Jones</em>
                            </h2>
                            <p className="editorial-lead">
                                The center proudly bears the name of Dr. Monty Patrick Jones (1951–2024), the distinguished Sierra Leonean plant scientist and 2004 World Food Prize Laureate who pioneered NERICA (New Rice for Africa).
                            </p>
                            <p>
                                Dr. Jones broke the evolutionary sterility barrier between African rice (<em>Oryza glaberrima</em>) and Asian rice (<em>Oryza sativa</em>) through anther culture and embryo rescue, unlocking high-yielding, drought-tolerant varieties that lifted millions of West African farming families out of poverty.
                            </p>
                            <p>
                                The RBCA stands as the permanent living continuation of his vision: conserving the ancestral genetic variation of African rice to empower future generations of agricultural scientists.
                            </p>
                            <div className="tribute-quote-card">
                                <p>“Africa's agricultural transformation must begin with the genetic heritage that evolved in our own soils.”</p>
                                <span>— Dr. Monty P. Jones (1951–2024)</span>
                            </div>
                        </div>

                        <div className="inauguration-card">
                            <img
                                src="/files/img/about/inauguration/slide1.jpg"
                                alt="Official Inauguration Ceremony at M'bé, 21 February 2020"
                                className="inauguration-img"
                            />
                            <div className="inauguration-meta-box">
                                <h4>Official Center Inauguration</h4>
                                <p>
                                    <strong>Date:</strong> 21 February 2020<br />
                                    <strong>Location:</strong> AfricaRice Research Station, M'bé near Bouaké, Côte d'Ivoire<br />
                                    <strong>Leadership:</strong> Presided by Dr. Abdallah Toikeusse Mabri (Minister of Higher Education and Scientific Research) and Mr. Gaoussou Touré (Minister for the Promotion of Rice), alongside AfricaRice Board members, traditional chiefs, and international partners.
                                </p>
                                <div className="partner-tags-mini">
                                    <span>African Development Bank</span>
                                    <span>CGIAR Platform</span>
                                    <span>Crop Trust</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Genebank Leadership & Scientific Personnel */}
            <section className="leadership-section" id="governance">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Scientific Leadership</span>
                        <h2 className="section-main-heading">
                            Custodians of <em>Genetic Heritage</em>
                        </h2>
                        <p className="section-subtext">
                            Our team of molecular geneticists, agronomists, seed physiologists, and bioinformaticians ensure every seed is managed with uncompromising scientific rigor.
                        </p>
                    </div>

                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-avatar-ph">👩‍🔬</div>
                            <div className="team-card-info">
                                <h3>Dr. Marie-Noelle Ndjiondjop</h3>
                                <span className="team-title">Head of Genetic Resources Unit • Manager, RBCA</span>
                                <p>
                                    Senior molecular biologist leading genebank operations, high-throughput DArTseq genomics, and international safety duplication under the FAO Plant Treaty. Author of the flagship monograph on genomics in genebank conservation.
                                </p>
                                <div className="team-contact-link">
                                    <span>Email:</span> <a href="mailto:m.ndjiondjop@cgiar.org">m.ndjiondjop@cgiar.org</a>
                                </div>
                            </div>
                        </div>

                        <div className="team-card">
                            <div className="team-avatar-ph">👨‍💻</div>
                            <div className="team-card-info">
                                <h3>Clinton Obinna Ogwuike</h3>
                                <span className="team-title">Information & Database Manager</span>
                                <p>
                                    Oversees the GRIN-Global Community Edition (GGCE) database deployment, Genesys CIV033 portal synchronization, and digital object identifier (DOI) integration for traceable accession metadata.
                                </p>
                                <div className="team-contact-link">
                                    <span>Focus:</span> Bio-informatics & GRIN-Global
                                </div>
                            </div>
                        </div>

                        <div className="team-card">
                            <div className="team-avatar-ph">🌾</div>
                            <div className="team-card-info">
                                <h3>Dr. Arnaud Comlan Gouda</h3>
                                <span className="team-title">Seed Health & Germplasm Regeneration Specialist</span>
                                <p>
                                    Leads field multiplication cycles at M'bé station, seed viability surveillance, phytosanitary quarantine clearance, and molecular purity quality control.
                                </p>
                                <div className="team-contact-link">
                                    <span>Focus:</span> Seed Physiology & QC
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Accordion */}
            <section className="tech-specs-section">
                <div className="section-shell">
                    <div className="section-header-row">
                        <div>
                            <span className="section-eyebrow">Engineering & Quality</span>
                            <h2 className="section-main-heading">
                                Facility Specifications & <em>Standards</em>
                            </h2>
                            <p className="section-subtext">
                                Operating in strict compliance with the FAO Genebank Standards for Plant Genetic Resources for Food and Agriculture.
                            </p>
                        </div>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'storage-specs',
                                title: 'Storage Chambers & Temperature Control',
                                subtitle: 'Three distinct thermal tiers engineered for seed longevity',
                                tag: 'Vault Engineering',
                                content: (
                                    <div className="accordion-content-grid">
                                        <div>
                                            <strong>Drying Chamber (STS):</strong> Maintained at 15–19 °C and 14–18% relative humidity to gently desicate seeds down to 5–6% internal moisture without embryo damage.
                                        </div>
                                        <div>
                                            <strong>Medium-Term Storage (MTS / Active):</strong> Maintained at 2–5 °C and ~35% relative humidity in vacuum-sealed containers for active distribution and immediate research requests.
                                        </div>
                                        <div>
                                            <strong>Long-Term Storage (LTS / Base):</strong> Kept at −21 °C to −16 °C in heat-sealed tri-laminated aluminum foil envelopes designed to preserve seed viability for 50 to 100+ years.
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                id: 'power-redundancy',
                                title: 'Power Redundancy & Climate Security',
                                subtitle: 'Uninterrupted power systems protecting priceless genetic collections',
                                tag: 'Infrastructure',
                                content: (
                                    <p>
                                        The genebank facility is equipped with automatic emergency power generators that switch on within 15 seconds of any grid failure. Redundant Copeland refrigeration compressors operate on alternating duty cycles, backed by continuous electronic temperature and humidity dataloggers with cloud alarm telemetry.
                                    </p>
                                ),
                            },
                            {
                                id: 'legal-governance',
                                title: 'International Treaty & Global Public Good Status',
                                subtitle: 'Conservation in trust for humanity under FAO and CBD',
                                tag: 'Legal Framework',
                                content: (
                                    <p>
                                        In 1994 and reaffirmed under the 2006 agreement with the Governing Body of the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), AfricaRice placed its rice collection under the auspices of the FAO. All materials are conserved in trust for humanity, meaning no intellectual property rights or patents can be claimed on the germplasm in the form received.
                                    </p>
                                ),
                            },
                            {
                                id: 'safety-duplication',
                                title: 'Double-Tier Safety Duplication Protocols',
                                subtitle: 'Zero-risk policy against political, environmental, or infrastructural hazards',
                                tag: 'Risk Mitigation',
                                content: (
                                    <p>
                                        To prevent catastrophic loss, identical duplicates of every base accession are safeguarded off-site: First-level duplicate deposits at USDA-ARS NCGRP (Fort Collins, Colorado, USA) and second-level duplicate deposits deep in the permafrost at the Svalbard Global Seed Vault (Spitsbergen, Norway).
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
