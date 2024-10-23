import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Globe, Code } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    delay: number;
    iconType?: "portfolio" | "web" | "code";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    delay,
    iconType = "portfolio",
}) => {
    const renderIcon = () => {
        switch (iconType) {
            case "portfolio":
                return (
                    <Briefcase className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
                );
            case "web":
                return (
                    <Globe className="w-8 h-8 text-green-500 dark:text-green-400 mb-4" />
                );
            case "code":
                return (
                    <Code className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
                );
            default:
                return (
                    <Briefcase className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
                );
        }
    };

    return (
        <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105  duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: delay }}>
            <div className="flex justify-center">{renderIcon()}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {description}
            </p>
        </motion.div>
    );
};

export default ProjectCard;
