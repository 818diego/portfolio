import React, { useEffect } from 'react';
import { FaCode, FaExternalLinkAlt, FaProjectDiagram } from 'react-icons/fa';
import { projects } from '@/data';
import { Badge } from '@/components/ui/Badge';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tech: { name: string; icon: React.ComponentType }[];
  features: string[];
  methodology: string;
  teamSize: string;
  duration: string;
  impact: string;
  icon: React.ComponentType;
}

export const Projects: React.FC = () => {

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
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400 scroll-fade-in flex items-center justify-center gap-2">
          <FaProjectDiagram className="w-8 h-8 text-green-400" />
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project: Project, index) => (
            <div
              key={index}
              className="project-card scroll-fade-in bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {React.createElement(project.icon, { className: "w-12 h-12 text-white transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500" } as any)} {/* Dynamic icon */}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-green-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="default" icon={<tech.icon />}>
                      {tech.name}
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
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center items-center pt-4 border-t border-gray-100 dark:border-zinc-700 gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300"
                    >
                      <FaCode className="w-4 h-4" />
                      <span>Github Repository</span>
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">No code available</span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Preview</span>
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">No demo available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};