import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [Menu,setMenu]=useState('Home')
  return (
    <header>
    <div className='header-container'>
        <a className={`adder ${Menu==="Home"?"active":""}`} onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link>
        </a>

        <a className={`adder ${Menu==="About"?"active":""}`} onClick={()=>{setMenu("About")}}><Link to='/about'>About</Link></a>

        <a className={`adder ${Menu==="Contact"?"active":""}`} onClick={()=>{setMenu("Contact")}}><Link to='/contact'>Contact</Link></a>
        
        <a className={`adder ${Menu==="Project"?"active":""}`} onClick={()=>{setMenu("Project")}}><Link to='/project'>Projects</Link></a>
    </div>
    </header>
  )
}
