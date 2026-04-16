import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Contact = ({setActiveTab}) => {
  useEffect(()=>{
    setActiveTab("Contact")
    return ()=>{
      setActiveTab("")
    }
  },[])



  return (
        <div className="flex justify-center w-full">
    <section className="py-10  w-2/5 max-xl:w-2/3 max-sm:w-4/5 flex flex-col justify-center ">
      <h1 className="text-3xl text-[#00ffff] mb-5 text-center" >Contact Me</h1>
      <p>I'm open to opportunities and collaborations. Drop me a message!</p>

      <form className=" flex flex-col gap-3 mt-7" action="https://formsubmit.co/6f5787def7a076f242eb41003b14188e" method="POST">
        <input className="p-3 rounded-2xl bg-[#102a43] text-white font-medium" type="text" name="name" placeholder="Your Name" required />
        <input className="p-3 rounded-2xl bg-[#102a43] text-white font-medium" type="email" name="email" placeholder="Your Email" required />
        <textarea
        className="p-3 rounded-2xl bg-[#102a43] text-white font-medium"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          ></textarea>
        <button className="bg-[#00ffff] text-[#0b2239] p-3 rounded-2xl font-bold cursor-pointer hover:bg-[#00cccc] transition-colors "  type="submit">Send Message</button>
        <input type="hidden" name="_next" value="https://Ritesh-Kumar-Verma.github.io/myPortfolio" />

      </form>

      <div className="mt-7 flex justify-around text-xl  ">
        
        <a className="relative group text-[#00ffff] "
          href="https://github.com/Ritesh-Kumar-Verma"target="_blank"
          rel="noopener noreferrer"
          >
          <img className="h-11 " src={assets.git} alt="" />
          <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block  ">Git</div>
        </a>
        <a className="relative group text-[#00ffff]"
          href="https://www.linkedin.com/in/ritesh-kumar-verma-512468244/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img className="h-11 " src={assets.linkedin} alt="" />
          <div className="absolute left-1/2 -translate-x-1/2  hidden  group-hover:inline ">LinkedIn</div>
        </a>
      </div>
    </section>
          </div>
  );
};

export default Contact;
