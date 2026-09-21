import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function CharacterizationDataPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Open Data', href: '/data' },
                        { label: 'Characterization & Trait Datasets' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Open Data / Phenotypes</DataBadge>
                                <DataBadge variant="emerald">60+ Descriptors</DataBadge>
                                <DataBadge variant="slate">Genesys Interoperable</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Agro-Morphological <em>Trait Datasets</em>
                            </h1>
                            <p className="world-page-lead">
                                Download standardized phenotypic datasets evaluating over 10,000 AfricaRice accessions grown at the M'bé Research Station. These observations cover phenology, plant architecture, grain yield components, and biotic stress evaluations scored in accordance with international Bioversity/IRRI standards.
                            </p>
                            <div className="hero-cta-group">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark"
                                >
                                    Filter Traits on Genesys (CIV033) ↗
                                </a>
                                <Link href="/what-we-do/characterization" className="btn-secondary-outline">
                                    Phenotyping Methodology & Protocols
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/data/charslide.jpg"
                                alt="Phenotypic trait spreadsheets and descriptor catalogs"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Agro-morphological descriptor matrix • AfricaRice Genetic Resources Unit</span>
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
                            value="60+"
                            label="Descriptor Traits"
                            sublabel="Vegetative, floral & grain descriptors"
                            source="Bioversity / IRRI Manual"
                        />
                        <StatCard
                            value="10,000+"
                            label="Scored Accessions"
                            sublabel="Multi-year field trials at M'bé"
                            source="AfricaRice Field Ledgers"
                        />
                        <StatCard
                            value="≥ 10"
                            label="Plants Sampled"
                            sublabel="Standard representative sample per accession"
                            source="Standard Operating Procedure"
                        />
                        <StatCard
                            value="FAIR"
                            label="Open Access"
                            sublabel="Directly downloadable in CSV and Excel"
                            source="CGIAR Open Data Mandate"
                        />
                    </div>
                </div>
            </section>

            {/* Trait Data Files */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Direct Downloads</span>
                        <h2 className="section-main-heading">
                            Download Standardized <em>Trait Matrices</em>
                        </h2>
                        <p className="section-subtext">
                            Files are formatted according to international Multi-Crop Passport Descriptors and Bioversity crop descriptor codes.
                        </p>
                    </div>

                    <div className="download-cards-grid">
                        {/* File 1: Master Phenotype Matrix */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">📋</div>
                                <div>
                                    <h4>Comprehensive Agro-Morphological Descriptor Matrix</h4>
                                    <span className="file-meta">Format: CSV / XLSX • File Size: ~18 MB</span>
                                </div>
                            </div>
                            <p>
                                Complete phenotypic records containing plant height, effective tillering, days to 50% flowering, maturity, panicle length, ligule shape, awn presence, grain length/width ratio, and 1,000-grain weight for over 10,000 accessions.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark"
                                >
                                    Query Dataset on Genesys ↗
                                </a>
                            </div>
                        </div>

                        {/* File 2: Stress Evaluation Matrix */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">🛡️</div>
                                <div>
                                    <h4>Biotic & Abiotic Stress Screening Ratings</h4>
                                    <span className="file-meta">Format: CSV / XLSX • File Size: ~4.5 MB</span>
                                </div>
                            </div>
                            <p>
                                Field and greenhouse evaluation scores for Rice Yellow Mottle Virus (RYMV), African Rice Gall Midge, bacterial leaf blight, blast, iron (Fe²⁺) toxicity, and terminal drought response.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Access Stress Ratings ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
