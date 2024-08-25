import "./form.css"
import React, { useState,createContext, useEffect } from "react";
function Contact() {

    const handleKeyup=(event)=>{
        const textarea=event.target;
        textarea.style.height="auto";
        textarea.style.height=`${textarea.scrollHeight}px`;
    }

    return(<>
    <section className="form-sec">
    <div className="form-container">
     <form id="emailForm">
        <h2>Contact me</h2>
        <div className="form-group">
           
            <input placeholder="Your Name" type="text"id="name" required/>
           
            <input placeholder="Your Email" type="email" id="email" required/>
            <textarea rows={7} cols={40} onKeyUp={handleKeyup} name="message"placeholder="Your Message" maxLength={1000}></textarea>
            <button type="submit">Submit</button>
        </div>
     </form>
    </div>
    </section>
    </>);
}
export default Contact;