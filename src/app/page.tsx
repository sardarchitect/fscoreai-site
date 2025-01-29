"use client"
import DrawingReviews from "@/src/components/hero_components/DrawingReviews";
import DraftDemo from "@/src/components/hero_components/DraftDemo";
import CommunitySection from "@/src/components/hero_components/CommunitySection";
import Hero_one from "@/src/components/hero_components/HeroSection";
import AboutDraftFlow from "@/src/components/hero_components/AboutDraftFlow";
import FAQSection  from "@/src/components/hero_components/FAQSection";
import StackedCards from "../components/hero_components/StackedCards";
import React, { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);



return (

    
<div className="">
  <Hero_one />
  <AboutDraftFlow />
  <DraftDemo />
  <StackedCards />
  <CommunitySection />
  <DrawingReviews/>
  <FAQSection />

</div>
 
);
};


