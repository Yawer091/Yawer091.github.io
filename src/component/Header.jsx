import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  const downloadResume = () => {
    try {
      const resumeUrl = "/yawer_atique-resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "yawer_atique-resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error during resume download:", error);
    }
  };

  return (
    <div className=" bg-[#001233] text-[#FFF] p-[10px] ">
      <div
        id="home"
        className="flex flex-col font-serif  md:flex-row justify-between w-[90%] mx-auto   pt-[50px]   "
      >
        <div id="about" className="about section md:w-1/2 p-[32px] ">
          <h2 className="mb-5 text-center">
            <span className="text-[28px] font-semibold block mb-2">
              Hello I&#39;m
            </span>
            <span
              id="user-detail-name"
              className="  text-[38px] font-bold block mb-[2px]"
            >
              YAWER ATIQUE
            </span>
            <span className="text-2xl font-semibold block">
              Full Stack Web Developer
            </span>
          </h2>
          <p
            id="user-detail-intro"
            className="text-[16px] font-mont font-[400]  tracking-tight  mb-10 "
          >
            About Me :- Dedicated and efficient full stack developer with over
            1200+ hours of hands-on coding experience in tech application and
            presentation layers, as well as tech databases. Proficient in
            building and optimizing user-focused applications from Scratch using
            MERN stack, JavaScript, MongoDB, and SQL. Expertise in both frontend
            and backend development, with solid knowledge of NodeJS, HTML, CSS,
            and Express framework.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between w-full md:w-3/4 gap-4 mt-4 items-center">
            <button
              id="resume-button-2"
              onClick={downloadResume}
              className="w-full md:w-auto px-[20px] py-[10px] text-[16px] bg-blue-700 text-white rounded-lg mb-4 md:mb-0 hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300 border-[2px]"
            >
              Resume
            </button>
            <div className="flex gap-5">
              <a
                href="https://twitter.com/Yawerahmed2"
                className=""
                target="_blank"
                // rel="mm"
              >
                <i className="fa-brands fa-x-twitter fa-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yawer-atique"
                target="_blank"
                className=" "
              >
                <i className="fa-brands fa-linkedin fa-xl text-blue-600"></i>
              </a>
              <a
                href="https://github.com/Yawer091"
                className=" "
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl "></i>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[40%]">
          <img
            className="home-img ml-[40px] mt-[30px] w-[90%] h-[400px] object-cover rounded"
            src="/img31.png"
            alt="box"
          />
        </div>
      </div>
    </div>
  );
}
