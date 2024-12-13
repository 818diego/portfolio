import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 2",
    description: "Full-stack application with Node.js and MongoDB",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 3",
    description: "Mobile-first responsive design with modern animations",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#"
  }
];

export const Projects: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-gray-100 dark:bg-black/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400"
        >
          Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-green-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Código</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.demo}
                    className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}