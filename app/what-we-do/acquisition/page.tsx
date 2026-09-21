import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function AcquisitionPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Collection & Acquisition' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 01 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">Nagoya & SMTA Compliant</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Germplasm Collection & <em>Acquisition</em>
                            </h1>
                            <p className="world-page-lead">
                                A world-class genebank begins with systematic exploration, comprehensive passport documentation, and lawful international germplasm transfer. Since the 1970s, AfricaRice has led targeted collecting missions across 28 African nations, supplemented by historic institutional donations.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/what-we-do/conservation" className="btn-primary-dark">
                                    Next Stage: Conservation Vaults ↗
                                </Link>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Germplasm Request Guidelines
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/acqslide1.jpg"
                                alt="Field collection expedition in West Africa"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Collecting farmer landraces in rural West Africa • AfricaRice Archives</span>
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
                            value="21,300+"
                            label="Registered Samples"
                            sublabel="Accurately cataloged with origin metadata"
                            source="AfricaRice Acquisition Log"
                        />
                        <StatCard
                            value="85%"
                            label="African Origin"
                            sublabel="Collected across 28 member countries"
                            source="Genesys CIV033 Database"
                        />
                        <StatCard
                            value="1970s"
                            label="First Collecting Missions"
                            sublabel="Over 5 decades of continuous field exploration"
                            source="Historical Archive"
                        />
                        <StatCard
                            value="100%"
                            label="Legal Compliance"
                            sublabel="Nagoya Protocol & FAO ITPGRFA Annex 1"
                            source="FAO Treaty Secretariat"
                        />
                    </div>
                </div>
            </section>

            {/* In-Depth Protocols & Sources */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Provenance & Accessioning</span>
                            <h2 className="section-main-heading">
                                How Germplasm Enters the <em>AfricaRice Repository</em>
                            </h2>
                            <p className="editorial-lead">
                                Every sample entering the RBCA collection is assigned a unique accession number only after rigorous verification of biological provenance, legal authorization, and seed physiological health.
                            </p>
                            <p>
                                The collection has been assembled through two primary pathways:
                            </p>
                            <ul className="bullet-feature-list">
                                <li>
                                    <strong>Direct Field Collecting Missions (1970s–Present):</strong> Multidisciplinary expeditions conducted in collaboration with National Agricultural Research Systems (NARS) and local farming communities. Missions target remote traditional rice-growing pockets, mangrove swamps, highland terraces, and wild wetland habitats threatened by genetic erosion.
                                </li>
                                <li>
                                    <strong>Institutional Germplasm Transfers:</strong> Major historical duplicate collections received from ORSTOM (now IRD), IRAT (now CIRAD), the International Institute of Tropical Agriculture (IITA), CIAT, and national collections across Africa.
                                </li>
                            </ul>

                            <h3>Mandatory Passport Metadata</h3>
                            <p>
                                An accession is only registered when complete passport data is recorded, including:
                            </p>
                            <ul className="bullet-feature-list">
                                <li><strong>Geographic Coordinates:</strong> GPS latitude, longitude, and elevation of the original collecting site.</li>
                                <li><strong>Ecological Classification:</strong> Rainfed upland, hydromorphic lowland, mangrove, deepwater, or irrigated system.</li>
                                <li><strong>Vernacular & Cultural Context:</strong> Local farmer variety names, culinary uses, sowing dates, and cultural significance.</li>
                                <li><strong>Taxonomic Identification:</strong> Species verification confirmed through agro-morphological markers and DNA barcoding.</li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <img
                                    src="/files/img/operation/data1.jpg"
                                    alt="Logging passport data into GRIN-Global database"
                                    className="sidebar-card-img"
                                />
                                <h4>International Legal Compliance</h4>
                                <p>
                                    Under the <strong>Nagoya Protocol</strong> on Access and Benefit-Sharing and the <strong>FAO International Treaty (ITPGRFA)</strong>, all collection missions are conducted with Prior Informed Consent (PIC) and Mutually Agreed Terms (MAT) with host nations.
                                </p>
                                <p>
                                    This guarantees that genetic resources remain global public goods, freely accessible to plant breeders worldwide under the Standard Material Transfer Agreement (SMTA).
                                </p>
                                <Link href="/what-we-do/distribution" className="btn-secondary-outline full-width">
                                    Review SMTA Distribution Terms ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acquisition Protocols Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Standard Operating Procedures</span>
                        <h2 className="section-main-heading">
                            Acquisition Quality <em>Control Steps</em>
                        </h2>
                        <p className="section-subtext">
                            Steps undertaken before any newly collected sample is introduced to the permanent cold storage vaults.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'seed-health-inspection',
                                title: 'Quarantine & Seed Health Inspection',
                                subtitle: 'Eliminating seed-borne fungi, bacteria, and nematodes',
                                tag: 'Phytosanitary',
                                content: (
                                    <p>
                                        Incoming samples are quarantined in designated inspection laboratories. Visual examination, agar plating, and blotter tests identify seed-transmitted pathogens such as <em>Magnaporthe oryzae</em> (blast), <em>Xanthomonas oryzae</em> (bacterial blight), and <em>Aphelenchoides besseyi</em> (white-tip nematode). Infected samples are treated or multiplied under greenhouse isolation.
                                    </p>
                                ),
                            },
                            {
                                id: 'accession-number-assignment',
                                title: 'Registration in GRIN-Global Community Edition',
                                subtitle: 'Assigning unique identifiers and global DOIs',
                                tag: 'Data Stewardship',
                                content: (
                                    <p>
                                        Each verified sample receives a permanent AfricaRice inventory number and a Digital Object Identifier (DOI). All passport metadata is uploaded to GRIN-Global and synchronized with the public Genesys platform under institute code CIV033.
                                    </p>
                                ),
                            },
                            {
                                id: 'gap-analysis',
                                title: 'Genomic Gap Analysis for Future Collecting',
                                subtitle: 'Using GIS and DArTseq markers to identify underrepresented agro-ecologies',
                                tag: 'Exploration Planning',
                                content: (
                                    <p>
                                        By cross-referencing GIS agro-climatic layers with current accession points and DArTseq genetic clusters, scientists pinpoint geographic and genomic gaps—such as drought-prone arid borders or secluded coastal mangrove pockets—directing future collecting expeditions.
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
