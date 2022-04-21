import React from 'react'
import './ContactBox.css'


function ContactBox() {
  return (
    <div id="contact-box">
        <h2>Contact Information</h2>
        <div id="contact-box-grid">
            <h3><i>Mailing Address:</i></h3>
            <h3>C & F CNC<br/>
                PO Box 485<br/>
                Amherst, TX 79312
            </h3>
            <div/>
            <h3><i>Email:</i></h3>
            <h3>thompsonc62@aol.com</h3>
            <div/>
            <h3><i>Phone:</i></h3>
            <h3>806-246-3838 (Business)</h3>
            <h3>806-241-6865 (Cell)<br/>
                806-441-4294 (Cell)
            </h3>
            <h3><i>Facebook:</i></h3>
            <h3>C & F CNC Creations</h3>
            <div/>
        </div>
    </div>
  )
}

export default ContactBox