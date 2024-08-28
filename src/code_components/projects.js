import './Comp.css'
function Projects() {
    return(
        <>
    
      <section id="projects">
        <h2 className='color-white'>Some Projects I Have Done</h2>
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
 <h1 className='color-white'>Working on more!.....</h1>
      </section>
        </>
    )
}
export default Projects;