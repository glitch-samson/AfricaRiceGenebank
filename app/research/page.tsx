import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function ResearchPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Research & Innovation' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Genomic Innovation</DataBadge>
                                <DataBadge variant="emerald">Molecular Genebank</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Scientific Research at the <em>AfricaRice Genebank</em>
                            </h1>
                            <p className="world-page-lead">
                                The RBCA is not merely a seed warehouse; it is an active center of genomic discovery and translational biology. We deploy high-throughput genotyping (DArTseq), molecular quality control arrays, and bioinformatics to unlock the genetic potential of African rice for climate-smart crop breeding.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/research/genomics" className="btn-primary-dark">
                                    Explore Genomics Program ↗
                                </Link>
                                <Link href="/publications" className="btn-secondary-outline">
                                    Peer-Reviewed Publications
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/activitie/genslide.jpg"
                                alt="Molecular biology laboratory research at AfricaRice"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Genomics and molecular marker laboratory at AfricaRice • M'bé</span>
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
                            value="9,120"
                            label="Genotyped Accessions"
                            sublabel="Comprehensive DArTseq SNP profiling"
                            source="AfricaRice Genomics Initiative"
                        />
                        <StatCard
                            value="31,739"
                            label="High-Quality SNPs"
                            sublabel="High-density polymorphic marker catalog"
                            source="Bioinformatics Pipeline"
                        />
                        <StatCard
                            value="350"
                            label="O. glaberrima Mini-Core"
                            sublabel="Capturing maximal allelic diversity for trials"
                            source="Published Mini-Core Panel"
                        />
                        <StatCard
                            value="8,381"
                            label="Accessions in Genesys"
                            sublabel="Open science genotype datasets online"
                            source="Genesys CIV033"
                        />
                    </div>
                </div>
            </section>

            {/* Three Research Pillars */}
            <section className="research-pillars-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Program Structure</span>
                        <h2 className="section-main-heading">
                            Our Three Scientific <em>Divisions</em>
                        </h2>
                        <p className="section-subtext">
                            Translating raw seed biodiversity into actionable agronomic and genomic solutions.
                        </p>
                    </div>

                    <div className="three-tiers-grid">
                        <div className="tier-card">
                            <div className="tier-head">
                                <span className="tier-pill">Genomics</span>
                                <h3>Genomics of Genebanks</h3>
                                <div className="tier-temp">High-Throughput DArTseq & GBS</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Large-scale genotyping of cultivated and wild accessions using Diversity Arrays Technology sequencing (DArTseq). Uncovering population structure, evolutionary phylogenies, and correcting historical mislabeling.
                                </p>
                                <ul className="tier-list">
                                    <li>9,120 accessions genotyped with 31,739 DArTseq SNPs</li>
                                    <li>Allele mining for drought, salinity, and disease resistance</li>
                                    <li>Open FAIR data deposited in Genesys</li>
                                </ul>
                                <Link href="/research/genomics" className="btn-primary-dark full-width">
                                    View Genomics Details ↗
                                </Link>
                            </div>
                        </div>

                        <div className="tier-card active-tier">
                            <div className="tier-head">
                                <span className="tier-pill highlight">Quality Control</span>
                                <h3>Molecular Quality Control (QC)</h3>
                                <div className="tier-temp">KASP SNP Arrays & Identity Tracking</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Guaranteeing true-to-type genetic integrity. Routine screening of regeneration harvests against original voucher fingerprints using custom KASP marker panels to detect seed mixing or outcrossing.
                                </p>
                                <ul className="tier-list">
                                    <li>Targeted KASP SNP identity fingerprinting</li>
                                    <li>Zero tolerance for off-types and outcrossing events</li>
                                    <li>High-integrity seed certification for breeders</li>
                                </ul>
                                <Link href="/research/quality-control" className="btn-primary-dark full-width">
                                    View Quality Control Details ↗
                                </Link>
                            </div>
                        </div>

                        <div className="tier-card base-tier">
                            <div className="tier-head">
                                <span className="tier-pill">Sub-Setting</span>
                                <h3>Sub-setting & Diversity Panels</h3>
                                <div className="tier-temp">Core & Mini-Core Assembly</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Evaluating 22,000 accessions in field trials is cost-prohibitive. We construct mathematically optimized Core (10%) and Mini-Core (1%) collections representing &gt;95% of total allelic richness.
                                </p>
                                <ul className="tier-list">
                                    <li>350-accession <em>O. glaberrima</em> mini-core panel</li>
                                    <li>Stratified sampling by geography and genetic distance</li>
                                    <li>Accelerated trait screening for drought and blast</li>
                                </ul>
                                <Link href="/research/sub-setting" className="btn-primary-dark full-width">
                                    View Sub-Setting Details ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
