import React from 'react'


const About = () => {
  const aboutMe = [
    "I'm a passionate Front-End Developer with a strong foundation in React.js, dedicated to building responsive and interactive web applications.",
    "I enjoy turning design concepts into dynamic user experiences with clean, reusable code. With a focus on performance and accessibility, I aim to create interfaces that are both beautiful and user-friendly.",
    "Currently, I'm expanding my skill set with modern JavaScript tools and libraries to stay ahead in the ever-evolving front-end ecosystem.",
    "I'm passionate about solving Data Structures and Algorithms problems. It helps me sharpen my problem-solving skills, write efficient code, and continuously improve my approach to tackling real-world programming challenges."
  ]
  return (
    

    <div className='  flex justify-center  w-2/3 max-xl:w-full '>
    <div className=' text-[#ffffff] mx-5 mt-10 p-7 bg-[#0b2239] rounded-2xl border border-[rgba(0,255,255,0.2)] transition-transform hover:-translate-y-2 
    drop-shadow-2xl
    '>
      {aboutMe.map((data,index)=>{
        return(
          <div key={index} className="pb-3 text-lg">{data}</div>
        ) 
      })}
    
    </div>
    
    </div>
  )
}

export default About


