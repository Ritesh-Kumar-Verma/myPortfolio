import React, { useState } from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
const Contact = () => {
    const [showPopup,setShowPopup] = useState(false)


    const myGmail = "ritesh782002@gmail.com"
    const copyGmailToClipboard = ()=>{
        navigator.clipboard.writeText(myGmail).then(()=>{
            setShowPopup(true)
            setTimeout(()=>setShowPopup(false),2000)
        }).catch((error)=>{
            console.error("Failed To Copy " , error)
        })
    }

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>I'm open to opportunities and collaborations. Drop me a message!</p>

      <form className="contact-form" action="">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a className="gmail" href="#" onClick={copyGmailToClipboard}><img src={assets.gmail} alt="" />
        <div className="gmail-tooltip">Click To Copy Gmail</div>
        </a>
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
      {showPopup && <div className="popup">Gmail Copied TO Clipboard</div>}
    </section>
  );
};

export default Contact;
