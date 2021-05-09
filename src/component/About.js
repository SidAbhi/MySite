import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import useWindowDimensions from "./GetWindowDimensions"
import "../stylesheets/About.css"

function About () {
  const windowDimensions = useWindowDimensions();

  const mediaQ = useMediaQuery({ query: '(orientation: landscape)' });

  const scrollThresh = windowDimensions.height * 3;
  
  const [scrollVal, api] = useSpring(() => ({scroll: 0}));

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(parseInt(y), 0), scrollThresh),
    }),
    { domTarget: window },
  );

  const animationResp = (mediaQ === true) ? ["translate(0vw, 30vh)", "translate(0vw, 10vh)", "translate(0vw, 0vh)", "translate(0vw, 0vh)"] : ["translate(0vw, 20vh)", "translate(0vw, 10vh)", "translate(0vw, 0vh)", "translate(0vw, 0vh)"]

  const animationResp2 = (mediaQ === true) ? ["translate(0vw, 20vh)", "translate(0vw, 0vh)", "translate(0vw, 0vh)"] : ["translate(0vw, 12vh)", "translate(0vw, 0vh)", "translate(0vw, 0vh)"]
  
  return(
    <div className="About">
      <div className="AboutMeContainer">
        <div className="AboutMeSticky">
          <h2 className="AboutMeTitle">ABOUT ME</h2>
          <animated.div className="AboutMeContent">
            <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh*(2/10), scrollThresh * (2/5), scrollThresh * (2.5/5), scrollThresh + 1], output:  animationResp})}}>Hello. I'm Siddhi, a design focused frontend developer. With 10 years of graphic design experience, I'm primarily focused on motion and layout design. I became interested in web and frontend development during the pandemic.</animated.p>
            <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh * (2/5), scrollThresh * (2.5/5), scrollThresh + 1], output: animationResp2 })}}>Whatt I enjoy the most about web development is the freedom to design and build without the restrictions of traditional media. Creating new ways to convey information through interactivity.</animated.p>
          </animated.div>
        </div>
      </div>
      <div className="AboutTransitionContainer">
        <animated.div className="AboutTransition" style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh * (2/3), scrollThresh + 1], output: ["translate(0vw, 0vh) rotate(2deg)", "translate(0vw, 0vh) rotate(2deg)", "translate(0vw, -40vh) rotate(8deg)"]})}}></animated.div>
      </div>
    </div>
  );
};

export default About;