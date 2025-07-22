import React from "react";
import "./MyInfo.css";
import { assets } from "../../assets/assets";

const MyInfo = () => {
  return (
    <div className="info">
      <div>
        <div className="my-name">Ritesh Kumar Verma</div>
        <div className="title">Front End Engineer</div>
        <div className="about">
          Front-end developer learning React.js and building responsive web
          interfaces.
        </div>
        <div className="options">
          <div className="option-items">
            <div className="middle-line"></div> Projects
          </div>
          <div className="option-items">About</div>
          <div className="option-items">Skills</div>
        </div>
        <div className="contacts">
          <a href="https://github.com/Ritesh-Kumar-Verma" target="_blank" rel="noopener noreferrer">
            <img src={assets.git} alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">              {/*add instagram link*/}
            <img src={assets.instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ritesh-verma-512468244" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
