import { motion } from "framer-motion";
import IconSlider from "../IconSlider";
import { FaRocket } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdAdjust } from "react-icons/md";
import { FaStar, FaHandshake } from "react-icons/fa";
import ActiveProjects from "./Active_Projects";
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

  const skills = {
    Language: "Java • JavaScript • Python",
    Frontend: "React.js • HTML • CSS • Tailwind CSS",
    Backend: "Spring Boot • REST APIs • JWT Authentication",
    Database: "MySQL • PostgreSQL",
    Tools: "Git • GitHub • VS Code • IntelliJ IDEA",
  };

  const coreValue = {
    "Quality First":
      "Writing clean, maintainable code that stands the test of time",
    "User-Centric":
      "Every decision is made with the end user's experience in mind",
    Innovation: "Embracing cutting-edge technologies to solve complex problems",
    Collaboration: "Great products are built by teams, not individuals",
  };
  const coreValueIcon = {
    "Quality First": <FaShieldAlt size={20} color="white" />,
    "User-Centric": <MdAdjust size={20} color="white" />,
    Innovation: <FaStar size={20} color="white" />,
    Collaboration: <FaHandshake size={20} color="white" />,
  };

  return (
    <div className="w-full flex flex-col items-center justify-center ">
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

      {/* About me */}
      <div className="mt-10 mb-5 flex flex-col w-4/5 max-md:w-4/5 items-center">
        <div className="relative text-6xl max-sm:text-2xl font-extrabold ">
          About Me
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: [0, "100%"] }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="w-full h-[2px] absolute left-0 bottom-0 bg-gradient-to-r from-[#ffff] "
          />
        </div>
        <p className="mt-5 max-sm:text-lg text-2xl text-gray-500 text-justify">
          Front-End Developer skilled in React.js with Spring Boot knowledge. I
          build responsive, clean, and user-friendly web apps and practice DSA
          to improve problem-solving skills.
        </p>
      </div>

      <div className="mt-10 mb-10 flex gap-4  max-md:flex-col w-4/5 max-sm:w-9/10 sm:text-md  ">
        <div className=" p-2 flex flex-col items-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg hover:scale-104 transition-transform duration-300">
          <p className="text-xl text-white mb-1">What sets me apart</p>
          <p className="text-sm text-gray-400 text-justify">
            I combine design thinking with full-stack development to turn ideas
            into complete, working applications. From Figma designs and product
            requirements to backend logic and responsive UI, I focus on building
            smooth, reliable, and production-ready experiences.
          </p>
        </div>
        <div className=" p-2 flex flex-col items-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg hover:scale-104 transition-transform duration-300 ">
          <p className="text-xl text-white mb-1">What sets me apart</p>
          <p className="text-sm text-gray-400 text-justify">
            I combine design thinking with full-stack development to turn ideas
            into complete, working applications. From Figma designs and product
            requirements to backend logic and responsive UI, I focus on building
            smooth, reliable, and production-ready experiences.
          </p>
        </div>
      </div>

      {/* Technical Mastery */}
      <div className="flex flex-col items-center mb-10 max-sm:w-9/10 ">
        <div className="text-6xl font-extrabold max-sm:text-2xl max-md:text-4xl relative w-fit p-1">
          Technical Mastery
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: [0, "100%"] }}
            transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
            className=" absolute left-0 bottom-0 bg-gradient-to-r from-[#ffff] h-[2px] "
          />
        </div>
        <div className="w-full grid grid-cols-[30%_70%] gap-1 mt-5 p-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-xl shadow-lg hover:scale-104 transition-transform duration-300">
          {Object.keys(skills).map((data, index) => {
            return (
              <>
                <h1 className=" text-xl text-white max-sm:text-sm">{data}</h1>
                <p className=" text-md text-gray-400 max-sm:text-sm">
                  {skills[data]}
                </p>
              </>
            );
          })}
        </div>
      </div>

      {/* core value */}
      <div className="flex flex-col justify-center w-9/10  items-center  ">
        <div className="text-6xl font-extrabold max-sm:text-2xl max-md:text-4xl relative w-fit p-1">
          Core Value
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: [0, "100%"] }}
            transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
            className=" absolute left-0 bottom-0 bg-gradient-to-r from-[#ffff] h-[2px] "
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full  mt-5 mb-10 ">
          {Object.keys(coreValue).map((data, index) => (
            <div className="border border-white/20 bg-white/5 rounded-xl shadow-2xl backdrop-blur-md p-4 flex flex-col items-center hover:scale-104 transition-transform duration-300 ">
              <div className="flex items-center gap-2">
                {coreValueIcon[data]}

                <h1 className="text-lg text-white">{data}</h1>
              </div>
              <p className="text-gray-400 text-sm">{coreValue[data]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
