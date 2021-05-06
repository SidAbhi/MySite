import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import "../stylesheets/About.css"

function About () {
  return(
    <div className="About">
      <div className="AboutMeContainer">
        <h1 className="AboutMeTitle">ABOUT ME</h1>
        <p className="AboutMeContent">Hello. I'm Siddhi, a longtime graphic designer who became interested in web design and frontend development</p>
      </div>
    </div>
  );
};

export default About;