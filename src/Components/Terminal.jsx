import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { terminalAPI } from "../api/api";
import ChatLoading from "./Chat_Loading";

const Terminal = () => {
  const [terminalText, setTerminalText] = useState("");

  const [terminalHistory, setTerminalHistory] = useState([
    "Welcome to My Portfolio Website"
  ]);
  const [aiThinking , setAiThinking] = useState(false)

  const commands = {
    help: () => "Available commands: help, about, skills, projects, clear",
    about: () => "Hi, I am Ritesh, a Full Stack Developer",
    skills: () => "React.js, Java, Spring Boot, Node.js",
    projects: () =>
      "1. AI_Job_Search 2. Mapify 3. Portfolio Website 4. Weatherify 5. Expense Tracker",
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
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const command = terminalText.trim().toLowerCase();

      if (command === "clear" || command === 'cls') {
        setTerminalHistory([
          "Welcome to Ritesh's AI Assistant!",
        ]);
        setTerminalText("");
        return;
      }

      setAiThinking(true)
      const res = await terminalAPI.getQuery(command)
      const  output = res.data.output.answer
      setAiThinking(false)

      setTerminalHistory((p) => [...p, `guest@ritesh:~$ ${terminalText}`, output]);
      setTerminalText("")

    }
  };

  
  return (
    <div className="terminal-entry flex justify-center w-full  ">
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
            AI Assistant
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

            </p>
            {/* Command Line */}
            <div className="relative flex-1 flex items-center">
              <input
                type="text"
                placeholder="Type a command..."
                className="bg-transparent border-none focus:outline-none caret-transparent w-full z-10 text-gray-400 font-bold"
                value={terminalText}
                onChange={handleTerminal}
                onKeyDown={handleKeyDown}
                autoFocus
                />

              {/* The Custom Cursor */}
              {terminalText === "" && (
                <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 inline-block h-[1.2em] w-2 bg-green-500"
                style={{ pointerEvents: 'none' }}
                />
              )}
            </div>
          </div>
          { aiThinking &&  <ChatLoading/>}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
