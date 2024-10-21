import React from 'react';

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Description of project 1</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>Description of project 2</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;