import React from "react";
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import { projectsData } from "../../data/projectData";

const ProjectsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
                <ProjectShowcaseCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    livePreviewUrl={project.livePreviewUrl}
                    githubUrl={project.githubUrl}
                    previewImage={project.previewImage}
                    id={project.id}
                />
            ))}
        </div>
    );
};

export default ProjectsGrid;
