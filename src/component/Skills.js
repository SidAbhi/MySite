import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "react-responsive";
import "../stylesheets/Skills.css"

function Skills () {
  return(
    <div className="Skills zIndex5">
      <div className="SkillsContainer">
        <div className="SkillsSticky">
          <h2 className="SkillsTitle">
            SKILLS
          </h2>
          <div className="SkillLists">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;