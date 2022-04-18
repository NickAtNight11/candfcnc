import React from 'react'
import logo from '../images/C&F Thumbnail Logo 2.png';
import fb from '../images/f_logo_RGB-Black_100.png';
import './Footer.css'

function Footer() {
  return (
    <div id="footer">
        <div id="footer-top">
            <div className='bar' />
            <img src={logo} alt="Logo" id="footer-logo"/>
            <div className='bar' />
        </div>
        <div id="footer-bottom">
            <div className='footer-column'>
                <h4 className='left-text'>
                    <i>Mailing Address</i><br/>
                    C & F CNC<br/>
                    PO Box 485<br/>
                    Amherst, TX 79312
                </h4>
                <h4 className='left-text'>
                    <i>Background by<br/>
                    <a href="https://www.pexels.com/@fwstudio-33348?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target="_blank" rel="noreferrer">FWStudio from Pexels</a></i></h4>
            </div>
            <div id='center-column' className='footer-column'>
                <h3><i>C & F CNC and Laser Creations</i></h3>
                <a href="https://www.facebook.com/C-F-CNC-Creations-253407815068859/" target="_blank" rel="noreferrer"><img src={fb} alt="FB" className="facebook"/></a>
            </div>
            <div className='footer-column'>
                <h4 className='right-text'>
                    <i>Email Address</i><br/>
                    thompsonc62@aol.com
                </h4>
                <h4 className='right-text'>
                    <i>Phone Numbers</i><br/>
                    (806) 246-3838<br/>
                    (806) 241-6865<br/>
                    (806) 441-4294
                </h4>
            </div>
            
        </div>
    </div>
  )
}

export default Footer