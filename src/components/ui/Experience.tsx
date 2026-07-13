import React, { useEffect } from 'react';
import { experiences } from '@/data';
import { FaAward } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ExperienceItem } from '../sections/ExperienceItem';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));
    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-20 relative">
      <div className="absolute left-0 top-0 w-1 h-full" />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400 scroll-fade-in flex items-center justify-center gap-2">
          <FaAward className="w-8 h-8 text-green-400 mt-1" />
          {t('Experience')}
        </h2>
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-transparent -translate-x-1/2" />
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