"use client";
import TestimonialsCards from "@/components/about_us/TestimonialsCards";
import { useThemeContext } from "@/context/theme";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const [theme, setTheme] = useThemeContext();
  return (
    <>
      <main className={`${theme} mx-auto  max-w-7xl items-center justify-between  lg:px`}>
        <header className="bg-white dark:bg-rgb-2-6-23 text-theme-blue dark:text-white pb-10 sm:h-screen bg-no-repeat bg bg-cover sm:flex justify-center items-center">
          <div className="sm:w-3/4">
            <h1 className="text-6xl p-10">
              About Us
              <br />
              <span className="text-blue-100">Fscore AI's envisions a future</span>
            </h1>
            <p className="px-10 text-blue-100 ">
            Where architecture and engineering transcend traditional boundaries through the use of cutting-edge automation and innovation. We believe that the full toolset of architectural creativity should be available to a wider audience across the globe, democratizing good design to those who are unable to afford it otherwise. We also believe that the frustration of architects comes from the inefficiencies of their workflows, removing these inefficiencies will lead to a healthier industry.
            </p>
          </div>
          <div className="p-10 sm:block hidden rounded-lg">
            <Image
              src={"/blogs_images/img1.png"}
              alt="about us"
              height={120}
              width={500}
            />
          </div>
        </header>

        {/* middle section */}
        <section className="dark:text-white dark:bg-rgb-2-6-23 bg-white text-theme-blue">
          <h2 className="text-5xl text-center pt-20 p-10">What are we</h2>
          <div className="flex m-auto w-4/5">
            {/* <div className="grid sm:grid-cols-3"> */}
            <TestimonialsCards
              name="Permider Singh"
              profession="Developer"
              description="Testimonials"
            />
            <TestimonialsCards
              name="Arvinder Singh"
              profession="Architecture developer"
              description="Testimonials"
            />
            {/* <TestimonialsCards name="abc" profession="developer" description="Testimonials"/> */}
          </div>
          <Image
          src="/neuro_image.svg"
          alt="image"
          width={200}
          height={700}
          style={{
            objectFit: "cover",
          }}
          className="fixed w-screen left-0 top-0 h-full -z-50"
        />
        </section>
      </main>
    </>
  );
};

export default AboutUs;
