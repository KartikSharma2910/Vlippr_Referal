import { useCallback, useEffect, useState } from "react";

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [screenType, setScreenType] = useState("INITIAL");

  const updateWindowDimensions = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    if (window.innerWidth > 1200) {
      setScreenType("DESKTOP");
    } else if (window.innerWidth <= 1200 && windowWidth > 768) {
      setScreenType("TABLET");
    } else {
      setScreenType("MOBILE");
    }
  }, [windowWidth]);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [updateWindowDimensions]);

  return {
    windowWidth,
    windowHeight,
    screenType,
  };
};
