import React from 'react'
import logo from '../images/C&F Thumbnail Logo 2.png';
import fb from '../images/f_logo_RGB-Black_100.png';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
  return (
    <div id="navbar">
        <Link to="/" id="header-logo-link"><img src={logo} alt="Home" id="header-logo"/></Link>
        <div id="links">
          <Link to='/our-creations' className='navbar-link'><h4>Our Creations</h4></Link>
          <Link to='/contact-us' className='navbar-link'><h4>Try Us Today</h4></Link>
          <a href="https://www.facebook.com/C-F-CNC-Creations-253407815068859/" target="_blank" rel="noreferrer"><img src={fb} alt="FB" className="facebook"/></a>
        </div>
    </div>
  )
}

export default Navbar