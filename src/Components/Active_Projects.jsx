import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import {liveProjects} from "../assets/projects.jsx"
const Active_Projects = ({ setActiveTab }) => {
  const navigate = useNavigate();

  const myLiveProjects = liveProjects

  return (
    <div
      //  className=" w-66/100 mx-5  max-xl:w-19/20
      //   flex flex-col  items-center  mt-10 bg-[#0b2239] rounded-xl shadow-2xl
      //   border border-[rgba(0,255,255,0.2)] transition-shadow duration-300  gap-2 pb-2

      //  "
      className="w-9/10 border-white/10 bg-white/5 rounded-2xl p-4 flex flex-col gap-4 "
    >
      <div
        className="    
         flex items-center justify-center gap-2 text-[#ff4d4d] font-bold text-base 
      
       "
      >
        <span className="w-3 h-3 bg-[#ff4d4d] rounded-full animate-pulse"></span>
        Live
      </div>

      {myLiveProjects.map((data, index) => {
        return (
          <div
            key={index}
            className="entry group
            flex w-full border border-white/20 cursor-pointer hover:bg-[rgba(13,25,44,0.7)] rounded-xl p-2 max-lg:flex-col gap-2
            "
            onClick={() =>
              window.open(data.url, "_blank", "noopener,noreferrer")
            }
          >
            <div className="flex-1 flex items-center justify-center ">
              <img
                className="rounded h-19/20 w-19/20 border-2 border-transparent group-hover:border-[rgb(116,119,138)]"
                src={data.sample}
                alt=""
              />
            </div>
            <div className="flex-2 flex flex-col gap-2 ">
              <div
                className="flex
                group-hover:text-[rgb(100,255,218)] 
                text-2xl text-[#e2e8f0] 
                "
              >
                {data.title}{" "}
                <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform  ">
                  ↗
                </div>
              </div>
              <div className=" p-2 grid grid-cols-[5%_95%] max-sm:gap-2">
                {data.summary.icons.map((icon, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className=" flex justify-center">{icon}</div>
                      <div className="">{data.summary.text[i]}</div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <div className="group cursor-pointer flex items-center gap-2 text-[#e2e8f0]  text-lg  ">
        <div
          className=" border-b-2 border-transparent group-hover:border-b-[rgb(100,255,218)]
             "
          onClick={() => navigate("/projects")}
        >
          View Full Project Archive
        </div>
        <div className="group-hover:translate-x-2 transition-transform ight-arrow">
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default Active_Projects;
