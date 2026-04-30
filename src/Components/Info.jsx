import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Info = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const title = [
    "Web Developer",
    "Frontend Engineer",
    "UI Developer",
    "React Developer",
    "Backend Developer",
    "Spring Boot Developer",
    "Java Developer",
  ];
  useEffect(() => {
    const titleSwapInterval = setInterval(() => {
      setIndex((p) => (p + 1) % title.length);
    }, 2000);

    return () => clearInterval(titleSwapInterval);
  }, []);



  return (
    <div className="flex-1 flex flex-col items-center w-9/10 lg:w-full mb-10 ">



      <div className="  flex gap-2 items-center flex-col  lg:w-3/4  justify-center ">

      
        <div className=" w-full flex gap-2">
          <motion.span
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block origin-center"
          >
            ✨
          </motion.span>
          <div className="w-full text-md"> Hello, I'm Ritesh Kumar Verma</div>
        </div>

        <div className="w-full text-3xl lg:text-5xl">
          <motion.span
            initial={{}}
            animate={{ x: [0, -4, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className=" bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-extrabold inline-block hover:scale-105  transition-transform duration-200"
          >
            Full-Stack
          </motion.span>{" "}
          <motion.span
            initial={{}}
            animate={{ x: [-4, 0, -4], y: [-10, 0, -10] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-extrabold inline-block hover:scale-105 transition-transform duration-200"
          >
            Developer
          </motion.span>
        </div>

        <div className="flex  gap-2 w-full  ">
          <span className="">&</span>
          <motion.div className="relative inline-block lg:text-2xl">
            {title[index]}

            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#ffff]"
            />
          </motion.div>
        </div>

        <div className=" mt-3 text-lg max-sm:text-sm text-gray-500">
          Full-stack developer specializing in React, JavaScript, Java Spring
          Boot and performance-focused web experiences. I turn product ideas and
          polished designs into fast, accessible interfaces.
        </div>

        <div className="text-white border-2 rounded-full mt-2 px-4 py-2 bg-blue-950 hover:scale-105 transition-transform duration-300">
          React.js • Java Spring Boot • Node.js
        </div>




        <div className="w-full mt-5 flex justify-between ">

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 2px 2px rgba(255,255,255,1)",
              backgroundColor: "rgba(214, 206, 206,1)",
              cursor: "pointer",
            }}
            onClick={() => navigate("/projects")}
            className=" rounded-full px-6 py-4 max-sm:p-2 bg-white text-black  text-xl max-sm:text-sm"
          >
            Explore Projects
            <motion.span
              initial={{}}
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block ml-2 max-sm:ml-0"
            >
              ➤
            </motion.span>{" "}
          </motion.button>

          <motion.a
          href="./Ritesh_Resume.pdf"
          download
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 2px 2px rgba(255,255,255,1)",
              backgroundColor: "rgba(214, 206, 206,1)",
              cursor: "pointer",
            }}
            
            className=" rounded-full px-6 py-4 max-sm:p-2  bg-white text-black  text-xl max-sm:text-sm"
          >
            Download Resume
            <motion.span
              initial={{}}
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block ml-2 max-sm:ml-0 "
            >
              ➤
            </motion.span>{" "}
          </motion.a>




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
            href="https://www.linkedin.com/in/ritesh-kumar-verma-512468244/"
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
