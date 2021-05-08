import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import useWindowDimensions from "./GetWindowDimensions"
import "../stylesheets/About.css"

function About () {
  const windowDimensions = useWindowDimensions();

  const mediaQ = useMediaQuery({ query: '(max-aspect-ratio: 1/1)' });

  const scrollThresh = windowDimensions.height;
  
  const [scrollVal, api] = useSpring(() => ({scroll: 0}));

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(parseInt(y), 0), scrollThresh),
    }),
    { domTarget: window },
  );

  return(
    <div className="About">
      <div className="AboutMeContainer">
        <div className="AboutMeSticky">
          <animated.h2 
            className="AboutMeTitle"
          >
            ABOUT ME
          </animated.h2>
          <div className="AboutMeContent">
            <p>Hello. I'm Siddhi, a design focused frontend developer. With 10 years of graphic design experience, primarily focused on motion and layout design, I became interested in web and frontend development during the pandemic. Motivated by a need at the company I worked for and free time to learn new things.</p>
            <p>The aspect I enjoy the most about web design is the freedom to design, build, and create experiences without the restrictions of traditional media.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;