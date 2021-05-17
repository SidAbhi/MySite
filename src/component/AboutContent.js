import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { useMediaQuery } from 'react-responsive';
import useWindowDimensions from './GetWindowDimensions';

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
  
  const animationResp = (mediaQ === true) ? ['translate(0vw, 30vh)', 'translate(0vw, 10vh)', 'translate(0vw, 0vh)', 'translate(0vw, 0vh)'] : ['translate(0vw, 20vh)', 'translate(0vw, 10vh)', 'translate(0vw, 0vh)', 'translate(0vw, 0vh)']

  const animationResp2 = (mediaQ === true) ? ['translate(0vw, 20vh)', 'translate(0vw, 0vh)', 'translate(0vw, 0vh)'] : ['translate(0vw, 12vh)', 'translate(0vw, 0vh)', 'translate(0vw, 0vh)']
  

  return (
    <div className="About__content">
      <div 
        style = {{
          width: "100%",
          height: "100%",
          overflow: "hidden"}}
      >
        <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh*(2/10), scrollThresh * (2/5), scrollThresh * (2.5/5), scrollThresh + 1], output:  animationResp})}}>
          Hello. I'm Siddhi, a design focused frontend developer. With 10 years of graphic design experience, I'm primarily focused on motion and layout design.
        </animated.p>
        <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh * (2/5), scrollThresh * (2.5/5), scrollThresh + 1], output: animationResp2 })}}>
          My interest in design began while I was studying psychology and picking up a few books on design and cognitive science. I designed off and on since then, and will usually do design work even when it was outside of my job description.
        </animated.p>
        <animated.p style={{transform: scrollVal.scroll.to({ range: [scrollThresh * (2.1/5), scrollThresh * (2.5/5), scrollThresh + 1], output: animationResp2 })}}>
           With web development, I started learning because I was a project lead of an online psychometric testing site. I was trying to understand and better communicate with the developer I was working with and took a course on web development.
        </animated.p>
      </div>
    </div>
  );
};

export default AboutContent;