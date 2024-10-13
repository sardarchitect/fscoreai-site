'use client'
import { useState } from "react";

const JobListing = ({ title, description, timePosted }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the isOpen state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-gray-500">{timePosted}</p>
        </div>
        <button
          onClick={handleToggle}
          className="w-8 md:w-10 h-8 md:h-10 bg-black text-white rounded-full flex items-center justify-center text-xl"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {/* Conditionally render the job description if the section is open */}
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default JobListing;
