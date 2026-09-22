'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import InteractiveAccordion from '@/components/ui/InteractiveAccordion';

export default function RequestGermplasmPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        institution: '',
        country: '',
        accessions: '',
        purpose: 'research',
        agreedToSmta: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Request Germplasm' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Global Public Good</DataBadge>
                                <DataBadge variant="emerald">FAO Treaty SMTA</DataBadge>
                                <DataBadge variant="slate">Free Distribution</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Germplasm Ordering & <em>SMTA Access Portal</em>
                            </h1>
                            <p className="world-page-lead">
                                AfricaRice distributes seed samples of conserved African rice (<em>O. glaberrima</em>), Asian rice (<em>O. sativa</em>), interspecific lines (NERICA/ARICA), and wild relatives free of charge for food and agriculture breeding, research, and training under the FAO International Treaty.
                            </p>
                            <div className="hero-cta-group">
                                <a href="#order-form" className="btn-primary-dark">
                                    Fill Request Form Below ↓
                                </a>
                                <a
                                    href="https://www.genesys-pgr.org/wiews/CIV033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary-outline"
                                >
                                    Browse via Genesys Cart ↗
                                </a>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/home/germplasm.jpg"
                                alt="Inspecting conserved rice seeds for distribution"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Certified seed samples packaged for international research distribution</span>
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
                            value="124,604"
                            label="Samples Dispatched"
                            sublabel="Delivered across 57 countries worldwide"
                            source="AfricaRice Distribution History"
                        />
                        <StatCard
                            value="164"
                            label="Partner Institutions"
                            sublabel="NARS, universities, and international centers"
                            source="Transfer Registry"
                        />
                        <StatCard
                            value="Free"
                            label="Cost of Materials"
                            sublabel="Shared global public good for humanity"
                            source="FAO ITPGRFA Mandate"
                        />
                        <StatCard
                            value="100%"
                            label="Phytosanitary Certified"
                            sublabel="Accompanied by official plant quarantine certificate"
                            source="DPV Côte d'Ivoire"
                        />
                    </div>
                </div>
            </section>

            {/* 4-Step Ordering Process Guide */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Standard Procedure</span>
                        <h2 className="section-main-heading">
                            The 4-Step Germplasm <em>Request Workflow</em>
                        </h2>
                        <p className="section-subtext">
                            Ensuring regulatory compliance and rapid delivery of disease-free seed samples.
                        </p>
                    </div>

                    <div className="workflow-steps-quad">
                        <div className="workflow-step-card">
                            <span className="step-badge">Step 01</span>
                            <h3>Select Accessions</h3>
                            <p>
                                Search the <strong>Genesys Global Portal (CIV033)</strong> or our phenotypic and subset catalogs to identify specific accession numbers (e.g. TOG 5681, RAM 23) suited to your research objectives.
                            </p>
                        </div>

                        <div className="workflow-step-card">
                            <span className="step-badge">Step 02</span>
                            <h3>Import Permit</h3>
                            <p>
                                Obtain an official <strong>Plant Import Permit</strong> from your country’s agricultural ministry or national plant protection service, specifying any mandatory quarantine statements.
                            </p>
                        </div>

                        <div className="workflow-step-card">
                            <span className="step-badge">Step 03</span>
                            <h3>Execute SMTA</h3>
                            <p>
                                Review and electronically sign the <strong>Standard Material Transfer Agreement (SMTA)</strong>, agreeing that the materials will remain in the public domain for food and agricultural research.
                            </p>
                        </div>

                        <div className="workflow-step-card">
                            <span className="step-badge">Step 04</span>
                            <h3>Phytosanitary & Dispatch</h3>
                            <p>
                                AfricaRice inspects the seed lot, obtains an official <strong>Phytosanitary Certificate</strong> from the Ivorian government, and dispatches certified packets (typically 25–50 seeds each) via international air courier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Request Form & Terms */}
            <section className="request-form-section" id="order-form">
                <div className="section-shell">
                    <div className="two-col-grid">
                        <div className="form-content-side">
                            <span className="section-eyebrow">Direct Submission</span>
                            <h2 className="section-main-heading">
                                Official Germplasm <em>Request Form</em>
                            </h2>
                            <p className="editorial-lead">
                                Submit your request directly to the AfricaRice Genetic Resources Unit. Our seed distribution desk will review your accession list and guide you through the import permit and SMTA signing.
                            </p>

                            {submitted ? (
                                <div className="form-success-banner">
                                    <div className="success-icon">✓</div>
                                    <h3>Request Submitted Successfully!</h3>
                                    <p>
                                        Thank you, {formData.fullName}. Your germplasm request has been received by the AfricaRice Seed Distribution Desk. A curator will contact you at <strong>{formData.email}</strong> within 2–3 business days with the draft SMTA and courier requirements.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn-secondary-outline"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Submit Another Request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="world-request-form">
                                    <div className="form-row">
                                        <div className="form-field">
                                            <label htmlFor="fullName">Full Name & Title *</label>
                                            <input
                                                id="fullName"
                                                type="text"
                                                required
                                                placeholder="e.g. Dr. Jane Doe"
                                                value={formData.fullName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, fullName: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="email">Official Institutional Email *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="name@institution.org"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-field">
                                            <label htmlFor="institution">Organization / University *</label>
                                            <input
                                                id="institution"
                                                type="text"
                                                required
                                                placeholder="e.g. National Agricultural Research Institute"
                                                value={formData.institution}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, institution: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="country">Destination Country *</label>
                                            <input
                                                id="country"
                                                type="text"
                                                required
                                                placeholder="e.g. Ghana, Senegal, Germany, Japan"
                                                value={formData.country}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, country: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="accessions">Requested Accessions / Species *</label>
                                        <textarea
                                            id="accessions"
                                            required
                                            rows={4}
                                            placeholder="List specific accession numbers (e.g. TOG 5681, RAM 23) or describe desired traits (e.g. O. glaberrima 350-accession mini-core, drought tolerant upland varieties)..."
                                            value={formData.accessions}
                                            onChange={(e) =>
                                                setFormData({ ...formData, accessions: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="purpose">Intended Use *</label>
                                        <select
                                            id="purpose"
                                            value={formData.purpose}
                                            onChange={(e) =>
                                                setFormData({ ...formData, purpose: e.target.value })
                                            }
                                        >
                                            <option value="breeding">Crop Breeding & Varietal Development</option>
                                            <option value="research">Scientific Research & Genomics</option>
                                            <option value="education">University Education & Training</option>
                                            <option value="conservation">Safety Duplication & Conservation</option>
                                        </select>
                                    </div>

                                    <div className="form-checkbox-field">
                                        <input
                                            type="checkbox"
                                            id="agreedToSmta"
                                            required
                                            checked={formData.agreedToSmta}
                                            onChange={(e) =>
                                                setFormData({ ...formData, agreedToSmta: e.target.checked })
                                            }
                                        />
                                        <label htmlFor="agreedToSmta">
                                            I agree to the terms of the <strong>Standard Material Transfer Agreement (SMTA)</strong> under the FAO International Treaty (ITPGRFA), and confirm that these seeds will be used exclusively for food and agricultural research without claiming intellectual property rights on the material in the form received. *
                                        </label>
                                    </div>

                                    <button type="submit" className="btn-primary-dark full-width">
                                        Submit Official Seed Request ↗
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="form-sidebar-side">
                            <div className="sidebar-card">
                                <h4>SMTA Essential Legal Principles</h4>
                                <ul className="bullet-feature-list">
                                    <li><strong>No IPR Claim:</strong> Recipients cannot claim intellectual property or patent rights on the germplasm or its genetic components in the form received.</li>
                                    <li><strong>Transfers to Third Parties:</strong> If material is transferred to a third party, it must be transferred under the same SMTA terms.</li>
                                    <li><strong>Information Sharing:</strong> Recipients are encouraged to share non-confidential characterization and evaluation data back with AfricaRice to enrich global knowledge.</li>
                                </ul>

                                <div className="curator-direct-box">
                                    <strong>Need Help with a Large Request?</strong>
                                    <p>Contact the Seed Distribution Desk directly:</p>
                                    <a href="mailto:m.ndjiondjop@cgiar.org" className="text-link-arrow">
                                        m.ndjiondjop@cgiar.org ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
