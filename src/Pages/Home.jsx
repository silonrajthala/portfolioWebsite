import React from "react";
import '../App.css'

import "../Components/Styles/Home.css";

function Home() {

  
  return (
    
      <div className="home-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Front-End Developer</h1>

            <p>Hi, I'm Silon Rajthala. A passionate Front-end React Developer based in Bhaktapur, Nepal.<span role="img" aria-label="Smiley Face">📍</span>
</p>
          </div>
          <div className="hero-image">
          
          </div>
        </div><br/>
        <div className="skills">
          Tech Stack 
          <div className="logo">
            
              <img src="https://skillicons.dev/icons?i=html" alt="skill-icon"></img>
              <img src="https://skillicons.dev/icons?i=css" alt="skill-icon"></img>
              <img src="https://skillicons.dev/icons?i=js" alt="skill-icon"></img>
              <img src="https://skillicons.dev/icons?i=react" alt="skill-icon"></img>
              {/* <img src="https://skillicons.dev/icons?i=next" alt="skill-icon"></img>
              <img src="https://skillicons.dev/icons?i=scss" alt="skill-icon"></img>*/}
              <img src="https://skillicons.dev/icons?i=tailwind" alt="skill-icon"></img> 
              <img src="https://skillicons.dev/icons?i=flutter" alt="skill-icon"></img>
              <img src="https://skillicons.dev/icons?i=dart" alt="skill-icon"></img>
              <img src="https://skillicons.dev/icons?i=firebase" alt="skill-icon"></img>
            
          </div>
        </div>
      </div>
  );
}

export default Home;
