import React from "react";
import "./Info.css";
import { assets } from "../../assets/assets";

const Info = ({optionItems,activeOption,setActiveOption}) => {
  
  const handleActiveOption = (data)=>{
    setActiveOption(data)
  }
  return (
    <div className="info">
      <div>
        <div className="my-name">Ritesh Kumar Verma</div>
        <div className="title">Front End Engineer</div>
        <div className="about">
          Full-Stack developer learning <span>React.js</span> and <span> Spring Boot </span> and building responsive web interfaces.
        </div>

        <div className="options">
          
          {/*optionItems here is Array of keys of original optionItems object*/ }
          {optionItems.map((data,index)=>{
            return <div key={index} className={`option-items ${activeOption == data ? 'active-option' : ''}`} onClick={()=>handleActiveOption(data)}>{data}</div>
          })}


        </div>


        <div className="contacts">
          <a
            href="https://github.com/Ritesh-Kumar-Verma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.git} alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
      
            
            <img src={assets.instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritesh-verma-512468244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.linkedin} alt="" />
          </a>
        </div>


        
      </div>
    </div>
  );
};

export default Info;
