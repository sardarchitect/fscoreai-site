"use client"
import { useThemeContext } from "@/src/context/theme";
import DescriptionFour from "@/src/components/hero_components/DescriptionFour";
import DescriptionOne from "@/src/components/hero_components/DescriptionOne";
import DescriptionThree from "@/src/components/hero_components/DescriptionThree";
import DescriptionTwo from "@/src/components/hero_components/DescriptionTwo";
import Hero_one from "@/src/components/hero_components/HeroSection";
import ProductReport from "@/src/components/hero_components/ProductReport";
import { useSession } from "next-auth/react";
import StackedCards from "../components/hero_components/StackedCards";

export default function Home() {

  
  const [theme] = useThemeContext();
  const { data: session, status, update } = useSession()

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

  return (
    <div className="">
    <div className="">
    {/* <div className="text-white flex flex-col items-center w-full justify-center m-auto "> */}
      <Hero_one/>
      <ProductReport/>
      <DescriptionOne/>
      {/* <DescriptionTwo/> */}
      <StackedCards/>
      <DescriptionThree/>
      <DescriptionFour/>
    </div>

    </div>
  );
}




