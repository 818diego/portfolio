import React, { useEffect, useRef } from 'react';
import { skills } from '../../data';
import { ProgressBar } from '../ui/ProgressBar';
import { FaTools } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const skillElements = document.querySelectorAll('.scroll-fade-in');
    skillElements.forEach((el) => observer.observe(el));

    return () => {
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const categories = [
    { title: t('Languages'), data: skills().languages },
    { title: t('Frontend'), data: skills().frontend },
    { title: t('Backend'), data: skills().backend },
    { title: t('Tools'), data: skills().tools }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-green-400 scroll-fade-in">
          <FaTools className="inline-block w-7 h-7 mr-2 text-green-500 dark:text-green-400 mb-1" />
          {t('Skills')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg scroll-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-green-300">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.data.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="scroll-fade-in"
                    style={{ animationDelay: `${(index * 4 + skillIndex) * 0.2}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-green-500 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar progress={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};