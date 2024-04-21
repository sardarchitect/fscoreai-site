import TestimonialsCards from "@/components/about_us/TestimonialsCards";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <main>
        <header className="bg-about-us-header text-white pb-10 sm:h-screen bg-no-repeat bg bg-cover sm:flex justify-center items-center">
          <div className="sm:w-3/4">
            <h1 className="text-6xl p-10">
              About Us
              <br />
              <span className="text-blue-100">Lorem ipsum dolor sit.</span>
            </h1>
            <p className="px-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              magnam sapiente veritatis itaque mollitia pariatur sed, excepturi,
              neque earum dolor sint, possimus corrupti corporis explicabo.
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
        <section className="bg-black text-white">
          <h2 className="text-5xl text-center pt-20 p-10">What are we</h2>
          <div className="grid sm:grid-cols-3">
          <TestimonialsCards name="abc" profession="developer" description="Testimonials"/>
          <TestimonialsCards name="abc" profession="developer" description="Testimonials"/>
          <TestimonialsCards name="abc" profession="developer" description="Testimonials"/>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
