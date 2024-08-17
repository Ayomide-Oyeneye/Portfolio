import React from "react";
import "../App.css";
import ahh from '../images/ahh.png';

function About() {
  return (
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
  );
}

export default About;
