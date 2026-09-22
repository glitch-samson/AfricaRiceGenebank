import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function DataPortalPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Open Data Portal' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">CGIAR Open Access</DataBadge>
                                <DataBadge variant="emerald">FAIR Data Principles</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Open Science & <em>FAIR Data Repository</em>
                            </h1>
                            <p className="world-page-lead">
                                In accordance with the CGIAR Open and FAIR Data Policy and the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), the RBCA makes its genomic, phenotypic, and passport datasets freely available to global researchers, plant breeders, and educators.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/data/genomics" className="btn-primary-dark">
                                    Genomic Datasets ↗
                                </Link>
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Browse on Genesys (CIV033) ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/data/genslide.jpg"
                                alt="Bioinformatics and open data infrastructure at AfricaRice"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Bioinformatics data portal linking genotypes with field phenotypes</span>
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
                            value="8,381"
                            label="Public Genotypes"
                            sublabel="Deposited in Genesys global repository"
                            source="Genesys CIV033"
                        />
                        <StatCard
                            value="14,114"
                            label="DOIs Assigned"
                            sublabel="Permanent digital object identifiers"
                            source="FAO GLIS System"
                        />
                        <StatCard
                            value="60+"
                            label="Phenotypic Descriptors"
                            sublabel="Agronomic, morphology & grain chemistry"
                            source="Bioversity / IRRI Standard"
                        />
                        <StatCard
                            value="100%"
                            label="FAIR Compliant"
                            sublabel="Findable, Accessible, Interoperable, Reusable"
                            source="CGIAR Policy"
                        />
                    </div>
                </div>
            </section>

            {/* Three Data Repositories */}
            <section className="data-repositories-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Data Catalog</span>
                        <h2 className="section-main-heading">
                            Explore Public <em>Datasets</em>
                        </h2>
                        <p className="section-subtext">
                            Download raw data matrices or explore interactive summaries.
                        </p>
                    </div>

                    <div className="three-tiers-grid">
                        {/* Repository 1: Subsets */}
                        <div className="tier-card">
                            <div className="tier-head">
                                <span className="tier-pill">Diversity Panels</span>
                                <h3>Subsets & Mini-Core Matrices</h3>
                                <div className="tier-temp">Accession Lists & Passport Coordinates</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Download complete accession registries for the flagship 350-accession <em>Oryza glaberrima</em> mini-core collection, including collection coordinates, vernacular names, and ecological origins.
                                </p>
                                <ul className="tier-list">
                                    <li>350 Mini-Core Accession List (.CSV / .XLSX)</li>
                                    <li>Georeferenced GPS coordinates (.KML / .GeoJSON)</li>
                                    <li>Direct Genesys basket order links</li>
                                </ul>
                                <Link href="/data/subsets" className="btn-primary-dark full-width">
                                    Explore Subsets Data ↗
                                </Link>
                            </div>
                        </div>

                        {/* Repository 2: Genomics */}
                        <div className="tier-card active-tier">
                            <div className="tier-head">
                                <span className="tier-pill highlight">Genotypes</span>
                                <h3>Genomics & DArTseq SNP Matrices</h3>
                                <div className="tier-temp">HapMap, VCF & Population Trees</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    High-density single nucleotide polymorphism (SNP) datasets generated via DArTseq across 9,120 accessions. Suitable for Genome-Wide Association Studies (GWAS) and phylogenetic analysis.
                                </p>
                                <ul className="tier-list">
                                    <li>31,739 Filtered SNP Matrix (VCF & HapMap)</li>
                                    <li>Population structure Q-matrices (.Q / .P)</li>
                                    <li>Principal Component Analysis (PCA) coordinates</li>
                                </ul>
                                <Link href="/data/genomics" className="btn-primary-dark full-width">
                                    Explore Genomics Datasets ↗
                                </Link>
                            </div>
                        </div>

                        {/* Repository 3: Characterization */}
                        <div className="tier-card base-tier">
                            <div className="tier-head">
                                <span className="tier-pill">Phenotypes</span>
                                <h3>Characterization & Trait Datasets</h3>
                                <div className="tier-temp">Agro-Morphological Field Observations</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Standardized phenotypic observations scored across thousands of accessions grown at the M'bé research station under controlled agronomic conditions.
                                </p>
                                <ul className="tier-list">
                                    <li>60+ Quantitative and Qualitative Descriptors</li>
                                    <li>Grain quality, amylose content, and seed weight</li>
                                    <li>Drought, RYMV, and gall midge response scores</li>
                                </ul>
                                <Link href="/data/characterization" className="btn-primary-dark full-width">
                                    Explore Trait Datasets ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
