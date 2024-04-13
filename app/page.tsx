import DescriptionFour from "@/components/hero_components/DescriptionFour";
import DescriptionOne from "@/components/hero_components/DescriptionOne";
import DescriptionThree from "@/components/hero_components/DescriptionThree";
import DescriptionTwo from "@/components/hero_components/DescriptionTwo";
import Hero_one from "@/components/hero_components/HeroSection";
import ProductReport from "@/components/hero_components/ProductReport";
import { CookieConsent } from "@/components/utilsComponents/CookieConsent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-blue-500">
      <Hero_one/>
      <ProductReport/>
      <DescriptionOne/>
      <DescriptionTwo/>
      <DescriptionThree/>
      <DescriptionFour/>
      <CookieConsent/>
    </div>
  );
}
