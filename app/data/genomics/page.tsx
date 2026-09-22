import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function GenomicsDataPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Open Data', href: '/data' },
                        { label: 'Genomics & SNP Datasets' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Open Data / Genomics</DataBadge>
                                <DataBadge variant="emerald">31,739 DArTseq SNPs</DataBadge>
                                <DataBadge variant="slate">VCF 4.2 & HapMap Formats</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Genomic & Genotypic <em>Datasets</em>
                            </h1>
                            <p className="world-page-lead">
                                Access clean, high-density Single Nucleotide Polymorphism (SNP) matrices generated via Diversity Arrays Technology sequencing (DArTseq). Covering 9,120 cultivated and wild African rice accessions, formatted for immediate input into TASSEL, PLINK, GAPIT, and GEMMA for Genome-Wide Association Studies.
                            </p>
                            <div className="hero-cta-group">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark"
                                >
                                    Access Genotypes on Genesys ↗
                                </a>
                                <Link href="/research/genomics" className="btn-secondary-outline">
                                    Read Genomics Research Overview
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/data/genslide.jpg"
                                alt="Genomics sequencing files and SNP data"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>High-throughput SNP matrices and population structure analysis • RBCA</span>
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
                            value="31,739"
                            label="Filtered Polymorphic SNPs"
                            sublabel="MAF > 0.01 • Call rate > 80%"
                            source="Bioinformatics Filtering Pipeline"
                        />
                        <StatCard
                            value="9,120"
                            label="Genotyped Accessions"
                            sublabel="Cultivated African/Asian rice & wild relatives"
                            source="AfricaRice Genomics Facility"
                        />
                        <StatCard
                            value="8,381"
                            label="Public Records in Genesys"
                            sublabel="Free open-access download under CIV033"
                            source="Genesys PGR Repository"
                        />
                        <StatCard
                            value="12"
                            label="Rice Chromosomes Mapped"
                            sublabel="Aligned to Nipponbare & CG14 reference genomes"
                            source="Physical Genome Map"
                        />
                    </div>
                </div>
            </section>

            {/* Downloadable Files Grid */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">File Repository</span>
                        <h2 className="section-main-heading">
                            Available Genomic <em>Files & Matrices</em>
                        </h2>
                        <p className="section-subtext">
                            Prepared according to strict FAIR standards for computational genetics workflows.
                        </p>
                    </div>

                    <div className="download-cards-grid">
                        {/* File 1: VCF Matrix */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">🧬</div>
                                <div>
                                    <h4>31,739 DArTseq SNP Matrix (VCF v4.2)</h4>
                                    <span className="file-meta">Format: VCF.GZ (Compressed) • File Size: ~185 MB</span>
                                </div>
                            </div>
                            <p>
                                Standard Variant Call Format file containing genotypic calls for 9,120 accessions. Physical positions mapped against the <em>O. sativa</em> (Os-Nipponbare-Reference-IRGSP-1.0) and <em>O. glaberrima</em> (CG14) reference assemblies.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary-dark"
                                >
                                    Download VCF from Genesys ↗
                                </a>
                            </div>
                        </div>

                        {/* File 2: HapMap Format */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">📊</div>
                                <div>
                                    <h4>HapMap Genotype Table for TASSEL / GAPIT</h4>
                                    <span className="file-meta">Format: HapMap (.hmp.txt) • File Size: ~240 MB</span>
                                </div>
                            </div>
                            <p>
                                Pre-formatted HapMap table ready for immediate import into TASSEL and GAPIT for Genome-Wide Association Studies (GWAS) and linkage disequilibrium (LD) decay analysis.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Request HapMap File ↗
                                </a>
                            </div>
                        </div>

                        {/* File 3: Population Structure & PCA */}
                        <div className="download-card">
                            <div className="download-card-head">
                                <div className="file-icon">📈</div>
                                <div>
                                    <h4>Population Structure Q-Matrix & PCA Coordinates</h4>
                                    <span className="file-meta">Format: CSV / RData • File Size: ~14 MB</span>
                                </div>
                            </div>
                            <p>
                                ADMIXTURE ancestry coefficients (K=2 to K=8) and the first 10 principal components (PCs) computed across all genotyped accessions for population stratification correction in statistical models.
                            </p>
                            <div className="download-actions">
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Download PCA Coordinates ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
