"use client"
import { useThemeContext } from "@/src/context/theme";
import DescriptionFour from "@/src/components/hero_components/DescriptionFour";
import DescriptionOne from "@/src/components/hero_components/DescriptionOne";
import DescriptionThree from "@/src/components/hero_components/DescriptionThree";
import DescriptionTwo from "@/src/components/hero_components/DescriptionTwo";
import Hero_one from "@/src/components/hero_components/HeroSection";
import ProductReport from "@/src/components/hero_components/ProductReport";

export default function Home() {

  
  const [theme] = useThemeContext();
  return (
    <div className={`${theme} flex flex-col items-center justify-center min-h-screen text-center`}>
    <div className="text-white flex flex-col items-center w-full max-w-7xl mx-auto ">
      <Hero_one/>
      <ProductReport/>
      <DescriptionOne/>
      <DescriptionTwo/>
      <DescriptionThree/>
      <DescriptionFour/>
    </div>

    </div>
  );
}
