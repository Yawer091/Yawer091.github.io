import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";

export default function Skills() {
  return (
    <div className="bg-[#001233] text-[#FFF] p-[30px] font-mont">
      <div id="skills" className="w-[90%] m-auto">
        <div className="main-text text-center">
          <h2 className="text-6xl font-bold mb-2">
            <span className="text-yellow-500">My </span>Skills
          </h2>
          <p className="text-4xl font-bold">What I am Expert In</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto mt-8 p-[6px] cursor-pointer">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ iconClass, color, name }) => (
  <div
    className={`skills-card bg-slate-200 p-[4px] rounded-[12px] text-center shadow-md hover:bg-slate-300 transition duration-300 ${color}`}
  >
    <div className="skills-card-img font-bold">
      <i className={`bx ${iconClass} text-9xl mb-[8px]`}></i>
    </div>
    <h3 className="skills-card-name text-2xl font-bold text-black">{name}</h3>
  </div>
);

const skillsData = [
  { iconClass: "bxl-java", color: "text-orange-400", name: "JAVA" },
  { iconClass: "bxl-c-plus-plus", color: "text-blue-900", name: "C++" },
  { iconClass: "bxl-javascript", color: "text-yellow-400", name: "JavaScript" },
  { iconClass: "bxl-html5", color: "text-orange-500", name: "HTML" },
  { iconClass: "bxl-css3", color: "text-blue-500", name: "CSS" },
  {
    iconClass: "bxl-tailwind-css",
    color: "text-blue-400",
    name: "Tailwind CSS",
  },
  { iconClass: "bxl-bootstrap", color: "text-blue-800", name: "Bootstrap" },
  { iconClass: "bxl-github", color: "text-black", name: "Github" },
  { iconClass: "bxl-figma", color: "text-red-400", name: "Figma" },
  { iconClass: "bxl-git", color: "text-black", name: "Git" },
  {
    iconClass: "bxl-visual-studio",
    color: "text-blue-700",
    name: "Visual Studio",
  },
  { iconClass: "bx-cube", color: "text-green-800", name: "DSA" },
  {
    iconClass: "bxl-nodejs",
    color: "text-green-800",
    name: "Nodejs",
  },
  {
    iconClass: "bxl-mongodb",
    color: "text-green-400",
    name: "MongoDB",
  },
];
