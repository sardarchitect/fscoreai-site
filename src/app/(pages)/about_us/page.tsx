import BookDemoPopUp from "@/src/components/about_us/BookDemoPopup";
import JobListing from "@/src/components/about_us/JobListing";
import openJobsData from "@/src/components/about_us/openJobsData";
import Image from "next/image";
import React from "react";



const AboutUs = () => {
  
  return (
    <main className=" w-full">
      {/* Header Section */}
      <header className="bg-ab-bg overflow-x-hidden sm:px-[16px] md:px-[32px] lg:px-[0px] w-full mb-[66px] gap-6 md:gap-36 pt-[66px] pb-[78px]  flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="container-width flex flex-col md:flex-row gap-8 md:gap-24  ">
          {/* Left side with the main heading */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="h3 md:h2 lg:h2  leading-tight text-Charcoal-40">
              We Believe <span className="text-white">Automation </span>
              is The Next <span className="text-white">Revolution </span>
              in Architecture.
            </p>
          </div>

          {/* Right side with the mission statement */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="text-white te1 leading-relaxed">
              Our mission is to streamline the architectural drawing production
              process and elevate the quality of construction documents through
              cutting-edge technology.
            </p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px]">
        <div className="container-width lg:pb-[120px] mx-auto text-center">
          <div className="w-full mx-auto lg:mb-0 md:mb-0 mb-20 sm:w-[400px] md:w-[580px] lg:w-[830px] ">
            <p className="h3 sm:he2 text-Mercury-50 mb-4">
              <span className="text-Charcoal-40">Our</span> Vision
            </p>
            <p className="t1 text-gray-600 mb-5 ">
              Fscore AI envisions a future where architecture and engineering
              transcend traditional boundaries through the use of cutting-edge
              automation and innovation. The company believes that to deal with
              upcoming future challenges, the architectural industry will
              need the assistance of intelligent systems that can handle
              increasing demands in our built environment.
            </p>

            <p className="text-gray-600 t1">
              Fscore AI strives to be at the forefront of developing
              technologies that empower architects and engineers to achieve
              greater efficiency, productivity, and quality in their projects.
            </p>
          </div>

          {/* Team Members Grid */}
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px]  flex flex-col items-center mb-6  lg:mb-[122px]  container-width mx-auto ">
        <p className="h2 mb-11 font-medium text-gray-600 text-center lg:text-left">
          Meet the <span className="font-bold">Founder</span>
        </p>
        <div className="flex flex-col max-w-7xl md:flex-row lg:space-x-5 md:space-x-5 space-x-0 sm:text-left text-center">
          {/* Founder Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/about_us/founder.jpg" // Replace with the actual path to the founder's image
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
              <span className="text-Charcoal-40"> My</span> Goal
              <span className="text-Charcoal-40"> is to</span> Empower Architects
              <span className="text-Charcoal-40"> with</span> AI
            </p>

            {/* Description Text */}
            <p className="lg:t1 md:te1 te1 text-gray-500 mt-6  sm:mx-0 w-full sm:w-[400px] md:w-[340px] lg:w-[502px] text-center sm:text-left">
              As an architect myself, I’ve been in the trenches — managing tight
              deadlines, navigating complex design requirements, and dealing
              with the inevitable headaches that come from catching errors late
              in the process. I wish I had the tools we are developing today during my
              time as an Revit drafter.
            </p>

            {/* Signature Image */}
            <div className=" sm:block flex justify-center">
              <img
                src="/about_us/sign.png"
                alt="Signature"
                className="w-[244px] h-[128px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-white lg:px-[0px] md:px-[32px] sm:px-[16px] lg:mb-[184px] mb-10">
        <div className="container-width mx-auto text-center justify-center  flex-col flex ">
          <div className="flex text-center flex-col items-center">
            <p className="h3 md:h2 text-Mercury-50  mb-6">
              <span className="text-Charcoal-60"> Our </span> Experts
              <span className="text-Charcoal-60"> are like </span> No Other
            </p>
            <p className="te1 text-gray-600 flex  sm:w-[400px] md:w-[500px] lg:w-[798px]  mb-10">
              Our mission is to streamline the architectural drawing process and
              elevate the quality of construction documents through cutting-edge
              technology.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:space-y-0 space-y-5  justify-items-center">
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
        <div className="container-width mx-auto  items-center text-center ">
          <div className="h3 sm:h2   text-Mercury-50 mb-6">
            <span className="text-Charcoal-60">Become a</span> Part
            <span className="text-Charcoal-60"> of our </span> Team
          </div>
          <p className="te3 sm:te1 lg:w-[798px] mx-auto text-center text-gray-600 mb-10">
            At Fscore AI, we’re building more than just innovative solutions – we’re fostering a culture of collaboration,
            growth, and respect. Here, your ideas matter, your growth is supported,
            and your work makes a real impact.
          </p>

          {/* Job Listings */}
          <div className="max-w-7xl text-left">
            {/* <div className="space-y-4 max-w-7xl text-left"> */}
            {openJobsData.map((data, idx) => {
              return (
                <JobListing
                  key={idx}
                  sNo={idx + 1}
                  title={data.title}
                  description={data.description}
                  timePosted={data.timePosted}
                  jobRole={data.jobRole}
                />
              );
            })}
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
                Create <span className="text-Earth-50">Flawless</span> Drawings
                with <span className="text-Earth-50">Draftflow</span>
              </p>
              <p className="mt-6 t1 text-gray-300 max-w-lg mx-auto">
                Draftflow is a subscription-based software that provides
                real-time, context-specific assistance to architects and
                engineers during production of drawings in Autodesk Revit.
              </p>

              {/* Call-to-Action Button with Link */}
              <div className="mt-8 flex justify-center">
                <BookDemoPopUp/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
