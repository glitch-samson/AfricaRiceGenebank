import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function RegenerationPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Regeneration & Multiplication' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 04 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">Zero Genetic Drift Protocol</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Seed Regeneration: <em>Renewing Life Without Genetic Loss</em>
                            </h1>
                            <p className="world-page-lead">
                                Seeds are living biological organisms with a finite lifespan. Regeneration is the delicate process of growing an accession out in the field or greenhouse to harvest fresh, highly viable seed stocks. At M'bé, regeneration is executed with strict isolation and equal-seed sampling to ensure 100% genetic fidelity to the original accession.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/what-we-do/characterization" className="btn-primary-dark">
                                    Next Stage: Characterization ↗
                                </Link>
                                <Link href="/research/quality-control" className="btn-secondary-outline">
                                    Molecular QC & Purity Checks
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/regen/slide1.jpg"
                                alt="Field regeneration plots at M'bé Research Station"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Multiplication trial plots at AfricaRice Research Station • M'bé, Côte d'Ivoire</span>
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
                            value="< 100 g"
                            label="Stock Threshold Trigger"
                            sublabel="Replenishing depleted distribution stocks"
                            source="Genebank Management SOP"
                        />
                        <StatCard
                            value="< 85%"
                            label="Cultivated Viability Trigger"
                            sublabel="Germination threshold for sativa & glaberrima"
                            source="FAO Genebank Standards"
                        />
                        <StatCard
                            value="< 75%"
                            label="Wild Species Trigger"
                            sublabel="Dormancy-adjusted viability threshold"
                            source="Wild Rice Conservation Protocol"
                        />
                        <StatCard
                            value="30–50"
                            label="Parent Plants Sampled"
                            sublabel="Preventing genetic bottlenecks and drift"
                            source="Population Genetics Standard"
                        />
                    </div>
                </div>
            </section>

            {/* In-Depth Field Methodology */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Field Protocols at M'bé</span>
                            <h2 className="section-main-heading">
                                Balancing Seed Quantity with <em>True-to-Type Purity</em>
                            </h2>
                            <p className="editorial-lead">
                                The central risk during regeneration is genetic contamination—either through cross-pollination from neighboring plots, seed mixing during harvest, or selective survival favoring faster-germinating genotypes.
                            </p>
                            <p>
                                AfricaRice conducts its main regeneration cycles during the <strong>post-rainy dry season</strong> (November to March) at the M'bé valley station under controlled furrow and drip irrigation. Growing during the dry season significantly reduces the incidence of seed-borne fungal blast (<em>Magnaporthe oryzae</em>) and bacterial leaf streak, resulting in cleaner, higher-longevity seed harvests.
                            </p>

                            <h3>Key Protection Measures</h3>
                            <ul className="bullet-feature-list">
                                <li>
                                    <strong>Equal-Seed Representative Sampling:</strong> When harvesting, equal numbers of healthy seeds are taken from at least 30 to 50 individual plants across the plot to represent the full allelic diversity of heterogeneous traditional landraces.
                                </li>
                                <li>
                                    <strong>Physical Isolation Distances:</strong> Plots are spaced with minimum border distances of 3 to 5 meters, with taller border crops (like sorghum or maize) acting as physical pollen barriers between adjacent accessions.
                                </li>
                                <li>
                                    <strong>Greenhouse Isolation for Wild Perennials:</strong> Allogamous wild relatives like <em>O. longistaminata</em> are grown inside screened insect-proof greenhouse bays with individual panicle glassine bagging.
                                </li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <img
                                    src="/files/img/operation/regen/nursery1.jpg"
                                    alt="Nursery preparation for rice regeneration"
                                    className="sidebar-card-img"
                                />
                                <h4>Molecular Purity Verification</h4>
                                <p>
                                    After harvest, newly bulked seed lots do not enter the cold vaults immediately. A random sub-sample of seedlings undergoes DNA extraction and screening against a 24-SNP KASP marker panel.
                                </p>
                                <p>
                                    The genomic profile is compared directly with the baseline passport fingerprint. If any off-types or outcrossing events are detected, the seed lot is quarantined or discarded.
                                </p>
                                <Link href="/research/quality-control" className="btn-secondary-outline full-width">
                                    View Molecular QC Workflow ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages of Field Cycle Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Regeneration Stages</span>
                        <h2 className="section-main-heading">
                            The 4-Step <em>Regeneration Cycle</em>
                        </h2>
                        <p className="section-subtext">
                            From nursery germination to threshing, drying, and vault re-entry.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'nursery-seedling',
                                title: '01. Sowing & Nursery Management',
                                subtitle: 'Transplanting healthy 21-day single seedlings per hill',
                                tag: 'Nursery Phase',
                                content: (
                                    <p>
                                        Pre-germinated seeds are sown in sterile nursery beds. Exactly 21 days after germination, vigorous seedlings are carefully lifted and transplanted into prepared field plots at single seedling per hill spacing (20 cm × 20 cm) to ensure each individual plant can be observed and characterization data recorded without competitive crowding.
                                    </p>
                                ),
                            },
                            {
                                id: 'field-monitoring',
                                title: '02. Field Roguing & Agronomic Care',
                                subtitle: 'Removing atypical plants prior to anthesis',
                                tag: 'Field Roguing',
                                content: (
                                    <p>
                                        Field agronomists inspect plots weekly. Prior to flowering (anthesis), plots are systematically "rogued" to remove any volunteer plants or atypical individuals that do not conform to the documented historical morphological descriptors of that accession.
                                    </p>
                                ),
                            },
                            {
                                id: 'harvest-threshing',
                                title: '03. Manual Harvesting & Panicle Threshing',
                                subtitle: 'Strict single-accession cleaning to prevent mechanical contamination',
                                tag: 'Harvesting',
                                content: (
                                    <p>
                                        Each plot is harvested manually using clean sickles. Panicles are gathered into labeled fabric sacks and threshed on dedicated tarpaulins. Threshing equipment is vacuum-cleaned and flame-sanitized between accessions to prevent mechanical seed mixing.
                                    </p>
                                ),
                            },
                            {
                                id: 'post-harvest-drying',
                                title: '04. Dehumidified Desiccation & Vault Restocking',
                                subtitle: 'Drying seeds to 5% moisture before sealing in tri-laminated foil',
                                tag: 'Vault Entry',
                                content: (
                                    <p>
                                        Freshly threshed seeds enter the drying room (15–19°C, 14–18% RH) where moisture is slowly lowered to 5–6%. After passing viability testing (&gt;85% germination), the fresh seeds are split into active distribution stocks and base conservation backups.
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
