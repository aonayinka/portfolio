import React, { useRef } from 'react'
import './contact.css'
import inst from '../../assects/instagram.png'
import face from '../../assects/facebook.png'
import lkin from '../../assects/linked.png'
import twix from '../../assects/twitter.png'
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
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form beelow if you have any quistion or just want to give adive </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='from_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="link">
                        <img src={inst} alt="" className="link" />
                        <img src={face} alt="" className="link" />
                        <img src={lkin} alt="" className="link" />
                        <img src={twix} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
      
    </div>
  )
}

export default Contact
