import Discription from "@/components/Discription";
import Hero from "@/components/Hero";
import ProductReport from "@/components/ProductReport";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-blue-500">
      <Hero/>
      <ProductReport/>
      <Discription/>
    </div>
  );
}
