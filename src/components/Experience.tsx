import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    period: "2020 - Present",
    description: "Lideré equipos de desarrollo y contribuí a proyectos críticos utilizando tecnologías modernas."
  },
  {
    title: "Full Stack Developer",
    company: "Another Company",
    period: "2018 - 2020",
    description: "Desarrollé aplicaciones web full-stack y optimicé el rendimiento de sistemas existentes."
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-gray-200 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400"
        >
          Experiencia Laboral
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 border-l-2 border-green-500 dark:border-green-400"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full" />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-green-300">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}