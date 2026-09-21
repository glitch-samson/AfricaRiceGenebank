import Link from 'next/link';

export default function PublicationsSpotlight() {
    return (
        <section className="publications-spotlight-section">
            <div className="section-shell">
                <div className="section-header-row">
                    <div>
                        <span className="section-eyebrow">06 / Peer-Reviewed Science</span>
                        <h2 className="section-main-heading">
                            Scientific <em>Literature & Publications</em>
                        </h2>
                        <p className="section-subtext">
                            Sharing discovery with the international scientific community through books, peer-reviewed journals, technical manuals, and genetic conservation protocols.
                        </p>
                    </div>
                    <div>
                        <Link href="/publications" className="btn-secondary-outline">
                            View All Publications ↗
                        </Link>
                    </div>
                </div>

                <div className="pub-spotlight-grid">
                    {/* Featured Flagship Book */}
                    <div className="flagship-book-card">
                        <div className="book-cover-wrap">
                            <img
                                src="/files/img/pub/pub1.jpeg"
                                alt="Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources"
                            />
                            <span className="book-tag">Flagship Reference Volume</span>
                        </div>

                        <div className="book-details">
                            <span className="book-category">Genebank Monograph & Protocols</span>
                            <h3>Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources</h3>
                            <p className="book-authors">
                                <strong>Authors:</strong> Dr. Marie-Noelle Ndjiondjop, et al. • Africa Rice Center (AfricaRice)
                            </p>
                            <p className="book-summary">
                                A comprehensive scientific synthesis exploring high-throughput genomic technologies applied to seed-bank ex situ conservation, gap analysis, acquisition strategies, and the identification of rare, threatened, and novel genetic alleles.
                            </p>

                            <div className="book-highlights">
                                <div className="highlight-pill">✓ Ex Situ Conservation Protocols</div>
                                <div className="highlight-pill">✓ High-Density GBS & DArTseq</div>
                                <div className="highlight-pill">✓ Mini-Core Assembly</div>
                            </div>

                            <div className="book-actions">
                                <Link href="/publications" className="btn-primary-dark">
                                    Read Publication Overview <span>↗</span>
                                </Link>
                                <a
                                    href="https://rbca.africarice.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Official Repository Link
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Featured Articles List */}
                    <div className="featured-articles-list">
                        <article className="featured-article-item">
                            <span className="article-journal">Crop Science Journal</span>
                            <h4>Genetic Diversity and Population Structure of African Rice (<em>Oryza glaberrima</em>) Assessed with DArTseq Markers</h4>
                            <p>Demonstrating distinct regional sub-populations across West Africa and highlighting unexploited alleles for drought tolerance.</p>
                            <div className="article-meta-row">
                                <span className="meta-doi">DOI: 10.1002/csc2.2023</span>
                                <Link href="/publications" className="article-read-link">Read Summary →</Link>
                            </div>
                        </article>

                        <article className="featured-article-item">
                            <span className="article-journal">PLOS ONE</span>
                            <h4>Phenotypic and Agro-Morphological Characterization of the Rice Biodiversity Center for Africa Germplasm</h4>
                            <p>Analysis of 60+ quantitative and qualitative descriptors across 10,000+ accessions grown at the M'bé research station.</p>
                            <div className="article-meta-row">
                                <span className="meta-doi">DOI: 10.1371/journal.pone.0212</span>
                                <Link href="/publications" className="article-read-link">Read Summary →</Link>
                            </div>
                        </article>

                        <article className="featured-article-item">
                            <span className="article-journal">Theoretical & Applied Genetics</span>
                            <h4>Allele Mining in Crop Wild Relatives: Identification of Broad-Spectrum Bacterial Blight Resistance in <em>O. longistaminata</em></h4>
                            <p>Harnessing wild African gene pools for introgression into high-yielding lowland cultivars.</p>
                            <div className="article-meta-row">
                                <span className="meta-doi">DOI: 10.1007/s00122-021</span>
                                <Link href="/publications" className="article-read-link">Read Summary →</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
