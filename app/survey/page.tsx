'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import Link from 'next/link';

export default function SurveyPage() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [surveyData, setSurveyData] = useState({
        recipientName: '',
        institution: '',
        smtaNumber: '',
        speciesReceived: 'Oryza sativa',
        germinationRate: '>90%',
        traitObservations: '',
        publicationsGenerated: '',
        overallSatisfaction: 'Very Satisfied',
    });

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            setSubmitted(true);
        }
    };

    return (
        <div className="world-page-container">
            <div className="section-shell">
                <Breadcrumbs items={[{ label: 'Germplasm Recipient Survey' }]} />
            </div>

            {/* Hero Section */}
            <section className="world-page-hero">
                <div className="section-shell">
                    <div className="page-hero-grid">
                        <div className="page-hero-text">
                            <div className="hero-badge-row">
                                <DataBadge variant="gold">CGIAR Impact Monitoring</DataBadge>
                                <DataBadge variant="emerald">Germplasm Feedback</DataBadge>
                            </div>
                            <h1 className="world-page-title">
                                CGIAR Germplasm Performance <em>Evaluation Survey</em>
                            </h1>
                            <p className="world-page-lead">
                                If your research team or university has received rice seed samples from the AfricaRice Genebank under an SMTA, your feedback directly informs our germination monitoring, seed multiplication schedules, and international crop improvement reports.
                            </p>
                            <div className="hero-cta-group">
                                <a href="#survey-start" className="btn-primary-dark">
                                    Start Evaluation Survey ↓
                                </a>
                                <Link href="/request-germplasm" className="btn-secondary-outline">
                                    Request New Seeds (SMTA)
                                </Link>
                            </div>
                        </div>

                        <div className="page-hero-media">
                            <img
                                src="/files/img/ques.jpg"
                                alt="Researcher evaluating rice plants in the field"
                                className="hero-rounded-image"
                            />
                            <div className="hero-caption-pill">
                                <span>Evaluating distributed germplasm performance in trial plots</span>
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
                            value="3"
                            label="Survey Sections"
                            sublabel="Takes less than 4 minutes to complete"
                        />
                        <StatCard
                            value="164"
                            label="Recipient Institutions"
                            sublabel="Contributing to continuous genebank QMS"
                        />
                        <StatCard
                            value="100%"
                            label="Confidential Data"
                            sublabel="Aggregated for CGIAR annual reports"
                        />
                        <StatCard
                            value="Direct Impact"
                            label="On Seed Multiplication"
                            sublabel="Guides prioritization of regeneration cycles"
                        />
                    </div>
                </div>
            </section>

            {/* Interactive Multi-Step Form */}
            <section className="reading-content-section" id="survey-start">
                <div className="section-shell">
                    <div className="survey-container-box">
                        <div className="survey-progress-header">
                            <div className="step-indicator">
                                <span className={`step-circle ${step >= 1 ? 'active' : ''}`}>1</span>
                                <span className="step-text">Recipient & Order</span>
                            </div>
                            <div className="step-line" />
                            <div className="step-indicator">
                                <span className={`step-circle ${step >= 2 ? 'active' : ''}`}>2</span>
                                <span className="step-text">Germination & Growth</span>
                            </div>
                            <div className="step-line" />
                            <div className="step-indicator">
                                <span className={`step-circle ${step >= 3 ? 'active' : ''}`}>3</span>
                                <span className="step-text">Research Outcomes</span>
                            </div>
                        </div>

                        {submitted ? (
                            <div className="form-success-banner">
                                <div className="success-icon">✓</div>
                                <h3>Thank You for Your Evaluation!</h3>
                                <p>
                                    Your responses have been logged in the AfricaRice Quality Management System. Your feedback helps ensure that AfricaRice seed collections remain the highest quality standard for global food security research.
                                </p>
                                <button
                                    type="button"
                                    className="btn-primary-dark"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setStep(1);
                                    }}
                                >
                                    Submit Another Survey
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleNext} className="survey-form-inner">
                                {step === 1 && (
                                    <div className="survey-step-content">
                                        <h3>Step 1: Recipient & Order Identification</h3>
                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>Principal Investigator / Contact Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. Dr. Aissatou Diallo"
                                                    value={surveyData.recipientName}
                                                    onChange={(e) =>
                                                        setSurveyData({ ...surveyData, recipientName: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className="form-field">
                                                <label>Institution / Organization *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. University of Abidjan / ISRA"
                                                    value={surveyData.institution}
                                                    onChange={(e) =>
                                                        setSurveyData({ ...surveyData, institution: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>SMTA Order Number / Year Received</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. SMTA-2023-042"
                                                    value={surveyData.smtaNumber}
                                                    onChange={(e) =>
                                                        setSurveyData({ ...surveyData, smtaNumber: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className="form-field">
                                                <label>Primary Species Received *</label>
                                                <select
                                                    value={surveyData.speciesReceived}
                                                    onChange={(e) =>
                                                        setSurveyData({ ...surveyData, speciesReceived: e.target.value })
                                                    }
                                                >
                                                    <option value="Oryza sativa">Oryza sativa (Asian Rice)</option>
                                                    <option value="Oryza glaberrima">Oryza glaberrima (African Rice)</option>
                                                    <option value="Interspecifics">NERICA / ARICA Interspecifics</option>
                                                    <option value="Wild Relatives">Wild African Relatives (Oryza spp.)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="survey-btn-row">
                                            <button type="submit" className="btn-primary-dark">
                                                Continue to Step 2 →
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="survey-step-content">
                                        <h3>Step 2: Germination & Field Agronomic Performance</h3>
                                        <div className="form-field">
                                            <label>Observed Seed Germination Rate *</label>
                                            <select
                                                value={surveyData.germinationRate}
                                                onChange={(e) =>
                                                    setSurveyData({ ...surveyData, germinationRate: e.target.value })
                                                }
                                            >
                                                <option value=">90%">&gt; 90% (Excellent viability)</option>
                                                <option value="75-90%">75% – 90% (Satisfactory)</option>
                                                <option value="50-75%">50% – 75% (Moderate)</option>
                                                <option value="<50%">&lt; 50% (Low / Dormancy issues)</option>
                                            </select>
                                        </div>

                                        <div className="form-field">
                                            <label>Notable Agronomic or Stress Trait Observations</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Describe trial performance: drought response, disease tolerance, tillering capacity, flowering time, or unexpected phenotypes..."
                                                value={surveyData.traitObservations}
                                                onChange={(e) =>
                                                    setSurveyData({ ...surveyData, traitObservations: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className="survey-btn-row flex-between">
                                            <button
                                                type="button"
                                                className="btn-secondary-outline"
                                                onClick={() => setStep(1)}
                                            >
                                                ← Back to Step 1
                                            </button>
                                            <button type="submit" className="btn-primary-dark">
                                                Continue to Step 3 →
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="survey-step-content">
                                        <h3>Step 3: Research Outcomes & Final Feedback</h3>
                                        <div className="form-field">
                                            <label>Publications, Patents, or Breeding Lines Generated</label>
                                            <textarea
                                                rows={3}
                                                placeholder="List citations, DOIs, thesis titles, or new variety registrations that utilized these seed accessions..."
                                                value={surveyData.publicationsGenerated}
                                                onChange={(e) =>
                                                    setSurveyData({
                                                        ...surveyData,
                                                        publicationsGenerated: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className="form-field">
                                            <label>Overall Satisfaction with AfricaRice Genebank Service *</label>
                                            <select
                                                value={surveyData.overallSatisfaction}
                                                onChange={(e) =>
                                                    setSurveyData({
                                                        ...surveyData,
                                                        overallSatisfaction: e.target.value,
                                                    })
                                                }
                                            >
                                                <option value="Very Satisfied">Very Satisfied</option>
                                                <option value="Satisfied">Satisfied</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Needs Improvement">Needs Improvement</option>
                                            </select>
                                        </div>

                                        <div className="survey-btn-row flex-between">
                                            <button
                                                type="button"
                                                className="btn-secondary-outline"
                                                onClick={() => setStep(2)}
                                            >
                                                ← Back to Step 2
                                            </button>
                                            <button type="submit" className="btn-primary-dark">
                                                Submit Completed Evaluation ↗
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
