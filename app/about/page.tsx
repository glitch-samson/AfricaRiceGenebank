import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import VideoPlayer from '@/components/ui/VideoPlayer';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import TeamCarousel from '@/components/pages/TeamCarousel';
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
                    <div className="tribute-header">
                        <span className="section-eyebrow">Legacy & Dedication</span>
                        <p>Honoring the scientist whose work made a new generation of African rice possible.</p>
                    </div>
                    <div className="tribute-feature">
                        <div className="tribute-feature-copy">
                            <span className="tribute-feature-mark">1951 — 2024</span>
                            <h2>Honoring <em>Dr. Monty P. Jones</em></h2>
                            <p className="editorial-lead">
                                The center bears the name of the distinguished Sierra Leonean plant scientist and 2004 World Food Prize Laureate who pioneered NERICA, New Rice for Africa.
                            </p>
                            <p>
                                Through anther culture and embryo rescue, Dr. Jones helped overcome the sterility barrier between African rice (<em>Oryza glaberrima</em>) and Asian rice (<em>Oryza sativa</em>). His work connected resilience, yield, and farmer opportunity.
                            </p>
                            <div className="tribute-quote-card">
                                <p>“Africa&apos;s agricultural transformation must begin with the genetic heritage that evolved in our own soils.”</p>
                                <span>Dr. Monty P. Jones</span>
                            </div>
                        </div>
                        <div className="tribute-feature-media">
                            <img src="/files/img/about/inauguration/slide1.jpg" alt="Official inauguration of the Dr. Monty P. Jones Rice Biodiversity Center for Africa" />
                            <div className="tribute-image-caption">A living continuation of a scientific legacy</div>
                        </div>
                    </div>
                    <div className="tribute-record">
                        <div className="tribute-record-image">
                            <img src="/files/img/about/inauguration/slide2.jpg" alt="Guests and partners at the RBCA inauguration ceremony" />
                        </div>
                        <div className="tribute-record-copy">
                            <span className="record-kicker">A center named in service</span>
                            <h3>From breakthrough to institution</h3>
                            <p>RBCA carries Dr. Jones&apos;s vision forward by conserving the ancestral variation that future breeders and researchers will need.</p>
                            <dl>
                                <div><dt>Inaugurated</dt><dd>21 February 2020</dd></div>
                                <div><dt>Location</dt><dd>M&apos;bé, Bouaké, Côte d&apos;Ivoire</dd></div>
                                <div><dt>Focus</dt><dd>Rice diversity in trust for humanity</dd></div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* Genebank Leadership & Scientific Personnel */}
            <section className="leadership-section" id="governance">
                <div className="section-shell">
                    <TeamCarousel />
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
