import React from "react";

const Header = ({ activeTab, setActiveTab }) => {
  const headerItem = ["Home", "Projects", "Contact"];

  //z-50    for z index to be tested
  return (
    <div className="flex justify-around z-50 p-5 items-center fixed top-0 w-full h-20 border-b-1 bg-[rgb(255,255,255,0.05)]  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-lg">
      <div className="bg-[#00bfff] text-[#0a192f] w-10 h-10 rounded-full flex justify-center items-center text-4xl ">
        R
      </div>
      {headerItem.map((data, index) => {
        return (
          <div
            className={` hover:text-[rgb(100,255,218)] cursor-pointer transform transition-transform hover:scale-130
                 ${
                   activeTab == data
                     ? "scale-140 text-[rgb(100,255,218)]  "
                     : ""
                 }`}
            onClick={() => {
              setActiveTab(data);
            }}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
