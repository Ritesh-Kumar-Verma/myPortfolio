import React, { useState } from "react";
import Info from "./Info";
import Skills from "./Skills";
import About from "./About";
import Active_Projects from "./Active_Projects";

const Home = ({ activeTab, setActiveTab }) => {
  const [activeOption, setActiveOption] = useState("Projects");

  const optionItems = {
    Projects: (
      <Active_Projects activeTab={activeTab} setActiveTab={setActiveTab} />
    ),
    About: <About />,
    Skills: <Skills />,
  };
  return (
    <div className="w-full h-full flex pt-20 justify-around max-xl:flex-col max-xl:items-center mb-4 ">
      <Info
        optionItems={Object.keys(optionItems)}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <div className="w-34/100 max-xl:hidden "></div>
      {optionItems[activeOption]}
    </div>
  );
};

export default Home;
