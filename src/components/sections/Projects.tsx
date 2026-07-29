import React, { useRef } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { gsap } from 'gsap';
import { projects } from '@/data';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useGsapScope, fadeUp, staggerReveal, prefersReducedMotion } from '@/utils/gsap';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapScope(() => {
    fadeUp('[data-projects-title]', { y: 24 });

    const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]');
    if (prefersReducedMotion()) {
      gsap.fromTo(cards, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.06 });
    } else {
      staggerReveal(cards, { y: 50, stagger: 0.12, duration: 0.7 });
    }
  }, sectionRef);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <h2 data-projects-title className="text-3xl font-bold mb-12 text-center text-green-400 flex items-center justify-center gap-2">
          <FaProjectDiagram className="w-8 h-8 text-green-400" />
          {t('Projects')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects().map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};