import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function AfricanRicePage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Collection', href: '/collection' },
                        { label: 'African Rice (Oryza glaberrima)' },
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
                                <DataBadge variant="emerald">~17% of RBCA Collection</DataBadge>
                                <DataBadge variant="slate">3,000+ BP Domestication</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                African Cultivated Rice: <em>Oryza glaberrima Steud.</em>
                            </h1>
                            <p className="world-page-lead">
                                The indigenous cultivated rice of Africa, independently domesticated in the Inland Niger Delta around 3,000 years ago. Renowned for its vigorous early vegetative growth that suppresses weeds, deep root architecture, and resistance to endemic African pests and diseases.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Request Glaberrima Accessions (SMTA) ↗
                                </Link>
                                <Link href="/data/subsets" className="btn-secondary-outline">
                                    Download 350 Mini-Core List
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/species/african/slide1.jpg"
                                alt="Oryza glaberrima panicles and grains"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Oryza glaberrima Steud. accession from Guinea-Bissau • RBCA</span>
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
                            value="3,600+"
                            label="Conserved Accessions"
                            sublabel="World's largest O. glaberrima repository"
                            source="AfricaRice Database"
                        />
                        <StatCard
                            value="350"
                            label="Mini-Core Panel"
                            sublabel="Capturing >95% of total allelic richness"
                            source="DArTseq Marker Study"
                        />
                        <StatCard
                            value="3,000+"
                            label="Years of Cultivation"
                            sublabel="West African cultural & culinary heritage"
                            source="Archaeobotanical Records"
                        />
                        <StatCard
                            value="8"
                            label="Key Resistance Traits"
                            sublabel="Drought, RYMV, Gall Midge, Iron Toxicity, Acid Soils"
                            source="Phenotypic Screening at M'bé"
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Botanical & Historical Narrative */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="reading-body">
                            <span className="section-eyebrow">Evolutionary History</span>
                            <h2 className="section-main-heading">
                                The Independent <em>African Domestication</em>
                            </h2>
                            <p className="editorial-lead">
                                While Asian rice (<em>Oryza sativa</em>) was domesticated along the Yangtze river in China, African rice arose independently from the wild annual grass <em>Oryza barthii</em> across the wetlands of the Inland Delta of the Upper Niger River in present-day Mali.
                            </p>
                            <p>
                                Traditional African farmers selected for non-shattering panicles, larger grain size, and synchronized ripening over centuries. Today, <em>Oryza glaberrima</em> is still conserved and cultivated in pockets of Guinea-Bissau, Guinea, Sierra Leone, Liberia, Senegal, Ghana, Togo, and Nigeria, celebrated for ritual significance, distinct nutty taste, and unmatched survival in marginal soils.
                            </p>

                            <h3>Key Morphological Identifiers</h3>
                            <ul className="bullet-feature-list">
                                <li><strong>Ligule:</strong> Short, rounded, non-split ligules (1–3 mm), in stark contrast to the long (15–45 mm) acute bifid ligules of <em>O. sativa</em>.</li>
                                <li><strong>Panicle Architecture:</strong> Simple, compact panicles with minimal primary and secondary branching; seeds held tightly to the rachis.</li>
                                <li><strong>Glume & Grain:</strong> Distinctive red pericarp (red rice), glabrous (hairless) or moderately pubescent glumes with short or absent awns.</li>
                                <li><strong>Vegetative Habit:</strong> Rapid juvenile vegetative development producing a dense, spreading canopy that outcompetes weeds within weeks.</li>
                            </ul>
                        </div>

                        <div className="reading-sidebar">
                            <div className="sidebar-card">
                                <img
                                    src="/files/img/species/african/slide2.jpg"
                                    alt="Field regeneration of African rice at M'bé"
                                    className="sidebar-card-img"
                                />
                                <h4>The 350-Accession Mini-Core</h4>
                                <p>
                                    To make this large collection easily accessible for breeders, the AfricaRice genomics team evaluated 3,600+ accessions using high-density DArTseq markers to construct a scientifically curated <strong>350-accession mini-core</strong>.
                                </p>
                                <p>
                                    This panel represents the full geographic and genetic spectrum—from Senegambian coastal lowlands to the Guinean highlands—reducing evaluation costs for phenotyping trials by 90%.
                                </p>
                                <Link href="/data/subsets" className="btn-secondary-outline full-width">
                                    Access Mini-Core Data ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trait & Genetics Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Phenotypic & Molecular Properties</span>
                        <h2 className="section-main-heading">
                            Adaptive Superpowers of <em>O. glaberrima</em>
                        </h2>
                        <p className="section-subtext">
                            Centuries of natural selection under African pest complexes and climatic extremes produced traits vital for modern climate-smart crop breeding.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'weed-suppression',
                                title: 'Aggressive Early Canopy Closure & Weed Competitiveness',
                                subtitle: 'Drastically reduces manual weeding burdens for smallholder farmers',
                                tag: 'Agronomy',
                                content: (
                                    <p>
                                        Weeds cause up to 40% of yield losses in African rainfed rice systems. <em>Oryza glaberrima</em> exhibits rapid early leaf elongation and a high specific leaf area, creating an impenetrable canopy within 20 to 30 days after sowing. This suppresses troublesome weeds like <em>Striga hermonthica</em> and reduces the need for expensive chemical herbicides.
                                    </p>
                                ),
                            },
                            {
                                id: 'biotic-resistance',
                                title: 'Endemic Pest & Disease Immunity',
                                subtitle: 'Evolutionary defenses against Rice Yellow Mottle Virus and African Rice Gall Midge',
                                tag: 'Plant Pathology',
                                content: (
                                    <p>
                                        <em>O. glaberrima</em> is a primary source of high-level resistance to <strong>Rice Yellow Mottle Virus (RYMV)</strong> mediated by the <em>RYMV1</em> and <em>RYMV2</em> alleles. It also harbors robust immunity to the <strong>African Rice Gall Midge (Orseolia oryzivora)</strong>, a devastating insect pest with no effective chemical controls.
                                    </p>
                                ),
                            },
                            {
                                id: 'abiotic-tolerance',
                                title: 'Drought, Iron Toxicity & Acid Soil Tolerance',
                                subtitle: 'Resilience under low-input and marginal soil conditions',
                                tag: 'Stress Physiology',
                                content: (
                                    <p>
                                        In inland valley swamps, iron (Fe²⁺) toxicity severely stunts Asian rice cultivars. Many <em>O. glaberrima</em> accessions possess physiological root-exclusion mechanisms and tissue tolerance that allow normal growth under severe ferrous iron concentrations and high aluminum/acidic soils.
                                    </p>
                                ),
                            },
                            {
                                id: 'nutritional-traits',
                                title: 'Superior Micronutrient Density & Protein Content',
                                subtitle: 'Addressing hidden hunger across rural communities',
                                tag: 'Nutrition',
                                content: (
                                    <p>
                                        Biochemical characterization reveals that unpolished <em>O. glaberrima</em> grains contain significantly higher concentrations of iron (Fe), zinc (Zn), dietary fiber, and essential amino acids (protein content typically 10–13% compared to 7–8% in polished Asian cultivars).
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
