// import React, { useState } from "react";
// import Info from "./Info";
// import Skills from "./Skills";
// import About from "./About";
// import Active_Projects from "./Active_Projects";

// const Home = ({ activeTab, setActiveTab }) => {

//   const [activeOption, setActiveOption] = useState("Projects");
//   const optionItems = {
//     Projects: (
//       <Active_Projects activeTab={activeTab} setActiveTab={setActiveTab} />
//     ),
//     About: <About />,
//     Skills: <Skills />,
//   };
//   return (
//     <div className="flex pt-20 justify-around max-xl:flex-col max-xl:items-center mb-4 ">
//       <Info
//         optionItems={Object.keys(optionItems)}
//         activeOption={activeOption}
//         setActiveOption={setActiveOption}
//       />
//       <div className="w-17/50 max-xl:hidden "></div>
//        {optionItems[activeOption]}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconSlider from "../IconSlider";
import { FaRocket } from "react-icons/fa";


const Home = () => {
  const terminalRef = useRef(null);

  const [terminalText, setTerminalText] = useState("");

  const [terminalHistory, setTerminalHistory] = useState([
    "Welcome to Ritesh's Interactive terminal!",
    "Type 'help' to see available commands.",
    "Try commands like 'about' , 'skills', or 'projects'",
  ]);

  const commands = {
    help: () => "Available commands:\nhelp, about, skills, projects, clear",
    about: () => "Hi, I am Ritesh, a Full Stack Developer",
    skills: () => "React.js, Java, Spring Boot, Node.js",
    projects: () => "1. Mapify\n2. Portfolio Website",
    clear: () => "",
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    // console.log(terminalHistory);
  }, [terminalHistory]);

  const handleTerminal = (e) => {
    setTerminalText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const command = terminalText.trim().toLowerCase();
      let output = "";

      output = commands[command]
        ? commands[command]()
        : "Command Not Found!!!\nType 'help'";
      if (command === "clear") {
        setTerminalHistory([
          "Welcome to Ritesh's Interactive terminal!",
          "Type 'help' to see available commands.",
          "Try commands like 'about' , 'skills', or 'projects'",
        ]);
        setTerminalText("");
        return;
      }

      setTerminalHistory((p) => [...p, `guest@ritesh:~$ `, output]);
      setTerminalText("");
    }
  };

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
    <div className="w-full flex flex-col items-center justify-center">
      {/* Info + terminal */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 mt-10 mx-10  ">
        {/* Info div  */}
        <div className="flex-1 flex flex-col items-center w-full justify-center">
          <div className="  flex gap-2 items-center flex-col  lg:w-3/4 justify-center ">
            {/* <motion.span
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="inline-block origin-center"
            >
            ✨
            </motion.span> */}
            <div className="w-full"> Hello, I'm Ritesh Kumar Verma</div>

            <div className="w-full text-3xl lg:text-6xl ">
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

            <div className="flex jus  gap-2 w-full  ">
              <span className="">&</span>
              <motion.div className="relative inline-block lg:text-2xl">
                {title[index]}

                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white absolute left-0 bottom-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
                    transformOrigin: "left",
                  }}
                />
              </motion.div>
            </div>
            <div className="text-lg ">
              Full-stack developer specializing in React, JavaScript, Java
              Spring Boot and performance-focused web experiences. I turn
              product ideas and polished designs into fast, accessible
              interfaces.
            </div>

            <div className="text-white border-2 rounded-full mt-2 px-4 py-2 bg-blue-950 hover:scale-105 transition-transform duration-300">
              React.js • Java Spring Boot • Node.js
            </div>
            <div className="w-full mt-5">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px 2px rgba(255,255,255,1)",
                  backgroundColor: "rgba(214, 206, 206,1)",
                  cursor: "pointer",
                }}
                onClick={() => {}}
                className=" rounded-full px-6 py-4 mb-10 bg-white text-black  text-xl"
              >
                Explore Projects
                <motion.span
                  initial={{}}
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block ml-2"
                >
                  ➤
                </motion.span>{" "}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Terminal div  */}
        <div className="flex justify-center ">
          <div className="border-2 border-gray-400 flex flex-col h-[500px] rounded-2xl w-4/5 bg-gray-900 mb-10 ">
            <div className="relative flex rounded-t-2xl  bg-gray-700 p-3 gap-3 items-center">
              <motion.div
                initial={{}}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 bottom-1/2 bg-gray-800 border-2 border-gray-400 rounded-full px-4 py-2 text-white "
              >
                Terminal
              </motion.div>
              <div className="w-3 h-3 bg-red-600 rounded-full "></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full "></div>
              <div className="w-3 h-3 bg-green-600 rounded-full "></div>
              <div className="pl-2 text-lg">ritesh@portfolio:~</div>
            </div>
            <div
              ref={terminalRef}
              className="p-3 flex flex-col gap-2 text-gray-400 font-bold 
             overflow-y-auto"
            >
              {terminalHistory.map((data, index) => {
                // console.log(data);
                return (
                  <p
                    key={index}
                    className={`${data == "guest@ritesh:~$" ? "text-green-600" : ""}`}
                  >
                    {data}
                  </p>
                );
              })}

              <div className="flex gap-2  ">
                <p className="relative text-green-600">
                  guest@ritesh:~$
                  <motion.span
                    initial={{}}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className={`${terminalText == "" ? "absolute right-[-1]  inline-block h-[1.1em] w-2 ml-1  bg-green-500" : ""} `}
                  ></motion.span>
                </p>

                <input
                  type="text"
                  placeholder=" Type a command..."
                  className="  focus:outline-none caret-transparent "
                  value={terminalText}
                  onChange={handleTerminal}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 lg:w-2/5 border rounded-xl border-gray-500">
      <div className="flex gap-2 p-4 border-b border-gray-500">
      <FaRocket size={20} color="gray" />
      Tech Stack
      </div>
        <IconSlider />
      </div>
    </div>
  );
};

export default Home;
