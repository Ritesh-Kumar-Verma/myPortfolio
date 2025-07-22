import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets";

const Projects = () => {
  const myLiveProjects = [
    {
      sample: assets.expenseTracker,
      title: "Expense Tracker",
      summary:
        "I built a React-based Expense Tracker that helps users monitor and manage their spending. The app features a dynamic graph that visualizes total expenses, a detailed list of all transactions, and a separate view for individual item costs. It offers a clean UI and intuitive tracking — making it easier to stay on top of personal finances.",
      url: "https://ritesh-kumar-verma.github.io/Expense-Tracker/",
    },
    {
      sample: assets.weatherify,
      title: "Weatherify",
      summary:
        "Weatherify is a responsive weather application built with React, fetching real-time data from the OpenWeather API. It allows users to search any city and instantly view current weather conditions including temperature, humidity, wind speed, and condition-specific icons. The app offers a sleek, modern UI optimized for both desktop and mobile devices.",
      url: "https://ritesh-kumar-verma.github.io/weatherify/",
    },
    {
      sample: assets.mapify,
      title: "Mapify (Under Development)",
      summary: `📍 Mapify is a React-based location-sharing app in development.

🔎 Search friends and connect
📤 Request/share live locations
👥 Create groups to track members
🗺️ View locations on an interactive map

🔒 Built with privacy and real-time collaboration in mind.`,
      url: "https://ritesh-kumar-verma.github.io/Mapify/",
    },
  ];
  const myAllProject = [
    {
      sample: "",
      title: "",
      summar: "",
    },
  ];

  return (
    <div className="my-projects">
      <div className="live">
        <span className="dot"></span>
        Live
      </div>

      {myLiveProjects.map((data, index) => {
        return (
          <div
            className="project-card"
            onClick={() => window.open(data.url, '_blank', 'noopener,noreferrer')}
          >
            <div className="sample">
              <img src={data.sample} alt="" />
            </div>
            <div className="title-and-summary">
              <div className="project-title">
                {data.title} <div className="arrow">↗</div>
              </div>
              <div className="summary">{data.summary}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
