import React, { useRef } from 'react';
import { experiences } from '@/data';
import { FaAward } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ExperienceItem } from '@/components/ui/ExperienceItem';
import { useGsapScope, fadeUp, prefersReducedMotion } from '@/utils/gsap';
import { gsap } from 'gsap';

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapScope(() => {
    fadeUp('[data-experience-title]', { y: 24 });

    const line = sectionRef.current?.querySelector('[data-timeline-line]');
    if (!line) return;
    if (prefersReducedMotion()) {
      gsap.set(line, { scaleY: 1 });
    } else {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
          }
        }
      );
    }
  }, sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="absolute left-0 top-0 w-1 h-full" />
      <div className="container mx-auto px-6">
        <h2 data-experience-title className="text-3xl font-bold mb-12 text-center text-green-400 flex items-center justify-center gap-2">
          <FaAward className="w-8 h-8 text-green-400 mt-1" />
          {t('Experience')}
        </h2>
        <div className="max-w-5xl mx-auto relative">
          <div
            data-timeline-line
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-transparent -translate-x-1/2"
            style={{ transformOrigin: 'top center' }}
          />
          <div className="space-y-4">
            {experiences().map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};