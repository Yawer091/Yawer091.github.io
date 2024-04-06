import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projectData = [
    {
      imageSrc: `HOMECHEF.png`,
      title: "HOMECHEF",
      description:
        "HOMECHEF is a user-friendly food ordering app that offers a wealth of features for food enthusiasts of all Categories.",
      techStack: "React | Redux | Chakara UI | NodeJs | ExpressJs | MongoDB ",
      deployedLink: "https://code-kaavya-2345.vercel.app/",
      githubLink: "https://github.com/Yawer091/Code-Kaavya-2345",
    },
    {
      imageSrc: `AIRBNB.png`,
      title: "AirBnb",
      description:
        "This project is Clone of AirBnb to book hotel and resorts for vacation and holiday Our platform aims to connect travelers with unique accommodations offered by local hosts worldwide, providing a personalized and authentic experience. With features like easy booking, secure payments, and detailed listings, we simplify the travel planning process, making it hassle-free for guests ",
      techStack: "React | Redux | Chakara UI | TailwindCSS ",
      deployedLink: "https://airbnb-2a476f.netlify.app/",
      githubLink: "https://github.com/Yawer091/AirBnb",
    },
    {
      imageSrc: `/KTRAVEL.png`,
      title: "K Travel",
      description:
        "KTravel is a dynamic travel and tourism website tailored for South Korea, designed to provide a seamless user experience for travelers looking to explore the country. This platform integrates advanced web functionalities, including user registration, booking options, and an admin panel for site management, all within a responsive web design.",
      techStack: "HTML | CSS | Javascript | SCSS",
      deployedLink: "https://java-jadugar-3456-ktravell.netlify.app/",
      githubLink: "https://github.com/Yawer091/KTravell",
    },

    {
      imageSrc: `/SUGAR.png`,
      title: "SUGAR COSMETIC",
      description:
        "This project Ecommerece website (SUGARCOSMETIC.com) Clone which is use to order beauty and  fashion product SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted towards bold, independent women who refuse to be stereotyped into roles.",
      techStack: "HTML | CSS | BOOTSTRAP | JAVASCRIPT",
      deployedLink: "https://nimble-lolly-366135.netlify.app/",
      githubLink: "https://github.com/Yawer091/vibrant-coding-1234",
    },
    {
      imageSrc: `/FIGMA.png`,
      title: "CRM Landing Page",
      description:
        "This project is FIGMA DESIGN clone of a website which is service based startup",
      techStack: "HTML | CSS | SCSS",
      deployedLink: "https://legendary-malabi-cfb639.netlify.app/",
      githubLink: "https://github.com/Yawer091/vibrant-coding-1234",
    },
  ];

  return (
    <div className="bg-[#00203FFF] ">
      <section id="projects" className=" w-[80%] mx-auto  font-serif">
        <div className="main-text mb-9">
          <h2 className=" text-[42px] font-semibold text-center">
            <p className="text-[white] pt-[20px]">My Projects</p>
          </h2>
        </div>
        <div
          id="nav-link-projects"
          className="grid grid-cols-1 rounded-[20px]  mt-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 "
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
