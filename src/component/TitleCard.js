import React from "react";
import { useSpring, animated, useTrail } from "react-spring"

function TitleCard() {
  const containerFill = useSpring({
    from: {
      transform: "translate(0, 20vh)",
    },
    transform: "translate(0, 0)",
    delay: 3500,
    config: {
      mass: 2,
      tension: 280,
      friction: 35,
    }
  });
  
  const textPos = useSpring({
    from: {
      transform: "translate(15vw, -5rem)"
    },
    to: [
      {
        transform: "translate(15vw, 0)", 
        config: {
          mass: 4,
          tension: 480,
          friction: 45,
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
        mass: 4,
        tension: 190,
        friction: 30,
      },
      delay: 2100,
      from: {transform: "translate(0, 3rem)"}, 
      to: {transform: "translate(0, 0)"},
    }
  );

  const skillTrail2 = useTrail(
    skills2.length,
    {
      config: {
        mass: 3,
        tension: 190,
        friction: 37,
      },
      delay: 2700,
      from: {transform: "translate(0, 3rem)", opacity: 1}, 
      to: {transform: "translate(0, 0)", opacity: .6},
    }
  );
  
  const skillTrail3 = useTrail(
    skills3.length,
    {
      config: {
        mass: 3,
        tension: 210,
        friction: 42,
      },
      delay: 3300,
      from: {transform: "translate(0, 3rem)", opacity: 1}, 
      to: {transform: "translate(0, 0)", opacity: .3},
    }
  );

  return (
  <div className="TitleCard">
    <div className="HelloText">
      <div className="HelloContainer">
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
  </div>
  )
};

export default TitleCard;