import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Loading = ({ progress, setProgress }) => {

  useEffect(()=>{
    const timer = setInterval(()=>{
      setProgress(prev=>{
        if(prev>=99){
          clearInterval(timer)
        }
        return prev+1
      })

    },20)

    return ()=>clearInterval(timer)
  },[])

  return (
    <div className=" flex flex-col h-screen items-center justify-center gap-5">

      <div className=" flex justify-center items-center h-40 w-40 " >
        <img src={assets.mylogo3} className="" alt="imageNotAvailable" />
      </div>

      <p className="text-2xl">Hello, I am Ritesh</p>

      <div className="w-9/10 border-2 h-10  flex relative rounded-full overflow-hidden ">
        <div
          className={`bg-gray-400 `}
          style={{
            width: `${progress}%`,
          }}
        ></div>
        <span className=" flex items-center justify-center  absolute inset-0 ">
          {progress}%
        </span>
      </div>
      <p>{progress < 95 ? "Loading..." : "Ready..."}</p>
    </div>
  );
};

export default Loading;
