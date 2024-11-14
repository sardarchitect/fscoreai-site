"use client"

import JobListing from "@/src/components/about_us/JobListing";
import openJobsData from "@/src/components/about_us/openJobsData";
import Image from "next/image";
import React, { useEffect } from "react";
import AnimatedCounter from "@/src/components/about_us/AnimatedCounter";
import Link from "next/link";
import DemoForm from "@/src/components/utilsComponents/DemoForm";
import { useFormPopUpContext } from "@/src/context/formPopup";




const AboutUs = () => {
  const [showPopup, setShowPopup] = useFormPopUpContext();

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
    <main className=" w-full items-center justify-center">
      {/* Header Section */}
      <header className="bg-ab-bg lg:px-[0px] md:px-[32px] sm:px-[16px] w-full mt-[78px] sm:mt-10 mb-[66px] md:mt-20 gap-6 md:gap-36 pt-[66px] pb-[78px]  flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="container-width flex flex-col md:flex-row gap-8 md:gap-24  ">
          {/* Left side with the main heading */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="text-white h3 md:h2 lg:h2  leading-tight">
           <span className="text-Charcoal-40"> We Believe</span> Automation is The Next Revolution <span className="text-Charcoal-40"> in Architecture </span>
            </p>
          </div>

          {/* Right side with the mission statement */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
            Our mission is to streamline the architectural drawing production process and elevate the quality of construction documents through cutting-edge technology.
            </p>
          </div>
        </div>
      </header>




      {/* Mission Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px]">
        <div className="container-width pb-[120px] mx-auto text-center">

          <div className="w-full mx-auto mb-20 sm:w-[400px] md:w-[580px] lg:w-[830px] ">
            <p className="h3 sm:he2 text-Mercury-50 mb-4">
              <span className="text-Charcoal-60">Our</span> Mission
            </p>
            <p className="t1 text-gray-600 mb-10 ">
              Fscore AI envisions a future where architecture and engineering transcend traditional boundaries through the use of cutting-edge automation and innovation. The company believes that to deal with the upcoming future challenges, the architectural industry will need the assistance of intelligent systems that can handle the additional stressors caused by increasing amounts of demand in our built environment.
            </p>

            <p className="text-gray-600 t1">Fscore AI strives to be at the forefront of developing technologies that empower architects and engineers to achieve greater efficiency, productivity, and quality in their projects.</p>
          </div>


          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-items-center ">
            {/* Aim 1 */}
            <div className=" w-[185px] h-[360px] flex-col items-center hidden sm:block">
              <img
                src="/about_us/qc1.png"
                alt="Aim 1"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Aim 2 */}
            <div className=" flex-col w-[185px] h-[360px] py-0 sm:py-9 items-center hidden sm:block">
              <img
                src="/about_us/qc2.png"
                alt="Aim 2"
                className="rounded-lg object-coverw-[185px] h-[360px]"
              />
            </div>

            {/* Team Member 3 */}
            <div className="w-[185px] h-[360px] flex-col items-center hidden sm:block">
              <img
                src="/about_us/qc3.png"
                alt="Team Member 3"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Aim 4 */}
            <div className="flex-col w-[185px] h-[360px] py-0 sm:py-9 items-center hidden sm:block">
              <img
                src="/about_us/qc4.png"
                alt="Aim 4"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Aim 5 */}
            <div className="flex-col w-[185px] h-[360px] items-center hidden sm:block">
              <img
                src="/about_us/qc5.png"
                alt="Aim 5"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px]  flex flex-col items-center mb-[122px]  container-width mx-auto ">

        <p className="h2 mb-11 font-medium text-gray-600 text-center lg:text-left">
          Meet the <span className="font-bold">Founder</span>
        </p>
        <div className="flex flex-col max-w-7xl md:flex-row lg:space-x-5 md:space-x-5 space-x-0 sm:text-left text-center">
          {/* Founder Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/about_us/founder.jpg"  // Replace with the actual path to the founder's image
              alt="Founder"
              width={700}
              height={600}
              className=" object-cover"
            />
          </div>

          {/* Founder Text */}
          <div className="w-full md:w-1/2">
  {/* Goal Text */}
  <p className="lg:-mx-44 md:-mx-32  sm:mx-0 h2 md:h1 lg:he1 w-full sm:w-[400px] md:w-[492px] lg:w-[678px] text-Mercury-50 leading-tight  text-center sm:text-left">
   <span className="text-Charcoal-60"> My</span> Goal <span className="text-Charcoal-60">is to</span> Empower Architects <span className="text-Charcoal-60">with</span> AI
  </p>

  {/* Description Text */}
  <p className="lg:t1 md:text-sm text-sm text-gray-500 mt-6  sm:mx-0 w-full sm:w-[400px] md:w-[340px] lg:w-[502px] text-center sm:text-left">
    As an architect myself, I’ve been in the trenches—managing <br /> tight deadlines, navigating complex design requirements, and dealing with the inevitable headaches that come from catching errors <br /> late in the process.
  </p>

  {/* Signature Image */}
  <div className=" sm:block flex justify-center">
    <img src="/about_us/sign.png" alt="Signature" className="w-48" />
  </div>
