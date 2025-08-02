import React, {  useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CursorLight from './Components/CursorLight/CursorLight'
import Projects from './Components/Projects/Projects'
import Home from './Components/Home/Home'
import AboutTab from './Components/AboutTab/AboutTab'


const App = () => {
  const [activeTab , setActiveTab] = useState("Home")
  const tab= {
    "Home":<Home  activeTab={activeTab} setActiveTab={setActiveTab} />,
    "Projects": <Projects/>,
    "About": <AboutTab/>
  }
  
  
  return (
    <div className='main-window'>
      <CursorLight/>
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      
     {
      tab[activeTab]
     }
     
    </div>
  )
}

export default App