import React from 'react'
import './About.css'


const About = () => {
  const aboutMe = [
    "I'm a passionate Front-End Developer with a strong foundation in React.js, dedicated to building responsive and interactive web applications.",
    "I enjoy turning design concepts into dynamic user experiences with clean, reusable code. With a focus on performance and accessibility, I aim to create interfaces that are both beautiful and user-friendly.",
    "Currently, I'm expanding my skill set with modern JavaScript tools and libraries to stay ahead in the ever-evolving front-end ecosystem.",
    "I'm passionate about solving Data Structures and Algorithms problems. It helps me sharpen my problem-solving skills, write efficient code, and continuously improve my approach to tackling real-world programming challenges."
  ]
  return (
    <>
    <div className='about-me'>
      {aboutMe.map((data,index)=>{
        return(
          <div key={index} className="about-me-paragraph">{data}</div>
        ) 
      })}
    
    </div>
    
    </>
  )
}

export default About


