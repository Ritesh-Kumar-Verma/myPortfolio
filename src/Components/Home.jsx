import React from 'react'
import { motion } from "framer-motion";
import IconSlider from "./IconSlider";
import { FaRocket } from "react-icons/fa";
import ActiveProjects from "./Active_Projects";
import About from "./About"
import Terminal from "./Terminal";
import Info from "./Info";
import { useEffect } from "react";


const Home = ({ setActiveTab }) => {
  useEffect(() => {
    setActiveTab("Home");
    return () => {
      setActiveTab("");
    };
  }, []);

 
  return (
    <div className="relative w-full flex flex-col items-center justify-center  ">
      {/* Info + terminal */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 mt-10   justify-items-center ">
        {/* Info div  */}
        <Info />

        {/* Terminal div  */}
        <Terminal />
      </div>








      <div className=" lg:w-2/5 md:w-3/5 w-9/10 border rounded-xl border-gray-500">
        <div className="flex gap-2 p-4 border-b border-gray-500">
          <FaRocket size={20} color="gray" />
          Tech Stack
        </div>
        <IconSlider />
      </div>

      <div className="mt-10 w-full flex justify-center">
        <ActiveProjects />
      </div>



      <About/>










    </div>
  );
};

export default Home;
