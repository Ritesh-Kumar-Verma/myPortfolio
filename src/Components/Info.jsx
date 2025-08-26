import React from "react";
import { assets } from "../assets/assets";

const Info = ({ optionItems, activeOption, setActiveOption }) => {
  const handleActiveOption = (data) => {
    setActiveOption(data);
  };
  return (
    <div className=" flex justify-center items-start fixed left-15 max-xl:relative   max-xl:left-0">
      <div>
        <h1 className="mt-10 text-4xl text-[#e2e8f0]">Ritesh Kumar Verma</h1>
        <div className="pt-3 text-2xl text-[#e2e8f0] ">Full-Stack Engineer</div>
        <div className="pt-3 text-[#94a3b8] text-lg ">
          Full-Stack developer learning{" "}
          <span className="text-blue-700">React.js</span> and{" "}
          <span className="text-blue-700"> Spring Boot </span> and building
          responsive web interfaces.
        </div>

        <div className="pt-3">
          {optionItems.map((data, index) => {
            return (
              <div
                key={index}
                className={` relative flex items-center overflow-hidden  text-gray-500 hover:text-[#00ffff]
              hover:pl-22 transition-all duration-300  
              cursor-pointer
              before:content-[''] before:absolute before:left-0 before:top-1/2 
              before:-translate-y-1/2 before:h-[2px]  
               before:transition-[width] before:duration-300 
              hover:before:w-20 hover:before:bg-[#00ffff]
              
              
              ${
                activeOption == data
                  ? "before:w-20 before:bg-[#00ffff] pl-22"
                  : "before:w-10 before:bg-white pl-12"
              }`}
                onClick={() => handleActiveOption(data)}
              >
                {data}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex gap-10 justify-evenly">
          <a
            href="https://github.com/Ritesh-Kumar-Verma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 transition transform-transition hover:scale-130"
              src={assets.git}
              alt=""
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              className="h-8 transition transform-transition hover:scale-130"
              src={assets.instagram}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ritesh-verma-512468244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 transition-transform duration-300 hover:scale-125"
              src={assets.linkedin}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
