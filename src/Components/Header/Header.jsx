import React from 'react'
import './Header.css'

const Header = () => {
    const headerItem = ["Home","Projects", "About", "Contact" ]
  return (
    <div className='my-header'>
        <div className="logo">R</div>
        {headerItem.map((data,index)=>{
            return <div className={`my-${data}`}>{data}</div>
        })}
    </div>
  )
}

export default Header





