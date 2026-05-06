import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  
    <header className="header">
    <nev className =" nevbar">
      <h1 className="logo"> TOUR-INDIA</h1>

      <ul className="nevlink">
        <li><link to="/">home</link></li>
        <li><link to="/ sarvices">sarvices</link></li>
        <li><link to="/ abouts">abouts</link></li>
        <li><link to="/contact">contact</link></li>
      </ul>

    </nev>



  </header>
  
  
  </>
}

export default Navbar