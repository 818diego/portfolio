import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Code2, FileText, Mouse, ChevronDown } from 'lucide-react';
import { BsTerminalFill } from 'react-icons/bs';
import { GrCloudSoftware } from 'react-icons/gr';
import { personalInfo } from '@/data';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const info = personalInfo();

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center scroll-section-appear"
    >
      <div className="container mx-auto px-6 py-24 text-center relative">
        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6 scroll-fade-in">
          <BsTerminalFill className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-green-600 dark:text-green-400 font-medium">
            {info.available}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-green-400 scroll-fade-in">
          {t("Hello, I'm")} <span className="text-green-600 dark:text-green-300">{info.fullName}</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-2 scroll-fade-in">
          <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {info.role}
          </p>
          <GrCloudSoftware className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 scroll-fade-in">
          {info.description}
        </p>

        <div className="flex justify-center gap-4">
          {[
            {
              icon: Github,
              href: info.social.github,
              label: "GitHub",
              color: "hover:text-[#333] dark:hover:text-white"
            },
            {
              icon: Linkedin,
              href: info.social.linkedin,
              label: "LinkedIn",
              color: "hover:text-[#0077b5] dark:hover:text-[#0077b5]"
            },
            {
              icon: FileText,
              href: info.social.cv,
              label: "CV",
              color: "hover:text-blue-500 dark:hover:text-blue-400"
            }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 hover:shadow-lg transition-all button-hover ${social.color} scroll-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors group-hover:text-green-600 dark:group-hover:text-green-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-green-600 dark:text-green-400 p-4">
            <Mouse className="w-8 h-8 animate-bounce text-current mb-1" />
            <ChevronDown className="w-4 h-4 text-current" />
          </div>
        </div>
    </section>
  );
};