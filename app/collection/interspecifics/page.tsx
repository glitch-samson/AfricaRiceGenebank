import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function InterspecificsPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Collection', href: '/collection' },
                        { label: 'Interspecifics (NERICA & ARICA)' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Interspecific Hybrids</DataBadge>
                                <DataBadge variant="emerald">World Food Prize Legacy</DataBadge>
                                <DataBadge variant="slate">~3% of RBCA Collection</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Interspecific Genotypes: <em>NERICA & ARICA</em>
                            </h1>
                            <p className="world-page-lead">
                                A historic scientific breakthrough conceived and executed at AfricaRice: overcoming the natural reproductive sterility barrier between African rice (<em>O. glaberrima</em>) and Asian rice (<em>O. sativa</em>) to combine the environmental ruggedness of African rice with the high yield potential of Asian cultivars.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Request NERICA / ARICA Lines (SMTA) ↗
                                </Link>
                                <Link href="/research/genomics" className="btn-secondary-outline">
                                    View DArTseq Relatedness Data
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/species/inter/slide1.jpg"
                                alt="NERICA interspecific rice growing in West Africa"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>NERICA upland trial plot at AfricaRice Research Station • M'bé</span>
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
                            value="650+"
                            label="Interspecific Accessions"
                            sublabel="NERICA, ARICA & advanced breeding lines"
                            source="AfricaRice Genebank Registry"
                        />
                        <StatCard
                            value="35M+"
                            label="Farmers Positively Impacted"
                            sublabel="Widespread adoption across sub-Saharan Africa"
                            source="Socio-Economic Impact Studies"
                        />
                        <StatCard
                            value="90–100"
                            label="Days to Maturity"
                            sublabel="Up to 30 days earlier than traditional varieties"
                            source="Field Agronomic Records"
                        />
                        <StatCard
                            value="+25%"
                            label="Higher Protein Content"
                            sublabel="Superior nutrition compared to polished sativa"
                            source="Biochemical Grain Analysis"
                        />
                    </div>
                </div>
            </section>

            {/* The Science of Breaking the Barrier */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Biotechnological Triumph</span>
                            <h2 className="section-main-heading">
                                Overcoming the <em>Interspecific Sterility Barrier</em>
                            </h2>
                            <p className="editorial-lead">
                                For decades, botanists recognized that cross-pollinating <em>O. sativa</em> with <em>O. glaberrima</em> resulted in complete F1 hybrid sterility due to chromosomal divergences and genetic incompatibilities.
                            </p>
                            <p>
                                In the early 1990s at AfricaRice (then WARDA), a team led by Dr. Monty P. Jones deployed sophisticated <strong>embryo rescue</strong> and <strong>anther culture</strong> techniques. By isolating immature hybrid embryos before abortion and culturing them in nutrient media, followed by repeated backcrossing to the sativa parent, fertile interspecific progeny were successfully generated.
                            </p>
                            <p>
                                The result was <strong>NERICA (New Rice for Africa)</strong>: plants displaying the erect tillering and high yield of Asian rice, combined with the drooping lower leaves, weed competitiveness, drought avoidance, and disease resistance of African rice.
                            </p>

                            <h3>From NERICA to ARICA</h3>
                            <ul className="bullet-feature-list">
                                <li>
                                    <strong>Upland NERICA (NERICA 1 to 18):</strong> Selected specifically for rainfed hillside and plateau ecologies. Notable for early vigor, acid soil tolerance, and tolerance to terminal drought.
                                </li>
                                <li>
                                    <strong>Lowland NERICA (NERICA-L 1 to 60):</strong> Developed for valley bottoms and irrigated wetlands, possessing strong culms resistant to lodging and tolerance to submergence and iron toxicity.
                                </li>
                                <li>
                                    <strong>ARICA (Advanced Rice for Africa):</strong> The second-generation interspecific lines launched in 2013, incorporating multi-stress tolerance (salinity, cold, Rice Gall Midge) tailored to Africa's emerging climate hotspots.
                                </li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <div className="stat-highlight-box">
                                    <strong>2004 World Food Prize</strong>
                                    <span>Awarded to Dr. Monty Jones for developing NERICA</span>
                                </div>
                                <h4>Conserving Interspecific Pedigrees</h4>
                                <p>
                                    At the RBCA genebank, every NERICA and ARICA accession is preserved alongside its exact parental lines (e.g. <em>O. sativa</em> WAB 56-104 × <em>O. glaberrima</em> CG 14).
                                </p>
                                <p>
                                    Genomic DArTseq fingerprinting verifies that introgression segments from <em>O. glaberrima</em> remain stable across seed multiplications, preventing genetic drift.
                                </p>
                                <Link href="/data/genomics" className="btn-secondary-outline full-width">
                                    Explore Genomic Introgression Data ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Technical Specifications Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Agronomic Architecture</span>
                        <h2 className="section-main-heading">
                            Why Interspecifics Transformed <em>African Agriculture</em>
                        </h2>
                        <p className="section-subtext">
                            Analyzing the physiological mechanisms that make NERICA and ARICA resilient across 30+ African countries.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'early-maturity',
                                title: 'Early Maturity Escapes Terminal Drought',
                                subtitle: 'Short 90–100 day cycle escaping rainfed droughts and bridging the hunger season',
                                tag: 'Crop Phenology',
                                content: (
                                    <p>
                                        Traditional African cultivars often take 130 to 150 days to mature. NERICA varieties mature in just 90 to 100 days. This allows crops to be harvested during the annual "hungry gap" before other staples are ready, while simultaneously escaping late-season dry spells that destroy slower-maturing crops.
                                    </p>
                                ),
                            },
                            {
                                id: 'yield-performance',
                                title: 'Doubled Harvest Yields Under Low-Input Conditions',
                                subtitle: 'Producing 2.5–4.0 t/ha under rainfed conditions compared to traditional 1.0 t/ha',
                                tag: 'Harvest Metrics',
                                content: (
                                    <p>
                                        Smallholder farmers operating without expensive chemical fertilizers and mechanized irrigation achieve dramatic yield gains with NERICA. On upland soils where traditional varieties yield under 1 tonne per hectare, NERICA routinely yields 2.5 to 4.0 tonnes per hectare, and up to 6–7 tonnes per hectare under optimal agronomic management.
                                    </p>
                                ),
                            },
                            {
                                id: 'nutritional-value',
                                title: 'Enhanced Grain Protein & Culinary Quality',
                                subtitle: 'Substantially higher protein content combating maternal and child malnutrition',
                                tag: 'Grain Chemistry',
                                content: (
                                    <p>
                                        NERICA inherited the protein-rich characteristics of <em>O. glaberrima</em>. Grains boast a protein content of 10% to 12%—approximately 25% higher than standard imported commercial white rice—providing critical daily protein to smallholder farming families.
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
