// import React from "react";

const Stats = () => {
  return (
    <div className="bg-[#00203FFF] text-[#FFF] p-[10px] font-mont">
      <div id="Stats" className="w-[90%] m-auto p-4 md:p-8 lg:p-12">
        <h2 className="text-4xl text-bold text-center mb-[30px] mt-[10px]">
          GITHUB STATISTICS
        </h2>
        <div className="text-left">
          <a href="https://github.com/ryo-ma/github-profile-trophy">
            <img
              src="https://github-profile-trophy.vercel.app/?username=Yawer091"
              alt="Yawer"
              className="w-full"
            />
          </a>
        </div>

        <div className="w-full flex flex-col mt-5 md:flex-row gap-4 items-center justify-center">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Yawer091&show=reviews,discussions_started,discussions_answered"
            alt="GitHub Stats"
            className="w-full md:w-1/2"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Yawer091"
              alt="GitHub Streak"
              className="w-full "
            />
          </div>

          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Yawer091"
            alt="Top Languages"
            className="w-full mx-auto md:w-1/2"
          />
        </div>

        <h2 className=" text-5xl text-center m-8 md:mt-8">⚡Activity Graph:</h2>
        <a href="https://github.com/Yawer091" className="flex justify-center">
          <img
            alt="Yawer Atique Activity Graph"
            src="https://github-readme-activity-graph.vercel.app/graph?username=Yawer091&bg_color=ffcfe9&color=9e4c98&line=9e4c98&point=403d3d&area=true&hide_border=true"
            className=" w-[70%]"
          />
        </a>

        <div class="calendar react-activity-calendar mt-[16px]">
          <img
            id="github-contributions"
            src="https://ghchart.rshah.org/Gulshaba-Parveen"
            alt="Github chart"
            className="w-[80%] m-auto h-[250px]"
          />
                    
        </div>
      </div>
    </div>
  );
};

export default Stats;
