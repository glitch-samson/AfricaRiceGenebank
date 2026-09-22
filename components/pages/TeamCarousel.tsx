'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
    name: string;
    title: string;
    description: string;
    contactValue: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Dr. Marie-Noelle Ndjiondjop',
        title: 'Head of Genetic Resources Unit • Manager, RBCA',
        description: 'Leads genebank operations, high-throughput DArTseq genomics, and international safety duplication under the FAO Plant Treaty.',
        contactValue: 'm.ndjiondjop@cgiar.org',
        image: '/files/img/about/genebank/slide1.jpg',
    },
    {
        name: 'Clinton Obinna Ogwuike',
        title: 'Information & Database Manager',
        description: 'Oversees GRIN-Global, Genesys synchronization, and digital object identifiers for traceable accession metadata.',
        contactValue: 'Bio-informatics & GRIN-Global',
        image: '/files/img/about/inauguration/slide1.jpg',
    },
    {
        name: 'Dr. Arnaud Comlan Gouda',
        title: 'Seed Health & Germplasm Regeneration Specialist',
        description: "Leads field multiplication cycles at M'be station, seed viability surveillance, phytosanitary clearance, and molecular purity quality control.",
        contactValue: 'Seed Physiology & QC',
        image: '/files/img/about/inauguration/slide2.jpg',
    },
];

function SliderButton({ direction, onClick }: { direction: 'previous' | 'next'; onClick: () => void }) {
    const Icon = direction === 'previous' ? ChevronLeft : ChevronRight;

    return (
        <button type="button" className="team-slider-button" onClick={onClick} aria-label={`${direction} team member`}>
            <Icon size={20} strokeWidth={1.8} />
        </button>
    );
}

function ProfileCard({ member, direction, scale = 1 }: { member: TeamMember; direction: number; scale?: number }) {
    return (
        <motion.article
            key={member.name}
            className="team-profile-card"
            initial={{ opacity: 0, x: direction * 28, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: direction * -28, y: -8 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
            <span className="team-profile-kicker">Genetic resources team</span>
            <h3>{member.name}</h3>
            <span className="team-profile-title">{member.title}</span>
            <p>{member.description}</p>
            <div className="team-profile-contact"><Mail size={15} /><span>{member.contactValue}</span></div>
        </motion.article>
    );
}

function TeamImage({ member, className = '' }: { member: TeamMember; className?: string }) {
    return (
        <div className={`team-stack-image ${className}`}>
            <Image src={member.image} alt="" fill sizes="367px" className="object-cover" aria-hidden />
        </div>
    );
}

export default function TeamCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const active = teamMembers[activeIndex];
    const next = teamMembers[(activeIndex + 1) % teamMembers.length];
    const following = teamMembers[(activeIndex + 2) % teamMembers.length];

    const move = (step: number) => {
        setDirection(step);
        setActiveIndex((index) => (index + step + teamMembers.length) % teamMembers.length);
    };

    return (
        <div className="team-feature">
            <div className="team-feature-intro">
                <span className="section-eyebrow">Scientific Leadership</span>
                <h2>Custodians of <em>Genetic Heritage</em></h2>
                <p>Our team of molecular geneticists, agronomists, seed physiologists, and bioinformaticians ensures every seed is managed with uncompromising scientific rigor.</p>
                <div className="team-feature-copy">
                    <span className="team-feature-label">Meet the people behind the collection</span>
                    <div className="team-feature-controls">
                        <SliderButton direction="previous" onClick={() => move(-1)} />
                        <span>{String(activeIndex + 1).padStart(2, '0')} / {String(teamMembers.length).padStart(2, '0')}</span>
                        <SliderButton direction="next" onClick={() => move(1)} />
                    </div>
                </div>
            </div>

            <div className="team-feature-desktop">
                <div className="team-feature-images">
                    <TeamImage member={following} className="team-image-following" />
                    <TeamImage member={next} className="team-image-next" />
                    <AnimatePresence mode="popLayout" custom={direction}>
                        <motion.div key={active.name} className="team-stack-image team-image-active" initial={{ opacity: 0, x: direction * 54, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: direction * -54, scale: 0.98 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                            <Image src={active.image} alt={`Portrait of ${active.name}`} fill sizes="367px" className="object-cover" priority />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <AnimatePresence mode="wait" custom={direction}>
                    <ProfileCard key={active.name} member={active} direction={direction} />
                </AnimatePresence>
            </div>

            <div className="team-feature-mobile">
                <div className="team-mobile-images">
                    <TeamImage member={following} className="team-image-following" />
                    <TeamImage member={next} className="team-image-next" />
                    <AnimatePresence mode="popLayout" custom={direction}>
                        <motion.div key={active.name} className="team-stack-image team-image-active" initial={{ opacity: 0, x: direction * 44, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: direction * -44, scale: 0.98 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                            <Image src={active.image} alt={`Portrait of ${active.name}`} fill sizes="250px" className="object-cover" priority />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <AnimatePresence mode="wait" custom={direction}>
                    <ProfileCard key={active.name} member={active} direction={direction} scale={0.86} />
                </AnimatePresence>
            </div>
        </div>
    );
}
