import React from "react";
import { motion } from "framer-motion";

interface ProjectShowcaseCardProps {
    title: string;
    description: string;
    tags: string[];
    delay: number;
    livePreviewUrl?: string;
    githubUrl?: string;
    previewImage?: string;
}

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
    title,
    description,
    tags,
    delay,
    livePreviewUrl,
    githubUrl,
    previewImage,
}) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay }}>
            {previewImage && (
                <img
                    src={previewImage}
                    alt={`${title} preview`}
                    className="mb-4 w-full h-48 object-cover rounded-lg"
                />
            )}

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 text-sm font-semibold rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex space-x-4 justify-center">
                {livePreviewUrl && (
                    <a
                        href={livePreviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                        Live Preview
                    </a>
                )}
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                        GitHub
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectShowcaseCard;
