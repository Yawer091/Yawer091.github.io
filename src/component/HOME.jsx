import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#00203FFF] text-[#FFF] p-[10px]">
      <div className=" w-[90%] m-auto min-h-screen flex flex-col lg:flex-row justify-center items-center pt-[70px]">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="text-white text-xl">Hi, My Name is</p>
          <h1 className="text-white text-5xl font-bold mb-4">Yawer Atique</h1>
          <img
            src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=42&duration=2000&pause=800&color=8E05C2&background=FFFFFF00&width=600&height=61&lines=Full+Stack+Web+Developer;Aspiring+MERN+Developer;Eager+Learner"
            alt="Typing SVG"
          />
          <div className="flex mt-4">
            <a href="#contact" className="mr-4">
              <button className="w-full md:w-auto px-[20px] py-[10px] text-[16px] bg-blue-700 text-white rounded-lg mb-4 md:mb-0 hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300 border-[2px]">
                Contact
              </button>
            </a>
            <a
              href="#"
              className="resume-btn"
              onClick={() => {
                window.open("/Resume.pdf");
              }}
            >
              <button className="btn-border flex items-center text-white w-full md:w-auto px-[20px] py-[10px] text-[16px] bg-blue-700 text-white rounded-lg mb-4 md:mb-0 hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300 border-[2px]">
                <img
                  src="https://icon-library.com/images/view-icon-png/view-icon-png-15.jpg"
                  alt="View Resume"
                  className="w-6 h-6 mr-2"
                />
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="  lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://i.pinimg.com/originals/02/68/d7/0268d7deb333107d0b6f9e5f724f5de8.png"
            alt="Profile"
            className="w-[80%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
