import Link from 'next/link';
import StatCard from '@/components/ui/StatCard';

export default function GlobalImpact() {
    return (
        <section className="global-impact-section">
            <div className="section-shell">
                <div className="section-header-centered">
                    <h2 className="section-main-heading">
                        Measurable Impact <em>Across Continents</em>
                    </h2>
                    <p className="section-subtext">
                        A genebank's value is realized when conserved diversity reaches plant breeders, national researchers, and universities developing resilient agricultural solutions.
                    </p>
                </div>

                <div className="impact-stats-row">
                    <StatCard
                        value="124,604"
                        label="Seed Samples Dispatched"
                        sublabel="To breeders, scientists & universities globally"
                        source="AfricaRice Distribution Records"
                    />
                    <StatCard
                        value="164"
                        label="Partner Institutions"
                        sublabel="National agricultural research systems & CGIAR centers"
                        source="Official Genebank Database"
                    />
                    <StatCard
                        value="57"
                        label="Countries Served"
                        sublabel="Across Africa, Asia, Europe, and the Americas"
                        source="FAO SMTA Registry"
                    />
                    <StatCard
                        value="14,114"
                        label="Permanent DOIs Assigned"
                        sublabel="Global digital identifiers linking genomics & passport data"
                        source="Genesys Global Portal"
                    />
                </div>

                {/* Regional Distribution Breakdown Card */}
                <div className="distribution-geo-card">
                    <div className="geo-card-header">
                        <h3>Geographical Distribution Profile</h3>
                        <p>
                            All samples are provided free of charge for food and agriculture under the International Treaty's Standard Material Transfer Agreement (SMTA).
                        </p>
                    </div>

                    <div className="geo-regions-grid">
                        <div className="region-box">
                            <div className="region-bar" style={{ width: '68%' }} />
                            <div className="region-meta">
                                <strong>Sub-Saharan Africa (NARS & Universities)</strong>
                                <span>~68% of total transfers</span>
                            </div>
                            <p>Directly supporting national breeding programs in 28 member states to breed drought, flood, and disease-resistant varieties.</p>
                        </div>

                        <div className="region-box">
                            <div className="region-bar" style={{ width: '18%' }} />
                            <div className="region-meta">
                                <strong>CGIAR & International Research Centers</strong>
                                <span>~18% of total transfers</span>
                            </div>
                            <p>Global collaboration with IRRI, CIAT, and Bioversity International for pan-continental gene discovery.</p>
                        </div>

                        <div className="region-box">
                            <div className="region-bar" style={{ width: '14%' }} />
                            <div className="region-meta">
                                <strong>Global Universities & Advanced Research Labs</strong>
                                <span>~14% of total transfers</span>
                            </div>
                            <p>Academic partners across Europe, North America, and Asia conducting deep sequencing and evolutionary genomics.</p>
                        </div>
                    </div>

                    <div className="geo-card-footer">
                        <div className="geo-footer-cta">
                            <span>Looking to utilize AfricaRice germplasm in your research?</span>
                            <Link href="/request-germplasm" className="btn-primary-dark">
                                Request Germplasm Under SMTA ↗
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
