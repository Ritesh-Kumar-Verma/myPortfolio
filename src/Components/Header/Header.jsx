import React from "react";
import "./Header.css";
const Header = ({activeTab,setActiveTab}) => {
  const headerItem = ["Home", "Projects", "Contact"];


  



  return<div className='my-header'>
        <div className="logo">R</div>
        {headerItem.map((data,index)=>{
            return <div className={`header-item ${activeTab == data ? 'active':''}`} onClick={()=>{setActiveTab(data)}}>{data}</div>
        })}
    </div>;
};

export default Header;
