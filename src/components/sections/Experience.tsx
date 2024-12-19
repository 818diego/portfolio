import React, { useEffect } from 'react';
import { experiences } from '@/data';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {

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
    <section className="py-20 bg-gray-200 dark:bg-zinc-900 relative">
      <div className="absolute left-0 top-0 w-1 h-full bg-green-500/20 dark:bg-green-400/20" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400 scroll-fade-in">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item relative mb-16 last:mb-0 pl-8 ml-8 border-l-2 border-green-200 dark:border-green-900"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-[41px] top-0 p-2 bg-white dark:bg-zinc-800 rounded-full border-2 border-green-500 dark:border-green-400 timeline-dot">
                <exp.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-green-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};