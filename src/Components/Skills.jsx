import React from 'react'



const Skills = () => {
  return (
    <section className="py-10 text-white text-center kills-section">
  <h1 className='text-3xl mb-5 text-[#00ffff] font-bold'>Skills</h1>
  <div className="flex flex-wrap gap-4 justify-center 
    [&>*]:bg-[#102a43] [&>*]:text-[#00ffff] [&>*]:py-2 [&>*]:px-5 [&>*]:text-base [&>*]:font-medium [&>*]:transition-transform [&>*]:hover:scale-120 [&>*]:rounded-full cursor-default
  ">
    <span>React.js</span>
    <span>Spring Boot</span>
    <span>Java</span>
    <span>JavaScript</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>Tailwind CSS</span>
    <span>Python</span>

  </div>
</section>

  )
}

export default Skills