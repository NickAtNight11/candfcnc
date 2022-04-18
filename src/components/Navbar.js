import React from 'react'
import logo from '../images/C&F Thumbnail Logo 2.png';
import fb from '../images/f_logo_RGB-Black_100.png';
import './Navbar.css'


function Navbar() {
  return (
    <div id="navbar">
        <img src={logo} alt="Home" id="header-logo"/>
        <div id="links">
            <h3>Our Creations</h3>
            <h3>Try Us Today</h3>
            <a href="https://www.facebook.com/C-F-CNC-Creations-253407815068859/" target="_blank" rel="noreferrer"><img src={fb} alt="FB" className="facebook"/></a>
        </div>
    </div>
  )
}

export default Navbar