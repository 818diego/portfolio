import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-green-900 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold hover:text-green-700 transition-all">818diego</a>. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: personalInfo.social.github, label: "GitHub Profile" },
              { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn Profile" },
              { icon: Mail, href: personalInfo.social.email, label: "Send Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};