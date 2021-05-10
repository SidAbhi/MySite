import { useState, useEffect } from 'react';
// import { useMediaQuery } from "react-responsive";

function getWindowDimensions() {

  const { outerWidth: width, outerHeight: height } = window;

  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // let isLandscape = useMediaQuery({ query: "(max-device-width: 640px) and (orientation: landscape)" });
  // let isPortrait = useMediaQuery({ query: "(max-device-width: 480px) and (orientation: portrait)" });

  // const mediaQ = (isLandscape === true | isPortrait === true) ? true : false;

  // if (mediaQ===false) {
  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }

  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);
  // }

  return windowDimensions;
}
