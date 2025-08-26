import React, {  useState } from 'react'
import Header from './Components/Header'
import CursorLight from './Components/CursorLight'
import Projects from './Components/Projects'
import Home from './Components/Home'
import Contact from './Components/Contact'


const App = () => {
  const [activeTab , setActiveTab] = useState("Home")
  const tab= {
    "Home":<Home  activeTab={activeTab} setActiveTab={setActiveTab} />,
    "Projects": <Projects setActiveTab={setActiveTab}/>,
    "Contact" : <Contact/>
    
  }
  
  
  return (
    <div className='flex justify-center'>
      <CursorLight/>

      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      
     {
      tab[activeTab]
     }
     
    </div>
  )
}

export default App