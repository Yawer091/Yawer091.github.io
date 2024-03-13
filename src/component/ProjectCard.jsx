import React from "react";
const ProjectCard = ({
  imageSrc,
  title,
  description,
  techStack,
  deployedLink,
  githubLink,
}) => {
  return (
    <div className="project-card flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 py-6 px-4 lg:px-8 bg-gray-800 rounded-lg m-[16px] border">
      <img
        src={imageSrc}
        alt={title}
        className="w-full lg:w-1/3 rounded-lg shadow-lg"
      />
      <div className="flex-1 lg:w-2/3 flex flex-col justify-between">
        <div>
          <h5 className="project-title text-xl lg:text-2xl text-white font-semibold mb-2">
            {title}
          </h5>
          <p className="project-description text-sm lg:text-base text-gray-300 mb-4">
            {description}
          </p>
          <p className="text-sm lg:text-base text-gray-300">
            <span className="font-semibold">Tech Stack:</span> {techStack}
          </p>
        </div>
        <div className="flex justify-center lg:justify-start mt-[12px]">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 transition duration-300 ease-in-out"
          >
            View Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
