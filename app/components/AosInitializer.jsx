"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration
      once: true,     // animate only once
      mirror: false,  // do not animate out while scrolling up
    });
  }, []);

  return null; // this component doesn't render anything
};

export default AosInitializer;
