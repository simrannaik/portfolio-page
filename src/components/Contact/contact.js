import React, { useRef } from "react";
import './contact.css';
import Instagram from '../../assets/insta.png';
import Linkedin from '../../assets/linkedin.png';
import Telegram from '../../assets/telegram.png';
import Github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_61i20sn', 'template_oo9q67u', form.current, 'QrLmG-t0NTlWYi4Dn')
          .then((result)=>{
            console.log(result.text);
            e.target.reset();
            alert('Email Sent!');
          }, (error) => {
            console.log(error.text);
          });
    };
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea  className="msg" name="message" rows={5} placeholder="Your Message..." ></textarea>
                    <button className="submitBtn" type="submit" value="Send" >Submit</button>
                    <div className="links">
                        <a href="https://github.com/simrannaik" target="_blank" rel="noopener noreferrer">
                          <img src={Github} alt="Github" className="link" /></a>
                        <a href="https://t.me/naiksimrann" target="_blank" rel="noopener noreferrer">
                          <img src={Telegram} alt="Telegram" className="link" /></a>
                        <a href="https://linkedin.com/in/simran-naik-31659328a" target="_blank" rel="noopener noreferrer">
                          <img src={Linkedin} alt="Linkedin" className="link" /></a>
                        <a href="https://instagram.com/naik_simi_" target="_blank" rel="noopener noreferrer">
                          <img src={Instagram} alt="Instagram" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;