"use client"
import { useThemeContext } from "@/context/theme";import DescriptionFour from "@/components/hero_components/DescriptionFour";
import DescriptionOne from "@/components/hero_components/DescriptionOne";
import DescriptionThree from "@/components/hero_components/DescriptionThree";
import DescriptionTwo from "@/components/hero_components/DescriptionTwo";
import Hero_one from "@/components/hero_components/HeroSection";
import ProductReport from "@/components/hero_components/ProductReport";

export default function Home() {
  const [theme] = useThemeContext();
  return (
    <div className={`${theme}`}>
    <div className="text-white ">
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
