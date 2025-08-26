import React from "react";


const Projects = ({ setActiveTab }) => {
  const projectList = [
    {
      status: "Live",
      title: "Mapify",
      tech: ["React", "Spring Boot", "PostgreSQL", "Render"],
      link: "https://ritesh-kumar-verma.github.io/Mapify/",
    },
    {
      status: "Live",
      title: "Expense Tracker",
      tech: ["React", "JavaScript"],
      link: "https://ritesh-kumar-verma.github.io/Expense-Tracker/",
    },
    {
      status: "Live",
      title: "Weatherify",
      tech: ["React", "JavaScript", "OpenWeatherMap API"],
      link: "https://ritesh-kumar-verma.github.io/weatherify/",
    },
    {
      status: "Live",
      title: "Youtube Clone",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://ritesh-kumar-verma.github.io/Youtube/",
    },

    {
      status: "Not Live(Repo)",
      title: "Todo List",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Ritesh-Kumar-Verma/Todo-List.git",
    },
    {
      status: "Not Live(Repo)",
      title: "Rock-Paper-Scissors",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Ritesh-Kumar-Verma/Rock-Paper-Scissors.git",
    },
  ];

  return (
    <div className=" pt-28 flex flex-col   w-4/5 max-sm:w-19/20">
      <div
        className="group cursor-pointer w-fit flex gap-2 text-[#00ffff]"
        onClick={() => setActiveTab("Home")}
      >
        <span className="inline-block transition-transform group-hover:-translate-x-2">
          &larr;
        </span>
        <h1 className="inline-block">Home</h1>
      </div>
      <div className="text-[#E2E8E0] text-5xl mt-2">All Projects</div>

      <div className="my-2 grid grid-cols-4 py-2 ">
        <div className="">Status</div>
        <div className="">Project</div>
        <div className="">Built With</div>
        <div className="">Link</div>

        {projectList.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <div className="  flex items-center border-b border-[rgba(149,151,151,0.37)] gap-2">
                {data.status == "Live" && <span
                  className="w-3 h-3 bg-[#ff4d4d] rounded-full animate-pulse"
                ></span>}
                {data.status}
              </div>
              <div className="  flex items-center border-b border-[rgba(149,151,151,0.37)]">
                {data.title}
              </div>
              <div className=" break-words py-2 gap-2 flex items-center border-b border-[rgba(149,151,151,0.37)] flex-wrap gap-1">
                {data.tech.map((t, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="overflow-hidden  text-sm bg-[rgba(1,139,93,0.13)] rounded-full px-3 py-1 text-[#00ffff] ">
                        {t}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className=" flex  items-center border-b border-[rgba(149,151,151,0.37)]">
                <a
                  className=" p-2 group text-white hover:text-[#00ffff]"
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                  <span className="inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform  ">
                    ↗
                  </span>
                </a>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
