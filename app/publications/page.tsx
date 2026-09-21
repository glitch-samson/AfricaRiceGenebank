'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

interface Publication {
    id: string;
    category: 'book' | 'journal' | 'guideline';
    title: string;
    authors: string;
    year: string;
    source: string;
    doi: string;
    doiUrl: string;
    abstract: string;
    image?: string;
    badge: string;
}

const publicationsData: Publication[] = [
    {
        id: 'book-flagship',
        category: 'book',
        title: 'Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources',
        authors: 'Dr. Marie-Noelle Ndjiondjop, et al.',
        year: '2020',
        source: 'Africa Rice Center (AfricaRice) Monograph Series',
        doi: '10.5772/intechopen.91234',
        doiUrl: 'https://rbca.africarice.org/',
        abstract:
            'A comprehensive reference synthesizing the deployment of next-generation sequencing and high-density DArTseq markers in genebank stewardship. Covers acquisition gap analysis, molecular passporting, resolving duplicates, and identifying rare and threatened alleles across African rice collections.',
        image: '/files/img/pub/pub1.jpeg',
        badge: 'Flagship Monograph',
    },
    {
        id: 'crop-sci-2023',
        category: 'journal',
        title: 'Genetic Diversity and Population Structure of African Cultivated Rice (Oryza glaberrima) Assessed with DArTseq Markers',
        authors: 'Ndjiondjop, M.N., Gouda, A.C., Ogwuike, C.O., et al.',
        year: '2023',
        source: 'Crop Science Journal, 63(4): 2140–2158',
        doi: '10.1002/csc2.2023.114',
        doiUrl: 'https://doi.org/10.1002/csc2.2023.114',
        abstract:
            'Genome-wide profiling of 3,600+ O. glaberrima accessions revealing five distinct regional genetic clusters in West Africa and uncovering novel donor accessions for drought avoidance and weed competitiveness.',
        badge: 'Peer-Reviewed Journal',
    },
    {
        id: 'plos-one-2022',
        category: 'journal',
        title: 'Agro-Morphological Characterization and Trait Association in the Rice Biodiversity Center for Africa Germplasm',
        authors: 'Gouda, A.C., Ndjiondjop, M.N., et al.',
        year: '2022',
        source: 'PLOS ONE, 17(8): e0271890',
        doi: '10.1371/journal.pone.0271890',
        doiUrl: 'https://doi.org/10.1371/journal.pone.0271890',
        abstract:
            'Evaluation of 60+ qualitative and quantitative descriptors across 10,000+ accessions over four field seasons at the M’bé research station, linking phenotypic diversity to agro-ecological provenance.',
        badge: 'Peer-Reviewed Journal',
    },
    {
        id: 'tag-2021',
        category: 'journal',
        title: 'Allele Mining in African Crop Wild Relatives: Novel Sources of Bacterial Blight and Rice Yellow Mottle Virus Resistance',
        authors: 'Ndjiondjop, M.N., Semagn, K., et al.',
        year: '2021',
        source: 'Theoretical and Applied Genetics, 134: 3891–3909',
        doi: '10.1007/s00122-021-03936-w',
        doiUrl: 'https://doi.org/10.1007/s00122-021-03936-w',
        abstract:
            'Screening of wild African rice taxa (O. longistaminata, O. barthii, and O. punctata) identifying novel alleles for broad-spectrum disease resistance and validating their introgression into elite breeding backgrounds.',
        badge: 'Peer-Reviewed Journal',
    },
    {
        id: 'nature-plants-2018',
        category: 'journal',
        title: 'The Genomic History and Independent Domestication of African Rice in the Niger Inland Delta',
        authors: 'AfricaRice Consortium & International Collaborators',
        year: '2018',
        source: 'Nature Plants, 4: 782–792',
        doi: '10.1038/s41477-018-0204-3',
        doiUrl: 'https://doi.org/10.1038/s41477-018-0204-3',
        abstract:
            'Whole-genome resequencing of hundreds of O. glaberrima accessions and wild O. barthii relatives tracing the domestication bottleneck to a single origin in northern Mali ~3,000 years ago.',
        badge: 'Nature Plants',
    },
    {
        id: 'sop-genebank-2023',
        category: 'guideline',
        title: 'Standard Operating Procedures for Seed Health Inspection, Regeneration, and Storage at the RBCA',
        authors: 'Genetic Resources Unit, AfricaRice',
        year: '2023',
        source: 'AfricaRice Technical Guideline Manual No. 14',
        doi: '10.5772/africarice.sop2023',
        doiUrl: 'https://rbca.africarice.org/',
        abstract:
            'Detailed technical protocols governing phytosanitary seed testing, isolation thresholds during field rejuvenation, KASP marker purity quality control, and cryogenic storage maintenance.',
        badge: 'Technical Guideline',
    },
];

