import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactBox.css'


function ContactBox() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAIL_ID, 'c&f_contact_form', form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      document.getElementById("contact-box-confirmation").className="contact-box-conf-visible";
  }, (error) => {
      console.log(error.text);
  });
  };


  return (
    <div id="contact-box">
      <h2>Contact Us</h2>
      <div id="contact-box-inner">
        <form ref={form} onSubmit={sendEmail} id="contact-box-form">
          <label>Name *</label>
          <input type="text" name="from_name" className="form-credential" required/>
          <label>Email *</label>
          <input type="email" name="user_email" className="form-credential" required/>
          <label>Subject</label>
          <input type="text" name="subject" className="form-credential" />
          <label>Message</label>
          <textarea name="message" id="form-message"/>
          <h3 id="contact-box-confirmation" className="contact-box-conf-invisible"><i>Message Sent</i></h3>
          <input type="submit" value="Send" id="form-send"/>
        </form>
        <div id="contact-box-seperator"/>
        <div id="contact-box-info">
            <h4><i>Mailing Address:</i><br/>
                C & F CNC<br/>
                PO Box 485<br/>
                Amherst, TX 79312
            </h4>
            <h4><i>Email:</i><br/>
                thompsonc62@aol.com
            </h4>
            <h4><i>Phone:</i><br/>
                806-246-3838 (Business)<br/>
                806-241-6865 (Cell)<br/>
                806-441-4294 (Cell)
            </h4>
            <h4><i>Facebook:</i><br/>
                C & F CNC Creations</h4>
        </div>
      </div>
    </div>
  )
}

export default ContactBox