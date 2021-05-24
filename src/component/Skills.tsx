import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import useWindowDimensions from './GetWindowDimensions';
import '../stylesheets/Skills.scss';;
import SkillsAnimation from '../animations/SkillsAnimation.json'
// import lottie from "lottie-web";
import { Lottie } from '@crello/react-lottie';

function Skills () {
  const animRef: any = useRef();

  const springRef: any = useRef()

  const [scrollSpring, api] = useSpring(() =>({
    spring: 0,
  }))

  const windowDimensions = useWindowDimensions();

  const scrollThresh = document.body.clientHeight * (9/10);

  let [scrollAnim, setScrollAnim] = useState(0)

  useScroll(({ xy: [, y] }) => {
      let animControl = (animRef).current;
      
      let scrollPercentage = ((y-(scrollThresh * 3/10))/(scrollThresh-(scrollThresh * 3/10)))*animControl.totalFrames;

      let scrollPercentageBound = Math.min(Math.max(scrollPercentage, 0), animControl.totalFrames-1);

      setScrollAnim(scrollPercentageBound);

      api.start({spring: scrollAnim});

      animControl.goToAndStop(scrollPercentageBound, true);
    },
    { domTarget: window },
  )

  return(
    <div className="Skills zIndex5">
      <div className="Skills__container">
        <div className="Skills--sticky">
          <h2 className="Skills__title">
            SKILLS
          </h2>
        </div>
      </div>
      <div className="Skills__container">
        <div className="Skills__animation__container">
          <div className="Skills__animation">
            <div id="SkillsAnimation"/>
            <animated.div ref={springRef} data-frame={scrollSpring.spring}></animated.div>
            <Lottie 
            animationRef={animRef}
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
  );
};

export default Skills;