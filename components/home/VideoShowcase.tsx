import VideoPlayer from '@/components/ui/VideoPlayer';
import Link from 'next/link';

export default function VideoShowcase() {
    return (
        <section className="genebank-video-section" id="genebank-tour">
            <div className="section-shell">
                <div className="section-header-centered">
                    <h2 className="section-main-heading">
                        Inside the <em>Sanctuary</em> of African Rice
                    </h2>
                    <p className="section-subtext">
                        Experience the daily scientific operations at the AfricaRice Research Station in M'bé, near Bouaké, Côte d'Ivoire. From seed drying at 15°C to -20°C deep preservation and genetic quality control.
                    </p>
                </div>

                <div className="video-feature-wrapper">
                    <VideoPlayer
                        src="/files/vdo/v1.mp4"
                        poster="/files/img/about/genebank/slide1.jpg"
                        title="Official Virtual Tour: Rice Biodiversity Center for Africa"
                        subtitle="AfricaRice Research Station, M'bé, Côte d'Ivoire"
                        chapters={[
                            { time: 0, title: "01. Introduction to RBCA M'bé Station", description: "Facility overview & mandate" },
                            { time: 8, title: '02. Seed Health & Moisture Control', description: 'Testing germination & desiccation to 5%' },
                            { time: 16, title: '03. STS, MTS & LTS Cold Vaults', description: 'Hermetic foil storage at -20°C' },
                            { time: 24, title: '04. Field Regeneration & Distribution', description: 'Purity monitoring & dispatch worldwide' },
                        ]}
                    />
                </div>

                {/* Facility Technical Specifications & Highlights */}
                <div className="facility-spec-grid">
                    <div className="spec-card">
                        <div className="spec-icon">❄️</div>
                        <h4>Cold Vault Engineering</h4>
                        <p>
                            Dual refrigeration systems maintain Long-Term Storage (LTS) at −21°C to −16°C and Medium-Term Storage (MTS) at 2°C to 5°C with tri-laminated hermetic foil pouches.
                        </p>
                        <span className="spec-metric">−20°C Base Vault</span>
                    </div>

                    <div className="spec-card">
                        <div className="spec-icon">⚡</div>
                        <h4>Uninterrupted Redundancy</h4>
                        <p>
                            Guaranteed power reliability via a dedicated heavy-duty industrial diesel generator grid with automatic failover and precision humidity regulating units.
                        </p>
                        <span className="spec-metric">24/7 Redundant Grid</span>
                    </div>

                    <div className="spec-card">
                        <div className="spec-icon">🌱</div>
                        <h4>Seed Health Certification</h4>
                        <p>
                            Rigorous germination rate testing (85% cultivated / 75% wild thresholds) and phytosanitary screening to eliminate seed-borne pathogens prior to storage.
                        </p>
                        <span className="spec-metric">Zero Seed Pathogens</span>
                    </div>

                    <div className="spec-card">
                        <div className="spec-icon">🌐</div>
                        <h4>International Backing</h4>
                        <p>
                            Funded through the CGIAR Genebank Platform, the Global Crop Diversity Trust, the African Development Bank, and 28 AfricaRice member countries.
                        </p>
                        <span className="spec-metric">Perpetual Trust Fund</span>
                    </div>
                </div>

                {/* Video Quote & External Documentary Links */}
                <div className="video-quote-banner">
                    <div className="quote-text-side">
                        <blockquote>
                            “Conserving rice genetic diversity is not merely about archiving seeds in cold rooms—it is about keeping a living reservoir of traits available so breeders can respond whenever climate stresses or new pests emerge across Africa.”
                        </blockquote>
                        <cite>
                            <strong>Dr. Marie-Noelle Ndjiondjop</strong>
                            <span>Head, Genetic Resources Unit • Manager, Rice Biodiversity Center for Africa</span>
                        </cite>
                    </div>
                    <div className="external-doc-side">
                        <span className="doc-label">Official Documentary & Feature Stories</span>
                        <a
                            href="https://www.youtube.com/results?search_query=AfricaRice+Genebank+Crop+Trust"
                            target="_blank"
                            rel="noreferrer"
                            className="doc-link-item"
                        >
                            <span>▶ Long-Term Funding Supports AfricaRice Genebank</span>
                            <small>Crop Trust & AfricaRice Landmark Agreement ↗</small>
                        </a>
                        <a
                            href="https://www.genesys-pgr.org/wiews/CIV033"
                            target="_blank"
                            rel="noreferrer"
                            className="doc-link-item"
                        >
                            <span>🌐 Live Genesys CIV033 Accession Database</span>
                            <small>Browse passport records & phenotypic data ↗</small>
                        </a>
                        <Link href="/about" className="doc-link-item">
                            <span>🏛️ Read Full Inauguration & Facility History</span>
                            <small>Learn about the February 2020 dedication ↗</small>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
