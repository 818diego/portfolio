import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiVercel, SiTypescript } from "react-icons/si";
import Modal from "../Modal";

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

                    <div className="flex space-x-4 justify-center">
                        {livePreviewUrl && (
                            <a
                                href={livePreviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 active:bg-green-700 transition transform duration-150"
                                aria-label="Live Preview"
                                onClick={(e) => e.stopPropagation()}>
                                <FaExternalLinkAlt className="mr-2" />
                                Live Preview
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 active:bg-gray-900 transition transform duration-150"
                                aria-label="GitHub Repository"
                                onClick={(e) => e.stopPropagation()}>
                                <FaGithub className="mr-2" />
                                GitHub
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
