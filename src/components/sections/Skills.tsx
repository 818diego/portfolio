import React, { useRef } from 'react';
import { skills } from '@/data';
import { FaTools } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { SkillCategory } from '@/components/ui/SkillCategory';
import { useGsapScope, fadeUp, staggerReveal, prefersReducedMotion } from '@/utils/gsap';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapScope(() => {
    fadeUp('[data-skills-title]', { y: 24 });

    const categories = gsap.utils.toArray<HTMLElement>('[data-skill-category]');
    if (prefersReducedMotion()) {
      gsap.fromTo(categories, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.06 });
    } else {
      staggerReveal(categories, { y: 30, stagger: 0.12, duration: 0.7 });
    }
  }, sectionRef);

  const categories = [
    { title: t('Languages'), data: skills().languages },
    { title: t('Frontend'), data: skills().frontend },
    { title: t('Backend'), data: skills().backend },
    { title: t('Tools'), data: skills().tools }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 data-skills-title className="text-3xl font-bold mb-10 text-center text-green-400">
          <FaTools className="inline-block w-7 h-7 mr-2 text-green-400 mb-1" />
          {t('Skills')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <SkillCategory key={index} title={category.title} data={category.data} />
          ))}
        </div>
      </div>
    </section>
  );
};