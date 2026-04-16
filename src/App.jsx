import { useState } from "react";
import Header from "./Components/Header";
import CursorLight from "./Components/CursorLight";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
 
  return (
   
    <div className="">
      <CursorLight/>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/" element={<Home setActiveTab={setActiveTab} />} />
        <Route path="/home" element={<Home setActiveTab={setActiveTab} />} />
        <Route path="/projects" element={<Projects setActiveTab={setActiveTab} />} />
        <Route path="/contact" element={<Contact setActiveTab={setActiveTab} />} />
      </Routes>
    </div>
  );
};

export default App;
