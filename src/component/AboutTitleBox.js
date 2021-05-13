import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import useWindowDimensions from "./GetWindowDimensions";

function AboutTitleBox () {
  const windowDimensions = useWindowDimensions();

  const scrollThresh = windowDimensions.height * 3;
    
  const [scrollVal, api] = useSpring(() => ({scroll: 0}));

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(parseInt(y), 0), scrollThresh),
    }),
    { domTarget: window },
  );

  return (
    <div className="AboutMeTitleContainer">  
      <animated.svg 
        className="AboutTitleBox" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 799.1 264.5"
        strokeDasharray = {300}
        strokeDashoffset = {
          scrollVal.scroll.to({ 
            range: [0, scrollThresh * (1/20), scrollThresh * (2/10), scrollThresh + 1], 
            output: [-300, -300, 0, 0]
          })
        }
      >
        <line x1="115.7" y1="0.7" x2="24.9" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="310.4" y1="0.7" x2="219.6" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="456.5" y1="0.7" x2="365.6" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="602.5" y1="0.7" x2="511.7" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="699.8" y1="0.7" x2={609} y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="797.2" y1="0.7" x2="706.4" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="748.5" y1="0.7" x2="657.7" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="651.2" y1="0.7" x2="560.3" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="553.8" y1="0.7" x2={463} y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="505.1" y1="0.7" x2="414.3" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="407.8" y1="0.7" x2={317} y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="359.1" y1="0.7" x2="268.3" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="213.1" y1="0.7" x2="122.2" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="261.7" y1="0.7" x2="170.9" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="164.4" y1="0.7" x2="73.6" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="92.7" y1="0.7" x2="1.9" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="287.4" y1="0.7" x2="196.6" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="433.5" y1="0.7" x2="342.6" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="579.5" y1="0.7" x2="488.7" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="676.8" y1="0.7" x2={586} y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="774.2" y1="0.7" x2="683.4" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="725.5" y1="0.7" x2="634.7" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="628.2" y1="0.7" x2="537.3" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="530.8" y1="0.7" x2={440} y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="482.1" y1="0.7" x2="391.3" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="384.8" y1="0.7" x2={294} y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="336.1" y1="0.7" x2="245.3" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="190.1" y1="0.7" x2="99.2" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="238.7" y1="0.7" x2="147.9" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  /><line x1="141.4" y1="0.7" x2="50.6" y2="263.8" fill="none" stroke="#f2aa6b" strokeMiterlimit={10} strokeWidth={4} vectorEffect="non-scaling-stroke"  />
      </animated.svg>
      <animated.div 
        style={{
          backgroundColor: "#DADDD1",
          position: "absolute",
          width: scrollVal.scroll.to({ 
            range: [0, scrollThresh * (2/10), scrollThresh * (3/10), scrollThresh + 1], 
            output: ["0%", "0%", "122%", "122%"]
          }),
          height: "100%",
          zIndex: "2",
          left: "-11%",
          transform: "skew(-21deg)"
        }}
      />              
      <animated.h2 
        className="AboutMeTitle" 
        style={{
          opacity: scrollVal.scroll.to({ 
            range: [0, scrollThresh * (2.7/10), scrollThresh * (3.5/10), scrollThresh + 1], 
            output: ["0", "0", "1", "1"]
          })
        }}
      >
        ABOUT ME
      </animated.h2>
    </div>
  );
};

export default AboutTitleBox;