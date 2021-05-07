import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import "../stylesheets/About.css"

function About () {
  return(
    <div className="About">
      <div className="AboutMeContainer">
        <h2 className="AboutMeTitle">ABOUT ME</h2>
        <div className="AboutMeContent">
          <p>Hello. I'm Siddhi, a design focused frontend developer. With 10 years of graphic design experience, primarily focused on motion and layout design, I became interested in web and frontend development in the past year. </p>
          <p>The primary draw of web design and frontend development for me is the interactivity and the UI/UX aspect, with the freedom to design, build, and create experiences without the restrictions of traditional media.</p>
        </div>
      </div>
    </div>
  );
};

export default About;