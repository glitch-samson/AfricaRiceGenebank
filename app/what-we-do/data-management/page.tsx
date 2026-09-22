import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function DataManagementPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Data Management & GRIN-Global' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 07 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">GRIN-Global Community Edition</DataBadge>
                                <DataBadge variant="slate">Genesys CIV033</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Genebank Informatics & <em>Data Management</em>
                            </h1>
                            <p className="world-page-lead">
                                Modern genebank management relies on robust digital infrastructure. The RBCA operates GRIN-Global Community Edition (GGCE) to track passport origins, seed inventory quantities, viability curves, and genomic markers across decades, synchronizing authoritative records with global platforms like Genesys.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/data" className="btn-primary-dark">
                                    Access Open Data Portal ↗
                                </Link>
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Browse Genesys CIV033 Database ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/dataslide.jpg"
                                alt="Database manager reviewing accession records in GRIN-Global"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Genebank Information System terminal at AfricaRice • M'bé Station</span>
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
                            value="14,114"
                            label="Permanent DOIs"
                            sublabel="Digital Object Identifiers assigned"
                            source="Global DOI Registry"
                        />
                        <StatCard
                            value="CIV033"
                            label="FAO WIEWS Institute Code"
                            sublabel="Official international genebank identifier"
                            source="FAO WIEWS Registry"
                        />
                        <StatCard
                            value="GGCE"
                            label="Database Architecture"
                            sublabel="GRIN-Global Community Edition"
                            source="Crop Trust Partnership"
                        />
                        <StatCard
                            value="100%"
                            label="Barcoded Seed Packets"
                            sublabel="High-precision digital inventory tracking"
                            source="Operations Audit"
                        />
                    </div>
                </div>
            </section>

            {/* Informatics Systems Breakdown */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Digital Infrastructure</span>
                            <h2 className="section-main-heading">
                                From Paper Ledgers to <em>Digital Precision</em>
                            </h2>
                            <p className="editorial-lead">
                                The AfricaRice Genebank Information System links every physical seed packet in our −20°C freezer vaults to its complete biographical and scientific history.
                            </p>
                            <p>
                                By deploying <strong>GRIN-Global Community Edition (GGCE)</strong>—the open-source platform created by the Crop Trust and USDA-ARS—AfricaRice manages:
                            </p>
                            <ul className="bullet-feature-list">
                                <li><strong>Accession Registry:</strong> Taxonomic classification, collector names, GPS coordinates, vernacular variety names, and biological status.</li>
                                <li><strong>Inventory Management:</strong> Exact gram weights, packet locations (room, rack, shelf, box number), and automated regeneration threshold triggers when stocks drop below 100g.</li>
                                <li><strong>Viability Surveillance:</strong> Historical germination test curves tracking seed senescence over 5, 10, and 20 years to forecast regeneration timelines.</li>
                                <li><strong>Distribution Tracking:</strong> Complete audit trails of SMTA agreements, recipient addresses, phytosanitary certificates, and courier tracking numbers.</li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <h4>Global Interoperability via Genesys</h4>
                                <p>
                                    All public passport and phenotypic records are mirrored live on <strong>Genesys</strong>, the global gateway to plant genetic resources for food and agriculture.
                                </p>
                                <p>
                                    Researchers can cross-reference AfricaRice accessions with datasets from IRRI (Philippines), CIAT (Colombia), and the Dale Bumpers National Rice Research Center (USA).
                                </p>
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark full-width"
                                >
                                    Open Genesys CIV033 Portal ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Informatics Standards Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Data Governance</span>
                        <h2 className="section-main-heading">
                            Data Standards & <em>Digital Identifiers</em>
                        </h2>
                        <p className="section-subtext">
                            Adhering to international biodiversity informatics protocols.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'digital-object-identifiers',
                                title: 'Digital Object Identifiers (DOIs) for Plant Genetic Resources',
                                subtitle: 'Permanent, immutable web references linking seeds to scientific publications',
                                tag: 'Data Citation',
                                content: (
                                    <p>
                                        Over 14,114 accessions at the RBCA have been assigned permanent Digital Object Identifiers (DOIs) under the FAO Global Information System (GLIS). When an agronomist or geneticist publishes a paper using AfricaRice seed, citing the DOI permanently connects their scientific findings to the exact genebank voucher sample.
                                    </p>
                                ),
                            },
                            {
                                id: 'mcpd-standard',
                                title: 'Multi-Crop Passport Descriptors (MCPD v2.1)',
                                subtitle: 'Standardized schema facilitating cross-institutional data sharing',
                                tag: 'Interoperability',
                                content: (
                                    <p>
                                        Data is stored and exported following the FAO/Bioversity Multi-Crop Passport Descriptors (MCPD) standard. This standard format guarantees that passport information can be ingested seamlessly by international databases, genebank tools, and bioinformatic pipelines without manual translation.
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
