import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";

export default function Header() {
  const downloadResume = () => {
    const resumeUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      id="Home"
      className="flex flex-col md:flex-row justify-between w-11/12 m-auto font-montserret "
    >
      <div className="md:w-1/2 p-8">
        <h2 className="mb-5 text-center">
          <span className="text-[22px] font-semibold block mb-2">
            Hello I&#39;m
          </span>
          <span className="text-6xl font-bold block mb-2">YAWER ATIQUE</span>
          <span className="text-3xl font-semibold block">
            Full Stack Web Developer
          </span>
        </h2>
        <p className="text-[20px] font-[500] tracking-tight text-gray-500 text-justify mb-10">
          About Me :- Dedicated and efficient full stack developer with over
          1200+ hours of hands-on coding experience in tech application and
          presentation layers, as well as tech databases. Proficient in building
          and optimizing user-focused applications from Scratch using MERN
          stack, JavaScript, MongoDB, and SQL. Expertise in both frontend and
          backend development, with solid knowledge of NodeJS, HTML, CSS, and
          Express framework.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-3/4 gap-4 mt-4 items-center">
          <button
            onClick={downloadResume}
            className="w-full    md:w-auto    pt-4 pl-8 pr-8 pb-4 text-3xl  bg-blue-500 text-white font-semibold rounded-lg mb-4 md:mb-0 hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300"
          >
            Resume
          </button>
          <div className="flex gap-7">
            <a href="/" className=" text-xl">
              <i className="fa-brands fa-x-twitter fa-2xl"></i>
            </a>
            <a href="/" className=" text-xl">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="/" className=" text-xl">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 ">
        <img className="w-full h-full " src="/img3.png" alt="box" />
      </div>
    </div>
  );
}

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "boxicons";
// import "boxicons/css/boxicons.min.css";
// export default function Header() {
//   return (
//     <>
//       <div id="Home" className=" flex justify-between w-11/12 m-auto">
//         <div className="desc w-1/2 p-8 ">
//           <h2 className=" mb-5 leading-9 text-center">
//             <span className=" text-4xl font-bold inline-block mb-6">
//               Hello I{"'"}m
//             </span>
//             <br />
//             <span className=" text-5xl font-bold inline-block mb-5">
//               YAWER ATIQUE
//             </span>
//             <br />
//             <span className=" text-3xl font-bold inline-block mb-5">
//               Full Stack Web Developer
//             </span>
//             <br />
//           </h2>
//           <p className=" text-2xl font-sans font-semibold mb-10">
//             About Me :- Dedicated and efficient full stack developer with over
//             1200+ hours of hands-on coding experience in tech application and
//             presentation layers, as well as tech databases. Proficient in
//             building and optimizing user-focused applications from Scratch using
//             MERN stack, JavaScript, MongoDB, and SQL. Expertise in both frontend
//             and backend development, with solid knowledge of NodeJS, HTML, CSS,
//             and Express framework.
//           </p>
//           <div className=" flex justify-between w-3/4 gap-4 mt-4 items-center">
//             <button className=" pt-4 pl-8 pr-8 pb-4 bg-blue-500 text-white font-semibold rounded-lg">
//               Resume
//             </button>
//             <div className=" flex justify-center gap-7">
//               <a href="/">
//                 <i className="fa-brands fa-x-twitter fa-2xl text-black"></i>
//               </a>
//               <a href="/">
//                 <i className="fa-brands fa-linkedin fa-bounce fa-2xl"></i>
//               </a>
//               <a href="/">
//                 <i className="fa-brands fa-github fa-bounce fa-2xl"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="image w-2/5">
//           <img className="" src="/img3.png" alt="box" />
//         </div>
//       </div>
//     </>
//   );
// }
