import React, { useState, useEffect } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";

function TitleCard() {
  const mediaQ = useMediaQuery({ query: '(max-aspect-ratio: 1/1)' });

  const scrollThresh = () => {
      if(mediaQ) {
          return 650;
      } else {
          return 400;
      };
  };
  
  const [scrollVal, api] = useSpring(() => ({scroll: 0}));

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(parseInt(y), 0), scrollThresh()),
    }),
    { domTarget: window },
  );
  
  const textPos = useSpring({
    from: {
      transform: "translate(15vw, -30vh)",
    },
    to: [
      {
        transform: "translate(15vw, 0)", 
        config: {
          mass: 5,
          tension: 480,
          friction: 85,
      }},
      {transform: "translate(0, 0)", delay: 400},
    ],
    delay: 100,
    config: {
      mass: 3,
      tension: 180,
      friction: 35,
    }
  });

  const nameReveal = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    delay: 1400,
    config: {
      mass: 4,
      tension: 180,
    }
  });

  const skills = ["Front", "end ", "development"];
  const skills2 = ["Visual ", "& ", "motion ", "design"];
  const skills3 = ["3D ", "CG ", "& ", "VFX"];

  const skillTrail = useTrail(
    skills.length,
    {
      config: {
        mass: 2,
        tension: 790,
        friction: 70,
      },
      delay: 2100,
      from: {transform: "translate(0, 5em)"}, 
      to: {transform: "translate(0, 0)"},
    }
  );

  const skillTrail2 = useTrail(
    skills2.length,
    {
      config: {
        mass: 2,
        tension: 790,
        friction: 77,
      },
      delay: 2300,
      from: {transform: "translate(0, 5em)", opacity: 1}, 
      to: {transform: "translate(0, 0)", opacity: .6},
    }
  );
  
  const skillTrail3 = useTrail(
    skills3.length,
    {
      config: {
        mass: 2,
        tension: 810,
        friction: 82,
      },
      delay: 2500,
      from: {transform: "translate(0, 5em)", opacity: 1}, 
      to: {transform: "translate(0, 0)", opacity: .3},
    }
  );

  const boxAnim = useSpring({
    from: {width: "0%", height: "105%", padding: "0%", left: "100%"},
    to: {width: "110%", height: "105%", padding: "5%", left: "-5%"},
    delay: 1300,
    config: {       
      mass: 5,
      tension: 180,
      friction: 45,
    }
  })

  console.log(textPos);
  console.log(boxAnim);

  return (
  <div className="TitleCard">
    <div className="HelloText"> 
      <div className="HelloContainer">       
        <animated.div className="TextHighlight" style={boxAnim}></animated.div>
        <animated.h1 className="HelloName" style={textPos}>
          Hello<animated.span style={nameReveal}>, I'm Siddhi</animated.span>
        </animated.h1>
      </div>
      <h2 className="WorkSkill">
        {skillTrail.map((styles, index) => 
          <animated.span key={index} style={styles} className="SkillList">{skills[index]}</animated.span>
        )}
      </h2>
      <h2 className="WorkSkill">
        {skillTrail2.map((styles, index) => 
          <animated.span key={index} style={styles} className="SkillList">{skills2[index]}</animated.span>
        )}
      </h2>
      <h2 className="WorkSkill">
        {skillTrail3.map((styles, index) => 
          <animated.span key={index} style={styles} className="SkillList">{skills3[index]}</animated.span>
        )}
      </h2>
    </div>
    <animated.div className="Test" style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh() + 1], output: ["translate(0vw, 0)", "translate(-50vw, 0)"] })}}>Test</animated.div>
  </div>
  )
};

export default TitleCard;