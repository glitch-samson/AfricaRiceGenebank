import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function QualityControlPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Research', href: '/research' },
                        { label: 'Quality Control Analysis' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Research & Quality Control</DataBadge>
                                <DataBadge variant="emerald">KASP SNP Arrays</DataBadge>
                                <DataBadge variant="slate">Zero Phytosanitary Risk</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Genebank Quality Control: <em>Purity, Health & Integrity</em>
                            </h1>
                            <p className="world-page-lead">
                                Conserving thousands of accessions demands relentless vigilance against biological contamination, seed degradation, and genetic drift. AfricaRice enforces an integrated Quality Management System (QMS) combining molecular marker fingerprinting, phytosanitary pathology screening, and physiological viability surveillance.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/what-we-do/conservation" className="btn-primary-dark">
                                    Cold Vault Storage Protocols ↗
                                </Link>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Quality Guarantees for Seed Orders
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/activitie/qcaslide.jpg"
                                alt="Technicians performing seed health and molecular quality control"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Seed pathology and viability testing laboratory at AfricaRice • M'bé</span>
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
                            value="24–48"
                            label="KASP SNP Markers"
                            sublabel="Rapid genetic identity validation panel"
                            source="AfricaRice Molecular QC Protocol"
                        />
                        <StatCard
                            value="0%"
                            label="Tolerance for Pathogens"
                            sublabel="Complete phytosanitary clean bill of health"
                            source="Quarantine Laboratory"
                        />
                        <StatCard
                            value="≥ 85%"
                            label="Germination Standard"
                            sublabel="Mandatory for cultivated seed vault storage"
                            source="FAO Genebank Standards"
                        />
                        <StatCard
                            value="100%"
                            label="Barcode Traceability"
                            sublabel="Tracking seed packet histories across decades"
                            source="GRIN-Global QMS"
                        />
                    </div>
                </div>
            </section>

            {/* Three Pillars of Genebank QC */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Integrated Quality System</span>
                        <h2 className="section-main-heading">
                            The Three Pillars of <em>Genebank Quality Control</em>
                        </h2>
                        <p className="section-subtext">
                            A multi-layered defense ensuring recipients receive pure, healthy, and viable genetic material.
                        </p>
                    </div>

                    <div className="three-tiers-grid">
                        <div className="tier-card">
                            <div className="tier-head">
                                <span className="tier-pill">Genetic</span>
                                <h3>01. Molecular Identity & Purity</h3>
                                <div className="tier-temp">Targeted KASP SNP Assays</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Verifies that regenerated seed lots are true to the original accession type. DNA is extracted from random seedlings and tested against a custom 24-SNP panel. Any signs of mechanical seed mixing or cross-pollination outcrossing results in immediate lot quarantine.
                                </p>
                            </div>
                        </div>

                        <div className="tier-card active-tier">
                            <div className="tier-head">
                                <span className="tier-pill highlight">Phytosanitary</span>
                                <h3>02. Seed Health & Pathology Screening</h3>
                                <div className="tier-temp">Zero Quarantine Pathogen Policy</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    All seed lots destined for storage or international distribution undergo blotter tests, agar plating, and molecular PCR assays to confirm absence of <em>Magnaporthe oryzae</em> (blast), <em>Xanthomonas oryzae</em> (blight), and <em>Aphelenchoides besseyi</em> (white-tip nematode).
                                </p>
                            </div>
                        </div>

                        <div className="tier-card base-tier">
                            <div className="tier-head">
                                <span className="tier-pill">Physiological</span>
                                <h3>03. Viability & Physical Purity</h3>
                                <div className="tier-temp">Incubator Trials & Moisture Testing</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Seed lots are cleaned with air-screen cleaners and gravity separators to achieve &gt;99% physical purity. Seed moisture is verified using gravimetric oven testing (103°C for 17 hours) to ensure moisture remains at 5–6% prior to hermetic sealing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Protocols Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Standard Protocols</span>
                        <h2 className="section-main-heading">
                            Quality Management <em>Operating Standards</em>
                        </h2>
                        <p className="section-subtext">
                            Following the International Seed Testing Association (ISTA) and FAO Genebank Standards.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'kasp-technology',
                                title: 'Kompetitive Allele Specific PCR (KASP) Fingerprinting',
                                subtitle: 'Cost-effective, high-throughput SNP verification in 96/384-well formats',
                                tag: 'Molecular Testing',
                                content: (
                                    <p>
                                        KASP genotyping allows our laboratory to screen hundreds of samples within hours. By targeting diagnostic bi-allelic SNPs distributed evenly across all 12 rice chromosomes, the system flags accidental outcrossing events (visible as abnormal heterozygosity) or mechanical seed mixing with near 100% statistical confidence.
                                    </p>
                                ),
                            },
                            {
                                id: 'tetrazolium-testing',
                                title: 'Biochemical Viability Screening with Tetrazolium (TZ)',
                                subtitle: 'Rapidly distinguishing dormant seeds from dead embryos',
                                tag: 'Embryo Physiology',
                                content: (
                                    <p>
                                        In wild rice relatives and freshly harvested landraces exhibiting deep physiological dormancy, standard germination tests can yield false negatives. The genebank performs 2,3,5-triphenyl tetrazolium chloride (TZ) staining: living embryonic tissues with active dehydrogenase enzymes reduce the colorless solution into red triphenylformazan, proving embryonic viability without waiting weeks for dormancy to break.
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
