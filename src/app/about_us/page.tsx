import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <main className="mx-auto max-w-7xl items-center justify-between lg:px">
      {/* Header Section */}
      <header className="bg-white dark:bg-rgb-2-6-23 text-theme-blue dark:text-white pb-10 sm:h-screen bg-no-repeat bg-cover flex justify-center items-center">
        <div className="sm:w-3/4">
          <h1 className="text-6xl p-10">
            Empowering Architectural Innovation
            <br />
            <span className="text-blue-100">With Fscore AI</span>
          </h1>
          <p className="px-10 text-blue-100">
            We aim to transform the architectural design process by integrating 
            innovative AI solutions, making high-quality design accessible to 
            everyone and revolutionizing industry workflows.
          </p>
        </div>
        <div className="p-10 sm:block hidden rounded-lg">
       
        </div>
      </header>

      {/* Journey Section */}
      <section className="relative py-20 text-white">
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
    <div className="flex justify-between items-center px-5 sm:px-0">
      {/* Left Side - Journey */}
      <div className="w-full sm:w-1/2 text-left">
        <h2 className="text-4xl font-bold">Journey</h2>
        <p className="mt-4 text-gray-400">
          We are passionate about enhancing the way architects and drafters work. Our mission is to streamline the architectural drawing process.
        </p>
      </div>
      {/* Right Side - Since */}
      <div className="w-full sm:w-1/2 text-right">
        <h2 className="text-4xl font-bold">Since 2022</h2>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mt-12">
      {/* 4,500 Hours Saved */}
      <div className="bg-gray-800 bg-opacity-70 p-10 rounded-lg shadow-lg">
        <h3 className="text-5xl font-bold">4,500</h3>
        <p className="mt-4 text-xl text-gray-400">Hours Saved</p>
      </div>

      {/* $1.8M Cost Saved */}
      <div className="bg-gray-800 bg-opacity-70 p-10 rounded-lg shadow-lg">
        <h3 className="text-5xl font-bold">$1.8M</h3>
        <p className="mt-4 text-xl text-gray-400">Cost Saved</p>
      </div>

      {/* 20+ Trusted Enterprises */}
      <div className="bg-gray-800 bg-opacity-70 p-10 rounded-lg shadow-lg">
        <h3 className="text-5xl font-bold">20+</h3>
        <p className="mt-4 text-xl text-gray-400">Trusted Enterprises</p>
      </div>

      {/* 600+ Clients Served */}
      <div className="bg-gray-800 bg-opacity-70 p-10 rounded-lg shadow-lg">
        <h3 className="text-5xl font-bold">600+</h3>
        <p className="mt-4 text-xl text-gray-400">Clients Served</p>
      </div>
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section
  className="relative bg-white dark:bg-rgb-2-6-23 text-theme-blue dark:text-white py-20">
  {/* Container */}
  <div className="max-w-6xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-5xl font-bold mb-6">
      We aim to <span className="text-gray-800 dark:text-white">transform</span> the quality control process
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
      We are passionate about enhancing the way architects and drafters work. Our mission is to streamline the architectural drawing process.
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

  {/* Background wave effect */}
  <div
    className="relative bottom-0 left-0 w-full h-32"
    style={{
      background: 'url("/Waves.svg") no-repeat center center',
      backgroundSize: 'contain',
      backgroundPosition: 'bottom'
    }}
  ></div>
</section>

      {/* Meet the Founder Section */}
      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-5">
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
    <div className="w-full md:w-1/2 md:pl-10">
      <h2 className="text-2xl font-medium text-gray-600">Meet the <span className="font-bold">Founder</span></h2>
      <h1 className="text-6xl font-bold leading-tight mt-4">
        My Goal with <br /> 
        <span className="text-gray-800">ReviewSync</span> is <span className="text-gray-800">Simple</span>
      </h1>
      <p className="text-lg text-gray-500 mt-6">
        As an architect myself, I’ve been in the trenches—managing tight deadlines, navigating complex design requirements, and dealing with the inevitable headaches that come from catching errors late in the process.
      </p>
      <div className="mt-8">
        {/* Signature (Optional) */}
        <img src="/about_us/sign.png" alt="Signature" className="w-48" />
      </div>
    </div>
  </div>
</section>

      {/* Meet the Team Section */}
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold mb-6">Our Experts are like No Other</h2>
    <p className="text-xl text-gray-600 mb-16">
      Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
    </p>

    {/* Team Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <img
          src="/about_us/Team1.png" 
          alt="Team Member 1"
          className="rounded-lg object-cover w-48 h-64"
        />
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center">
        <img
          src="/about_us/Team2.png" 
          alt="Team Member 2"
          className="rounded-lg object-cover w-48 h-64"
        />
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center">
        <img
          src="/about_us/Team3.png" 
          alt="Team Member 3"
          className="rounded-lg object-cover w-48 h-64"
        />
      </div>

      {/* Team Member 4 */}
      <div className="flex flex-col items-center">
        <img
          src="/about_us/Team4.png" 
          alt="Team Member 4"
          className="rounded-lg object-cover w-48 h-64"
        />
      </div>

      {/* Team Member 5 */}
      <div className="flex flex-col items-center">
        <img
          src="/about_us/Team5.png" 
          alt="Team Member 5"
          className="rounded-lg object-cover w-48 h-64"
        />
      </div>
    </div>
  </div>
</section>



      {/* Call to Action (Join Us) Section */}
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold mb-6">Become a Part of our Team</h2>
    <p className="text-lg text-gray-600 mb-10">
      Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
    </p>

    {/* Job Listings */}
    <div className="space-y-6">
      {/* Job 1 */}
      <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-xl font-semibold">SaaS Designer for Homepage redesign and onboarding updates</h3>
          <p className="text-gray-500">UX/UI Design • Posted 27 minutes ago</p>
        </div>
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl">
          +
        </button>
      </div>

      {/* Job 2 */}
      <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-xl font-semibold">SaaS Designer for Homepage redesign and onboarding updates</h3>
          <p className="text-gray-500">UX/UI Design • Posted 27 minutes ago</p>
        </div>
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl">
          +
        </button>
      </div>

      {/* Job 3 */}
      <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-xl font-semibold">SaaS Designer for Homepage redesign and onboarding updates</h3>
          <p className="text-gray-500">UX/UI Design • Posted 27 minutes ago</p>
        </div>
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl">
          +
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10 text-center">
        <h2 className="text-3xl mb-5">Sign up for all the Future Updates</h2>
        <p className="mt-1 items-center">Our mission is to streamline the architectural drawing process and elevate the quality of <br></br> construction documents through cutting-edge technology.</p>
        <input
          type="email"
          placeholder="Enter your Email Address.. "
          className="p-3 rounded-lg w-100%"
        />
        <button className="bg-blue-500 p-3 rounded-lg ml-2">Subscribe</button>
      </footer>
    </main>
  );
};

export default AboutUs;
