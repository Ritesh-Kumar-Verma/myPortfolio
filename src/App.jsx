import { useState } from "react";
import Header from "./Components/Header";
import CursorLight from "./Components/CursorLight";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";
import AnimatedCursor from "./Components/AnimatedCursor";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const [progress, setProgress] = useState(0);

  return (
    <>

      {progress < 100 ? (
        <Loading progress={progress} setProgress={setProgress} />
      ) : (
        <div className="">
          <CursorLight />
          <AnimatedCursor/>
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <Routes>
            <Route path="/" element={<Home setActiveTab={setActiveTab} />} />
            <Route
              path="/home"
              element={<Home setActiveTab={setActiveTab} />}
            />
            <Route
              path="/projects"
              element={<Projects setActiveTab={setActiveTab} />}
            />
            <Route
              path="/contact"
              element={<Contact setActiveTab={setActiveTab} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
