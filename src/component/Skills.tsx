import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { useMediaQuery } from 'react-responsive';
import useWindowDimensions from './GetWindowDimensions';
import '../stylesheets/Skills.scss'
import { Lottie } from '@crello/react-lottie';
import SkillsAnimation from '../animations/SkillsAnimation.json'

function Skills () {
  const windowDimensions = useWindowDimensions();

  const scrollThresh = windowDimensions.height * 8;
  
  const [scrollVal, api] = useSpring(() => ({scroll: 0}));

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(y, 0), scrollThresh),
    }),
    { domTarget: window },
  );
  return(
    <div className="Skills zIndex5">
      <div className="Skills__container">
        <div className="Skills--sticky">
          <h2 className="Skills__title">
            SKILLS
          </h2>
          <div className="Skills__animation__container">
            <div className="Skills__animation">
              <Lottie 
                segments= {[5,5]}
                config={{
                  animationData: SkillsAnimation,
                  loop: false,
                  autoplay: false,
                  }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;