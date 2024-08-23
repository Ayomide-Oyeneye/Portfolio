import React, { useState,createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun,FaMoon, FaHome, FaBars, FaTimes } from "react-icons/fa";
import Header from "./code_components/header";
import About from "./code_components/about";
import Body from "./code_components/body";
import Contact from "./code_components/contact"
import Errorpage from "./code_components/errorpage";
import Projects from "./code_components/projects";
import transparent from "./images/transparent.png";
import { styless, about, backColor } from "./code_components/Iconcolor";
import "./App.css";
export const ThemeContext=createContext(null)
const App = () => {
  const [navScroll, setNavScroll] = useState({});
  const [navChoose, setNavChoose] = useState(false);
  const [theme,setTheme]=useState('light')
  const setNavScrollStyle = (style) => {
    setNavScroll(style);
  };

  const onToggle = () => {
    setNavChoose(!navChoose);
  };
const togglrTheme=()=>{
  setTheme((curr)=>(curr==='dark'?'light':'dark'))
}

  return (
    <ThemeContext.Provider value={{theme,togglrTheme}}>
    <div id={theme}>
      <Header onScroll={setNavScrollStyle} />

      {/* Toggle between the menu icons */}

      <nav id="navbar" style={navScroll}  onClick={onToggle}>
        <div className="img-logo">
          <img src={transparent} alt="logo" />
        </div>
        <ul className={navChoose ? "nav-click active" : "nav-links"}>
          <li>
            <Link className='link'  to="/">
              <i class="fa fa-home" aria-hidden="true" style={styless}></i>Home
            </Link>
          </li>
          <li>
            <Link className='link' to="/about">
              <i class="fas fa-user" ></i> About
            </Link>
          </li>
          <li>
            <Link className='link' to="/projects">
              <i class="fas fa-project-diagram"></i>Projects
            </Link>
          </li>
          <li>
            <Link className='link' to="/blog">
              <i class=" fas fa-solid fa-blog" ></i>Blog
            </Link>
          </li>
          <li>
            <Link className='link' to="/Contact">
              <i class="fas fa-solid fa-address-book" ></i>Contact
            </Link>
          </li>
          <div className="theme" >
            <i onClick={togglrTheme} className={theme ==='dark'  ? 'fa-solid fa-moon fa-xl nev':'fa-solid fa-sun fa-xl nava'}></i>
            {/* <i class="fa-solid fa-moon fa-xl" style="color: #b8cef4;"></i> */}
          </div>
        </ul>
        <div className="icon-div">
          <i
            className={
              navChoose ? "fa-solid fa-xmark  i-con" : "fa-solid fa-bars i-con"
            }
          ></i>
          {/* {navChoose ? <FaTimes size={30} /> : <FaBars size={30} />} */}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='*' element={<Errorpage />}/>
      </Routes>

      <footer>
        <p>&copy; 2024 Oyeneye Ayomide</p>
        <div className="contact">
          <a href="mailto:nickbelson11@gmail.com">Email</a>
          <a href="https://github.com/Ayomide-Oyeneye">Github</a>
          <a href="https://wa.me/09061651761">Whatsapp</a>
        </div>
      </footer>
    </div>
    </ThemeContext.Provider>
  );
};

export default App;
