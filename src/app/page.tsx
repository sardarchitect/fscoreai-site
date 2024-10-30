"use client"
import { useThemeContext } from "@/src/context/theme";
import DescriptionFour from "@/src/components/hero_components/DescriptionFour";
import DescriptionFive from "@/src/components/hero_components/DescriptionFive";
import DescriptionOne from "@/src/components/hero_components/DescriptionOne";
import DescriptionThree from "@/src/components/hero_components/DescriptionThree";
import DescriptionTwo from "@/src/components/hero_components/DescriptionTwo";
import Hero_one from "@/src/components/hero_components/HeroSection";
import ProductReport from "@/src/components/hero_components/ProductReport";
import { useSession } from "next-auth/react";
import StackedCards from "../components/hero_components/StackedCards";
import VerticelStackedCards from "../components/hero_components/VerticalStackedCards";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {

  const [theme] = useThemeContext();
  const { data: session, status, update } = useSession()
  
  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo(0, 0);
  }, []);

  // // Polling the session every 1 hour
  // useEffect(() => {
  //   const interval = setInterval(() => update(), 1000 * 12)
  //   return () => clearInterval(interval)
  // }, [update])

  // // Listen for when the page is visible, if the user switches tabs
  // // and makes our tab visible again, re-fetch the session
  // useEffect(() => {
  //   const visibilityHandler = () =>
  //     document.visibilityState === "visible" && update()
  //   window.addEventListener("visibilitychange", visibilityHandler, false)
  //   return () =>
  //     window.removeEventListener("visibilitychange", visibilityHandler, false)
  // }, [update])
// Explicitly type the ref as an array of HTMLDivElement or null
const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Custom scroll function to animate scrolling
  const scrollToElement = (element: HTMLElement, duration: number) => {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1
      const easing = progress * (2 - progress); // Easing function (ease-in-out)

      window.scrollTo(0, startPosition + distance * easing);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.001, // Trigger when 1% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          // Smoothly scroll to the intersecting element
          if (entry.target.classList.contains('DescriptionFour')) {
            scrollToElement(entry.target, 500); // Adjust the duration if necessary
        } else {
          scrollToElement(entry.target, 500);
        }
        }
      });
    }, observerOptions);

    // Start observing each section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

return (
  <div className="relative">
  <div ref={(el) => { sectionsRef.current[0] = el; }}>
    <Hero_one />
  </div>
  <div ref={(el) => { sectionsRef.current[1] = el; }}>
    <ProductReport />
  </div>
  {/* <div ref={(el) => { sectionsRef.current[2] = el; }} className=""> */}
  <div  className="">
    <DescriptionOne />
  </div>
  <div ref={(el) => { sectionsRef.current[3] = el; }}>
   <StackedCards />
  </div>
  <div ref={(el) => { sectionsRef.current[4] = el; }} className="h-full min-h-screen">
    <DescriptionThree />
  </div>
  {/* <div ref={(el) => { sectionsRef.current[5] = el; }} className="DescriptionFour h-full min-h-screen"> */}
    <DescriptionFour />
  {/* </div> */}
  <div ref={(el) => { sectionsRef.current[6] = el; }} className="h-full min-h-screen">
    <DescriptionFive />
  </div>
  
</div>
);
};

    
// <div className="">
// {/* <div className="text-white flex flex-col items-center w-full justify-center m-auto "> */}

//   <Hero_one />
//   <ProductReport />
//   <DescriptionOne ></DescriptionOne>
// {/* <DescriptionTwo/> */}
//   <StackedCards />
//   <DescriptionThree />
//   <DescriptionFour />
//   <DescriptionFive />

// </div>





{/* <div className="relative "> 
  <div className="sticky z-[1] top-0 "> 
    <Hero_one />
  </div>
  <div className="sticky z-[2] top-0">
    <ProductReport />
  </div>
  <div className="sticky z-[3] top-0">
    <DescriptionOne />
  </div>
  <div className="sticky z-[4] top-0 bg-white " >
    <StackedCards />
  </div>
  <div className="sticky top-0  z-[5]">
    <DescriptionThree />
  </div>
  <div className="sticky z-[6] top-0 ">
    <DescriptionFour />
  </div>
  <div className="sticky z-[7] top-0">
    <DescriptionFive />
  </div>
</div> */}




// <div className="h-screen  snap-mandatory overflow-y-scroll snap-y"> 
//   <div className="snap-start  snap-always "> 
//     <Hero_one />
//   </div>
//   <div className="snap-start  snap-always ">
//     <ProductReport />
//   </div>
//   <div className="snap-start  snap-always">
//     <DescriptionOne />
//   </div>
//   <div className="snap-start  snap-always bg-white " >
//     <StackedCards />
//   </div>
//   <div className="snap-start  snap-always">
//     <DescriptionThree />
//   </div>
//   <div className="snap-start  snap-always ">
//     <DescriptionFour />
//   </div>
//   <div className="snap-start  snap-always">
//     <DescriptionFive />
//   </div>
// </div>
