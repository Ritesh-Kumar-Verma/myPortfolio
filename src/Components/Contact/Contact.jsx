import React, { useState } from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
const Contact = () => {



  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>I'm open to opportunities and collaborations. Drop me a message!</p>

      <form className="contact-form" action="https://formsubmit.co/6f5787def7a076f242eb41003b14188e" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
        <input type="hidden" name="_next" value="https://Ritesh-Kumar-Verma.github.io/myPortfolio" />

      </form>

      <div className="social-links">
        
        <a className="git"
          href="https://github.com/Ritesh-Kumar-Verma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.git} alt="" />
          <div className="git-tooltip">Git</div>
        </a>
        <a className="linkedin"
          href="https://www.linkedin.com/in/ritesh-verma-512468244"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.linkedin} alt="" />
          <div className="linkedin-tooltip">LinkedIn</div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
