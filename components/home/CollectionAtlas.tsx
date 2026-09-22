'use client';

import { useState } from 'react';
import Link from 'next/link';
import DataBadge from '@/components/ui/DataBadge';

interface SpeciesData {
    id: string;
    scientificName: string;
    commonName: string;
    share: string;
    genome: string;
    accessions: string;
    origin: string;
    summary: string;
    traits: string[];
    image: string;
    href: string;
    highlights: [string, string][];
}

const speciesList: SpeciesData[] = [
    {
        id: 'african',
        scientificName: 'Oryza glaberrima Steud.',
        commonName: 'African Cultivated Rice',
        share: '~17%',
        genome: 'AA Genome (2n = 24)',
        accessions: '3,600+ accessions',
        origin: 'Domesticated in the Niger Inland Delta (3,000+ BP)',
        summary:
            'The indigenous African rice species cultivated for millennia across West Africa. Renowned for its vigorous early vegetative growth that smothers weeds, and its evolutionary resilience to drought, phosphorus deficiency, iron toxicity, and Rice Yellow Mottle Virus (RYMV).',
        traits: [
            'Weed competitiveness',
            'Drought tolerance',
            'RYMV resistance',
            'African Gall Midge tolerance',
            'Nutritional iron/zinc content',
        ],
        image: '/files/img/species/african/slide1.jpg',
        href: '/collection/african-rice',
        highlights: [
            ['3,000+ Years', 'Agricultural heritage in Africa'],
            ['350 Accessions', 'Genotyped mini-core collection'],
            ['85% African Origin', 'Dominant endemic germplasm'],
        ],
    },
    {
        id: 'asian',
        scientificName: 'Oryza sativa L.',
        commonName: 'Asian Cultivated Rice',
        share: '~79%',
        genome: 'AA Genome (2n = 24)',
        accessions: '16,500+ accessions',
        origin: 'Introduced to West Africa (~16th Century)',
        summary:
            'Comprises the largest share of the genebank with approximately 49% indica and 30% japonica accessions. Conserves extensive landraces and improved varieties adapted to rainfed upland, rainfed lowland, and irrigated agro-ecologies throughout sub-Saharan Africa.',
        traits: [
            'High yield potential',
            'Erect plant architecture',
            'Non-shattering panicles',
            'Broad photoperiod adaptability',
            'Grain cooking quality',
        ],
        image: '/files/img/species/asian/slide1.jpg',
        href: '/collection/asian-rice',
        highlights: [
            ['49% Indica', 'Dominant in irrigated/lowland zones'],
            ['30% Japonica', 'Adapted to upland ecologies'],
            ['14,000+ DOIs', 'Assigned digital object identifiers'],
        ],
    },
    {
        id: 'interspecifics',
        scientificName: 'O. sativa × O. glaberrima',
        commonName: 'Interspecific Crosses (NERICA & ARICA)',
        share: '~3%',
        genome: 'Interspecific Hybrid Derivations',
        accessions: '650+ accessions',
        origin: 'Bred at AfricaRice (Dr. Monty Jones, World Food Prize)',
        summary:
            'A historic scientific triumph that overcame the natural interspecific sterility barrier using embryo rescue and anther culture. Combines the rugged weed-suppressing and drought-tolerant traits of African rice with the high harvest yields of Asian rice.',
        traits: [
            'Overcame interspecific sterility',
            'High grain yield (up to 5 t/ha)',
            'Early maturity (90-100 days)',
            'Higher protein content (+25%)',
            'Acid soil adaptability',
        ],
        image: '/files/img/species/inter/slide1.jpg',
        href: '/collection/interspecifics',
        highlights: [
            ['NERICA 1-18', 'Upland varieties widely grown in 30 countries'],
            ['NERICA-L 1-60', 'Lowland varieties for wetland rice bowls'],
            ['35M Farmers', 'Positively impacted across Africa'],
        ],
    },
    {
        id: 'wild',
        scientificName: 'Wild African Oryza Taxa (5 Species)',
        commonName: 'Crop Wild Relatives (CWR)',
        share: '~1%',
        genome: 'AA, BB, BBCC, CC, FF Genomes',
        accessions: '300+ accessions',
        origin: 'Native wetlands, forests & savannas of Africa',
        summary:
            'Five indigenous wild rice relatives: O. longistaminata (rhizomatous perennial, AA), O. barthii (annual ancestor, AA), O. punctata (BB/BBCC), O. brachyantha (FF), and O. eichingeri (CC). Invaluable donors of resistance genes including Xa21 against bacterial blight.',
        traits: [
            'Bacterial blight resistance (Xa21 gene)',
            'Stem borer resistance',
            'Perennial rhizome habit',
            'Deepwater flood endurance',
            'Salinity tolerance',
        ],
        image: '/files/img/species/wild/slide1.jpg',
        href: '/collection/wild-relatives',
        highlights: [
            ['5 Wild Species', 'Covering major African botanical zones'],
            ['Xa21 Donor', 'Cloned from O. longistaminata'],
            ['GBIF Mapped', 'Georeferenced collecting coordinates'],
        ],
    },
];

