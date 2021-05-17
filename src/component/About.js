import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import useWindowDimensions from './GetWindowDimensions';
import AboutContent from './AboutContent';
import AboutTitleBox from './AboutTitleBox';
import { Lottie } from '@crello/react-lottie';
import '../stylesheets/About.scss';
import DeskAnim from '../animations/DeskAnim.json';

function About () {
  const windowDimensions = useWindowDimensions();

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
      <div className="About__container">
        <div className="About__animation__container">
          <div className="About__animation">
            <Lottie 
            config={{
              animationData: DeskAnim,
              loop: true,
              }}
            />
          </div>
        </div>
        <div className="About--sticky">
          <AboutTitleBox/>
          <AboutContent/>
        </div>
      </div>
      <div className="About__transition__container">
        <animated.div 
          className = "About__transition" 
          style = {{
            transform: scrollVal.scroll.to({ 
              range: [0, scrollThresh * (2/3), scrollThresh + 1], 
              output: ["translate(0vw, 0vh) rotate(2deg)", "translate(0vw, 0vh) rotate(2deg)", "translate(0vw, -80vh) rotate(8deg)"]
            })
          }}
        />
      </div>
    </div>
  );
};

export default About;