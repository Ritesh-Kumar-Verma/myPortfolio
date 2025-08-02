import React , {useState} from 'react'
import './Home.css'
import Info from '../Info/Info'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Active_Projects from '../Active_Projects/Active_Projects'

const Home = ({activeTab,setActiveTab}) => {
      const [activeOption , setActiveOption] = useState("Projects")

    const optionItems = {
    "Projects" : <Active_Projects activeTab={activeTab} setActiveTab={setActiveTab}/>,
    "About" : <About/>,
    "Skills" : <Skills/>
  }
  return (
     <div className="sub-window">

        
        <Info optionItems={Object.keys(optionItems)} activeOption={activeOption} setActiveOption={setActiveOption}/>
        
        {optionItems[activeOption]}
        
      </div>
  )
}

export default Home