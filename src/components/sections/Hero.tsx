import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code2, FileText } from 'lucide-react';
import { BsTerminalFill } from 'react-icons/bs';
import { GrCloudSoftware } from 'react-icons/gr';
import { personalInfo } from '@/data';

export const Hero: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center scroll-section-appear"
    >
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6 scroll-fade-in">
          <BsTerminalFill className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-green-600 dark:text-green-400 font-medium">
            {personalInfo.available}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-green-400 scroll-fade-in">
          Hello, I'm <span className="text-green-600 dark:text-green-300">{personalInfo.fullName}</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-2 scroll-fade-in">
          <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {personalInfo.role}
          </p>
          <GrCloudSoftware className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 scroll-fade-in">
          {personalInfo.description}
        </p>

        <div className="flex justify-center gap-4">
          {[
            {
              icon: Github,
              href: personalInfo.social.github,
              label: "GitHub",
              color: "hover:text-[#333] dark:hover:text-white"
            },
            {
              icon: Linkedin,
              href: personalInfo.social.linkedin,
              label: "LinkedIn",
              color: "hover:text-[#0077b5] dark:hover:text-[#0077b5]"
            },
            {
              icon: Mail,
              href: personalInfo.social.email,
              label: "Email",
              color: "hover:text-red-500 dark:hover:text-red-400"
            },
            {
              icon: FileText,
              href: personalInfo.social.cv,
              label: "CV",
              color: "hover:text-blue-500 dark:hover:text-blue-400"
            }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-3 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-all button-hover ${social.color} scroll-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors group-hover:text-green-600 dark:group-hover:text-green-400" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-600 dark:text-gray-400">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};