import React, { useEffect, useRef } from 'react';
import { Code2, ExternalLink, Rocket } from 'lucide-react';
import { projects } from '@/data';
import { Badge } from '@/components/ui/Badge';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projectsRef = useRef<HTMLDivElement>(null);
  
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

    const projectElements = document.querySelectorAll('.scroll-fade-in');
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400 scroll-fade-in">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card scroll-fade-in bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`projects.items.${index}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Rocket className="w-12 h-12 text-white transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-green-300">
                  {t(`projects.items.${index}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {t(`projects.items.${index}.description`)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full" />
                      {t(`projects.items.${index}.features.${i}`)}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-zinc-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-hover text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>{t('projects.code')}</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-hover text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projects.demo')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};