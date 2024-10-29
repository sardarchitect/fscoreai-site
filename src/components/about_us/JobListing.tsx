'use client'
import { useState } from "react";

const JobListing = ({ sNo, title, description, timePosted, jobRole }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the isOpen state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className="bg-white p-6 rounded-lg  border-gray-200 mb-4">
  <div className="flex justify-between items-center">
    {/* Serial Number */}
    <div className="mr-4 px-8 te1 hidden md:block lg:block text-gray-600">
      {sNo}.
    </div>
    
    {/* Job Details */}
    <div className="flex-1">
      <p className="h4 md:h3 font-semibold mb-1">
        {title}
      </p>
      <p className="text-gray-500 t1  mb-1">{jobRole}</p>
      <p className="text-gray-400 te4">{timePosted}</p>
    </div>

    {/* Toggle Button */}
    <button
      onClick={handleToggle}
      className="w-8 md:w-10 h-8 md:h-10 bg-black text-white rounded-full flex items-center justify-center text-xl"
    >
      {isOpen ? "-" : "+"}
    </button>
  </div>

  {/* Conditionally render the job description if the section is open */}
  {isOpen && (
    <div className="mt-4 t1  pl-24 text-gray-600">
      <p className="w-[618px]">{description}</p>
    </div>
  )}

  {/* Divider */}
  <hr className="mt-4" />
</div>


  );
};

export default JobListing;
