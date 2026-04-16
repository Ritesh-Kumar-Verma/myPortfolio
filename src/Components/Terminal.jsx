import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
const Terminal = () => {
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
    projects: () => "1. Mapify 2. Portfolio Website 3. Weatherify 4. Expense Tracker",
    clear: () => "",
  };

  
  const terminalRef = useRef(null);

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
  return (
    <div className="flex justify-center w-full  ">
          <div className="border-2 border-gray-400 flex flex-col h-[500px] rounded-2xl lg:w-3/4 w-9/10  bg-gray-900 mb-10 ">
            <div className="relative flex rounded-t-2xl  bg-gray-700 p-3 gap-3 items-center ">
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
             overflow-y-auto max-sm:text-sm"
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
  )
}

export default Terminal