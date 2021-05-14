import React from "react";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import useWindowDimensions from "./GetWindowDimensions";

function AboutBG () {
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
    <animated.div 
      className="AboutBG"
      style={{
        transform: scrollVal.scroll.to({ 
          range: [0, scrollThresh * (2.4/10), scrollThresh * (7/10), scrollThresh + 1], 
          output: ["translate(0, 34%)", "translate(0, 34%)", "translate(0, -20%)", "translate(0, -20%)"]
        })
        }}
    >
      <animated.svg 
        className="AboutBGCPU"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 902.3 1020.4"
        style={{
          transform: scrollVal.scroll.to({ 
            range: [0, scrollThresh * (2.7/10), scrollThresh + 1], 
            output: ["translate(0, 10%) rotate(-45deg)", "translate(0, 10%) rotate(-45deg)", "translate(0, -30%) rotate(15deg)"]
          })
        }}
      >
        <defs><pattern id="CpuContacts" width={120} height={120} patternTransform="translate(22.9 79) rotate(-45) scale(0.3)" patternUnits="userSpaceOnUse" viewBox="0 0 120 120"><rect width={120} height={120} fill="none" /><path d="M47.9,89.8,31.4,106.3a12.5,12.5,0,0,1-17.7,0h0a12.5,12.5,0,0,1,0-17.7L30.2,72.1a12.5,12.5,0,0,1,17.7,0h0A12.5,12.5,0,0,1,47.9,89.8Z" fill="#f2aa6b" /><path d="M106.3,89.8,89.8,106.3a12.5,12.5,0,0,1-17.7,0h0a12.5,12.5,0,0,1,0-17.7L88.6,72.1a12.5,12.5,0,0,1,17.7,0h0A12.5,12.5,0,0,1,106.3,89.8Z" fill="#f2aa6b" /><path d="M47.9,31.4,31.4,47.9a12.5,12.5,0,0,1-17.7,0h0a12.5,12.5,0,0,1,0-17.7L30.2,13.7a12.5,12.5,0,0,1,17.7,0h0A12.5,12.5,0,0,1,47.9,31.4Z" fill="#f2aa6b" /><path d="M106.3,31.4,89.8,47.9a12.5,12.5,0,0,1-17.7,0h0a12.5,12.5,0,0,1,0-17.7L88.6,13.7a12.5,12.5,0,0,1,17.7,0h0A12.5,12.5,0,0,1,106.3,31.4Z" fill="#f2aa6b" /></pattern></defs><title>CPU</title><path d="M540,134.7,91.7,583,540,1031.3,988.3,583ZM342.3,583,540,385.3,737.7,583,540,780.7Z" transform="translate(-88.9 -10.9)" fill="url(#CpuContacts)" /><rect x="355.9" y="562.9" width={45} height={19} rx="3.9" transform="translate(-382.7 424.4) rotate(-45)" fill="#f6a875" /><rect x="355.9" y="562.9" width={45} height={19} rx="3.9" transform="translate(-382.7 424.4) rotate(-45)" fill="#f6a875" /><rect x="372.2" y="579.1" width={45} height={19} rx="3.9" transform="translate(-389.5 440.6) rotate(-45)" fill="#f6a875" /><rect x="388.5" y="595.4" width={45} height={19} rx="3.9" transform="translate(-396.2 456.9) rotate(-45)" fill="#f6a875" /><rect x="423.2" y="567.1" width={25} height={9} rx="3.9" transform="translate(-365.5 464.7) rotate(-45)" fill="#f6a875" /><rect x="431.7" y="575.6" width={25} height={9} rx="3.9" transform="translate(-369 473.1) rotate(-45)" fill="#f6a875" /><rect x="444.4" y="545.9" width={25} height={9} rx="3.9" transform="translate(-344.3 473.4) rotate(-45)" fill="#f6a875" /><rect x="452.9" y="554.4" width={25} height={9} rx="3.9" transform="translate(-347.8 481.9) rotate(-45)" fill="#f6a875" /><rect x="440.2" y="584.1" width={25} height={9} rx="3.9" transform="translate(-372.5 481.6) rotate(-45)" fill="#f6a875" /><rect x="448.7" y="592.6" width={25} height={9} rx="3.9" transform="translate(-376 490.1) rotate(-45)" fill="#f6a875" /><rect x="461.4" y="562.9" width={25} height={9} rx="3.9" transform="translate(-351.3 490.4) rotate(-45)" fill="#f6a875" /><rect x="469.9" y="571.4" width={25} height={9} rx="3.9" transform="translate(-354.8 498.9) rotate(-45)" fill="#f6a875" /><rect x="457.1" y="601.1" width={25} height={9} rx="3.9" transform="translate(-379.5 498.6) rotate(-45)" fill="#f6a875" /><rect x="465.6" y="609.6" width={25} height={9} rx="3.9" transform="translate(-383 507.1) rotate(-45)" fill="#f6a875" /><rect x="478.4" y="579.9" width={25} height={9} rx="3.9" transform="translate(-358.3 507.4) rotate(-45)" fill="#f6a875" /><rect x="486.8" y="588.4" width={25} height={9} rx="3.9" transform="translate(-361.8 515.9) rotate(-45)" fill="#f6a875" /><rect x="474.1" y="618.1" width={25} height={9} rx="3.9" transform="translate(-386.6 515.6) rotate(-45)" fill="#f6a875" /><rect x="482.6" y="626.5" width={25} height={9} rx="3.9" transform="translate(-390.1 524) rotate(-45)" fill="#f6a875" /><rect x="495.3" y="596.8" width={25} height={9} rx="3.9" transform="translate(-365.3 524.4) rotate(-45)" fill="#f6a875" /><rect x="503.8" y="605.3" width={25} height={9} rx="3.9" transform="translate(-368.9 532.8) rotate(-45)" fill="#f6a875" /><rect x="491.1" y={635} width={25} height={9} rx="3.9" transform="translate(-393.6 532.5) rotate(-45)" fill="#f6a875" /><rect x="499.6" y="643.5" width={25} height={9} rx="3.9" transform="translate(-397.1 541) rotate(-45)" fill="#f6a875" /><rect x="512.3" y="613.8" width={25} height={9} rx="3.9" transform="translate(-372.4 541.3) rotate(-45)" fill="#f6a875" /><rect x="520.8" y="622.3" width={25} height={9} rx="3.9" transform="translate(-375.9 549.8) rotate(-45)" fill="#f6a875" /><rect x="508.1" y={652} width={25} height={9} rx="3.9" transform="translate(-400.6 549.5) rotate(-45)" fill="#f6a875" /><rect x="516.5" y="660.5" width={25} height={9} rx="3.9" transform="translate(-404.1 558) rotate(-45)" fill="#f6a875" /><rect x="529.3" y="630.8" width={25} height={9} rx="3.9" transform="translate(-379.4 558.3) rotate(-45)" fill="#f6a875" /><rect x="537.8" y="639.3" width={25} height={9} rx="3.9" transform="translate(-382.9 566.8) rotate(-45)" fill="#f6a875" /><rect x="469.9" y="520.5" width={25} height={9} rx="3.9" transform="translate(-318.8 484) rotate(-45)" fill="#f6a875" /><rect x="478.4" y={529} width={25} height={9} rx="3.9" transform="translate(-322.3 492.5) rotate(-45)" fill="#f6a875" /><rect x="491.1" y="499.3" width={25} height={9} rx="3.9" transform="translate(-297.6 492.8) rotate(-45)" fill="#f6a875" /><rect x="499.6" y="507.7" width={25} height={9} rx="3.9" transform="translate(-301.1 501.3) rotate(-45)" fill="#f6a875" /><rect x="486.8" y="537.4" width={25} height={9} rx="3.9" transform="translate(-325.8 501) rotate(-45)" fill="#f6a875" /><rect x="495.3" y="545.9" width={25} height={9} rx="3.9" transform="translate(-329.3 509.4) rotate(-45)" fill="#f6a875" /><rect x="508.1" y="516.2" width={25} height={9} rx="3.9" transform="translate(-304.6 509.7) rotate(-45)" fill="#f6a875" /><rect x="516.5" y="524.7" width={25} height={9} rx="3.9" transform="translate(-308.1 518.2) rotate(-45)" fill="#f6a875" /><rect x="503.8" y="554.4" width={25} height={9} rx="3.9" transform="translate(-332.9 517.9) rotate(-45)" fill="#f6a875" /><rect x="512.3" y="562.9" width={25} height={9} rx="3.9" transform="translate(-336.4 526.4) rotate(-45)" fill="#f6a875" /><rect x={525} y="533.2" width={25} height={9} rx="3.9" transform="translate(-311.6 526.7) rotate(-45)" fill="#f6a875" /><rect x="533.5" y="541.7" width={25} height={9} rx="3.9" transform="translate(-315.2 535.2) rotate(-45)" fill="#f6a875" /><rect x="520.8" y="571.4" width={25} height={9} rx="3.9" transform="translate(-339.9 534.9) rotate(-45)" fill="#f6a875" /><rect x="529.3" y="579.9" width={25} height={9} rx="3.9" transform="translate(-343.4 543.4) rotate(-45)" fill="#f6a875" /><rect x={542} y="550.2" width={25} height={9} rx="3.9" transform="translate(-318.7 543.7) rotate(-45)" fill="#f6a875" /><rect x="550.5" y="558.7" width={25} height={9} rx="3.9" transform="translate(-322.2 552.2) rotate(-45)" fill="#f6a875" /><rect x="537.8" y="588.4" width={25} height={9} rx="3.9" transform="translate(-346.9 551.9) rotate(-45)" fill="#f6a875" /><rect x="546.2" y="596.8" width={25} height={9} rx="3.9" transform="translate(-350.4 560.4) rotate(-45)" fill="#f6a875" /><rect x={559} y="567.1" width={25} height={9} rx="3.9" transform="translate(-325.7 560.7) rotate(-45)" fill="#f6a875" /><rect x="567.5" y="575.6" width={25} height={9} rx="3.9" transform="translate(-329.2 569.1) rotate(-45)" fill="#f6a875" /><rect x="554.7" y="605.3" width={25} height={9} rx="3.9" transform="translate(-353.9 568.8) rotate(-45)" fill="#f6a875" /><rect x="563.2" y="613.8" width={25} height={9} rx="3.9" transform="translate(-357.5 577.3) rotate(-45)" fill="#f6a875" /><rect x="575.9" y="584.1" width={25} height={9} rx="3.9" transform="translate(-332.7 577.6) rotate(-45)" fill="#f6a875" /><rect x="584.4" y="592.6" width={25} height={9} rx="3.9" transform="translate(-336.2 586.1) rotate(-45)" fill="#f6a875" /><rect x="571.7" y="622.3" width={25} height={9} rx="3.9" transform="translate(-361 585.8) rotate(-45)" fill="#f6a875" /><rect x="580.2" y="630.8" width={25} height={9} rx="3.9" transform="translate(-364.5 594.3) rotate(-45)" fill="#f6a875" /><rect x="592.9" y="601.1" width={25} height={9} rx="3.9" transform="translate(-339.8 594.6) rotate(-45)" fill="#f6a875" /><rect x="601.4" y="609.6" width={25} height={9} rx="3.9" transform="translate(-343.3 603.1) rotate(-45)" fill="#f6a875" /><rect x="588.7" y="639.3" width={25} height={9} rx="3.9" transform="translate(-368 602.8) rotate(-45)" fill="#f6a875" /><rect x="597.2" y="647.8" width={25} height={9} rx="3.9" transform="translate(-371.5 611.3) rotate(-45)" fill="#f6a875" /><rect x="609.9" y="618.1" width={25} height={9} rx="3.9" transform="translate(-346.8 611.6) rotate(-45)" fill="#f6a875" /><rect x="618.4" y="626.5" width={25} height={9} rx="3.9" transform="translate(-350.3 620) rotate(-45)" fill="#f6a875" /><rect x="516.5" y="473.8" width={25} height={9} rx="3.9" transform="translate(-272.1 503.3) rotate(-45)" fill="#f6a875" /><rect x={525} y="482.3" width={25} height={9} rx="3.9" transform="translate(-275.6 511.8) rotate(-45)" fill="#f6a875" /><rect x="533.5" y="490.8" width={25} height={9} rx="3.9" transform="translate(-279.2 520.3) rotate(-45)" fill="#f6a875" /><rect x={542} y="499.3" width={25} height={9} rx="3.9" transform="translate(-282.7 528.8) rotate(-45)" fill="#f6a875" /><rect x="550.5" y="507.7" width={25} height={9} rx="3.9" transform="translate(-286.2 537.3) rotate(-45)" fill="#f6a875" /><rect x={559} y="516.2" width={25} height={9} rx="3.9" transform="translate(-289.7 545.7) rotate(-45)" fill="#f6a875" /><rect x="567.5" y="524.7" width={25} height={9} rx="3.9" transform="translate(-293.2 554.2) rotate(-45)" fill="#f6a875" /><rect x="575.9" y="533.2" width={25} height={9} rx="3.9" transform="translate(-296.7 562.7) rotate(-45)" fill="#f6a875" /><rect x="584.4" y="541.7" width={25} height={9} rx="3.9" transform="translate(-300.2 571.2) rotate(-45)" fill="#f6a875" /><rect x="592.9" y="550.2" width={25} height={9} rx="3.9" transform="translate(-303.8 579.7) rotate(-45)" fill="#f6a875" /><rect x="601.4" y="558.7" width={25} height={9} rx="3.9" transform="translate(-307.3 588.2) rotate(-45)" fill="#f6a875" /><rect x="609.9" y="567.1" width={25} height={9} rx="3.9" transform="translate(-310.8 596.7) rotate(-45)" fill="#f6a875" /><rect x="618.4" y="575.6" width={25} height={9} rx="3.9" transform="translate(-314.3 605.1) rotate(-45)" fill="#f6a875" /><rect x="626.8" y="584.1" width={25} height={9} rx="3.9" transform="translate(-317.8 613.6) rotate(-45)" fill="#f6a875" /><rect x="635.3" y="592.6" width={25} height={9} rx="3.9" transform="translate(-321.3 622.1) rotate(-45)" fill="#f6a875" /><rect x="643.8" y="601.1" width={25} height={9} rx="3.9" transform="translate(-324.8 630.6) rotate(-45)" fill="#f6a875" /><rect x="408.2" y="620.1" width={21} height={19} rx="3.9" transform="translate(-411.4 469.6) rotate(-45)" fill="#f6a875" /><rect x="425.2" y="603.2" width={21} height={19} rx="3.9" transform="translate(-394.5 476.7) rotate(-45)" fill="#f6a875" /><rect x="507.2" y="411.5" width={45} height={19} rx="3.9" transform="translate(-231.4 487) rotate(-45)" fill="#f6a875" /><rect x="507.2" y="411.5" width={45} height={19} rx="3.9" transform="translate(-231.4 487) rotate(-45)" fill="#f6a875" /><rect x="523.5" y="427.8" width={45} height={19} rx="3.9" transform="translate(-238.2 503.3) rotate(-45)" fill="#f6a875" /><rect x="539.8" y="444.1" width={45} height={19} rx="3.9" transform="translate(-244.9 519.6) rotate(-45)" fill="#f6a875" /><rect x="559.6" y="468.8" width={21} height={19} rx="3.9" transform="translate(-260.1 532.3) rotate(-45)" fill="#f6a875" /><rect x="576.5" y="451.8" width={21} height={19} rx="3.9" transform="translate(-243.1 539.3) rotate(-45)" fill="#f6a875" /><rect x="573.7" y={478} width={45} height={19} rx="3.9" transform="translate(-259 553.5) rotate(-45)" fill="#f6a875" /><rect x="573.7" y={478} width={45} height={19} rx="3.9" transform="translate(-259 553.5) rotate(-45)" fill="#f6a875" /><rect x={590} y="494.3" width={45} height={19} rx="3.9" transform="translate(-265.7 569.8) rotate(-45)" fill="#f6a875" /><rect x="606.2" y="510.5" width={45} height={19} rx="3.9" transform="translate(-272.4 586) rotate(-45)" fill="#f6a875" /><rect x={626} y="535.3" width={21} height={19} rx="3.9" transform="translate(-287.6 598.8) rotate(-45)" fill="#f6a875" /><rect x={643} y="518.3" width={21} height={19} rx="3.9" transform="translate(-270.7 605.8) rotate(-45)" fill="#f6a875" /><rect x="469.1" y="677.4" width={45} height={19} rx="3.9" transform="translate(1236 814.2) rotate(135)" fill="#f6a875" /><rect x="469.1" y="677.4" width={45} height={19} rx="3.9" transform="translate(1236 814.2) rotate(135)" fill="#f6a875" /><rect x="452.8" y="661.1" width={45} height={19} rx="3.9" transform="translate(1196.7 797.9) rotate(135)" fill="#f6a875" /><rect x="436.5" y="644.9" width={45} height={19} rx="3.9" transform="translate(1157.5 781.6) rotate(135)" fill="#f6a875" /><rect x="517.1" y="726.9" width={45} height={19} rx="3.9" transform="translate(1353.1 864.7) rotate(135)" fill="#f6a875" /><rect x="517.1" y="726.9" width={45} height={19} rx="3.9" transform="translate(1353.1 864.7) rotate(135)" fill="#f6a875" /><rect x="500.9" y="710.6" width={45} height={19} rx="3.9" transform="translate(1313.8 848.4) rotate(135)" fill="#f6a875" /><rect x="484.6" y="694.4" width={45} height={19} rx="3.9" transform="translate(1274.6 832.1) rotate(135)" fill="#f6a875" /><rect x="440.8" y="620.1" width={21} height={19} rx="3.9" transform="translate(1126.7 744.9) rotate(135)" fill="#f6a875" /><rect x="423.8" y="637.1" width={21} height={19} rx="3.9" transform="translate(1109.7 785.9) rotate(135)" fill="#f6a875" />
      </animated.svg>
      <animated.svg className="AboutBGCPU"
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 902.3 1020.4"
      style={{
        transform: scrollVal.scroll.to({ 
          range: [0, scrollThresh * (2.7/10), scrollThresh + 1], 
          output: ["translate(0vw, 10%) rotate(-45deg)", "translate(0vw, 10%) rotate(-45deg)", "translate(0vw, -15%) rotate(5deg)"]
        })
        }}
      >
        <animated.rect 
          x={223} 
          y={145} 
          width={
            scrollVal.scroll.to({ 
              range: [0, scrollThresh * (2.5/10), scrollThresh * (3.5/10), scrollThresh + 1], 
              output: ["0", "1", "634", "634"]
            })
          }  
          height={
            scrollVal.scroll.to({ 
              range: [0, scrollThresh * (1.7/10), scrollThresh * (2.5/10), scrollThresh + 1], 
              output: ["0", "0", "634", "634"]
            })
          } 
          transform="translate(396 -257.4) rotate(45)" 
          fill="none" 
          stroke="#2d4459" 
          strokeMiterlimit={10} 
          strokeWidth={4} />
        <animated.rect 
          x="400.2" 
          y="322.2" 
          width={
            scrollVal.scroll.to({ 
              range: [0, scrollThresh * (3.5/10), scrollThresh * (4.5/10), scrollThresh + 1], 
              output: ["0", "1", "279.52", "279.52"]
            })
          }  
          height={
            scrollVal.scroll.to({ 
              range: [0, scrollThresh * (2.7/10), scrollThresh * (3.5/10), scrollThresh + 1], 
              output: ["0", "0", "279.52", "279.52"]
            })
          } 
          transform="translate(396 -257.4) rotate(45)" 
          fill="none" stroke="#2d4459" 
          strokeMiterlimit={10} 
          strokeWidth={4} />
      </animated.svg>
    </animated.div>
  )
}

export default AboutBG;