import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import '../stylesheets/Skills.scss';;
import SkillsAnimation from '../animations/SkillsAnimation.json'
// import lottie from "lottie-web";
import { Lottie } from '@crello/react-lottie';
import { PhotoshopSvg, IllustratorSvg, InDesignSvg, AfterEffectsSvg, BlenderSvg } from './SvgCollection';

function Skills () {
  const animRef: any = useRef();

  const [scrollSpring, api] = useSpring(() =>({
    spring: 0,
    config: {
      mass: 5,
      friction: 70
    },
  }))

  const scrollThresh = document.body.clientHeight * (11/12);

  let [scrollAnim, setScrollAnim] = useState(0);

  let animValue: any = ["translate(-90%, -50%)", "translate(-90%, -50%)", "translate(-50%, -50%)", "translate(-50%, -50%)", "translate(-10%, -50%)", "translate(-10%, -50%)"];

  useScroll(({ xy: [, y] }) => {
      let animControl = (animRef).current;

      let scrollPercentage = ((y-(scrollThresh * 3/12))/(scrollThresh-(scrollThresh * 3/12)))*animControl.totalFrames;

      let scrollPercentageBound = Math.min(Math.max(scrollPercentage, 0), animControl.totalFrames-1);

      setScrollAnim(scrollPercentageBound);

      api.start({
        spring: Math.min(Math.max(y, 0), scrollThresh),
      });

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
        <div className="Skills__content__container">
          <div className="Skills__list">
            <animated.div 
              className = "Skills__list__design"
              style = {{
                transform: scrollSpring.spring.to({ 
                  range: [0, scrollThresh * 2.5/12, scrollThresh * 3.5/12, scrollThresh * 5.5/12, scrollThresh * 6.5/12, scrollThresh], 
                  output: animValue
                }),
                opacity: scrollSpring.spring.to({ 
                  range: [0, scrollThresh * 3/12, scrollThresh * 3.5/12, scrollThresh * 5.5/12, scrollThresh * 6/12, scrollThresh], 
                  output: [0, 0, 1, 1, 0, 0]
                }),
              }}
            > 
              <div className="Skills__list__title">Visual design</div>
              <div className="Skills__list__design__container">
                <PhotoshopSvg/>
                <IllustratorSvg/>
                <InDesignSvg/>
                <div className="Skills__list__descriptions">
                  Photoshop
                </div>
                <div className="Skills__list__descriptions">
                  Illustrator
                </div>
                <div className="Skills__list__descriptions">
                  InDesign
                </div>
              </div>
            </animated.div>
            <animated.div 
              className = "Skills__list__motion"
              style = {{
                transform: scrollSpring.spring.to({ 
                  range: [0, scrollThresh * 5.5/12, scrollThresh * 6.5/12, scrollThresh * 8.5/12, scrollThresh * 9.5/12, scrollThresh], 
                  output: animValue
                }),
                opacity: scrollSpring.spring.to({ 
                  range: [0, scrollThresh * 6/12, scrollThresh * 6.5/12, scrollThresh * 8.5/12, scrollThresh *9/12, scrollThresh], 
                  output: [0, 0, 1, 1, 0, 0]
                }),
              }}
            >
              <div className="Skills__list__title">Motion design</div>
              <div className="Skills__list__motion__container">
                <AfterEffectsSvg/>
                <BlenderSvg/>
                <div className="Skills__list__descriptions">
                  After Effects
                </div>
                <div className="Skills__list__descriptions">
                  Blender
                </div>
              </div>
            </animated.div>
            <animated.div 
              className = "Skills__list__dev"
              style = {{
                transform: scrollSpring.spring.to({ 
                  range: [0, scrollThresh * 8.5/12, scrollThresh * 9.5/12, scrollThresh * 11.5/12, scrollThresh * 12.5/12, scrollThresh +200], 
                  output: animValue
                }),
                opacity: scrollSpring.spring.to({ 
                  range: [0, scrollThresh * 9/12, scrollThresh * 9.5/12, scrollThresh * 11.5/12, scrollThresh * 12/12, scrollThresh +200], 
                  output: [0, 0, 1, 1, 0, 0]
                }),
              }}
            >
              Frontend Development
            </animated.div>
          </div>
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
    </div>
  );
};

export default Skills;