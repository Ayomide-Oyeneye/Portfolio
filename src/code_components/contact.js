import "./form.css";
import contact from "../images/contact.jpg"
import point from "../images/point.png"
import emailjs from '@emailjs/browser';
import React, {useRef , useState, createContext, useEffect } from "react";
function Contact() {
  // const [inputValue, setInputValue] = useState("");
  // const [returnText, setReturnText] = useState("");
  const handleKeyup = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  // const handleChange = (event) => {
  //   const eventValue = event.target.value;
  //   setInputValue(eventValue);
  //   if (eventValue.length >= 100) {
  //     setReturnText("cool");
  //   } else {
  //     setReturnText("not cool");
  //   }
  // };

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_sbdwipv', 'template_ho0267n', form.current, {
          publicKey: '8LYO2egA6ohIeKFY9',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <>
      <section className="form-sec">
        <div className="form-container">
          <form id="emailForm" ref={form} onSubmit={sendEmail}>
            <h2>Contact me <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />....</h2>
            <div className="form-group">
              
              <input placeholder="Your Name" type="text" id="name" name="from_name" required />
              {/* <div>{returnText}</div> */}
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                name="from_email"
                required
              />
              <textarea
                // value={inputValue}
                // onChange={handleChange}
                rows={7}
                cols={40}
                onKeyUp={handleKeyup}
                name="message"
                placeholder="Your Message"
                maxLength={1000}
              ></textarea>
              <button type="submit" value="Send">Submit</button>
            </div>
          </form>
            <divs className='con-me'>
              <img src={contact} />
            </divs>
        </div>
      </section>
    </>
  );
}
export default Contact;
