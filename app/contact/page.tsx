'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Contact Us' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">Global Headquarters & Research Stations</DataBadge>
                                <DataBadge variant="emerald">Côte d'Ivoire & Benin</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                Connect with the <em>AfricaRice Genebank</em>
                            </h1>
                            <p className="world-page-lead">
                                Whether you are a plant breeder requesting seed samples, an academic researcher planning a collaborative genomics project, or an agricultural institution arranging a technical visit, our team at M'bé and Cotonou is ready to assist.
                            </p>
                            <div className="hero-cta-group">
                                <a href="#inquiry-form" className="btn-primary-dark">
                                    Send Direct Message ↓
                                </a>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Order Germplasm (SMTA) ↗
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/home/contact.jpg"
                                alt="AfricaRice Research Station campus"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>AfricaRice Research Station • M'bé near Bouaké, Côte d'Ivoire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Research Stations Cards */}
            <section className="reading-content-section">
                <div className="section-shell">
                    <div className="section-header-centered">
                        <span className="section-eyebrow">Operating Hubs</span>
                        <h2 className="section-main-heading">
                            Our Research <em>Stations & Facilities</em>
                        </h2>
                        <p className="section-subtext">
                            Two permanent stations conserving germplasm, conducting field trials, and serving member states.
                        </p>
                    </div>

                    <div className="two-col-grid">
                        {/* Station 1: M'bé Station */}
                        <div className="station-card">
                            <div className="station-card-badge">Primary Genebank Facility</div>
                            <h3>AfricaRice Research Station • M'bé</h3>
                            <p className="station-address">
                                📍 01 BP 2551, Bouaké 01, Côte d’Ivoire<br />
                                Located along the Bouaké–M'bé corridor in central Côte d'Ivoire.
                            </p>
                            <ul className="station-contact-list">
                                <li><strong>Telephone:</strong> +225 27 22 48 09 20</li>
                                <li><strong>Fax:</strong> +225 27 31 63 25 78</li>
                                <li><strong>Genebank Manager:</strong> Dr. Marie-Noelle Ndjiondjop (<a href="mailto:m.ndjiondjop@cgiar.org">m.ndjiondjop@cgiar.org</a>)</li>
                                <li><strong>Facilities:</strong> Cold Vaults (STS, MTS, LTS), Seed Health Lab, 200 ha Irrigated Experimental Farm</li>
                            </ul>
                        </div>

                        {/* Station 2: Cotonou Station */}
                        <div className="station-card">
                            <div className="station-card-badge">Regional Research Hub</div>
                            <h3>AfricaRice Station • Cotonou</h3>
                            <p className="station-address">
                                📍 01 B.P. 2031, Cotonou, Republic of Benin<br />
                                Located near IITA campus in Abomey-Calavi, Cotonou.
                            </p>
                            <ul className="station-contact-list">
                                <li><strong>Telephone:</strong> +229 21 35 01 88</li>
                                <li><strong>Programs:</strong> Policy, Socio-Economics & Regional Varietal Testing</li>
                                <li><strong>Liaison:</strong> CGIAR West & Central Africa Agricultural Partnerships</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Inquiry Form & Map */}
            <section className="reading-content-section" id="inquiry-form">
                <div className="section-shell">
                    <div className="two-col-grid">
                        {/* Form */}
                        <div className="inquiry-form-wrap">
                            <span className="section-eyebrow">Direct Contact</span>
                            <h2 className="section-main-heading">
                                Send an <em>Inquiry</em>
                            </h2>
                            <p className="editorial-lead">
                                Have questions regarding our conserved collections, research protocols, or facility access?
                            </p>

                            {sent ? (
                                <div className="form-success-banner">
                                    <div className="success-icon">✓</div>
                                    <h3>Message Dispatched!</h3>
                                    <p>
                                        Thank you, {form.name}. Your message has been routed to the AfricaRice administration team. We will respond to <strong>{form.email}</strong> shortly.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn-secondary-outline"
                                        onClick={() => setSent(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleContactSubmit} className="world-request-form">
                                    <div className="form-field">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="e.g. Dr. Kwame Mensah"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="kwame@institution.org"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="subject">Topic of Inquiry *</label>
                                        <select
                                            id="subject"
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        >
                                            <option value="General Inquiry">General Center Inquiry</option>
                                            <option value="Germplasm Request">Seed & Germplasm Inquiries</option>
                                            <option value="Research Collaboration">Research & Genomics Collaboration</option>
                                            <option value="Facility Tour">Technical Visit / Tour Arrangement</option>
                                            <option value="Data & DOIs">Open Data & DOI Citations</option>
                                        </select>
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            placeholder="Write your message here..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary-dark full-width">
                                        Send Inquiry ↗
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map & Visiting Guide */}
                        <div className="map-and-visiting-wrap">
                            <div className="sidebar-card">
                                <h4>M'bé Research Station Map</h4>
                                <div className="map-embed-container">
                                    <iframe
                                        title="AfricaRice Research Station M'bé Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126484.22557404168!2d-5.12!3d7.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDEnMjQuMCJOIDXCsDA3JzEyLjAiVw!5e0!3m2!1sen!2sci!4v1600000000000!5m2!1sen!2sci"
                                        width="100%"
                                        height="280"
                                        style={{ border: 0, borderRadius: '8px' }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="visiting-notes">
                                    <strong>Visiting the Genebank:</strong>
                                    <p>
                                        Technical delegations, university students, and international researchers may schedule guided tours of the cold vaults, drying rooms, and field plots by contacting our administration at least 2 weeks in advance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
