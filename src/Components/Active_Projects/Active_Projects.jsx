import React from "react";
import "./Active_Projects.css";
import { assets } from "../../assets/assets";

const Active_Projects = ({ activeTab, setActiveTab }) => {
  const myLiveProjects = [
    {
      sample: assets.mapify,
      title: "Mapify",
      summary: `📍 Mapify is a React-based location-sharing app in development.
🔎 Search friends and connect
📤 Request/share live locations
👥 Create groups to track members(Under Development)
🗺️ View locations on an interactive map
🔒 Built with privacy and real-time collaboration in mind.`,

      url: "https://ritesh-kumar-verma.github.io/Mapify/",
    },
    {
      sample: assets.expenseTracker,
      title: "Expense Tracker",
      summary: `💰 Expense Tracker is a React-based application that helps users monitor and manage their spending.
📊 Visualize total expenses with a dynamic graph
📝 View a detailed list of all transactions
🔍 Track individual item costs with ease
🎨 Clean and intuitive UI for better expense management
✅ Designed to make personal finance tracking simple and effective.`,

      url: "https://ritesh-kumar-verma.github.io/Expense-Tracker/",
    },
    {
      sample: assets.weatherify,
      title: "Weatherify",
        summary: `⛅ Weatherify is a responsive weather application built with React, fetching real-time data from the OpenWeather API.
🌍 Search any city to view weather instantly  
🌡️ Check temperature, humidity, and wind speed  
🖼️ Get condition-specific weather icons  
📱 Optimized for desktop and mobile devices  
🎨 Sleek and modern UI for a smooth experience`,

      url: "https://ritesh-kumar-verma.github.io/weatherify/",
    },
    {
      sample: assets.youtube,
      title: "Youtube Clone",
      summary: `📺 YouTube Clone is a fully responsive project built using HTML and CSS, replicating the core layout and design of the original platform.
📌 Sticky header for easy navigation  
📂 Sidebar menu for quick access  
🎞️ Dynamic video grid layout  
💻 Optimized for desktop, tablet, and mobile views  
🎨 Clean and responsive design using media queries`,

      url: "https://ritesh-kumar-verma.github.io/Youtube/",
    }
  ];

  return (
    <div className="active-projects-card">
      <div className="live">
        <span className="dot"></span>
        Live
      </div>

      {myLiveProjects.map((data, index) => {
        return (
          <div
            className="project-card"
            onClick={() =>
              window.open(data.url, "_blank", "noopener,noreferrer")
            }
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

      <div className="view-all-projects">
        <div
          className="view-all-project-title"
          onClick={() => {
            setActiveTab("Projects");
          }}
        >
          View Full Project Archive
        </div>{" "}
        <div className="right-arrow">&rarr;</div>
      </div>
    </div>
  );
};

export default Active_Projects;