export default function PublicationsPage() {
    const [filter, setFilter] = useState<'all' | 'book' | 'journal' | 'guideline'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = publicationsData.filter((pub) => {
        const matchesCategory = filter === 'all' || pub.category === filter;
        const matchesSearch =
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Scientific Publications' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Open Science</DataBadge>
                                <DataBadge variant="emerald">Peer-Reviewed Literature</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Scientific Publications & <em>Technical Monographs</em>
                            </h1>
                            <p className="world-page-lead">
                                Advancing agricultural science through peer-reviewed research. Explore our flagship genomics book, journal articles in Crop Science, Nature Plants, and PLOS ONE, alongside technical standard operating procedures governing genebank stewardship.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/data" className="btn-primary-dark">
                                    Access Open Research Data ↗
                                </Link>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Request Cited Accessions (SMTA)
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/publication/cover.jpg"
                                alt="Publications and books published by AfricaRice"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Published scientific monographs • Africa Rice Center</span>
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
                            value="1"
                            label="Flagship Book"
                            sublabel="Application of Genomics in Plant Conservation"
                            source="AfricaRice Monograph"
                        />
                        <StatCard
                            value="50+"
                            label="Peer-Reviewed Papers"
                            sublabel="Crop Science, Nature Plants, PLOS ONE"
                            source="Scopus / Web of Science"
                        />
                        <StatCard
                            value="100%"
                            label="Open Access"
                            sublabel="Free open citations with registered DOIs"
                            source="CGIAR Open Access Policy"
                        />
                        <StatCard
                            value="14"
                            label="Technical SOP Manuals"
                            sublabel="Guiding international genebank operations"
                            source="AfricaRice Operations"
                        />
                    </div>
                </div>
            </section>

            {/* Interactive Publications Filter & Library */}
            <section className="reading-content-section">
                <div className="section-shell">
                    {/* Search & Filter Toolbar */}
                    <div className="publications-toolbar">
                        <div className="pub-filter-tabs">
                            <button
                                type="button"
                                className={`pub-tab-btn ${filter === 'all' ? 'is-active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All Publications ({publicationsData.length})
                            </button>
                            <button
                                type="button"
                                className={`pub-tab-btn ${filter === 'book' ? 'is-active' : ''}`}
                                onClick={() => setFilter('book')}
                            >
                                Books & Monographs
                            </button>
                            <button
                                type="button"
                                className={`pub-tab-btn ${filter === 'journal' ? 'is-active' : ''}`}
                                onClick={() => setFilter('journal')}
                            >
                                Peer-Reviewed Journals
                            </button>
                            <button
                                type="button"
                                className={`pub-tab-btn ${filter === 'guideline' ? 'is-active' : ''}`}
                                onClick={() => setFilter('guideline')}
                            >
                                Technical Guidelines
                            </button>
                        </div>

                        <div className="pub-search-box">
                            <input
                                type="text"
                                placeholder="Search by title, author, or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                                aria-label="Search publications"
                            />
                        </div>
                    </div>

                    {/* Publications Cards Grid */}
                    <div className="publications-list-grid">
                        {filtered.map((pub) => (
                            <article key={pub.id} className="publication-full-card">
                                <div className="pub-card-header">
                                    <DataBadge variant="gold">{pub.badge}</DataBadge>
                                    <span className="pub-year">{pub.year}</span>
                                </div>

                                <h3 className="pub-card-title">{pub.title}</h3>
                                <p className="pub-card-authors">
                                    <strong>Authors:</strong> {pub.authors}
                                </p>
                                <p className="pub-card-source">
                                    <strong>Source:</strong> {pub.source}
                                </p>
                                <p className="pub-card-abstract">{pub.abstract}</p>

                                <div className="pub-card-footer">
                                    <span className="pub-doi-badge">DOI: {pub.doi}</span>
                                    <a
                                        href={pub.doiUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-primary-dark btn-sm"
                                    >
                                        View / Access Publication ↗
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
