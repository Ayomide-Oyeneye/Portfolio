import "./form.css";
import React, { useState, createContext, useEffect } from "react";
function Contact() {
  const [inputValue, setInputValue] = useState("");
  const [returnText, setReturnText] = useState("");
  const handleKeyup = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const handleChange = (event) => {
    const eventValue = event.target.value;
    setInputValue(eventValue);
    if (eventValue.length >= 100) {
      setReturnText("cool");
    } else {
      setReturnText("not cool");
    }
  };
  return (
    <>
      <section className="form-sec">
        <div className="form-container">
          <form id="emailForm">
            <h2>Contact me</h2>
            <div className="form-group">
              <input placeholder="Your Name" type="text" id="name" required />
              <div>{returnText}</div>
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                required
              />
              <textarea
                value={inputValue}
                onChange={handleChange}
                rows={7}
                cols={40}
                onKeyUp={handleKeyup}
                name="message"
                placeholder="Your Message"
                maxLength={1000}
              ></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
