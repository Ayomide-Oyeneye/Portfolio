import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs, FaReact } from 'react-icons/fa';  // Font Awesome
import { SiTypescript } from 'react-icons/si';
import wave from '../images/wave.png';
import ahh from '../images/ahh.png'
import '../App.css';
function Body() {
    return(
        <>
            <section id="home" data-theme='dark'>
        <div className="intro">
          <div className="intra">
            <h1>
              Welcome to My Portfolio! 
              <img className="wave" src={wave} alt="brr" />
            </h1>
            <p>
              <strong className="name">
                Hi, I’m <span className="name-color">Ayomide</span> Oyeneye
              </strong>
              <br />
              <div className="span">
                A passionate frontend developer specializing in creating engaging and responsive web applications. With a strong foundation in HTML, CSS, JavaScript, and frameworks like Vue.js and React, I love crafting intuitive and visually appealing user interfaces.
              </div>
            </p>
            <div className="leftover">
              <p className="span2">
              Explore my projects, learn about my journey, and reach out if you'd like to collaborate. Let's create something amazing!
              </p>
              <a href="https://github.com/Ayomide-Oyeneye" className="button">Explore My Work</a>
            </div>
          </div>
        </div>
        <div className="round-ahh-image">
          <img src={ahh }alt="ahh image" />
        </div>
      </section>
      <section id="about">
      <div className="info">
        <h2>About Me</h2>
        <p>
        I’m Ayomide Oyeneye, a frontend developer currently studying <b> Public Health at Babcock University</b>. My passion for technology and
        design led me to explore the world of web development, and my
        journey began with <b>Alt-School Africa in 2023</b>. There, I earned a 
        <b> certificate in Frontend Development</b>, which has equipped me with a
        solid foundation in creating engaging and responsive web
        experiences.
      </p>
        <p>
          I’m enthusiastic about blending my love for arts with my technical
          skills to craft beautiful and functional web interfaces. My academic
          background in Public Health complements my development work by
          enhancing my problem-solving skills and attention to detail.
        </p>
        <p>
          When I’m not coding, you can find me exploring artistic endeavors,
          reading books, or learning new things. I’m always eager to expand my
          knowledge and take on new challenges in the tech world.
        </p>
        <p>
          Feel free to reach out if you’d like to collaborate or discuss
          exciting opportunities!
        </p>
        <div className="skills">
  <h3>Skills</h3>
  <ul>
   <div> <li> <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>HTML</li><p>Hyper-Text</p></div>
    <div><li> <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>CSS</li> <p>Style Sheet</p></div>
    <div><li><img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>JavaScript</li><p>Language</p></div>
   <div><li><img width="48" height="48" src="https://img.icons8.com/color/48/vue-js.png" alt="vue-js"/>Vue.js</li><p>Library</p></div>
    <div><li><img width="48" height="48" src="https://img.icons8.com/office/48/react.png" alt="react"/>React</li><p>  Library</p></div>
    <div><li><img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>TypeScript</li><p>Superset</p></div>
  </ul>
</div>
      </div>
    </section>
      <section id="projects">
        <h2>Some Projects I Have Done</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="icon-image">
              <h3>US</h3>
            </div>
            <div className="p-text">
              <h3 className="div pp">Project Title - A URL shortener</h3>
              <div className="project-text">
                <p className="div di-small">
                  Scissors URL shortener offers the ability to shorten a URL and many more methods to explore
                </p>
              </div>
              <p className="di-small"><strong className="div pp">Technologies Used:</strong> HTML, CSS, JavaScript, [Other Technologies]</p>
              <div className="demo">
                <a href="https://final-exam-altschool-iota.vercel.app/" target="_blank" className="live-demo">Live Demo</a>
                <a href="https://github.com/Ayomide-Oyeneye/Final-exam-Altschool/tree/main" target="_blank" className="source-code">Source Code</a>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the project card for other projects */}
       
        {/* Repeat the project card for other projects */}
 <h1>Working on more!.....</h1>
      </section>

      {/* Uncomment and complete the Blog Section if needed */}
      {/* <section id="blog">
        <h2>Blog</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <h3><a href="link-to-blog-post">Blog Post Title</a></h3>
            <p>Short excerpt from the blog post...</p>
          </div>
        </div>
      </section> */}

     
        </>
    )
};
export default Body;