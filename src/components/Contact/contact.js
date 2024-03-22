import React, { useRef } from 'react'
import './contact.css'
// emailjs for getting emails  on your website 
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_al6fcry', 'template_d6zl5ku', form.current, 'rZk6SKYnWr-nTEPW7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div>
        <section id='contactPage'>
            <h1 className='sayhi'>SAY HI</h1>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please complete the form below for any inquiries or feedback you may have.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='from_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message' spellCheck="true"></textarea>
                    <button type='submit' value='send' className="btn">Submit</button>
                </form>
            </div>
        </section>
      
    </div>
  )
}

export default Contact
