import React from 'react'
import './App.css'
import CursorLight from './Components/CursorLight/CursorLight'
import MyInfo from './Components/MyInfo/MyInfo'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
const App = () => {
  return (
    <>
    <CursorLight/>
    <div className="header">

      <Header/>
    </div>
    <div className='main-window'>
      <div className="left">
      <MyInfo/>

      </div>
      
      <div className="scroll-window">
        <Projects/>
      </div>
    </div>
    </>
  )
}

export default App