</div>


        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px] mb-[108px]">
        <div className="container-width mx-auto text-center justify-center  flex-col flex ">
          <div className="flex text-center flex-col items-center">
          <p className="h3 md:h2 text-Mercury-50  mb-6"><span className="text-Charcoal-60"> Our </span> Experts <span className="text-Charcoal-60"> are like </span> No Other</p>
          <p className="te1 text-gray-600 flex  sm:w-[400px] md:w-[500px] lg:w-[798px]  mb-16">
            Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
          </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-28 justify-items-center">
            {/* Team Member 1 */}
            <div className="flex flex-col w-[185px] h-[360px] justify-center items-center">
              <img
                src="/about_us/Shilpa.png"
                alt="Team Member 1"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col py-0 sm:py-9  w-[185px] h-[360px] items-center">
              <img
                src="/about_us/Team2.png"
                alt="Team Member 2"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col w-[185px] h-[360px] items-center">
              <img
                src="/about_us/Team3.png"
                alt="Team Member 3"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col py-0 sm:py-9 w-[185px] h-[360px] items-center">
              <img
                src="/about_us/Team4.png"
                alt="Team Member 4"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col w-[185px] h-[360px] items-center ">
              <img
                src="/about_us/Team5.png"
                alt="Team Member 5"
                className="rounded-lg object-cover w-[185px] h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Join Us) Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px] mb-[98px]">
        <div className="container-width mx-auto text-center ">
          <div className="h3 sm:h2   text-Mercury-50 mb-6"><span className="text-Charcoal-60">Become a</span> Part of < span className="text-Charcoal-60"> our </span> Team</div>
          <p className="te3 sm:te1 text-gray-600 mb-10">
            Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
          </p>

          {/* Job Listings */}
          <div className="space-y-4 max-w-7xl text-left">
            {
              openJobsData.map((data, idx) => {
                return (
                  <JobListing
                    key={idx}
                    sNo={idx + 1}
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

      <section
        className="relative lg:px-[0px] md:px-[32px] sm:px-[16px] w-full h-[460px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(/home/Blue-bg.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for darkening the background slightly */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        {/* Content Section */}
        <div className="relative z-10 container-width  mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
          {/* Centered Text in Grid Layout */}
          <div className="col-span-12 flex items-center justify-center">
            <div className="text-center px-8">
              <p className="sm:he2 h3 text-white">
                Create <span className="text-Earth-50">Flawless</span> Drawings with{" "}
                <span className="text-Earth-50">Draftflow</span>
              </p>
              <p className="mt-6 t1 text-gray-300 max-w-lg mx-auto">
                Draftflow is a subscription-based software that provides real-time, context-specific assistance to architects and engineers during production of drawings in Autodesk Revit.
              </p>

              {/* Call-to-Action Button with Link */}
              <div className="mt-8 flex justify-center">
                <div onClick={() => setShowPopup(!showPopup)} className="bg-Neptune-50  text-white flex justify-center px-6 py-5 w-52 rounded-l-lg rounded-r-lg c1 hover:bg-Earth-50 cursor-pointer">
                  Book a Demo
                  <DemoForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
};

export default AboutUs;























{/* Journey Section */ }
// <section className="relative py-10 md:py-20  text-white">
//   <div className="absolute bg-ab-bg inset-0 ">
//     {/* <Image
//       src="/about_us/bg-charcoal.svg" // Your SVG path
//       alt="Background SVG"
//       // layout=""
//       objectFit="cover"
//       quality={100}
//       width={600}
//       height={600}
//     /> */}
//   </div>


//   <div className=" max-w-7xl mx-auto text-center pt-0 mb-10 py-0 relative z-10">
//     <div className="flex flex-col md:flex-row justify-between text-center md:text-left pt-0  mt-0 items-center gap-6  px-5 sm:px-0">
//       <div className="w-full sm:w-[33%] h2 sm:he2 mb-0 sm:mb-5 text-center md:text-left lg:text-right ">Journey</div>
//       <div className="w-full sm:w-[33%] t1 text-[#ADADAD] sm:mt-0 md:mt-0 lg:mt-[60px]">we are passionate about enhancing the way architects and drafters work. Our mission is to streamline the architectural drawing process.</div>
//       <div className="w-full sm:w-[33%] h2 sm:he2 sm:mt-0 md:mt-0 lg:mt-[100px]">Since 2022</div>
//     </div>
//     <div className="grid grid-cols-1 sm:pl-5 sm:pr-5 pl-5 pr-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
//       {/* 4,500 Hours Saved */}
//       <div className="bg-gray-800 bg-opacity-70 p-6 text-center sm:text-start md:p-10 rounded-lg shadow-lg">
//         <p className="h3 md:he3 lg:he2">
//           <AnimatedCounter target={4500} />
//         </p>
//         <p className="mt-4 text-lg text-gray-400">Hours Saved</p>
//       </div>

//       {/* $1.8M Cost Saved */}
//       <div className="bg-gray-800 bg-opacity-70 p-6 text-center sm:text-start md:p-10 rounded-lg shadow-lg">
//         <p className="h3 md:he3 lg:he2">
//           <AnimatedCounter target={1.8} />M
//         </p>
//         <p className="mt-4 text-lg text-gray-400">Cost Saved</p>
//       </div>

//       {/* 20+ Trusted Enterprises */}
//       <div className="bg-gray-800 bg-opacity-70 text-center sm:text-start p-6 md:p-10 rounded-lg shadow-lg">
//         <p className="h3 md:he3 lg:he2 ">
//           <AnimatedCounter target={20} />+
//         </p>
//         <p className="mt-4 text-lg text-gray-400">Trusted Enterprises</p>
//       </div>

//       {/* 600+ Clients Served */}
//       <div className="bg-gray-800 bg-opacity-70 p-6 text-center sm:text-start md:p-10 rounded-lg shadow-lg">
//         <p className="h3 md:he3 lg:he2">
//           <AnimatedCounter target={600} />+
//         </p>
//         <p className="mt-4 text-lg text-gray-400">Clients Served</p>
//       </div>
//     </div>
//   </div>
// </section>