'use client'

import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    category: "desktop",
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR issues

    const handleResize = () => {
      const width = window.innerWidth;
      let category = "desktop";

      if (width < 640) {
        category = "mobile";
      } else if (width >= 640 && width < 1024) {
        category = "tablet";
      } else if (width >= 1024 && width < 1440) {
        category = "laptop";
      } else {
        category = "extra-large";
      }

      setScreenSize({
        width,
        height: window.innerHeight,
        category,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial values after client-side rendering

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
