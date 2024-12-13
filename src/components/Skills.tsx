import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Cpu, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Vue", "TypeScript"]
  },
  {
    icon: Briefcase,
    title: "Backend",
    skills: ["Node.js", "Python", "Java"]
  },
  {
    icon: Cpu,
    title: "DevOps",
    skills: ["Docker", "AWS", "CI/CD"]
  },
  {
    icon: GraduationCap,
    title: "Otros",
    skills: ["UI/UX", "Agile", "Testing"]
  }
];

export const Skills: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-gray-200 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400"
        >
          Habilidades
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <category.icon className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-green-300">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}