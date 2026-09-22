import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';
import Link from 'next/link';

export default function SafetyDuplicationPage() {
    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs
                    items={[
                        { label: 'What We Do', href: '/what-we-do' },
                        { label: 'Safety Duplication' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Phase 03 / Routine Operations</DataBadge>
                                <DataBadge variant="emerald">"Black Box" Agreement</DataBadge>
                                <DataBadge variant="slate">Arctic & Rocky Mountain Repositories</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Global Safety Duplication: <em>Zero-Risk Insurance</em>
                            </h1>
                            <p className="world-page-lead">
                                To protect Africa's rice biodiversity against political instability, civil conflict, natural disasters, or facility breakdowns, AfricaRice maintains a strict double-tier safety duplication system. Genetically identical duplicates of base collections are secured abroad under international "Black Box" agreements.
                            </p>
                            <div className="hero-cta-group">
                                <Link href="/what-we-do/regeneration" className="btn-primary-dark">
                                    Next Stage: Seed Regeneration ↗
                                </Link>
                                <a
                                    href="https://www.croptrust.org/our-work/svalbard-global-seed-vault/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Svalbard Seed Vault Details ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/operation/duplslide1.jpg"
                                alt="Sealed safety duplicate seed boxes ready for transport"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Black-box duplicate seed consignments prepared at M'bé station</span>
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
                            value="2"
                            label="Global Backup Vaults"
                            sublabel="Fort Collins (USA) & Svalbard (Norway)"
                            source="AfricaRice Deposit Agreements"
                        />
                        <StatCard
                            value="100%"
                            label="Black Box Status"
                            sublabel="Exclusive ownership retained by AfricaRice"
                            source="FAO Treaty Legal Framework"
                        />
                        <StatCard
                            value="−18°C"
                            label="Svalbard Permafrost Temp"
                            sublabel="Deep underground sandstone mountain vault"
                            source="NordGen Facility Data"
                        />
                        <StatCard
                            value="500+"
                            label="Seeds per Packet"
                            sublabel="Hermetically heat-sealed in aluminum foil"
                            source="Packaging Standard"
                        />
                    </div>
                </div>
            </section>

            {/* The Two Destinations */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Geographic Redundancy</span>
                        <h2 className="section-main-heading">
                            Our Two International <em>Sanctuaries</em>
                        </h2>
                        <p className="section-subtext">
                            Securing duplicate seed parcels across distinct geopolitical and climatic zones to eliminate any single point of failure.
                        </p>
                    </div>

                    <div className="two-col-grid">
                        <div className="vault-partner-card">
                            <div className="vault-partner-badge">Primary Backup Facility</div>
                            <h3>USDA-ARS NCGRP • Fort Collins, Colorado, USA</h3>
                            <span className="vault-partner-sub">National Center for Genetic Resources Preservation</span>
                            <p>
                                Established through a formal bilateral agreement with the United States Department of Agriculture. Houses tens of thousands of duplicate AfricaRice accessions under -18°C mechanical refrigeration and liquid nitrogen cryopreservation.
                            </p>
                            <ul className="bullet-feature-list">
                                <li><strong>Location:</strong> Colorado State University Campus, Fort Collins, USA</li>
                                <li><strong>Facility Type:</strong> Dedicated federal genebank fortress with reinforced vaults</li>
                                <li><strong>Storage Environment:</strong> −18°C walk-in freezer vaults</li>
                            </ul>
                        </div>

                        <div className="vault-partner-card svalbard-theme">
                            <div className="vault-partner-badge">Secondary Arctic Backup</div>
                            <h3>Svalbard Global Seed Vault • Longyearbyen, Norway</h3>
                            <span className="vault-partner-sub">Administered by NordGen, Crop Trust & Norwegian Government</span>
                            <p>
                                Known as the "Doomsday Vault", carved 120 meters inside a sandstone mountain on Spitsbergen Island in the Arctic Svalbard archipelago. Permafrost and thick rock ensure that even in the event of total power loss, seeds remain frozen naturally.
                            </p>
                            <ul className="bullet-feature-list">
                                <li><strong>Location:</strong> 78° North, Spitsbergen Island, Arctic Ocean</li>
                                <li><strong>Security:</strong> Permafrost insulation, high altitude immune to sea level rise</li>
                                <li><strong>Deposit Schedule:</strong> Regular shipments funded by the Global Crop Diversity Trust</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The "Black Box" Principle & Packaging */}
            <section className="traits-accordion-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Legal & Logistics</span>
                        <h2 className="section-main-heading">
                            The "Black Box" <em>Principle Explained</em>
                        </h2>
                        <p className="section-subtext">
                            How international law guarantees that deposited seed duplicates remain inviolable.
                        </p>
                    </div>

                    <InteractiveAccordion
                        items={[
                            {
                                id: 'black-box-definition',
                                title: 'What is a "Black Box" Depository Agreement?',
                                subtitle: 'Absolute custody and legal sovereignty retained by AfricaRice',
                                tag: 'International Law',
                                content: (
                                    <p>
                                        Under a Black Box agreement, the host repository (such as the Svalbard Global Seed Vault or USDA-ARS NCGRP) provides secure, climate-controlled storage space, but <strong>does not acquire ownership, does not open the boxes, and has no legal authority to distribute seeds</strong> to any third party. Only AfricaRice possesses the legal authority to request the return of the boxes or authorize their transfer.
                                    </p>
                                ),
                            },
                            {
                                id: 'packaging-protocol',
                                title: 'Hermetic Tri-Laminated Packaging Protocol',
                                subtitle: 'Engineered barrier protection against moisture, gases, and radiation',
                                tag: 'Materials Science',
                                content: (
                                    <p>
                                        Seeds intended for safety duplication undergo extra-rigorous drying to 5.0% moisture. They are counted (minimum 500 viable seeds per accession) and heat-sealed in heavy-gauge tri-laminated pouches composed of an outer polyester layer (mechanical durability), a middle aluminum foil core (zero moisture vapor transmission), and an inner polyethylene sealant layer. Pouches are packed into heavy-duty plastic archive boxes sealed with tamper-evident security tags.
                                    </p>
                                ),
                            },
                            {
                                id: 'historical-relevance',
                                title: 'Why Safety Duplication Matters: Lessons from History',
                                subtitle: 'How international genebank duplicates have rescued collections during crises',
                                tag: 'Case Studies',
                                content: (
                                    <p>
                                        During the Ivorian political crises of the early 2000s, AfricaRice temporarily relocated its headquarters. The existence of safety duplicates safeguarded the collection against catastrophic loss. Similarly, in 2015, the international genebank ICARDA successfully retrieved its safety duplicates from Svalbard to rebuild its agricultural collection in Lebanon and Morocco after conflict in Syria.
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
