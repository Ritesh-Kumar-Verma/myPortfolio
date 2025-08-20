import React from "react";
import "./Projects.css";
const Projects = () => {
  const projectList = [
    {
      status:"Live",
      title : "Mapify",
      tech:["React" , "Spring Boot", "PostgreSQL","Render"],
      link:"https://ritesh-kumar-verma.github.io/Mapify/"
    },
    {
      status: "Live",
      title: "Expense Tracker",
      tech: ["React", "JavaScript"],
      link: "https://ritesh-kumar-verma.github.io/Expense-Tracker/"
    },
    {
      status: "Live",
      title: "Weatherify",
      tech: ["React", "JavaScript", "OpenWeatherMap API"],
      link: "https://ritesh-kumar-verma.github.io/weatherify/"
    },
    {
      status: "Live",
      title: "Youtube Clone",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://ritesh-kumar-verma.github.io/Youtube/"
    },
    
    {
      status: "Not Live(Repo)",
      title: "Todo List",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Ritesh-Kumar-Verma/Todo-List.git"
    },
    {
      status: "Not Live(Repo)",
      title: "Rock-Paper-Scissors",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Ritesh-Kumar-Verma/Rock-Paper-Scissors.git"
    }
    
  ];

  return (
    <div className="projects-window">
      <div className="back-to-home-tab">
        <span className="left-arrow">&larr;</span> Home
      </div>
      <div className="table-title">All Projects</div>

      <div className="main-table">
        <div className="cell-title">Status</div>
        <div className="cell-title">Project</div>
        <div className="cell-title">Built With</div>
        <div className="cell-title">Link</div>

        {projectList.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className={`cell-item ${
                  data.status == "Live" ? "live-status" : "not-live"
                }`}
              >
                <span className="dot"></span>
                {data.status}
              </div>
              <div className="cell-item">{data.title}</div>
              <div className="cell-item tech-table">
                {data.tech.map((t, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="tech-item">{t}</div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="cell-item">
                <a href={data.link} target="_blank" rel="noopener noreferrer">Open<span className="arrow">↗</span></a>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
