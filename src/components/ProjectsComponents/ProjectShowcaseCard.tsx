import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
    SiReact,
    SiTailwindcss,
    SiVercel,
    SiTypescript,
    SiCss3,
    SiJavascript,
    SiPhp,
    SiBootstrap,
    SiAstro,
    SiHtml5,
    SiPython,
} from "react-icons/si";
import Modal from "../Modal";
import { DiJqueryLogo } from "react-icons/di";

interface ProjectShowcaseCardProps {
    id: number;
    title: string;
    description: string;
    tags: string[];
    livePreviewUrl?: string;
    githubUrl?: string;
    previewImage?: string;
    status?: string;
}

const tagIcons: { [key: string]: React.ElementType } = {
    React: SiReact,
    "Tailwind CSS": SiTailwindcss,
    NextJS: SiVercel,
    TypeScript: SiTypescript,
    "React Native": SiReact,
    CSS: SiCss3,
    JavaScript: SiJavascript,
    PHP: SiPhp,
    Laravel: SiPhp,
    Bootstrap: SiBootstrap,
    jQuery: DiJqueryLogo,
    Astro: SiAstro,
    HTML: SiHtml5,
    Python: SiPython,
};

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = memo(
    ({
        id,
        title,
        description,
        tags,
        livePreviewUrl,
        githubUrl,
        previewImage,
        status,
    }) => {
        const [isModalOpen, setModalOpen] = useState(false);

        const openModal = () => setModalOpen(true);
        const closeModal = () => setModalOpen(false);

        return (
            <>
                <motion.div
                    className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg transform transition-transform duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, rotate: 0.5 }}
                    transition={{ duration: 0.05 }}
                    onClick={openModal}>
                    {previewImage && (
                        <div className="overflow-hidden rounded-lg mb-4">
                            <motion.img
                                src={previewImage}
                                alt={`${title} preview`}
                                className="w-full h-48 object-cover transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    )}

                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
                        {title}
                    </h3>

                    {status && (
                        <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                            {status}
                        </span>
                    )}

                    <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => {
                            const Icon = tagIcons[tag];
                            return (
                                <span
                                    key={index}
                                    className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                                    {Icon && <Icon className="mr-2" />}
                                    {tag}
                                </span>
                            );
                        })}
                    </div>

                    <div className="flex space-x-2 mt-8 justify-center">
                        {livePreviewUrl && (
                            <a
                                href={livePreviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
                                aria-label="Abrir vista previa en vivo"
                                onClick={(e) => e.stopPropagation()}>
                                <FaExternalLinkAlt className="mr-1" />
                                Preview
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-md shadow-md hover:bg-gray-600 active:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500"
                                aria-label="Abrir repositorio en GitHub"
                                onClick={(e) => e.stopPropagation()}>
                                <FaGithub className="mr-1" />
                                GitHub Repository
                            </a>
                        )}
                    </div>
                </motion.div>

                <Modal isOpen={isModalOpen} onClose={closeModal} id={id} />
            </>
        );
    }
);

export default ProjectShowcaseCard;
