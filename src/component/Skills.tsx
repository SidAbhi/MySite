import React, { useEffect, useRef, useState } from 'react';
import { useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import useWindowDimensions from './GetWindowDimensions';
import '../stylesheets/Skills.scss';;
import SkillsAnimation from '../animations/SkillsAnimation.json'
// import lottie from "lottie-web";
import { Lottie } from '@crello/react-lottie';

function Skills () {
  const animRef = useRef();

  const windowDimensions = useWindowDimensions();

  const scrollThresh = windowDimensions.height * 7;

  let [scrollAnim, setScrollAnim] = useState(0)

  console.log(windowDimensions)

  useScroll(({ xy: [, y] }) => {
      setScrollAnim(y);
      console.log(scrollAnim);
      let scrollPercentage = ((scrollAnim-(scrollThresh * 3/7))/(scrollThresh-(scrollThresh * 3/7)))*(animRef as any).current.totalFrames;
      console.log((animRef as any).current.totalFrames);
      (animRef as any).current.goToAndStop(scrollPercentage, true)
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