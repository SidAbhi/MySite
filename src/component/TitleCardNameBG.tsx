import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import useWindowDimensions from './GetWindowDimensions';

function TitleCardNameBG() {
  const windowDimensions = useWindowDimensions();

  const scrollThresh = windowDimensions.height;
    
  const [scrollVal, api] = useSpring(() => ({scroll: 0}));

  useScroll(({ xy: [, y] }) => 
    api.start({
      scroll: Math.min(Math.max(y, 0), scrollThresh),
    }),
    { domTarget: window },
  );

  const patternAnim = useSpring({
    from: {
      val: 'translate(29.7 36.2) scale(0.45)',
    },
    to: { 
      val: 'translate(49.7 56.2) scale(0.45)',
    },
    delay: 900,
    config: {
      mass: 6,
      tension: 120,
      friction: 25,
    }
  })
  
  const enterAnim = useSpring({
    from: {
      transform: 'translate(0%, -15%)',
      opacity: 1,
    },
    to: { 
      transform: 'translate(0%, 0%)',
      opacity: .45,
    },
    delay: 900,
    config: {
      mass: 5,
      tension: 90,
      friction: 25,
    }
  })

  
  const marquee = useSpring({
    from: {
      transform: 'translate(0, 0%)',
    },
    to: { 
      transform: 'translate(0, 200%)' 
    },
    config: {
      duration: 70000,
    },
    loop: true,
  })


  return (
    <div className="TitleCard__container">    
      <animated.div className="TitleCard__bg__container zIndex1" style={enterAnim}> 
      <animated.div className="TitleCard__bg__container zIndex2" style={marquee}>
        <animated.svg 
          className="TitleCard__bg" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 1032.8 224.9"
          style = {{
            transform : scrollVal.scroll.to({ 
              range: [0, scrollThresh + 1], 
              output: ["translate(0, -10%) rotate(-90deg)", "translate(0, 80%) rotate(-90deg)" ]
            })
          }}
        >
          <defs><animated.pattern id="SidNamePattern" width="28.8" height="28.8" patternTransform={patternAnim.val}  patternUnits="userSpaceOnUse" viewBox="0 0 28.8 28.8"><rect width="28.8" height="28.8" fill="none" /><circle cx="28.8" cy="28.8" r="0.7" fill="#fafafa" /><path d="M14.4,29.5a.7.7,0,1,0-.7-.7A.7.7,0,0,0,14.4,29.5Z" fill="#fafafa" /><path d="M28.8,15.1a.7.7,0,1,0-.7-.7A.7.7,0,0,0,28.8,15.1Z" fill="#fafafa" /><path d="M14.4,15.1a.7.7,0,1,0-.7-.7A.7.7,0,0,0,14.4,15.1Z" fill="#fafafa" /><path d="M7.2,22.3a.7.7,0,1,0-.7-.7A.7.7,0,0,0,7.2,22.3Z" fill="#fafafa" /><path d="M21.6,22.3a.7.7,0,1,0-.7-.7A.7.7,0,0,0,21.6,22.3Z" fill="#fafafa" /><path d="M7.2,7.9a.7.7,0,1,0-.7-.7A.7.7,0,0,0,7.2,7.9Z" fill="#fafafa" /><path d="M21.6,7.9a.7.7,0,1,0-.7-.7A.7.7,0,0,0,21.6,7.9Z" fill="#fafafa" /><circle cy="28.8" r="0.7" fill="#fafafa" /><path d="M0,15.1a.7.7,0,0,0,0-1.4.7.7,0,0,0-.7.7A.7.7,0,0,0,0,15.1Z" fill="#fafafa" /><path d="M28.8.7a.7.7,0,0,0,.7-.7.7.7,0,0,0-.7-.7.7.7,0,0,0-.7.7A.7.7,0,0,0,28.8.7Z" fill="#fafafa" /><path d="M14.4.7a.7.7,0,0,0,.7-.7.7.7,0,0,0-.7-.7.7.7,0,0,0-.7.7A.7.7,0,0,0,14.4.7Z" fill="#fafafa" /><path d="M0,.7A.7.7,0,0,0,.7,0,.7.7,0,0,0,0-.7.7.7,0,0,0-.7,0,.7.7,0,0,0,0,.7Z" fill="#fafafa" /></animated.pattern></defs><title>Untitled-3 [Recovered]</title><path d="M173.7,614.9c-13.9,27-47,37.6-75.6,37.6-26.6,0-52.7-9-74.5-24.1l23.8-45c13.8,12.2,30.2,21.8,49.1,21.8,13.5,0,26.7-5.8,26.7-21.2,0-37.3-90.9-9-90.9-84.2,0-43.4,29.5-72.3,72.6-72.3,23.8,0,47.2,6.5,68.1,17.4l-22.2,43.4c-10.6-8.7-22.4-14.5-36.6-14.5-10.9,0-23.8,6.1-23.8,18.6,0,31.5,91.3,11,91.3,84.2C181.7,588.8,179.4,603.9,173.7,614.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M216.7,647V432.7h55.6V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M399.6,647H317.3V432.7h82.3c57.5,0,105.7,50.1,105.7,107.3S456.8,647,399.6,647Zm31.8-149.1c-12.5-14.1-27.7-18-45.6-18H372.9V599.8h12.9c17.9,0,33.1-3.9,45.6-17.7,10.3-11.3,15.4-27,15.4-42.1S441.7,509.5,431.4,497.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M622.9,647H540.6V432.7h82.3c57.5,0,105.7,50.1,105.7,107.3S680.1,647,622.9,647Zm31.8-149.1c-12.5-14.1-27.6-18-45.6-18H596.2V599.8h12.9c18,0,33.1-3.9,45.6-17.7,10.3-11.3,15.4-27,15.4-42.1S665,509.5,654.7,497.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M899.9,647V558.6H819.6V647H764V432.7h55.6v82.9h80.3V432.7h55.9V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M1000.8,647V432.7h55.6V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" />
        </animated.svg>
        <animated.svg 
          className="TitleCard__bg" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 1032.8 224.9"
          style = {{
            transform : scrollVal.scroll.to({ 
              range: [0, scrollThresh + 1], 
              output: ["translate(0, 490%) rotate(-90deg)", "translate(0, 580%) rotate(-90deg)" ]
            })
          }}
        >
          <title>Untitled-3 [Recovered]</title><path d="M173.7,614.9c-13.9,27-47,37.6-75.6,37.6-26.6,0-52.7-9-74.5-24.1l23.8-45c13.8,12.2,30.2,21.8,49.1,21.8,13.5,0,26.7-5.8,26.7-21.2,0-37.3-90.9-9-90.9-84.2,0-43.4,29.5-72.3,72.6-72.3,23.8,0,47.2,6.5,68.1,17.4l-22.2,43.4c-10.6-8.7-22.4-14.5-36.6-14.5-10.9,0-23.8,6.1-23.8,18.6,0,31.5,91.3,11,91.3,84.2C181.7,588.8,179.4,603.9,173.7,614.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M216.7,647V432.7h55.6V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M399.6,647H317.3V432.7h82.3c57.5,0,105.7,50.1,105.7,107.3S456.8,647,399.6,647Zm31.8-149.1c-12.5-14.1-27.7-18-45.6-18H372.9V599.8h12.9c17.9,0,33.1-3.9,45.6-17.7,10.3-11.3,15.4-27,15.4-42.1S441.7,509.5,431.4,497.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M622.9,647H540.6V432.7h82.3c57.5,0,105.7,50.1,105.7,107.3S680.1,647,622.9,647Zm31.8-149.1c-12.5-14.1-27.6-18-45.6-18H596.2V599.8h12.9c18,0,33.1-3.9,45.6-17.7,10.3-11.3,15.4-27,15.4-42.1S665,509.5,654.7,497.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M899.9,647V558.6H819.6V647H764V432.7h55.6v82.9h80.3V432.7h55.9V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M1000.8,647V432.7h55.6V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" />
        </animated.svg>
        <animated.svg 
          className="TitleCard__bg" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 1032.8 224.9"
          style = {{
            transform : scrollVal.scroll.to({ 
              range: [0, scrollThresh + 1], 
              output: ["translate(0, -510%) rotate(-90deg)", "translate(0, -420%) rotate(-90deg)" ]
            })
          }}
        >
          <title>Untitled-3 [Recovered]</title><path d="M173.7,614.9c-13.9,27-47,37.6-75.6,37.6-26.6,0-52.7-9-74.5-24.1l23.8-45c13.8,12.2,30.2,21.8,49.1,21.8,13.5,0,26.7-5.8,26.7-21.2,0-37.3-90.9-9-90.9-84.2,0-43.4,29.5-72.3,72.6-72.3,23.8,0,47.2,6.5,68.1,17.4l-22.2,43.4c-10.6-8.7-22.4-14.5-36.6-14.5-10.9,0-23.8,6.1-23.8,18.6,0,31.5,91.3,11,91.3,84.2C181.7,588.8,179.4,603.9,173.7,614.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M216.7,647V432.7h55.6V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M399.6,647H317.3V432.7h82.3c57.5,0,105.7,50.1,105.7,107.3S456.8,647,399.6,647Zm31.8-149.1c-12.5-14.1-27.7-18-45.6-18H372.9V599.8h12.9c17.9,0,33.1-3.9,45.6-17.7,10.3-11.3,15.4-27,15.4-42.1S441.7,509.5,431.4,497.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M622.9,647H540.6V432.7h82.3c57.5,0,105.7,50.1,105.7,107.3S680.1,647,622.9,647Zm31.8-149.1c-12.5-14.1-27.6-18-45.6-18H596.2V599.8h12.9c18,0,33.1-3.9,45.6-17.7,10.3-11.3,15.4-27,15.4-42.1S665,509.5,654.7,497.9Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M899.9,647V558.6H819.6V647H764V432.7h55.6v82.9h80.3V432.7h55.9V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" /><path d="M1000.8,647V432.7h55.6V647Z" transform="translate(-23.6 -427.5)" fill="url(#SidNamePattern)" />
        </animated.svg>
      </animated.div>
    </animated.div>
  </div>
  )
}

export default TitleCardNameBG;