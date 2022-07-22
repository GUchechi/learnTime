import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
        const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3234uo2', 'template_1ozs1kp', form.current, 'qPHM65bbf3yko-ebi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact Us</span>
                <div className="blur s-blur"
                style={{background: '#ABF1FF94'}}
                ></div>
            </div>
        </div><div className="c-right">
            <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name' />
                <input type="email" name="user_email" className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value='send' className='button' />
            </form>
        </div>
    </div>
  )
}

export default Contact