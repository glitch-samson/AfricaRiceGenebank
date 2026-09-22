import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function ConservationPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Conservation & Cold Storage Vaults' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 02 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">−20°C Cryogenic Standard</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Ex Situ Seed Conservation & <em>Cold Vault Engineering</em>
                            </h1>
                            <p className="world-page-lead">
                                True seed conservation requires precise manipulation of moisture, temperature, and atmospheric exposure. At our M'bé research station, rice seeds undergo controlled drying to 5–6% moisture before being sealed in tri-laminated foil packets across three thermal tiers engineered to preserve embryonic viability for up to a century.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/what-we-do/safety-duplication" className="btn-primary-dark">
                                    Next: Safety Duplication at Svalbard ↗
                                </Link>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Request Conserved Seed Stocks
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/conservation/slide1.jpg"
                                alt="Inside the AfricaRice cold storage vaults at M'bé"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Cold vault at AfricaRice Research Station • M'bé, Côte d'Ivoire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facts Rail */}
            <section className="facts-strip-section">
                <div className="section-shell">
                    <div className="facts-strip-grid">
                        <StatCard
                            value="15–19°C"
                            label="Drying Chamber (STS)"
                            sublabel="14–18% RH gentle moisture removal"
                            source="Facility Monitoring"
                        />
                        <StatCard
                            value="2–5°C"
                            label="Medium-Term Storage (MTS)"
                            sublabel="Active distribution vault (~35% RH)"
                            source="FAO Genebank Standards"
                        />
                        <StatCard
                            value="−20°C"
                            label="Long-Term Storage (LTS)"
                            sublabel="Base vault for 50–100+ year preservation"
                            source="Cryogenic Engineering"
                        />
                        <StatCard
                            value="5–6%"
                            label="Critical Seed Moisture"
                            sublabel="Tri-laminated aluminum heat-sealed packets"
                            source="Physiology Laboratory"
                        />
                    </div>
                </div>
            </section>

            {/* Three Thermal Tiers Breakdown */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Vault Architecture</span>
                        <h2 className="section-main-heading">
                            The Three Thermal <em>Conservation Tiers</em>
                        </h2>
                        <p className="section-subtext">
                            Following Harrington's rules of seed storage: every 1% reduction in seed moisture and every 5°C reduction in temperature doubles seed storage lifespan.
                        </p>
                    </div>

                    <div className="three-tiers-grid">
                        {/* Tier 1: STS */}
                        <div className="tier-card">
                            <div className="tier-head">
                                <span className="tier-pill">Phase A: Processing</span>
                                <h3>Short-Term Storage & Drying Room (STS)</h3>
                                <div className="tier-temp">15°C to 19°C • 14% to 18% RH</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Freshly harvested seeds entering from field regeneration plots contain 14–20% moisture. Placed in open mesh trays inside our dehumidified drying room for 4 to 6 weeks, seeds gently lose moisture down to the critical 5–6% equilibrium threshold without thermal stress or cellular fracturing.
                                </p>
                                <ul className="tier-list">
                                    <li><strong>Target Moisture:</strong> 5.0% to 6.0%</li>
                                    <li><strong>Packaging:</strong> Breathable cotton bags on open steel racks</li>
                                    <li><strong>Duration:</strong> 3 to 6 weeks</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tier 2: MTS */}
                        <div className="tier-card active-tier">
                            <div className="tier-head">
                                <span className="tier-pill highlight">Phase B: Distribution</span>
                                <h3>Medium-Term Storage: Active Vault (MTS)</h3>
                                <div className="tier-temp">2°C to 5°C • ~35% RH</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    Dedicated to seed accessions in active demand for breeding, scientific research, and germplasm requests. Maintained slightly above freezing. Samples are stored in airtight laminated pouches or glass containers with color-indicating silica gel.
                                </p>
                                <ul className="tier-list">
                                    <li><strong>Purpose:</strong> International germplasm distribution</li>
                                    <li><strong>Testing Interval:</strong> Viability monitored every 5 years</li>
                                    <li><strong>Regeneration Trigger:</strong> When quantity drops below 100g</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tier 3: LTS */}
                        <div className="tier-card base-tier">
                            <div className="tier-head">
                                <span className="tier-pill">Phase C: Perpetuity</span>
                                <h3>Long-Term Storage: Base Vault (LTS)</h3>
                                <div className="tier-temp">−21°C to −16°C (−20°C Nominal)</div>
                            </div>
                            <div className="tier-body">
                                <p>
                                    The ultimate genetic fortress of the genebank. Sealed in moisture-proof tri-laminated aluminum foil packets (polyester/aluminum/polyethylene) under partial vacuum. These base packets are never opened for routine distribution, guaranteeing conservation for 50 to 100+ years.
                                </p>
                                <ul className="tier-list">
                                    <li><strong>Purpose:</strong> Permanent heritage conservation</li>
                                    <li><strong>Testing Interval:</strong> Monitored every 10 years</li>
                                    <li><strong>Viability Standard:</strong> &gt;85% germination integrity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitoring & Infrastructure Accordion */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Facility Engineering</span>
                        <h2 className="section-main-heading">
                            Monitoring, Power & <em>Disaster Safeguards</em>
                        </h2>
                        <p className="section-subtext">
                            State-of-the-art redundancy systems protecting Africa's agricultural future against power outages and thermal fluctuations.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'power-security',
                                title: 'Dual-Circuit Electrical Redundancy & Heavy Diesel Backups',
                                subtitle: 'Automated transfer switches ensuring uninterrupted sub-zero cooling',
                                tag: 'Electrical Grid',
                                content: (
                                    <p>
                                        Operating in an equatorial climate requires dependable power redundancy. The M'bé facility utilizes a primary commercial grid connection coupled with twin heavy-duty industrial diesel generators equipped with automatic transfer switches that activate within 15 seconds of any grid irregularity. A continuous fuel supply on-site guarantees weeks of autonomous power during extended regional outages.
                                    </p>
                                ),
                            },
                            {
                                id: 'temperature-telemetry',
                                title: 'Continuous Temperature & Relative Humidity Telemetry',
                                subtitle: 'Automated cloud logging with multi-threshold SMS and email alert systems',
                                tag: 'Sensor Array',
                                content: (
                                    <p>
                                        Calibrated electronic sensor probes throughout the drying rooms, active vaults, and base freezers log thermal and humidity readings every 10 minutes. Any variation exceeding ±2°C or ±5% RH triggers audible alarms, automated SMS text alerts, and emergency notifications to genebank engineering staff.
                                    </p>
                                ),
                            },
                            {
                                id: 'viability-testing',
                                title: 'Periodic Germination & Viability Testing Protocols',
                                subtitle: 'Ensuring seed vigour remains high through controlled incubator trials',
                                tag: 'Seed Physiology',
                                content: (
                                    <p>
                                        Under FAO Genebank Standards, base collections are tested for seed viability every 10 years, and active collections every 5 years. Random samples of 50 to 100 seeds are placed on moistened filter paper in programmable germinators (alternating 30°C/20°C with 12h photoperiod). If germination drops below 85% (cultivated) or 75% (wild), the accession is immediately scheduled for field regeneration.
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
