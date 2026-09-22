import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function SubSettingPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Research', href: '/research' },
                        { label: 'Sub-setting & Diversity Panels' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Research & Diversity Panels</DataBadge>
                                <DataBadge variant="emerald">350 O. glaberrima Mini-Core</DataBadge>
                                <DataBadge variant="slate">Core Collection Science</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Sub-setting: <em>Maximizing Diversity, Minimizing Redundancy</em>
                            </h1>
                            <p className="world-page-lead">
                                Screening 22,000 accessions in multi-location field trials is financially and logistically prohibitive for plant breeders. AfricaRice's sub-setting program uses advanced genomic distance algorithms and agro-ecological stratification to assemble compact Core (10%) and Mini-Core (1%) collections that capture over 95% of total allelic richness.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/data/subsets" className="btn-primary-dark">
                                    Download Mini-Core Accessions ↗
                                </Link>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Order Mini-Core Panel
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/activitie/subslide.jpg"
                                alt="Diversity panel evaluation plots in the field"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Evaluating mini-core diversity panels under field drought stress • M'bé Station</span>
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
                            value="350"
                            label="Mini-Core Accessions"
                            sublabel="Curated from 3,600+ O. glaberrima samples"
                            source="DArTseq Marker Clustering"
                        />
                        <StatCard
                            value="> 95%"
                            label="Allelic Richness Captured"
                            sublabel="Near-complete genetic variation preserved"
                            source="Genomic Diversity Metrics"
                        />
                        <StatCard
                            value="90%"
                            label="Phenotyping Cost Savings"
                            sublabel="Feasible scale for national breeding trials"
                            source="Breeding Economics Analysis"
                        />
                        <StatCard
                            value="FAIR"
                            label="Data Availability"
                            sublabel="Free open-access download on Genesys"
                            source="Genesys Subsets Registry"
                        />
                    </div>
                </div>
            </section>

            {/* Methodology & Impact */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Methodological Framework</span>
                            <h2 className="section-main-heading">
                                How AfricaRice Constructs <em>Representative Panels</em>
                            </h2>
                            <p className="editorial-lead">
                                As formulated by Sir Otto Frankel and Anthony Brown, a core collection contains a representative sample of the taxonomical and geographic diversity of the primary collection with minimum genetic redundancy.
                            </p>
                            <p>
                                At AfricaRice, sub-setting begins with <strong>stratified hierarchical sampling</strong>:
                            </p>
                            <ul className="bullet-feature-list">
                                <li>
                                    <strong>Step 1 — Geographic & Eco-Climatic Stratification:</strong> Accessions are partitioned into groups reflecting their agro-ecological provenance (e.g. Sahelian dryland, coastal mangrove, humid forest valley, Guinean highland).
                                </li>
                                <li>
                                    <strong>Step 2 — High-Density Genomic Clustering:</strong> Using pairwise genetic distance matrices generated from 31,739 DArTseq SNPs, algorithmic clustering identifies sub-groups with distinct allelic compositions.
                                </li>
                                <li>
                                    <strong>Step 3 — Maximum Length Algorithm:</strong> Accessions within each genetic cluster are selected based on extreme phenotypic divergence (flowering time, plant height, seed shape) to maximize functional diversity.
                                </li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <h4>Impact on African Plant Breeding</h4>
                                <p>
                                    National agricultural research programs in Senegal, Mali, Côte d'Ivoire, Nigeria, and Madagascar now routinely request the <strong>350-accession mini-core</strong> instead of random accessions.
                                </p>
                                <p>
                                    Within two seasons of screening the 350-accession panel, breeders successfully identified 12 novel donors for extreme vegetative drought tolerance and 6 donors immune to African Rice Gall Midge.
                                </p>
                                <Link href="/data/subsets" className="btn-primary-dark full-width">
                                    Access 350 Mini-Core Dataset ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Setting Features Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Key Advantages</span>
                        <h2 className="section-main-heading">
                            Why Sub-Setting Accelerates <em>Crop Improvement</em>
                        </h2>
                        <p className="section-subtext">
                            Bridging the gap between vast seed vaults and practical agricultural fields.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'multi-environment-testing',
                                title: 'Cost-Effective Multi-Location Trialing (MET)',
                                subtitle: 'Replicating compact panels across multiple drought, salinity, and cold hotspots',
                                tag: 'Field Agronomy',
                                content: (
                                    <p>
                                        Planting 22,000 accessions in randomized complete block designs (RCBD) across 5 different African countries is impossible. However, the 350-accession mini-core can easily be replicated across contrasting test sites in West, East, and Southern Africa in a single season, producing robust genotype × environment (G×E) interaction data.
                                    </p>
                                ),
                            },
                            {
                                id: 'digital-phenotyping',
                                title: 'Accelerated Drone and High-Throughput Digital Phenotyping',
                                subtitle: 'Deploying multispectral aerial cameras and automated canopy sensors',
                                tag: 'Precision Agriculture',
                                content: (
                                    <p>
                                        Compact mini-core panels allow researchers to deploy precision sensors—such as drone-mounted multispectral cameras measuring NDVI, canopy temperature depression, and chlorophyll fluorescence—without exceeding field scanning capacity or data processing budgets.
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
