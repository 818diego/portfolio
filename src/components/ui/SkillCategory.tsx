import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { SkillItem } from '@/components/ui/SkillItem';
import { useGsapScope, fadeUp, staggerReveal, prefersReducedMotion } from '@/utils/gsap';

const SkillCategory: React.FC<{ title: string; data: any[] }> = ({ title, data }) => {
    const categoryRef = useRef<HTMLDivElement>(null);

    useGsapScope(() => {
        fadeUp('[data-cat-title]', { y: 16, duration: 0.6 });

        const items = gsap.utils.toArray<HTMLElement>('[data-skill-item]');
        if (prefersReducedMotion()) {
            gsap.fromTo(items, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.04 });
        } else {
            staggerReveal(items, { y: 14, stagger: 0.05, duration: 0.5, delay: 0.1 });
        }
    }, categoryRef);

    return (
        <div
            ref={categoryRef}
            data-skill-category
            className="bg-zinc-800 rounded-xl p-4 md:p-5 shadow-sm border border-zinc-700/50"
        >
            <h3 data-cat-title className="text-xl font-bold mb-4 text-white">
                {title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {data.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export { SkillCategory };