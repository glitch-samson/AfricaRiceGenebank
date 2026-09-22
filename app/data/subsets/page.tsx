import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function SubsetsDataPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Open Data', href: '/data' },
                        { label: 'Subset & Mini-Core Matrices' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Open Data / Subsets</DataBadge>
                                <DataBadge variant="emerald">350 Accession Mini-Core</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Oryza glaberrima <em>Mini-Core Datasets</em>
                            </h1>
                            <p className="world-page-lead">
                                Download verified accession lists, geographic collection origins, and passport records for the AfricaRice 350-accession <em>Oryza glaberrima</em> mini-core panel, mathematically curated to represent the full allelic spectrum of African rice.
                            </p>
                            <div className="hero-cta-group">
                                <a
                                    href="https://www.genesys-pgr.org/subsets"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark"
                                >
                                    Browse Subset on Genesys ↗
                                </a>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Request Physical Mini-Core Seeds (SMTA)
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/data/subslide.jpg"
                                alt="Screen displaying mini-core accession lists"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>350-accession mini-core passport directory • AfricaRice Genebank</span>
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
                            value="350"
                            label="Total Accessions"
                            sublabel="Capturing >95% allelic richness"
                            source="AfricaRice Genomics Unit"
                        />
                        <StatCard
                            value="16"
                            label="Countries Represented"
                            sublabel="West & Central African rice origins"
                            source="Passport GPS Coordinates"
                        />
                        <StatCard
                            value="100%"
                            label="DArTseq Genotyped"
                            sublabel="Paired with high-density SNP matrices"
                            source="Genomics Study"
                        />
                        <StatCard
                            value="CSV / XLSX"
                            label="Available Formats"
                            sublabel="Machine-readable spreadsheet downloads"
                            source="FAIR Data Policy"
                        />
                    </div>
                </div>
            </section>

            {/* Dataset Preview & Download Cards */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Direct Data Access</span>
                        <h2 className="section-main-heading">
                            Download Subset <em>Matrices & Metadata</em>
                        </h2>
                        <p className="section-subtext">
                            Files are formatted for direct ingestion into R, Python, TASSEL, and GIS mapping tools.
                        </p>
                    </div>

                    <div className="download-cards-grid">
                        {/* Download 1: Accession Passport Table */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">📄</div>
                                <div>
                                    <h4>350 O. glaberrima Mini-Core Accession Passport Table</h4>
                                    <span className="file-meta">Format: CSV / XLSX • File Size: ~480 KB</span>
                                </div>
                            </div>
                            <p>
                                Includes accession ID (e.g. TOG 5681), institute code (CIV033), country of origin, collecting site coordinates (GPS), collection date, vernacular farmer variety name, and biological status.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/subsets"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark"
                                >
                                    Download from Genesys ↗
                                </a>
                            </div>
                        </div>

                        {/* Download 2: GIS Georeferenced Coordinates */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">🗺️</div>
                                <div>
                                    <h4>Spatial Distribution & Eco-Climatic Coordinates</h4>
                                    <span className="file-meta">Format: GeoJSON / KML • File Size: ~1.2 MB</span>
                                </div>
                            </div>
                            <p>
                                Complete GIS point layers of collecting sites mapped against African agro-ecological zones (Sahelian, Sudanian, Guinean, and forest zones) for spatial gap analysis and climate-analog modeling.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    View Georeferenced Map on Genesys ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
