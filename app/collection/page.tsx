import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function CollectionPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Rice Biodiversity Collection' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">21,300+ Registered Accessions</DataBadge>
                                <DataBadge variant="emerald">85% Originating in Africa</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                African & Global Rice Genetic Repository
                            </h1>
                            <p className="world-page-lead">
                                The Dr. Monty P. Jones Rice Biodiversity Center for Africa holds the world's largest repository of African cultivated rice (<em>Oryza glaberrima</em>), extensive African landraces of Asian rice (<em>Oryza sativa</em>), interspecific breakthroughs (NERICA/ARICA), and five indigenous wild relatives.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/request-germplasm" className="btn-primary-dark">
                                    Request Seed Samples (SMTA) ↗
                                </Link>
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Browse Online on Genesys (CIV033) ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/species/african/slide2.jpg"
                                alt="Diverse panicles of African and Asian rice species"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Panicle diversity across Oryza gene pools • RBCA M'bé</span>
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
                            value="~17%"
                            label="Oryza glaberrima"
                            sublabel="Indigenous African rice (3,600+ accessions)"
                        />
                        <StatCard
                            value="~79%"
                            label="Oryza sativa"
                            sublabel="49% indica / 30% japonica ecologies"
                        />
                        <StatCard
                            value="~3%"
                            label="Interspecifics"
                            sublabel="NERICA & ARICA hybrid derivatives"
                        />
                        <StatCard
                            value="~1%"
                            label="Wild African Relatives"
                            sublabel="5 indigenous wild Oryza species"
                        />
                    </div>
                </div>
            </section>

            {/* Gene Pool Matrix Classification */}
            <section className="gene-pool-matrix-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Taxonomic Hierarchy</span>
                        <h2 className="section-main-heading">
                            The Rice <em>Gene Pool Architecture</em>
                        </h2>
                        <p className="section-subtext">
                            Harlan and de Wet's gene pool concept illustrates the crossability and genetic distance between cultivated varieties and wild ancestral species.
                        </p>
                    </div>

                    <div className="gene-pool-cards-grid">
                        {/* Primary Gene Pool */}
                        <div className="gene-pool-card primary-pool">
                            <div className="pool-header">
                                <span className="pool-level">Primary Gene Pool (GP-1)</span>
                                <h3>Directly Crossable Taxa</h3>
                                <p>AA Genome (2n = 24)</p>
                            </div>
                            <div className="pool-body">
                                <p>
                                    Includes cultivated <em>O. glaberrima</em>, cultivated <em>O. sativa</em>, and their immediate wild ancestors <em>O. barthii</em> and <em>O. longistaminata</em>. Fertile hybrids can be obtained with standard breeding methods or embryo rescue techniques.
                                </p>
                                <ul className="pool-species-list">
                                    <li><strong>Oryza glaberrima Steud.</strong> (African cultivated)</li>
                                    <li><strong>Oryza sativa L.</strong> (Asian cultivated: indica & japonica)</li>
                                    <li><strong>Oryza barthii A. Chev.</strong> (Annual wild progenitor)</li>
                                    <li><strong>Oryza longistaminata A. Chev. & Roehr.</strong> (Perennial wild relative)</li>
                                </ul>
                            </div>
                            <div className="pool-footer">
                                <span className="pool-accession-count">19,800+ Accessions in Collection</span>
                            </div>
                        </div>

                        {/* Secondary Gene Pool */}
                        <div className="gene-pool-card secondary-pool">
                            <div className="pool-header">
                                <span className="pool-level">Secondary Gene Pool (GP-2)</span>
                                <h3>Crossable with Cytogenetic Aids</h3>
                                <p>BB, BBCC, CC Genomes (2n = 24, 48)</p>
                            </div>
                            <div className="pool-body">
                                <p>
                                    Crosses yield sterile hybrids, requiring advanced embryo rescue, anther culture, or chromosome doubling to introgress desirable traits into cultivated rice.
                                </p>
                                <ul className="pool-species-list">
                                    <li><strong>Oryza punctata Kotschy ex Steud.</strong> (BB & BBCC genomes)</li>
                                    <li><strong>Oryza eichingeri Peter</strong> (CC genome)</li>
                                </ul>
                                <p className="pool-trait-note">
                                    Key trait donors: Brown planthopper resistance, stem borer resistance, shade tolerance.
                                </p>
                            </div>
                            <div className="pool-footer">
                                <span className="pool-accession-count">180+ Accessions in Collection</span>
                            </div>
                        </div>

                        {/* Tertiary Gene Pool */}
                        <div className="gene-pool-card tertiary-pool">
                            <div className="pool-header">
                                <span className="pool-level">Tertiary Gene Pool (GP-3)</span>
                                <h3>Divergent Diploid Relatives</h3>
                                <p>FF Genome (2n = 24)</p>
                            </div>
                            <div className="pool-body">
                                <p>
                                    Divergent evolutionary lineages requiring specialized protoplast fusion, bridge species, or advanced gene-editing techniques to transfer useful alleles.
                                </p>
                                <ul className="pool-species-list">
                                    <li><strong>Oryza brachyantha A. Chev. & Roehr.</strong> (FF genome)</li>
                                </ul>
                                <p className="pool-trait-note">
                                    Key trait donors: Yellow stem borer resistance, bacterial blight resistance.
                                </p>
                            </div>
                            <div className="pool-footer">
                                <span className="pool-accession-count">120+ Accessions in Collection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth Species Directory Cards */}
            <section className="species-directory-section">
                <div className="section-shell">
                    <div className="section-header-row">
                        <div>
                            <span className="section-eyebrow">Explore Collections</span>
                            <h2 className="section-main-heading">
                                Dedicated Species <em>Profiles</em>
                            </h2>
                            <p className="section-subtext">
                                Explore evolutionary history, agronomic traits, and genomics datasets for each group in the genebank.
                            </p>
                        </div>
                    </div>

                    <div className="species-cards-quad">
                        <div className="species-quad-card">
                            <div className="quad-card-img">
                                <img src="/files/img/species/african/slide1.jpg" alt="African Rice" />
                                <span className="quad-badge">~17% of Collection</span>
                            </div>
                            <div className="quad-card-body">
                                <h3>African Rice (<em>O. glaberrima</em>)</h3>
                                <p>
                                    Domesticated 3,000+ years ago in West Africa. Remarkable tolerance to drought, phosphorus deficiency, acid soils, and Rice Yellow Mottle Virus.
                                </p>
                                <div className="quad-meta">
                                    <span>3,600+ Accessions</span>
                                    <span>350 Mini-Core</span>
                                </div>
                                <Link href="/collection/african-rice" className="btn-primary-dark full-width">
                                    View African Rice Profile <span>↗</span>
                                </Link>
                            </div>
                        </div>

                        <div className="species-quad-card">
                            <div className="quad-card-img">
                                <img src="/files/img/species/asian/slide1.jpg" alt="Asian Rice" />
                                <span className="quad-badge">~79% of Collection</span>
                            </div>
                            <div className="quad-card-body">
                                <h3>Asian Rice (<em>O. sativa</em>)</h3>
                                <p>
                                    Extensive African landraces and improved varieties representing 49% indica and 30% japonica adapted to diverse agro-ecological zones.
                                </p>
                                <div className="quad-meta">
                                    <span>16,500+ Accessions</span>
                                    <span>14k+ DOIs</span>
                                </div>
                                <Link href="/collection/asian-rice" className="btn-primary-dark full-width">
                                    View Asian Rice Profile <span>↗</span>
                                </Link>
                            </div>
                        </div>

                        <div className="species-quad-card">
                            <div className="quad-card-img">
                                <img src="/files/img/species/inter/slide1.jpg" alt="Interspecifics" />
                                <span className="quad-badge">~3% of Collection</span>
                            </div>
                            <div className="quad-card-body">
                                <h3>Interspecifics (NERICA & ARICA)</h3>
                                <p>
                                    Breakthrough crosses between African and Asian rice combining rugged environmental resilience with high harvest yields.
                                </p>
                                <div className="quad-meta">
                                    <span>650+ Accessions</span>
                                    <span>35M Farmers Benefited</span>
                                </div>
                                <Link href="/collection/interspecifics" className="btn-primary-dark full-width">
                                    View Interspecifics Profile <span>↗</span>
                                </Link>
                            </div>
                        </div>

                        <div className="species-quad-card">
                            <div className="quad-card-img">
                                <img src="/files/img/species/wild/slide1.jpg" alt="Wild Relatives" />
                                <span className="quad-badge">~1% of Collection</span>
                            </div>
                            <div className="quad-card-body">
                                <h3>Wild African Relatives (5 Taxa)</h3>
                                <p>
                                    Indigenous wild species conserved for novel disease resistance (such as the cloned Xa21 gene) and climate adaptation traits.
                                </p>
                                <div className="quad-meta">
                                    <span>5 Wild Taxa</span>
                                    <span>GBIF Georeferenced</span>
                                </div>
                                <Link href="/collection/wild-relatives" className="btn-primary-dark full-width">
                                    View Wild Relatives Profile <span>↗</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
