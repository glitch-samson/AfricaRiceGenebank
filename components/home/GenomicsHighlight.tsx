import Link from 'next/link';
import DataBadge from '@/components/ui/DataBadge';

export default function GenomicsHighlight() {
    return (
        <section className="genomics-spotlight-section">
            <div className="section-shell">
                <div className="genomics-grid">
                    <div className="genomics-content">
                        <span className="section-eyebrow">05 / Cutting-Edge Science</span>
                        <h2 className="section-main-heading">
                            Genomics of <em>Genebanks</em>
                        </h2>
                        <p className="genomics-lead">
                            Moving beyond passive seed banking into active digital biology. By pairing high-density DArTseq sequencing with passport metadata, RBCA unlocks molecular passports for thousands of accessions.
                        </p>

                        <div className="genomics-metric-chips">
                            <div className="chip-item">
                                <strong>9,120</strong>
                                <span>Accessions Genotyped</span>
                            </div>
                            <div className="chip-item">
                                <strong>31,739</strong>
                                <span>DArTseq SNP Markers</span>
                            </div>
                            <div className="chip-item">
                                <strong>8,381</strong>
                                <span>Public on Genesys</span>
                            </div>
                        </div>

                        <div className="genomics-benefits-list">
                            <div className="benefit-item">
                                <div className="benefit-icon">🧬</div>
                                <div>
                                    <h4>Molecular Passporting & Verification</h4>
                                    <p>Identifies genetic duplicates, corrects historical mislabeling, and guarantees true-to-type seed integrity across regeneration cycles.</p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">🔬</div>
                                <div>
                                    <h4>Mini-Core Diversity Panels</h4>
                                    <p>Derived a 350-accession <em>Oryza glaberrima</em> mini-core representing maximum allelic diversity, enabling breeders to phenotype for drought and blast efficiently.</p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">📊</div>
                                <div>
                                    <h4>Open FAIR Science in Genesys</h4>
                                    <p>Genotype datasets are linked to phenotypic observations and accessible globally via the Genesys Crop Diversity Platform.</p>
                                </div>
                            </div>
                        </div>

                        <div className="genomics-actions">
                            <Link href="/research/genomics" className="btn-primary-dark">
                                Explore Genomics Research ↗
                            </Link>
                            <Link href="/data/genomics" className="btn-secondary-outline">
                                Access Genomic Datasets
                            </Link>
                        </div>
                    </div>

                    <div className="genomics-visual">
                        <div className="genomics-card-shell">
                            <img
                                src="/files/img/home/oppp.jpg"
                                alt="Genomics sequencing of rice at AfricaRice"
                                className="genomics-img"
                            />
                            <div className="genomics-floating-overlay">
                                <div className="overlay-badge-row">
                                    <DataBadge variant="gold">DArTseq High-Density</DataBadge>
                                    <DataBadge variant="emerald">Genesys CIV033</DataBadge>
                                </div>
                                <h4>Allele Mining & Climate Adaptation</h4>
                                <p>
                                    Mapping drought, salinity, and Rice Yellow Mottle Virus (RYMV) resistance loci across indigenous African rice germplasm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