export default function CollectionAtlas() {
    const [selectedId, setSelectedId] = useState<string>('african');
    const activeSpecies = speciesList.find((s) => s.id === selectedId) ?? speciesList[0];

    return (
        <section className="collection-atlas-section" id="collection-atlas">
            <div className="section-shell">
                <div className="section-header-row">
                    <div>
                        <h2 className="section-main-heading">
                            The Living Collection <em>Atlas</em>
                        </h2>
                        <p className="section-subtext">
                            Safeguarding ~22,000 distinct accessions in ultra-modern storage at M'bé, Côte d'Ivoire. 85% of all materials originated on the African continent.
                        </p>
                    </div>
                    <div className="collection-summary-stats">
                        <div className="summary-stat-box">
                            <strong>21,300+</strong>
                            <span>Registered Accessions</span>
                        </div>
                        <div className="summary-stat-box">
                            <strong>85%</strong>
                            <span>African Native Provenance</span>
                        </div>
                        <div className="summary-stat-box">
                            <strong>60,000</strong>
                            <span>Facility Vault Capacity</span>
                        </div>
                    </div>
                </div>

                {/* Species Navigation Tabs */}
                <div className="species-nav-tabs" role="tablist">
                    {speciesList.map((species) => (
                        <button
                            key={species.id}
                            type="button"
                            role="tab"
                            aria-selected={selectedId === species.id}
                            className={`species-tab-btn ${selectedId === species.id ? 'is-active' : ''}`}
                            onClick={() => setSelectedId(species.id)}
                        >
                            <span className="tab-share-pill">{species.share}</span>
                            <span className="tab-name">{species.scientificName}</span>
                            <span className="tab-common">{species.commonName}</span>
                        </button>
                    ))}
                </div>

                {/* Active Species Detail Card */}
                <div className="species-active-card">
                    <div className="species-card-media">
                        <img src={activeSpecies.image} alt={activeSpecies.scientificName} />
                        <div className="media-overlay-badge">
                            <DataBadge variant="gold">{activeSpecies.genome}</DataBadge>
                            <DataBadge variant="forest">{activeSpecies.accessions}</DataBadge>
                        </div>
                    </div>

                    <div className="species-card-body">
                        <div className="species-card-head">
                            <span className="species-origin-tag">📍 {activeSpecies.origin}</span>
                            <h3>{activeSpecies.scientificName}</h3>
                            <p className="species-common-subtitle">{activeSpecies.commonName}</p>
                        </div>

                        <p className="species-description-p">{activeSpecies.summary}</p>

                        <div className="species-traits-block">
                            <span className="traits-label">Key Adaptive & Agronomic Traits:</span>
                            <div className="traits-pills-wrap">
                                {activeSpecies.traits.map((trait) => (
                                    <span key={trait} className="trait-pill">
                                        ✓ {trait}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="species-card-metrics">
                            {activeSpecies.highlights.map(([val, desc]) => (
                                <div key={desc} className="species-metric-item">
                                    <strong>{val}</strong>
                                    <small>{desc}</small>
                                </div>
                            ))}
                        </div>

                        <div className="species-card-actions">
                            <Link href={activeSpecies.href} className="btn-primary-dark">
                                Explore {activeSpecies.scientificName} Details <span>↗</span>
                            </Link>
                            <Link href="/request-germplasm" className="btn-secondary-outline">
                                Request Seed Samples (SMTA)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
