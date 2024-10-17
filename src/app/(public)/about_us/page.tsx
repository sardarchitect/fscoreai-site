import JobListing from "@/src/components/about_us/JobListing";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <main className="mx-auto w-full items-center justify-center">
      {/* Header Section */}
      <header className="bg-white gap-10 md:gap-36 py-10 md:py-20 h-auto md:h-80 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        {/* Left side with the main heading */}
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Empowering Architectural <br /> Excellence
            <span className="text-gray-700"> Through Smart <br /> Quality Control</span>
          </h1>
        </div>

        {/* Right side with the mission statement */}
        <div className="flex justify-center py-8 md:py-0 text-te2">
          <p className="text-gray-600 text-sm md:text-base">
            Our mission is to streamline the architectural <br /> drawing process and elevate the quality of <br /> construction documents through cutting-edge <br /> technology.
          </p>
        </div>
      </header>

      {/* Journey Section */}
      <section className="relative py-10 md:py-20 text-white">
        {/* SVG Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about_us/bg-charcoal.svg"  // Replace with your actual SVG image path
            alt="Background SVG"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center px-5 sm:px-0">
            {/* Left Side - Journey */}
            <div className="w-full text-left mb-10 md:mb-0 md:w-1/2">
              <h2 className="he2 md:text-4xl sm:text-2xl pl-4 md:pl-36">Journey</h2>
              <p className="mt-4 text-gray-400 t1 pl-4 md:pl-72 sm:text-2xl md:text-base">
                We are passionate about enhancing the <br /> way architects and drafters work. Our <br /> mission is to streamline the architectural <br /> drawing process.
              </p>
            </div>
            {/* Right Side - Since */}
            <div className="w-full text-left md:text-right md:w-1/2 pr-4 md:pr-96">
              <h2 className="sm:he2 md:text-4xl h3 ">Since 2022</h2>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {/* 4,500 Hours Saved */}
            <div className="bg-gray-800 bg-opacity-70 p-6 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">4,500</h3>
              <p className="mt-4 text-lg text-gray-400">Hours Saved</p>
            </div>

            {/* $1.8M Cost Saved */}
            <div className="bg-gray-800 bg-opacity-70 p-6 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">$1.8M</h3>
              <p className="mt-4 text-lg text-gray-400">Cost Saved</p>
            </div>

            {/* 20+ Trusted Enterprises */}
            <div className="bg-gray-800 bg-opacity-70 p-6 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">20+</h3>
              <p className="mt-4 text-lg text-gray-400">Trusted Enterprises</p>
            </div>

            {/* 600+ Clients Served */}
            <div className="bg-gray-800 bg-opacity-70 p-6 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold">600+</h3>
              <p className="mt-4 text-lg text-gray-400">Clients Served</p>
            </div>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="relative bg-white text-theme-blue py-10 md:py-20">
        {/* Container */}
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We aim to <span className="text-gray-800">transform</span> the quality control process
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We are passionate about enhancing the way architects and drafters work. Our mission is to streamline the architectural drawing process.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="/about_us/aim1.png"
                alt="Team at work"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="/about_us/aim 2.png"
                alt="Architectural plans"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="/about_us/aim 3.png"
                alt="Group discussion"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 4 */}
            <div className="relative">
              <img
                src="/about_us/aim 4.png"
                alt="Building construction"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="bg-white py-10 md:py-20 flex flex-col items-center max-w-7xl mx-auto px-5">

      <h2 className="text-2xl lg:mb-10 mb-6 font-medium text-gray-600">Meet the <span className="font-bold">Founder</span></h2>
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
            <h1 className="lg:-mx-24 md:-mx-24 mx-auto text-4xl md:text-6xl lg:text-7xl font-bold text-Mercury-50 leading-tight md:pt-10">
              <span className="text-Charcoal-60"> My</span> Goal <span className="text-Charcoal-60">with </span> <br />
              <span className="text-Charcoal-60">ReviewSync</span><br className="hidden md:block lg:block"></br> is Simple
            </h1>
            <p className="lg:text-lg md:text-sm text-sm text-gray-500 mt-6">
              As an architect myself, I’ve been in the trenches—managing tight deadlines, navigating complex design requirements, and dealing with the inevitable headaches that come from catching errors late in the process.
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
          <h2 className="text-3xl md:text-4xl text-Mercury-50 font-bold mb-6"><span className="text-Charcoal-60"> Our </span> Experts <span className="text-Charcoal-60"> are like </span> No Other</h2>
          <p className="text-xl text-gray-600 mb-16">
            Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
          </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/Team1.png"
                alt="Team Member 1"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col py-9 items-center">
              <img
                src="/about_us/Team2.png"
                alt="Team Member 2"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/Team3.png"
                alt="Team Member 3"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col py-9 items-center">
              <img
                src="/about_us/Team4.png"
                alt="Team Member 4"
                className="rounded-lg object-cover w-40 h-64"
              />
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/about_us/Team5.png"
                alt="Team Member 5"
                className="rounded-lg object-cover w-35 h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Join Us) Section */}
      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-Mercury-50 mb-6"><span className="text-Charcoal-60">Become a</span> Part of < span className="text-Charcoal-60"> our </span> Team</div>
          <p className="text-base sm:text-lg text-gray-600 mb-10">
            Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
          </p>

          {/* Job Listings */}
          <div className="space-y-4 text-left">
            {/* Job 1 */}
            <JobListing
              title="01. SaaS Designer for Homepage redesign and onboarding updates"
              description="Looking for an experienced UX/UI designer to redesign our homepage and improve our onboarding process. Experience in SaaS design is a must."
              timePosted="UX/UI Design • Posted 27 minutes ago"
            />

            {/* Job 2 */}
            <JobListing
              title="02. Frontend Developer with React Experience"
              description="We need a talented frontend developer with experience in React.js to build new features for our platform. Must have 2+ years of experience."
              timePosted="Frontend Development • Posted 2 days ago"
            />

            {/* Job 3 */}
            <JobListing
              title="03. Backend Developer with Node.js Expertise"
              description="Join our team as a backend developer. Expertise in Node.js, REST APIs, and cloud infrastructure is required. Work with a fast-paced team."
              timePosted="Backend Development • Posted 3 days ago"
            />
          </div>
        </div>
      </section>



    </main>
  );
};

export default AboutUs;
