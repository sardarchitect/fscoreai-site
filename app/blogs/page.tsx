"use client";
import BlogContentDisplay from "@/components/BlogContentDisplay";

import React, { useState, useEffect, MouseEventHandler } from "react";

const BlogsPage = () => {
  const [data, setData] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);
console.log(data.length);

  const hendleNextPrevBtn = (check:string) => {
    if(contentIndex < 4){
      if(check === "next" && contentIndex < 5) {
        setContentIndex(contentIndex + 1);
      }
      else if(check === "prev"){
        setContentIndex(contentIndex + 1);
      }
    }else{
      setContentIndex(0);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dummyContent.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="px-4 lg:px-20">
        <div className="w-2/3 m-auto">
        {/* <div className="grid sm:grid-cols-9 gap-16"> */}
          <div className="">
          {/* <div className="col-span-6"> */}
            <BlogContentDisplay content={data[contentIndex]} />

            <div className="flex justify-between w-full lg:w-auto m-10">
              <button 
              className="bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={(e) => hendleNextPrevBtn("prev")}
              >
                Prev
              </button>
              <button className="bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={(e) => hendleNextPrevBtn("next")}
              >
                Next
              </button>
            </div>
          </div>

          <div className="col-span-3 hidden">
          {/* <div className="col-span-3 hidden sm:block "> */}
            <div className="bg-white p-10 shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>

              <div className="flex items-center mb-2">
                <img
                  src="latest-post-thumbnail.jpg"
                  alt="Latest Post Thumbnail"
                  className="w-16 h-16 mr-2"
                />

                <p className="text-blue-500">Latest Post Title</p>
              </div>

              <div className="bg-gray-200 p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-1 px-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
