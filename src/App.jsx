import { useState } from "react";
import Header from "./Components/Header";
import CursorLight from "./Components/CursorLight";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  // const tab= {
  //   "Home":<Home  activeTab={activeTab} setActiveTab={setActiveTab} />,
  //   "Projects": <Projects setActiveTab={setActiveTab}/>,
  //   "Contact" : <Contact/>

  // }

  return (
    // <div className='flex justify-center'>

    //  {
    //   tab[activeTab]
    //  }

    // </div>
    <div>
      {/* <CursorLight/> */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
