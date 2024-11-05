"use client";
import { useState } from "react";

// Define prop types for the JobListing component
interface JobListingProps {
  sNo: number;
  title: string;
  description: string;
  timePosted: string;
  jobRole: string;
}

const JobListing: React.FC<JobListingProps> = ({ sNo, title, description, timePosted, jobRole }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggles the isOpen state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg mb-4">
      {/* Clickable area for the entire job listing */}
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
        {/* Serial Number for larger screens */}
        <div className="hidden md:block text-gray-600 text-lg font-semibold mr-4 md:mr-24">
          {sNo}.
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <p className="b3 sm:h4 mb-1">{title}</p>
          <p className="text-gray-500 text-sm md:te4 mb-1">{jobRole}</p>
          <p className="text-gray-400 text-xs md:te4">{timePosted}</p>
        </div>

        {/* Toggle Button */}
        <div className="flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents toggle when clicking the button only
              handleToggle();
            }}
            className="w-8 md:w-12 h-8 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-lg"
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
      </div>

      {/* Conditionally render the job description if the section is open */}
      {isOpen && (
        <div className="mt-4 pl-2 md:pl-10 text-gray-600 text-sm md:tex4">
          <p>{description}</p>
        </div>
      )}

      {/* Divider */}
      <hr className="mt-4" />
    </div>
  );
};

export default JobListing;
