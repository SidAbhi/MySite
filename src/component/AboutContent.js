import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import useWindowDimensions from "./GetWindowDimensions";
import "../stylesheets/About.css";

function AboutContent () {
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
  

  return (
    <div className="AboutMeContent">
      <animated.svg xmlns="http://www.w3.org/2000/svg" 
        className="QuoteBox" 
        viewBox="0 0 760 760" 
        preserveAspectRatio="none"
        strokeDasharray = {1600}
        strokeDashoffset = {
          scrollVal.scroll.to({ 
            range: [0, scrollThresh * (2/10), scrollThresh * (2.5/5), scrollThresh + 1], 
            output: [1600, 1300, 1100, 800]
          })
        }
      >
        <path d="M753.5 555.5 753.5 5.5 209 5.5"
          className="QuoteBox"
          fill="none" 
          stroke="#F2AA6B" 
          strokeMiterlimit={10} 
          strokeWidth="4" 
          vectorEffect="non-scaling-stroke" 
          strokeLinecap="round"
        />
        <polyline 
          className="QuoteBox" 
          points="5.5 197 5.5 753.5 664.5 753.5" 
          fill="none" 
          stroke="#F2AA6B" 
          strokeMiterlimit={10} 
          strokeWidth="4" 
          vectorEffect="non-scaling-stroke" 
          strokeLinecap="round"
        />
      </animated.svg>
      <div 
        style = {{
          width: "100%",
          height: "100%",
          overflow: "hidden"}}
      >
        <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh*(2/10), scrollThresh * (2/5), scrollThresh * (2.5/5), scrollThresh + 1], output:  animationResp})}}>Hello. I'm Siddhi, a design focused frontend developer. With 10 years of graphic design experience, I'm primarily focused on motion and layout design. I became interested in web and frontend development during the pandemic.</animated.p>
        <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh * (2/5), scrollThresh * (2.5/5), scrollThresh + 1], output: animationResp2 })}}>Whatt I enjoy the most about web development is the freedom to design and build without the restrictions of traditional media. Creating new ways to convey information through interactivity.</animated.p>
      </div>
    </div>
  );
};

export default AboutContent;