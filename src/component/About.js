import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import useWindowDimensions from "./GetWindowDimensions";
import AboutContent from "./AboutContent";
import AboutTitleBox from "./AboutTitleBox";
import "../stylesheets/About.css";

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

  return(
    <div className="About">
      <div className="AboutMeContainer">
        <div className="AboutMeSticky">
          <AboutTitleBox/>
          <AboutContent/>
        </div>
      </div>
      <div className="AboutTransitionContainer">
        <animated.div 
          className = "AboutTransition" 
          style = {{
            transform: scrollVal.scroll.to({ 
              range: [0, scrollThresh * (2/3), scrollThresh + 1], 
              output: ["translate(0vw, 0vh) rotate(2deg)", "translate(0vw, 0vh) rotate(2deg)", "translate(0vw, -40vh) rotate(8deg)"]
            })
          }}
        />
      </div>
    </div>
  );
};

export default About;