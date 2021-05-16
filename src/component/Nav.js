import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import useWindowDimensions from "./GetWindowDimensions";
import "../stylesheets/Nav.scss";

function Nav () {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li>Main</li> 
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;