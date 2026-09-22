import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function AsianRicePage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Collection', href: '/collection' },
                        { label: 'Asian Rice (Oryza sativa)' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">AA Genome (2n = 24)</DataBadge>
                                <DataBadge variant="emerald">~79% of RBCA Collection</DataBadge>
                                <DataBadge variant="slate">16,500+ Accessions</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Asian Cultivated Rice: <em>Oryza sativa L.</em>
                            </h1>
                            <p className="world-page-lead">
                                Comprising approximately 79% of the genebank holdings, the <em>Oryza sativa</em> collection at RBCA holds thousands of locally adapted African landraces and improved cultivars across both the <strong>indica</strong> (~49%) and <strong>japonica</strong> (~30%) subspecies, safeguarding crucial variation for high-yield food production across diverse African agro-ecologies.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Request Sativa Accessions (SMTA) ↗
                                </Link>
                                <Link href="/data/characterization" className="btn-secondary-outline">
                                    Phenotypic Descriptor Data
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/species/asian/slide1.jpg"
                                alt="Oryza sativa panicles in field trials"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>High-yielding Oryza sativa L. landraces at M'bé Station • Côte d'Ivoire</span>
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
                            value="16,500+"
                            label="Conserved Accessions"
                            sublabel="Diverse landraces & improved cultivars"
                            source="AfricaRice Collection Records"
                        />
                        <StatCard
                            value="49%"
                            label="Indica Subspecies"
                            sublabel="Adapted to lowland, irrigated & valley ecologies"
                            source="Phenotypic & Genomic Classification"
                        />
                        <StatCard
                            value="30%"
                            label="Japonica Subspecies"
                            sublabel="Tropical japonica adapted to upland plateaus"
                            source="Subspecies Marker Analysis"
                        />
                        <StatCard
                            value="14,114"
                            label="DOIs Assigned"
                            sublabel="Globally indexed in Genesys CIV033"
                            source="International DOI Foundation"
                        />
                    </div>
                </div>
            </section>

            {/* Subspecies & Agro-Ecological Adaptation */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Agro-Ecological Distribution</span>
                            <h2 className="section-main-heading">
                                Indica vs. Japonica in <em>African Agro-Ecologies</em>
                            </h2>
                            <p className="editorial-lead">
                                Introduced to coastal Africa in the 16th century via Portuguese and Arab maritime trade, <em>Oryza sativa</em> underwent centuries of localized farmer selection across African microclimates, establishing unique African landraces with distinct adaptation traits.
                            </p>
                            <p>
                                Unlike Asian growing regions dominated by uniform irrigated paddies, rice in Africa spans four sharply contrasting ecologies: <strong>rainfed upland</strong> (approx. 40% of production area), <strong>rainfed lowland</strong> (approx. 40%), <strong>irrigated lowland</strong> (approx. 12%), and <strong>deepwater/mangrove swamp</strong> (approx. 8%).
                            </p>

                            <h3>Subspecies Comparison at the RBCA Genebank</h3>
                            <ul className="bullet-feature-list">
                                <li>
                                    <strong>Indica Subspecies (~49%):</strong> Characterized by slender grains, profuse tillering, and broad tolerance to submersion. Well-adapted to African rainfed lowlands and irrigated perimeters such as the Senegal River Valley and Office du Niger in Mali.
                                </li>
                                <li>
                                    <strong>Tropical Japonica Subspecies (~30%):</strong> Characterized by thick, sturdy culms, broad dark green leaves, bold or medium grains, and deep rooting systems. Ideally suited to rainfed upland slopes and plateaus across Guinea, Côte d'Ivoire, and Nigeria where drought periods occur frequently.
                                </li>
                                <li>
                                    <strong>Intermediate & Traditional Landraces:</strong> Distinct African ecotypes that have acquired specific cold tolerance (Madagascar high plateaus) or tolerance to salinity (Casamance mangrove rice).
                                </li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <div className="stat-highlight-box">
                                    <strong>Yield Potential</strong>
                                    <span>Up to 7–9 tonnes/ha under irrigated African conditions</span>
                                </div>
                                <h4>Breeding Targets for African Sativa</h4>
                                <p>
                                    Modern rice breeding programs at AfricaRice utilize the sativa collection to identify donors for:
                                </p>
                                <ul className="mini-check-list">
                                    <li>✓ Reduced lodging during high panicle load</li>
                                    <li>✓ Blast resistance (<em>Magnaporthe oryzae</em>)</li>
                                    <li>✓ Submergence tolerance (<em>Sub1</em> gene alleles)</li>
                                    <li>✓ High amylose content preferred by local consumers</li>
                                </ul>
                                <Link href="/request-germplasm" className="btn-primary-dark full-width">
                                    Request Sativa Seed Lots ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Trait Profiling & Data</span>
                        <h2 className="section-main-heading">
                            Characterization & Evaluation of <em>Sativa Accessions</em>
                        </h2>
                        <p className="section-subtext">
                            Every sativa accession conserved at M'bé is characterized using international standard descriptors to support targeted breeding.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'phenotypic-descriptors',
                                title: 'Standard Agro-Morphological Characterization',
                                subtitle: 'Evaluation of over 60 quantitative and qualitative traits',
                                tag: 'Field Trials',
                                content: (
                                    <p>
                                        During regeneration cycles at the M'bé research station, each accession is evaluated for traits including days to 50% flowering, flag leaf angle, plant height, effective tiller count, panicle threshability, grain length/width ratio, decorticated grain color, and 1,000-grain weight.
                                    </p>
                                ),
                            },
                            {
                                id: 'dArTseq-profiling',
                                title: 'Molecular Subspecies Classification via DArTseq',
                                subtitle: 'Precision genomics distinguishing pure indica, japonica, and admixed types',
                                tag: 'Genomics',
                                content: (
                                    <p>
                                        High-density SNP marker profiling reveals that many traditional African landraces classified phenotypically possess unique ancestral admixture between indica and japonica gene pools. This genomic cataloging corrects misclassified accessions and reveals novel haplotype combinations not observed in Asian germplasm repositories.
                                    </p>
                                ),
                            },
                            {
                                id: 'consumer-preference',
                                title: 'Grain Quality & Consumer Acceptance Trait Screening',
                                subtitle: 'Amylose content, gelatinization temperature, and aroma',
                                tag: 'Food Science',
                                content: (
                                    <p>
                                        African urban and rural markets exhibit distinct grain texture preferences. The genebank screens accessions for amylose content (intermediate 20–25% vs high &gt;25%), aroma traits (2-acetyl-1-pyrroline), and cooking elongation to ensure that new varieties developed from genebank donors meet consumer demands.
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
