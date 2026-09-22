import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function GenomicsResearchPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Research', href: '/research' },
                        { label: 'Genomics of Genebanks' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">High-Throughput DArTseq</DataBadge>
                                <DataBadge variant="emerald">9,120 Accessions Profiled</DataBadge>
                                <DataBadge variant="slate">31,739 Polymorphic SNPs</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Genomics of Genebanks: <em>Digital Biology at Scale</em>
                            </h1>
                            <p className="world-page-lead">
                                By integrating Next-Generation Sequencing (NGS) and Diversity Arrays Technology sequencing (DArTseq) with genebank operations, AfricaRice has transformed passive seed conservation into an active genomic engine. Our molecular datasets provide high-resolution passports, uncover population structure, and direct allele mining for climate adaptation.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/data/genomics" className="btn-primary-dark">
                                    Download Genotypic Datasets ↗
                                </Link>
                                <Link href="/publications" className="btn-secondary-outline">
                                    Read Flagship Genomics Monograph
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/activitie/genslide.jpg"
                                alt="High-throughput genomics sequencing at AfricaRice"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>High-density DNA marker genotyping at AfricaRice Genomics Unit</span>
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
                            value="9,120"
                            label="Genotyped Accessions"
                            sublabel="Culminating a multi-year genotyping initiative"
                            source="AfricaRice Genomics Data"
                        />
                        <StatCard
                            value="31,739"
                            label="DArTseq SNP Markers"
                            sublabel="Clean, filtered, high-call-rate SNPs"
                            source="Bioinformatics Pipeline"
                        />
                        <StatCard
                            value="8,381"
                            label="Public in Genesys"
                            sublabel="Free open-access genomic datasets"
                            source="Genesys CIV033 Portal"
                        />
                        <StatCard
                            value="100%"
                            label="Molecular Identity"
                            sublabel="Resolving historical duplicates & misclassifications"
                            source="Population Genetics Study"
                        />
                    </div>
                </div>
            </section>

            {/* The Landmark Genomics Project */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Milestone Research</span>
                            <h2 className="section-main-heading">
                                From 4,000 Pilot Samples to <em>9,120 Genomes</em>
                            </h2>
                            <p className="editorial-lead">
                                Supported by the CGIAR Genebank Platform and the Global Crop Diversity Trust, AfricaRice embarked on an ambitious program to genotype its primary collection.
                            </p>
                            <p>
                                What began as a pilot project evaluating approximately 4,000 accessions using 31,739 DArTseq SNPs expanded into a massive effort profiling <strong>9,120 accessions</strong>—representing both cultivated species (<em>O. glaberrima</em> and <em>O. sativa</em>) and wild relatives.
                            </p>
                            <p>
                                Over <strong>8,381 genotyped accessions</strong> are publicly accessible through the Genesys global portal, establishing one of the richest publicly available genomic resources for any crop genebank in the developing world.
                            </p>

                            <h3>Key Scientific Discoveries</h3>
                            <ul className="bullet-feature-list">
                                <li>
                                    <strong>Resolving Species Misclassifications:</strong> DArTseq markers identified historical seed lots misidentified during manual field collection, separating genuine <em>O. glaberrima</em> from introgressed sativa landraces.
                                </li>
                                <li>
                                    <strong>Uncovering Cryptic Sub-Populations:</strong> Genetic distance clustering revealed five genetically distinct geographic sub-populations of African rice across West Africa, reflecting isolated farming traditions and river basin adaptations.
                                </li>
                                <li>
                                    <strong>Identifying Redundant Duplicates:</strong> Genetic distance matrices flagged identical duplicate accessions collected under different vernacular names, optimizing vault storage space without sacrificing allelic diversity.
                                </li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <img
                                    src="/files/img/pub/pub1.jpeg"
                                    alt="Flagship genomics book cover"
                                    className="sidebar-card-img"
                                />
                                <h4>The Flagship Monograph</h4>
                                <p>
                                    <em>“Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources”</em>
                                </p>
                                <p>
                                    Led by Dr. Marie-Noelle Ndjiondjop and AfricaRice scientists, this landmark volume details the protocols, bioinformatic pipelines, and case studies of deploying DArTseq markers in genebank stewardship.
                                </p>
                                <Link href="/publications" className="btn-primary-dark full-width">
                                    Explore Book & Publications ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Practical Applications</span>
                        <h2 className="section-main-heading">
                            How Genomics Powers <em>Genebank Management</em>
                        </h2>
                        <p className="section-subtext">
                            Transforming raw DNA sequences into practical tools for breeders and curators.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'molecular-passports',
                                title: '01. Digital Molecular Passports for Every Accession',
                                subtitle: 'Permanent genomic barcodes that cannot be lost or misread',
                                tag: 'Identity Assurance',
                                content: (
                                    <p>
                                        Traditional paper tags and physical seed packets can deteriorate or be mislabeled over decades. A digital molecular passport—based on high-density SNP fingerprints—provides an indelible, unforgeable genetic identity for every accession, ensuring complete traceability across future generations.
                                    </p>
                                ),
                            },
                            {
                                id: 'allele-mining',
                                title: '02. Targeted Allele Mining for Climate Resilience',
                                subtitle: 'Searching for rare alleles conferring drought, heat, and salinity tolerance',
                                tag: 'Trait Discovery',
                                content: (
                                    <p>
                                        By combining SNP genotypic matrices with phenotype data from drought and blast screening trials, geneticists identify specific donor accessions carrying rare alleles. These donors are immediately entered into marker-assisted recurrent selection (MARS) and genomic selection pipelines.
                                    </p>
                                ),
                            },
                            {
                                id: 'gap-filling',
                                title: '03. Genetic Gap Analysis & Targeted Collecting',
                                subtitle: 'Discovering underrepresented gene pools before they disappear in the wild',
                                tag: 'Conservation Strategy',
                                content: (
                                    <p>
                                        Spatial genomic analysis maps allelic diversity across African geography. Where geographic regions exhibit high environmental vulnerability but lack corresponding genomic clusters in the genebank, AfricaRice deploys targeted rescue expeditions to collect remaining wild stands and farmer landraces.
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
