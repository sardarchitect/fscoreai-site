"use client";
import { useState } from "react";

interface JobListingProps {
  sNo: number;
  title: string;
  description: string;
  timePosted: string;
  jobRole: string;
}

const JobListing: React.FC<JobListingProps> = ({ sNo, title, description, timePosted, jobRole }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg mb-4">
      {/* Clickable area for the entire job listing */}
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
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
              e.stopPropagation();
              handleToggle();
            }}
            className="w-8 md:w-12 h-8 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-lg"
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
      </div>

      {/* Conditionally render the job description with smooth transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[200px] opacity-100 mt-4 pl-2 md:pl-28 w-4/5 text-gray-600 text-sm md:tex4' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{description}</p>
      </div>

      {/* Centered horizontal line */}
      <hr className="mt-4 border-gray-300" />
    </div>
  );
};

export default JobListing;
