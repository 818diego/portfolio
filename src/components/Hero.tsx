import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-green-400">
            Hola, soy <span className="text-green-600 dark:text-green-300">Developer</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:email@example.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-green-900/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 text-gray-800 dark:text-green-400" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}