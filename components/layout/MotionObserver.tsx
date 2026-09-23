'use client';

import { useEffect } from 'react';

export default function MotionObserver() {
    useEffect(() => {
        const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger-parent] > *, main:not(.admin-app) section, .facts-strip-grid > *, .workflow-steps-quad > *, .survey-choice-card, .admin-module-card');
        if (!targets.length) return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) {
            targets.forEach((target) => target.classList.add('is-visible'));
            return;
        }
        const motionNames = ['motion-rise', 'motion-slide-left', 'motion-slide-right', 'motion-scale', 'motion-blur', 'motion-flip', 'motion-rotate', 'motion-clip', 'motion-wipe', 'motion-bounce', 'motion-elastic', 'motion-drift'];
        targets.forEach((target, index) => {
            if (target.dataset.staggerIndex === undefined) target.dataset.staggerIndex = String(index % 8);
            if (!target.dataset.motion) target.dataset.motion = motionNames[index % motionNames.length];
        });
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, []);
    return null;
}
