'use client';

import { useEffect } from 'react';

export default function MotionObserver() {
    useEffect(() => {
        const selector = '[data-reveal], [data-stagger-parent] > *, .facts-strip-grid > *, .workflow-steps-quad > *, .survey-choice-card, .admin-module-card';
        document.body.classList.add('motion-ready');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const motionNames = ['motion-rise', 'motion-slide-left', 'motion-slide-right', 'motion-scale', 'motion-blur', 'motion-flip', 'motion-rotate', 'motion-clip', 'motion-wipe', 'motion-bounce', 'motion-elastic', 'motion-drift'];
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
        let targetIndex = 0;
        const observeTargets = (targets: Iterable<HTMLElement>) => {
            Array.from(targets).forEach((target) => {
                if (target.dataset.motionObserved !== undefined) return;
                target.dataset.motionObserved = 'true';
                if (target.dataset.staggerIndex === undefined) target.dataset.staggerIndex = String(targetIndex % 8);
                if (!target.dataset.motion) target.dataset.motion = motionNames[targetIndex % motionNames.length];
                targetIndex += 1;
                if (reduced) {
                    target.classList.add('is-visible');
                } else {
                    observer.observe(target);
                }
            });
        };

        observeTargets(document.querySelectorAll<HTMLElement>(selector));
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (!(node instanceof HTMLElement)) return;
                    if (node.matches(selector)) observeTargets([node]);
                    observeTargets(node.querySelectorAll<HTMLElement>(selector));
                });
            });
        });
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
            document.body.classList.remove('motion-ready');
        };
    }, []);
    return null;
}
