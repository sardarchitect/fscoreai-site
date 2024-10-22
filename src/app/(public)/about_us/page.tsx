"use client"

import JobListing from "@/src/components/about_us/JobListing";
import openJobsData from "@/src/components/about_us/openJobsData";
import Image from "next/image";
import React, { useEffect } from "react";
import AnimatedCounter from "@/src/components/about_us/AnimatedCounter";




const AboutUs = () => {


  useEffect(() => {
    getOpenJobsData();
  }, [])

  const getOpenJobsData = () => {
    fetch('./src/componenets/about_us/openJobsData').then(function (res) {
      return res.json();
    })
  }
;
  return (
    <main className="mx-auto w-full items-center justify-center">
      {/* Header Section */}
      <header className="bg-white gap-10 md:gap-36 py-10 md:py-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        {/* Left side with the main heading */}
        <div className="flex justify-center">
          <p className="h2">
            Empowering Architectural <br /> Excellence
            <span className="text-gray-700"> Through Smart <br /> Quality Control</span>
          </p>
        </div>

        {/* Right side with the mission statement */}
        <div className="flex justify-center py-8 md:py-0 text-te2">
          <p className="text-gray-600 te2 md:te1">
            Our mission is to streamline the architectural <br /> drawing process and elevate the quality of <br /> construction documents through cutting-edge <br /> technology.
          </p>
        </div>
      </header>

      {/* Journey Section */}
      <section className="relative py-10 md:py-20 text-white">
        <div className="absolute bg-ab-bg inset-0 max-w-7xl">
          {/* <Image
            src="/about_us/bg-charcoal.svg" // Your SVG path
            alt="Background SVG"
            // layout=""
            objectFit="cover"
            quality={100}
            width={600}
            height={600}
          /> */}
        </div>
        

        <div className=" mx-auto text-center relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center px-5 sm:px-0">
            {/* Left Side - Journey */}
            <div className="w-full text-left mb-10 md:mb-0 md:w-1/2">
              <div className="he2 pl-4 md:pl-36">Journey</div>
              <p className="mt-4 text-gray-400 t1 pl-40 md:pl-96 sm:te3 ">
                We are passionate about enhancing the  way architects and drafters work. Our  mission is to streamline the architectural <br /> drawing process.
              </p>
            </div>
            {/* Right Side - Since */}
            <div className="w-full text-left md:text-right md:w-1/2  md:pr-96">
              <div className="h2">Since 2022</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {/* 4,500 Hours Saved */}
            <div className="bg-gray-800 bg-opacity-70 p-6 text-start md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">
                <AnimatedCounter target={4500} />
              </h3>
              <p className="mt-4 text-lg text-gray-400">Hours Saved</p>
            </div>

            {/* $1.8M Cost Saved */}
            <div className="bg-gray-800 bg-opacity-70 p-6 text-start md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">
                <AnimatedCounter target={1.8} />M
              </h3>
              <p className="mt-4 text-lg text-gray-400">Cost Saved</p>
            </div>

            {/* 20+ Trusted Enterprises */}
            <div className="bg-gray-800 bg-opacity-70 text-start p-6 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">
                <AnimatedCounter target={20} />+
              </h3>
              <p className="mt-4 text-lg text-gray-400">Trusted Enterprises</p>
            </div>

            {/* 600+ Clients Served */}
            <div className="bg-gray-800 bg-opacity-70 p-6 text-start md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">
                <AnimatedCounter target={600} />+
              </h3>
              <p className="mt-4 text-lg text-gray-400">Clients Served</p>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="h2 md:text-4xl text-Mercury-50  mb-6"><span className="text-Charcoal-60"> We aim to </span> transform  <span className="text-Charcoal-60"> the </span> quality control <span className="text-Charcoal-60">process</span></p>
          <p className="t1 text-gray-600 mb-16">
            we are passionate about enhancing the way architects and drafters work. Our mission is to streamline the architectural drawing process.  </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {/* Aim 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/qc1.png"
                alt="Aim 1"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Aim 2 */}
            <div className="flex flex-col py-9 items-center">
              <img
                src="/about_us/qc2.png"
                alt="Aim 2"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/qc3.png"
                alt="Team Member 3"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Aim 4 */}
            <div className="flex flex-col py-9 items-center">
              <img
                src="/about_us/qc4.png"
                alt="Aim 4"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Aim 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/qc5.png"
                alt="Aim 5"
                className="rounded-lg object-cover w-35 h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="bg-white py-10 md:py-20 flex flex-col items-center max-w-7xl mx-auto px-5">

        <p className="h2 lg:mb-10 mb-6 font-medium text-gray-600">Meet the <span className="font-bold">Founder</span></p>
        <div className="flex flex-col md:flex-row lg:space-x-5 md:space-x-5 space-x-0 sm:text-left text-center">
          {/* Founder Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/about_us/founder.png"  // Replace with the actual path to the founder's image
              alt="Founder"
              width={700}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Founder Text */}
          <div className="w-full md:w-1/2 ">
            <p className="lg:-mx-24 md:-mx-24 mx-auto h2 md:h1 lg:he1 font-bold text-Mercury-50 leading-tight md:pt-10">
              <span className="text-Charcoal-60"> My</span> Goal <span className="text-Charcoal-60">with </span> <br />
              <span className="text-Charcoal-60">ReviewSync</span><br className="hidden md:block lg:block"></br> is Simple
            </p>
            <p className="lg:t1 md:text-sm text-sm text-gray-500 mt-6">
              As an architect myself, I’ve been in the trenches—managing <br /> tight deadlines, navigating complex design  requirements, and <br /> dealing with the inevitable headaches that come from catching errors <br />  late in the process.
            </p>
            <div className="mt-8 sm:block flex justify-center">
              {/* Signature (Optional) */}
              <img src="/about_us/sign.png" alt="Signature" className="w-48 " />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="h3 md:h2 text-Mercury-50 font-bold mb-6"><span className="text-Charcoal-60"> Our </span> Experts <span className="text-Charcoal-60"> are like </span> No Other</p>
          <p className="te1 text-gray-600 mb-16">
            Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
          </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/Team1.png"
                alt="Team Member 1"
                className="rounded-lg object-cover w-50 h-64"
              />
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col py-9 items-center">
              <img
                src="/about_us/Team2.png"
                alt="Team Member 2"
                className="rounded-lg object-cover w-50 h-64"
              />
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/Team3.png"
                alt="Team Member 3"
                className="rounded-lg object-cover w-50 h-64"
              />
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col py-9 items-center">
              <img
                src="/about_us/Team4.png"
                alt="Team Member 4"
                className="rounded-lg object-cover w-50 h-64"
              />
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col items-center ">
              <img
                src="/about_us/Team5.png"
                alt="Team Member 5"
                className="rounded-lg object-cover w-50 h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Join Us) Section */}
      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="h4 sm:h3 md:h2 font-bold text-Mercury-50 mb-6"><span className="text-Charcoal-60">Become a</span> Part of < span className="text-Charcoal-60"> our </span> Team</div>
          <p className="te3 sm:te1 text-gray-600 mb-10">
            Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
          </p>

          {/* Job Listings */}
          <div className="space-y-4 text-left">
            {
              openJobsData.map((data, idx) => {
                return(
                  <JobListing 
                    key={idx}
                    sNo = {idx+1}
                    title={data.title} 
                    description={data.description} 
                    timePosted={data.timePosted}
                    jobRole={data.jobRole}
                    />
                )
              })
            }
          </div>
        </div>
      </section>



    </main>
  );
};

export default AboutUs;
