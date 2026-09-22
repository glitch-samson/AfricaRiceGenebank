import Link from 'next/link';

export default function TreatyBanner() {
    return (
        <section className="treaty-mandate-section">
            <div className="section-shell">
                <div className="mandate-intro">
                    <div>
                        <h2>Conservation with a <em>global responsibility.</em></h2>
                    </div>
                    <p>
                        RBCA operates within an international framework that keeps Africa&apos;s rice diversity secure, governed, and available for responsible use.
                    </p>
                </div>
                <div className="treaty-card-grid">
                    <article className="treaty-card">
                        <div className="treaty-card-content">
                            <span className="treaty-card-kicker">International Governance</span>
                            <h3>CGIAR Genebank Platform</h3>
                            <p>
                                RBCA is one of 11 international CGIAR genebanks conserving plant genetic resources in trust for the benefit of humanity.
                            </p>
                        </div>
                    </article>

                    <article className="treaty-card">
                        <div className="treaty-card-content">
                            <span className="treaty-card-kicker">Global Legal Mandate</span>
                            <h3>FAO Plant Treaty (ITPGRFA)</h3>
                            <p>
                                All germplasm is distributed under the Standard Material Transfer Agreement (SMTA) as a shared global public good for breeding and research.
                            </p>
                        </div>
                    </article>

                    <article className="treaty-card">
                        <div className="treaty-card-content">
                            <span className="treaty-card-kicker">Continental Coalition</span>
                            <h3>28 African Member States</h3>
                            <p>
                                Owned and governed by 28 African nations, serving national agricultural research systems (NARS) and over 35 million smallholder farmers.
                            </p>
                        </div>
                    </article>

                    <article className="treaty-card">
                        <div className="treaty-card-content">
                            <span className="treaty-card-kicker">Long-Term Endowment</span>
                            <h3>Global Crop Diversity Trust</h3>
                            <p>
                                In perpetuity financial and technical backing securing cold vault maintenance, safety duplication, and international distribution standards.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
