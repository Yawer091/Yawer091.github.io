// ProjectCard.js

const ProjectCard = ({
  imageSrc,
  title,
  description,
  techStack,
  deployedLink,
  githubLink,
}) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt="" className="w-full rounded" />
      <div className="layer my-4">
        <h5 className="project-title text-3xl font-semibold">{title}</h5>
        <p className="project-description text-2xl">{description}</p>
        <p className="project-tech-stack text-2xl">
          <span className="font-bold ">Tech-Stack</span> : {techStack}
        </p>
        <div className="links-deployed my-2">
          <div className="project-deployed-link my-2">
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-netlify text-2xl text-black">
                Deployed-Link
              </i>
            </a>
          </div>
          <div className="project-github-link">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github text-2xl text-black">Github</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
