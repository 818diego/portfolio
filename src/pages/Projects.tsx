import React from "react";
import ProjectsGrid from "../components/ProjectsComponents/ProjectsGrid";

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-center">
                    My Projects 🚀
                </h2>
                <ProjectsGrid />
            </div>
        </div>
    );
};

export default Projects;
