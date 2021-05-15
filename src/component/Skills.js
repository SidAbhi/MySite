import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import "../stylesheets/Skills.scss"

function Skills () {
  return(
    <div className="Skills zIndex5">
      <div className="Skills__container">
        <div className="Skills--sticky">
          <h2 className="Skills__title">
            SKILLS
          </h2>
          <div className="TitleCard__maintext__lists">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;