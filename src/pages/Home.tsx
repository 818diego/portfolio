import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import {
    FaFilePdf,
    FaGithub,
    // FaProjectDiagram,
    // FaEnvelope,
} from "react-icons/fa";
import ProjectCard from "../components/HomeComponents/ProjectCard";

const Home: React.FC = () => {
    return (
        <div
            className="flex flex-col justify-center items-center transition-all duration-500 text-gray-900 dark:text-white relative overflow-hidden"
            style={{ minHeight: "calc(100vh - 72px)" }}>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(135deg, rgba(66, 153, 225, 0.2), transparent),
                        linear-gradient(225deg, rgba(229, 62, 62, 0.2), transparent),
                        radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05), transparent 30%),
                        radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.1), transparent 50%)
                    `,
                    zIndex: -1,
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "50% 50%"],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <motion.h1
                className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                Hello, I'm <span className="text-green-400">Diego Merino</span>
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl font-light text-gray-700 dark:text-gray-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}>
                I am a software engineer dedicated to creating unique web
                applications with the best UX and UI. <br />
                Specialized in React, Next.js, and Tailwind CSS, always seeking
                new opportunities to enhance my skills.
            </motion.p>

            <motion.div
                className="mt-8 flex space-x-4"
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}>
                {/* <Link to="/projects">
                    <button className="px-6 py-3 text-base font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-500 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300 transition-transform hover:scale-105 flex items-center space-x-2">
                        <FaProjectDiagram className="mr-2" />
                        <span>View Projects</span>
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="px-6 py-3 text-base font-semibold bg-gray-800 text-white rounded-full hover:bg-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition-transform hover:scale-105 flex items-center space-x-2">
                        <FaEnvelope className="mr-2" />
                        <span>Contact Me</span>
                    </button>
                </Link> */}
                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-base font-semibold bg-green-600 text-white rounded-full hover:bg-green-500 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-300 transition-transform hover:scale-105 flex items-center space-x-2">
                    <FaFilePdf className="mr-2" />
                    <span>View CV</span>
                </a>
                <a
                    href="https://github.com/818diego"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-base font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition-transform hover:scale-105 flex items-center space-x-2">
                    <FaGithub className="mr-2" />
                    <span>GitHub</span>
                </a>
            </motion.div>

            {/* Project cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
                <ProjectCard
                    title="Management Sales System"
                    description="Worked on the design using NextJS and TailwindCSS, following Agile Scrum methodology and managed RESTful APIs."
                    delay={1}
                />
                <ProjectCard
                    title="Appointment Management Mobile App"
                    description="Worked with React Native using vanilla CSS styling, following Scrum methodology and managed RESTful APIs."
                    delay={1.2}
                />
            </div>
        </div>
    );
};

export default Home;
