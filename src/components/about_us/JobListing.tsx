'use client'
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
  const calculateRelativeTime = (timePosted: string): string => {
    const now = new Date();
    const postedDate = new Date(timePosted);

    const diffInMilliseconds = now.getTime() - postedDate.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    // Convert to relative time
    if (diffInSeconds < 60) {
      return `Posted ${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Posted ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Posted ${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `Posted ${days} day${days > 1 ? "s" : ""} ago`;
    }
  };


  // const calculateRelativeTime = (timePosted: string): string => {
  //   const now = new Date();
  //   const postedDate = new Date(timePosted);
  //   const diffInSeconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

  //   if (diffInSeconds < 60) {
  //     return `${diffInSeconds} seconds ago`;
  //   } else if (diffInSeconds < 3600) {
  //     const minutes = Math.floor(diffInSeconds / 60);
  //     return `${minutes} minutes ago`;
  //   } else if (diffInSeconds < 86400) {
  //     const hours = Math.floor(diffInSeconds / 3600);
  //     return `${hours} hours ago`;
  //   } else {
  //     const days = Math.floor(diffInSeconds / 86400);
  //     return `${days} days ago`;
  //   }
  // };



  return (
    <>
      <div className="bg-white p-4 md:p-6 rounded-lg items-center cursor-pointer" onClick={handleToggle}>
        {/* Clickable area for the entire job listing */}
        <div className="flex justify-between items-center">
          <div className="hidden md:block text-gray-600 text-lg font-semibold mr-4 md:mr-24">
            {sNo}.
          </div>

          {/* Job Details */}
          <div className="flex-1">
            <p className="b3 sm:h4 lg:w-[618px] w-full mb-1">{title}</p>
            {/* <p className="text-gray-500 text-sm md:te4 mb-1">{jobRole}</p>
        <p className="text-gray-400 text-xs md:te4">{timePosted}</p> */}
          </div>

          {/* Toggle Button */}
          <div className="flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
              className="w-7 md:w-11 h-7 md:h-11 bg-black text-white rounded-full flex items-center justify-center text-2xl"
            >
              {isOpen ?
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="10" width="20" height="4" fill="white" />
                </svg>
                :
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="2" width="4" height="20" fill="white" />
                    <rect x="2" y="10" width="20" height="4" fill="white" />
                  </svg>
              }
              {/* {isOpen ? "-" : "+"} */}
            </button>
          </div>
        </div>

        {/* Conditionally render the job description with smooth transition */}
        <div className={`overflow-hidden transition-all duration-200 ease-in-out md:pl-28 w-4/5 text-gray-600 text-sm md:tex4 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-500 text-sm md:te4 mb-1">{jobRole}</p>
          {/* <p className="text-gray-400 text-xs md:te4">{timePosted}</p> */}
          {/* <p className="text-gray-400 text-xs md:te4">{calculateRelativeTime(timePosted)}</p> */}
          <p className="text-gray-400 text-xs md:te4">
            {calculateRelativeTime(timePosted)}
          </p>

          <p className="mt-4">{description}</p>
        </div>
      </div>
      {/* Centered horizontal line */}
      <hr className="border-gray-300" />
    </>
  );
};

export default JobListing;
