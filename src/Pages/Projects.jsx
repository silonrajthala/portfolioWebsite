import React from "react";
import "../Components/Styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects </h1>
      <div className="project0">
        <div className="project-intro">
          <div className="project-intro-head">Fitness</div>
          <div className="project-intro-body">
            <h3>
            A Fitness website is a fitness information, class schedules, membership options, and tools to help users achieve their fitness goals            </h3>
          </div>
          <div className="project-intro-tail">
            <div className="react">
              <div>React</div>
              <div>SCSS</div>
            </div>
          </div>
          <div className="links">
            <a
              target="_blank"
              href="https://github.com/silonrajthala/fitnessWebsite"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              target="_blank"
              href="https://fitness-website-teal.vercel.app/"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="project-img-0"></div>
      </div>
      <div className="project1">
        <div className="project-img"></div>
        <div className="project-intro">
          <div className="project-intro-head">Fitness</div>
          <div className="project-intro-body">
            <h3>
              A Travel With Us website is an online platform that allows users
              to book vehicles hotels all in one packages. The website provides
              an interface for selection of hotels, vehicles, events.
            </h3>
          </div>
          <div className="project-intro-tail">
            <div className="react">
              <div>React</div>
              <div>CSS</div>
            </div>
          </div>
          <div className="links">
            <a
              target="_blank"
              href="https://github.com/silonrajthala/travelWithUs"
              rel="noreferrer"
            >
              Code
            </a>
            
            <a
              target="_blank"
              href="https://travelwithus-sepia.vercel.app/"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
      
      <div className="project2">
        <div className="project-intro">
          <div className="project-intro-head">Portfolio</div>
          <div className="project-intro-body">
            <h3>
             A simple Webiste which is under development
            </h3>
          </div>
          <div className="project-intro-tail">
            <div className="react">
              <div>Flutter</div>
              <div>Dart</div>
            </div>
          </div>
          <div className="links">
            <a
              target="_blank"
              href="https://github.com/silonrajthala/Webapp-portfolio"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              target="_blank"
              href="https://silonrajthala76.web.app/"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="project-img-2"></div>
      </div>
    </div>
  );
}
export default Projects;
