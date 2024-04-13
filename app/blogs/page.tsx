"use client";
import BlogContentDisplay from "@/components/blog_components/BlogContentDisplay";
import BlogPreview from "@/components/blog_components/blogPreview";
import getBlogMetadata from "@/components/blog_components/getBlogMetadata";
import React, { useState, useEffect, MouseEventHandler } from "react";

const BlogsPage = () => {
  const [data, setData] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);

  function navigatePage(fileName: string){
      const slug = fileName.replace(".md", "")
    window.location.href = slug
  }
  
  const hendleNextPrevBtn = (check: string) => {
    if (contentIndex < data.length - 1) {
      if (check === "next" && contentIndex < 5) {
        setContentIndex(contentIndex + 1);
      } else if (check === "prev") {
        setContentIndex(contentIndex + 1);
      }
    } else {
      setContentIndex(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/articles.json");
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
  var titlesArray = data.map(function(item) {
    return item.title;
});



  return (
    <div className="bg-rgb-2-6-23">
      <div className="lg:px-10 w-5/6 m-auto">
        <div className="">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-10 py-5"> 
    {titlesArray.map((title, index) => (
      <div key={index} className="bg-blue-200 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => {navigatePage(data[index].contentFile)}}>
      <p className="font-bold text-blue-800">{title}</p>
      <p className="text-sm text-blue-600">Additional text goes here...</p>
    </div>  ))}
  </div>

          {/* <BlogContentDisplay content={data[contentIndex]} /> */}
          
        <div className="hidden">
          {/* <div className="col-span-5 hidden"> */}
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
    </div>
  );
};

export default BlogsPage;
