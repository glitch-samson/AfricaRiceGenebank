import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function CharacterizationPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Characterization' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 05 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">Bioversity/IRRI Rice Descriptors</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Agro-Morphological <em>Characterization</em>
                            </h1>
                            <p className="world-page-lead">
                                A genebank is only as valuable as the descriptive data accompanying its seeds. During field regeneration cycles, AfricaRice systematically scores over 60 standardized morphological, phenological, and grain quality traits across at least 10 representative plants per accession, making biodiversity actionable for plant breeders.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/data/characterization" className="btn-primary-dark">
                                    Browse Trait Descriptor Data ↗
                                </Link>
                                <Link href="/what-we-do/distribution" className="btn-secondary-outline">
                                    Next Stage: Global Distribution
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/charslide1.jpg"
                                alt="Technician measuring panicle and grain traits"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Measuring vegetative and grain traits in M'bé field plots</span>
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
                            value="60+"
                            label="Standardized Traits"
                            sublabel="Covering phenology, vegetative & seed biology"
                            source="Bioversity / IRRI Descriptor Manual"
                        />
                        <StatCard
                            value="≥ 10"
                            label="Plants Evaluated"
                            sublabel="Sampled per accession per replication"
                            source="AfricaRice Field Phenotyping SOP"
                        />
                        <StatCard
                            value="10,000+"
                            label="Scored Accessions"
                            sublabel="Phenotypic profiles recorded and published"
                            source="Genesys CIV033 Trait Registry"
                        />
                        <StatCard
                            value="100%"
                            label="FAIR Standard"
                            sublabel="Findable, Accessible, Interoperable, Reusable"
                            source="CGIAR Open Data Policy"
                        />
                    </div>
                </div>
            </section>

            {/* Trait Categories Breakdown */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Standardized Descriptors</span>
                        <h2 className="section-main-heading">
                            The Three Core <em>Trait Descriptor Categories</em>
                        </h2>
                        <p className="section-subtext">
                            Following the International Rice Research Institute (IRRI) and Bioversity International Descriptor standards.
                        </p>
                    </div>

                    <div className="three-tiers-grid">
                        <div className="tier-card">
                            <div className="tier-head">
                                <span className="tier-pill">Vegetative</span>
                                <h3>Vegetative & Growth Habit Descriptors</h3>
                                <div className="tier-temp">Measured 30–50 Days After Sowing</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Captures plant vigor, tillering capacity, and architectural suitability for mechanization or intercropping.
                                </p>
                                <ul className="tier-list">
                                    <li><strong>Leaf Blade:</strong> Length, width, pubescence (glabrous vs hairy), anthocyanin color</li>
                                    <li><strong>Ligule:</strong> Length (mm), shape (cleft/bifid in sativa vs rounded in glaberrima)</li>
                                    <li><strong>Culm:</strong> Plant height (cm), culm angle, lodging resistance, tillering count</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tier-card active-tier">
                            <div className="tier-head">
                                <span className="tier-pill highlight">Inflorescence</span>
                                <h3>Floral & Panicle Architecture</h3>
                                <div className="tier-temp">Scored at Anthesis & Maturity</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Reveals reproductive timing, yield component potential, and shattering resistance.
                                </p>
                                <ul className="tier-list">
                                    <li><strong>Phenology:</strong> Days to 50% flowering, days to 85% physiological maturity</li>
                                    <li><strong>Panicle:</strong> Length (cm), curvature (erect, semi-compact, drooping), branching density</li>
                                    <li><strong>Awns & Stigma:</strong> Awn presence/length/color, stigma color (white, purple, dark red)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tier-card base-tier">
                            <div className="tier-head">
                                <span className="tier-pill">Caryopsis</span>
                                <h3>Grain & Post-Harvest Descriptors</h3>
                                <div className="tier-temp">Evaluated in Grain Quality Lab</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Determines market value, milling yield, consumer preference, and cooking quality.
                                </p>
                                <ul className="tier-list">
                                    <li><strong>Grain Dimensions:</strong> Length (mm), width (mm), length/width shape ratio</li>
                                    <li><strong>Pericarp:</strong> White, light brown, red (characteristic of glaberrima), purple</li>
                                    <li><strong>Grain Mass & Chemistry:</strong> 1,000-grain weight (g), amylose content percentage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phenotypic Data Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Data Integration</span>
                        <h2 className="section-main-heading">
                            Connecting Phenotypes to <em>Modern Breeding</em>
                        </h2>
                        <p className="section-subtext">
                            How characterization records turn seed packets into actionable genomic tools for breeders.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'phenotype-genomics-link',
                                title: 'Genome-Wide Association Studies (GWAS)',
                                subtitle: 'Combining 60+ phenotypic traits with 31,739 DArTseq SNP markers',
                                tag: 'Bioinformatics',
                                content: (
                                    <p>
                                        By pairing field characterization data recorded at M'bé with high-density DArTseq SNP marker profiles, computational geneticists perform high-resolution Genome-Wide Association Studies (GWAS). This maps quantitative trait loci (QTLs) governing plant height, flowering time, drought tolerance, and grain shape directly to specific chromosomal regions.
                                    </p>
                                ),
                            },
                            {
                                id: 'breeder-donor-filtering',
                                title: 'Precision Accession Filtering for National Programs',
                                subtitle: 'Enabling breeders to query traits through Genesys and GRIN-Global',
                                tag: 'Breeding Service',
                                content: (
                                    <p>
                                        When a national rice breeder in Mali, Ghana, or Nigeria seeks a donor variety combining early maturity (under 95 days), high tillering, and red pericarp, they no longer need to guess. The RBCA searchable characterization database filters thousands of accessions instantly to identify matching candidate donors.
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
