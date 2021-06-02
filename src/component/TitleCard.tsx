import React, { useState } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { useMediaQuery } from 'react-responsive';
import useWindowDimensions from './GetWindowDimensions';
import TitleCardNameBG from './TitleCardNameBG';
import '../stylesheets/TitleCard.scss';


function TitleCard() {
  const windowDimensions = useWindowDimensions();

  let [animStop, setAnimStop] = useState(false);

  const mediaQ = useMediaQuery({ query: '(max-aspect-ratio: 1/1)' });
  
  const scrollThresh = windowDimensions.height;
  
  const [scrollVal, api] = useSpring(() => (
    {
      scroll: 0,
      config: {
        precision: 0.1,
        clamp: true,
      },
    }
  ));
  

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(y, 0), scrollThresh),
    }),
    { domTarget: window },
  );

  const textPos = useSpring({
    cancel: animStop,
    from: {
      transform: 'translate(15vw, -150vh)',
    },
    to: [
      {
        transform: 'translate(15vw, 0)', 
        config: {
          mass: 5,
          tension: 480,
          friction: 85,
      }},
      {transform: 'translate(0, 0)', delay: 400},
    ],
    onRest: ()=>setAnimStop(true),
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

  const skills = ['Front', 'end ', 'development'];
  const skills2 = ['Visual ', '& ', 'motion ', 'design'];
  const skills3 = ['3D ', 'CG ', '& ', 'VFX'];

  const skillTrail = useTrail(
    skills.length,
    {
      config: {
        mass: 2,
        tension: 790,
        friction: 70,
      },
      delay: 1400,
      from: {transform: 'translate(0, 5em)'}, 
      to: {transform: 'translate(0, 0)'},
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
      delay: 1600,
      from: {transform: 'translate(0, 5em)'}, 
      to: {transform: 'translate(0, 0)'},
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
      delay: 1800,
      from: {transform: 'translate(0, 5em)'}, 
      to: {transform: 'translate(0, 0)'},
    }
  );

  const boxAnim = useSpring({
    from: {width: '0%', height: '105%', padding: '0%', left: '100%'},
    to: {width: '110%', height: '105%', padding: '5%', left: '-5%'},
    delay: 1230,
    config: {       
      mass: 4,
      tension: 280,
      friction: 45,
    }
  });

  const boxAnim2 = useSpring({
    from: {width: '0%', height: '105%', padding: '0%', left: '100%'},
    to: {width: '110%', height: '105%', padding: '5%', left: '-5%'},
    delay: 1130,
    config: {       
      mass: 4,
      tension: 300,
      friction: 45,
    }
  });

  const { stroke } = useSpring({
    from: { stroke: 0 },
    stroke: 1,
    delay: 1500,
    config: {       
      mass: 1,
      tension: 55,
      friction: 45,
    }
  })

  const sunExpand = useSpring({
    from: { transform: 'scale(0,0)' },
    transform: 'scale(1,1)',
    delay: 850,
    config: {       
      mass: 4,
      tension: 115,
      friction: 35,
    }
  })

  const {strokeWidthAnim, stroke2} = useSpring({
    from: { 
      strokeWidthAnim: 0,
      stroke2: 0,
    },
    strokeWidthAnim: 2,
    stroke2: 1,
    delay: 1350,
    config: {       
      mass: 4,
      tension: 95,
      friction: 35,
    }
  })

  const {radius} = useSpring({
    from: { 
      radius: 0
    },
    radius: 23.4,
    delay: 1450,
    config: {       
      mass: 4,
      tension: 285,
      friction: 35,
    }
  })

  const { fillColor } = useSpring({
    from: {fillColor: '#F2AA6B00'},
    fillColor: '#F2AA6BFF',
    delay: 2200,
    config: {       
      mass: 2,
      tension: 85,
      friction: 15,
    }
  });

  const orbit = useSpring({
    from: { transform: mediaQ ? 'rotate(70deg)' : 'rotate(0deg)'},
    to: { transform:  mediaQ ? 'rotate(430deg)' : 'rotate(360deg)'},
    loop: true,
    config: {
      duration: 127000,
    }
  });

  const rotation = useSpring({
    from: { transform: mediaQ ? 'rotate(90deg)' : 'rotate(0deg)'},
    to: { transform:  mediaQ ? 'rotate(450deg)' : 'rotate(360deg)'},
    loop: true,
    config: {
      duration: 45000,
    }
  });

  return (
  <div className="TitleCard ZIndex0">
    <TitleCardNameBG/>
    <div className="TitleCard__maintext"> 
      <div className="TitleCard__maintext__container">       
        <animated.div className="TitleCard__maintext__highlight2" style={boxAnim2}></animated.div>
        <animated.div className="TitleCard__maintext__highlight" style={boxAnim}></animated.div>
        <animated.h1 className="TitleCard__maintext__name" style={textPos}>
          Hello<animated.span style={nameReveal}>, I'm Siddhi</animated.span>
        </animated.h1>
      </div>
      <h2 className="TitleCard__maintext__subtext">
        {skillTrail.map((styles, index) => 
          <animated.span key={index} style={styles} className="TitleCard__maintext__list">{skills[index]}</animated.span>
        )}
      </h2>
      <h2 className="TitleCard__maintext__subtext">
        {skillTrail2.map((styles, index) => 
          <animated.span key={index} style={styles} className="TitleCard__maintext__list">{skills2[index]}</animated.span>
        )}
      </h2>
      <h2 className="TitleCard__maintext__subtext">
        {skillTrail3.map((styles, index) => 
          <animated.span key={index} style={styles} className="TitleCard__maintext__list">{skills3[index]}</animated.span>
        )}
      </h2>
    </div>
    <div className="TitleCard__transition__container ">
      <animated.div className="TitleCard__planetary__container" style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh, scrollThresh+20], output: ["translate(0vw, 0vh)", "translate(0vw, 110vh)", "translate(0vw, 110vh)"] })}}>
        <animated.div className="TitleCard__planetaryRotateContainer" style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh, scrollThresh+20], output: ["rotate(0deg)", "rotate(-60deg)", "rotate(-60deg)"] })}}>
          <animated.svg 
            className = "TitleCard__planetary" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 838 816" 
            style={orbit}
          >
            <title>Orbit</title>
            <animated.circle  cx="419" cy="408" r="387.2" fill="none" stroke="#F2AA6B" strokeMiterlimit="10" strokeWidth={strokeWidthAnim} strokeDasharray="18.02 26.02" strokeDashoffset={stroke2.to(stroke2 => (1 - stroke2) * 70)}/>
            <animated.circle cx="31.8" cy="397.9" r={radius} fill="#F2AA6B"/>
          </animated.svg>
          <animated.div className="TitleCard__planetary__container" style={sunExpand}>
            <animated.svg 
              className = "TitleCard__planetary" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 838 816" 
              style={rotation}
            >
              <path d="M608.1,484.4l14-2.5L613,471l53.3-19.4-43.5-36.5,12.3-7.1-12.3-7.1,43.5-36.5L613,345l9.1-10.9-14-2.5,28.3-49.1H579.7l4.9-13.4-14.1,2.4,9.9-55.8-53.3,19.4V220.8l-12.4,7.1-9.8-55.8-43.5,36.4-4.9-13.4-9.1,11L419,156.9l-28.4,49.2-9.1-11-4.9,13.4-43.5-36.4-9.8,55.8-12.4-7.1v14.3l-53.3-19.4,9.9,55.8-14.1-2.4,4.9,13.4H201.6l28.3,49.1-14,2.5,9.2,10.9-53.4,19.4,43.5,36.5L202.9,408l12.3,7.1-43.5,36.5L225.1,471l-9.2,10.9,14,2.5-28.3,49.1h56.7l-4.9,13.4,14.1-2.4-9.9,55.8,53.3-19.4v14.3l12.4-7.1,9.8,55.8,43.5-36.4,4.9,13.4,9.1-11L419,659.1l28.4-49.2,9.1,11,4.9-13.4,43.5,36.4,9.8-55.8,12.4,7.1V580.9l53.3,19.4-9.9-55.8,14.1,2.4-4.9-13.4h56.7Z" fill="none" stroke="#F2AA6B" strokeMiterlimit="10" strokeWidth="1.4"/>
            </animated.svg>
          </animated.div>
        </animated.div>
      </animated.div>
      <animated.svg 
        className="TitleCard__arrow" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 902.2 989.4"
        strokeDasharray = {6156}
        strokeDashoffset = {stroke.to(stroke => (1 - stroke) * 6256)}
        style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh / 32 , scrollThresh /4, scrollThresh], output: ["translate(0%, 0%) rotate(0deg) scale(1,1)", "translate(0%, 0%) rotate(180deg) scale(1,1)", "translate(0%, -200%) rotate(180deg) scale(1.2,1.2)", "translate(0%, -200%) rotate(180deg) scale(1.2,1.2)"] })}}
      >
        <title>Arrow</title>
        <animated.polygon points="898.7 588.7 898.7 7.8 451.1 403.9 3.5 7.8 3.5 588.7 451.1 984.8 898.7 588.7" fill={fillColor} stroke="#F2AA6B" strokeMiterlimit="10" strokeWidth="27"/>
      </animated.svg>
      <animated.div className="TitleCard__transition__box1" style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh, scrollThresh+20], output: ["translate(-50vw, 0vh) rotate(0deg)", "translate(-50vw, -190vh) rotate(-40deg)", "translate(-50vw, -190vh) rotate(-40deg)"] })}}></animated.div>
      <animated.div className="TitleCard__transition__box2" style={{transform: scrollVal.scroll.to({ range: [0, scrollThresh, scrollThresh+20], output: ["translate(50vw, 0vh) rotate(0deg)", "translate(50vw, -190vh) rotate(40deg)", "translate(50vw, -190vh) rotate(40deg)"] })}}></animated.div>
    </div>
  </div>
  )
};

export default TitleCard;