import React from "react";
import { assets } from "../assets/assets";

const Active_Projects = ({ activeTab, setActiveTab }) => {

  const myLiveProjects = [
  {
    sample: assets.mapify,
    title: "Mapify",
    summary: {
      icons: ["📍", "🔎", "📤", "👥", "🗺️", "🔒"],
      text: [
        "Mapify is a React-based location-sharing app in development.",
        "Search friends and connect",
        "Request/share live locations",
        "Create groups to track members (Under Development)",
        "View locations on an interactive map",
        "Built with privacy and real-time collaboration in mind."
      ]
    },
    url: "https://ritesh-kumar-verma.github.io/Mapify/",
  },
  {
    sample: assets.expenseTracker,
    title: "Expense Tracker",
    summary: {
      icons: ["💰", "📊", "📝", "🔍", "🎨", "✅"],
      text: [
        "Expense Tracker is a React-based application that helps users monitor and manage their spending.",
        "Visualize total expenses with a dynamic graph",
        "View a detailed list of all transactions",
        "Track individual item costs with ease",
        "Clean and intuitive UI for better expense management",
        "Designed to make personal finance tracking simple and effective."
      ]
    },
    url: "https://ritesh-kumar-verma.github.io/Expense-Tracker/",
  },
  {
    sample: assets.weatherify,
    title: "Weatherify",
    summary: {
      icons: ["⛅", "🌍", "🌡️", "🖼️", "📱", "🎨"],
      text: [
        "Weatherify is a responsive weather application built with React, fetching real-time data from the OpenWeather API.",
        "Search any city to view weather instantly",
        "Check temperature, humidity, and wind speed",
        "Get condition-specific weather icons",
        "Optimized for desktop and mobile devices",
        "Sleek and modern UI for a smooth experience"
      ]
    },
    url: "https://ritesh-kumar-verma.github.io/weatherify/",
  },
  {
    sample: assets.youtube,
    title: "Youtube Clone",
    summary: {
      icons: ["📺", "📌", "📂", "🎞️", "💻", "🎨"],
      text: [
        "YouTube Clone is a fully responsive project built using HTML and CSS, replicating the core layout and design of the original platform.",
        "Sticky header for easy navigation",
        "Sidebar menu for quick access",
        "Dynamic video grid layout",
        "Optimized for desktop, tablet, and mobile views",
        "Clean and responsive design using media queries"
      ]
    },
    url: "https://ritesh-kumar-verma.github.io/Youtube/",
  }
];


  return (
    <div className=" w-66/100 mx-5  max-xl:w-19/20  
      flex flex-col  items-center  mt-10 bg-[#0b2239] rounded-xl shadow-2xl
      border border-[rgba(0,255,255,0.2)] transition-shadow duration-300  gap-2 pb-2

     ">

      <div className="    
        mt-2 flex items-center gap-2 text-[#ff4d4d] font-bold text-base 
      
       ">
        <span className="w-3 h-3 bg-[#ff4d4d] rounded-full animate-pulse"></span>
        Live
      </div>

      {myLiveProjects.map((data, index) => {
        return (
          <div
            className=" group
            flex w-19/20 cursor-pointer hover:bg-[rgba(13,25,44,0.7)] rounded-xl p-2 max-lg:flex-col gap-2
            "
            onClick={() =>
              window.open(data.url, "_blank", "noopener,noreferrer")
            }
          >
            <div className="flex-1 flex items-center justify-center ">
              <img className="rounded h-19/20 w-19/20 border-2 border-transparent group-hover:border-[rgb(116,119,138)]" src={data.sample} alt="" />
            </div>
            <div className="flex-2 flex flex-col gap-2 ">
              <div className="flex
                group-hover:text-[rgb(100,255,218)] 
                text-2xl text-[#e2e8f0] 
                ">
                {data.title} <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform  ">↗</div>
              </div>
              <div className="  grid grid-cols-[5%_95%] max-sm:gap-2">

               {
                  data.summary.icons.map((icon,i)=>{
                    return (<><div className="flex justify-center">{icon}</div>
                    <div>{data.summary.text[i]}</div>
                      </>
                  )})
                
                }


              </div>
            </div>
          </div>
        );
      })}

      <div className="group cursor-pointer flex items-center gap-2 text-[#e2e8f0]  text-lg  ">
        <div
          className=" border-b-2 border-transparent group-hover:border-b-[rgb(100,255,218)]
             "
          onClick={() => {
            setActiveTab("Projects");
          }}
        >
          View Full Project Archive
        </div>
        <div className="group-hover:translate-x-2 transition-transform ight-arrow">&rarr;</div>
      </div>
    </div>
  );
};

export default Active_Projects;
