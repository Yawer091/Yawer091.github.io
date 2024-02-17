// ProjectCard.js

import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projectData = [
    {
      imageSrc: `/KTRAVEL.png`,
      title: "K Travel",
      description: "This project is HOTEL BOOKING website for south korea",
      techStack: "HTML | CSS | Javascript | SCSS",
      deployedLink: "https://java-jadugar-3456-ktravell.netlify.app/",
      githubLink: "https://github.com/Yawer091/KTravell",
    },

    {
      imageSrc: `/SUGAR COSMETIC.png`,
      title: "SUGAR COSMETIC",
      description: "This project Ecommerece website (SUGARCOSMETIC.com) Clone",
      techStack: "HTML | CSS | BOOTSTRAP | JAVASCRIPT",
      deployedLink: "https://nimble-lolly-366135.netlify.app/",
      githubLink: "https://github.com/Yawer091/vibrant-coding-1234",
    },
    {
      imageSrc: `/FIGMA.png`,
      title: "CRM Landing Page",
      description: "This project is FIGMA DESIGN CLONE",
      techStack: "HTML | CSS | SCSS",
      deployedLink: "https://legendary-malabi-cfb639.netlify.app/",
      githubLink: "https://github.com/Yawer091/vibrant-coding-1234",
    },
    {
      imageSrc: `/DICE-WIN.png`,
      title: "DICE WIN",
      description: "This project is DICE ROLLER GAME",
      techStack: "HTML | CSS | Javascript",
      deployedLink: "https://dicewin.netlify.app/",
      githubLink: "https://github.com/Yawer091/dicewin.git",
    },
  ];

  return (
    <section id="projects" className=" text-slate-500 w-11/12 mx-auto my-9">
      <div className="main-text mb-9">
        <h2 className=" text-6xl text-red-400 font-semibold text-center">
          <span>My </span>Projects
        </h2>
      </div>
      <div
        id="nav-link-projects"
        className="grid grid-cols-1 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
