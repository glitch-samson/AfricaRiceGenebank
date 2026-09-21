import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function WildRelativesPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'Collection', href: '/collection' },
                        { label: 'Wild Relatives (5 Species)' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">5 Indigenous African Taxa</DataBadge>
                                <DataBadge variant="emerald">Crop Wild Relatives (CWR)</DataBadge>
                                <DataBadge variant="slate">Xa21 Gene Source</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Wild African Rice Relatives: <em>Nature's Genetic Armor</em>
                            </h1>
                            <p className="world-page-lead">
                                Conserving five wild African <em>Oryza</em> species: <em>O. longistaminata</em>, <em>O. barthii</em>, <em>O. punctata</em>, <em>O. brachyantha</em>, and <em>O. eichingeri</em>. Representing a vital evolutionary reservoir of resistance alleles against bacterial blight, stem borers, and climate extremes.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Request Wild Taxa (SMTA) ↗
                                </Link>
                                <a
                                    href="https://www.gbif.org"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    View GBIF Geo-Distribution ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/species/wild/slide1.jpg"
                                alt="Wild rice species growing in natural African habitat"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Oryza longistaminata rhizome and panicle specimen • RBCA Herbarium</span>
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
                            value="5"
                            label="Wild African Species"
                            sublabel="Covering AA, BB, BBCC, CC, and FF genomes"
                            source="Botanical Classification"
                        />
                        <StatCard
                            value="300+"
                            label="Wild Accessions"
                            sublabel="Collected from river basins, forests & savannas"
                            source="AfricaRice Genebank Inventory"
                        />
                        <StatCard
                            value="Xa21"
                            label="Cloned Resistance Gene"
                            sublabel="Transferred from O. longistaminata against blight"
                            source="Nature / Science Publications"
                        />
                        <StatCard
                            value="75%"
                            label="Viability Regen Threshold"
                            sublabel="Strict physiological conservation trigger"
                            source="FAO Genebank Standards"
                        />
                    </div>
                </div>
            </section>

            {/* The Five Wild Species Breakdown */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Botanical Profiles</span>
                        <h2 className="section-main-heading">
                            The Five Indigenous <em>Wild Oryza Taxa</em>
                        </h2>
                        <p className="section-subtext">
                            Each species occupies distinct ecological niches across the African continent and possesses specialized physiological defense systems.
                        </p>
                    </div>

                    <div className="wild-species-cards-grid">
                        {/* Species 1: O. longistaminata */}
                        <div className="wild-species-card">
                            <div className="wild-species-head">
                                <DataBadge variant="gold">AA Genome • Perennial</DataBadge>
                                <h3>Oryza longistaminata A. Chev. & Roehr.</h3>
                                <span className="species-habit">Perennial Rhizomatous Grass</span>
                            </div>
                            <p className="wild-species-desc">
                                Distinctive for its vigorous creeping underground rhizomes and strongly allogamous (cross-pollinating) habit with large, exerting anthers. Distributed across floodplains and marshlands throughout sub-Saharan Africa.
                            </p>
                            <div className="wild-trait-box">
                                <strong>Celebrated Trait:</strong> Donor of the cloned <em>Xa21</em> receptor kinase gene, providing broad-spectrum resistance against bacterial blight (<em>Xanthomonas oryzae</em> pv. <em>oryzae</em>).
                            </div>
                        </div>

                        {/* Species 2: O. barthii */}
                        <div className="wild-species-card">
                            <div className="wild-species-head">
                                <DataBadge variant="emerald">AA Genome • Annual</DataBadge>
                                <h3>Oryza barthii A. Chev.</h3>
                                <span className="species-habit">Direct Wild Ancestor of O. glaberrima</span>
                            </div>
                            <p className="wild-species-desc">
                                The immediate wild progenitor of cultivated African rice. Found in seasonal ponds, ditches, and savanna floodplains of the Sahel and Sudano-Guinean zones. Characterized by long, stout awns and easily shattering grains.
                            </p>
                            <div className="wild-trait-box">
                                <strong>Celebrated Trait:</strong> Exceptional heat tolerance, fast vegetative response to flash flooding, and deep taproot development for drought survival.
                            </div>
                        </div>

                        {/* Species 3: O. punctata */}
                        <div className="wild-species-card">
                            <div className="wild-species-head">
                                <DataBadge variant="forest">BB & BBCC Genomes</DataBadge>
                                <h3>Oryza punctata Kotschy ex Steud.</h3>
                                <span className="species-habit">Diploid & Allotetraploid Forest Grass</span>
                            </div>
                            <p className="wild-species-desc">
                                Occurs in shaded forest margins, riverbanks, and swamp clearings across Central and East Africa. Exhibits dark-pigmented grains and moderate shattering behavior.
                            </p>
                            <div className="wild-trait-box">
                                <strong>Celebrated Trait:</strong> Strong resistance to brown planthopper (<em>Nilaparvata lugens</em>), stem borers, and leaf-feeding insect complexes.
                            </div>
                        </div>

                        {/* Species 4: O. brachyantha */}
                        <div className="wild-species-card">
                            <div className="wild-species-head">
                                <DataBadge variant="slate">FF Genome • Diploid</DataBadge>
                                <h3>Oryza brachyantha A. Chev. & Roehr.</h3>
                                <span className="species-habit">Lateritic Pool Specialist</span>
                            </div>
                            <p className="wild-species-desc">
                                An evolutionarily divergent diploid wild rice adapted to harsh, temporary shallow pools formed on laterite crusts (bowé) in West Africa (Guinea, Mali, Sierra Leone).
                            </p>
                            <div className="wild-trait-box">
                                <strong>Celebrated Trait:</strong> High resistance to yellow stem borer (<em>Scirpophaga incertulas</em>), leaf folder, and high aluminum soil toxicity.
                            </div>
                        </div>

                        {/* Species 5: O. eichingeri */}
                        <div className="wild-species-card">
                            <div className="wild-species-head">
                                <DataBadge variant="gold">CC Genome • Diploid</DataBadge>
                                <h3>Oryza eichingeri Peter</h3>
                                <span className="species-habit">Humid Primary Forest Understory</span>
                            </div>
                            <p className="wild-species-desc">
                                A shade-loving diploid species inhabiting wet forest floors in Côte d'Ivoire, Uganda, and the Democratic Republic of Congo. Forms dense, dark-green leafy clumps.
                            </p>
                            <div className="wild-trait-box">
                                <strong>Celebrated Trait:</strong> Multi-insect pest resistance and unique photosynthetic efficiency under heavy vegetative canopy shade.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conservation Challenges & Protocols */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Specialized Stewardship</span>
                        <h2 className="section-main-heading">
                            Preserving <em>Wild Relatives Ex Situ</em>
                        </h2>
                        <p className="section-subtext">
                            Wild rice species present unique physiological hurdles requiring specialized genebank management protocols.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'seed-shattering',
                                title: 'Preventing Seed Loss from Rapid Shattering',
                                subtitle: 'Specialized cloth bagging and daily harvesting protocols',
                                tag: 'Harvesting Protocols',
                                content: (
                                    <p>
                                        Wild rice has evolved powerful seed-shattering mechanisms to disperse progeny in nature. If left untended, over 95% of seeds drop to the ground upon maturity. During regeneration at M'bé, field staff enclose every individual wild panicle in breathable glassine or fine mesh bags prior to anthesis to capture all viable seeds.
                                    </p>
                                ),
                            },
                            {
                                id: 'seed-dormancy',
                                title: 'Overcoming Deep Physiological Seed Dormancy',
                                subtitle: 'Heat treatments, de-husking, and gibberellic acid protocols',
                                tag: 'Seed Physiology',
                                content: (
                                    <p>
                                        Unlike domestic rice selected for immediate uniform germination, wild rice seeds remain dormant for months to survive prolonged dry spells. To test viability, genebank scientists apply dry heat stratification (50°C for 5 days), manual seed coat scarification, or dilute gibberellic acid (GA3) solutions before placement in germination incubators.
                                    </p>
                                ),
                            },
                            {
                                id: 'in-situ-threats',
                                title: 'Threats to In Situ Wild Populations Across Africa',
                                subtitle: 'Habitat destruction, urban expansion, and genetic erosion',
                                tag: 'Conservation Biology',
                                content: (
                                    <p>
                                        Wetland drainage for urbanization, agricultural expansion, and mining across West and Central Africa increasingly threatens natural stands of <em>O. longistaminata</em> and <em>O. brachyantha</em>. Ex situ conservation at the RBCA cold vaults provides an indispensable safety net against permanent biodiversity extinction.
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
