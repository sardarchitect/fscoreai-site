"use client";
import React, { useState, useEffect } from "react";
import matter from "gray-matter";

// Pagination Component
const Pagination = ({ totalItems, itemsPerPage = 6, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

// Blog Page Component
const BlogsPage = () => {
  const [data, setData] = useState([]); // Raw JSON data
  const [getMetadata, setMetaData] = useState([]); // Parsed metadata for blogs
  const [metadataLength, setMetadataLength] = useState(0); // Number of blogs
  const [currentItems, setCurrentItems] = useState([]); // Blogs displayed on the current page
  const [currentPage, setCurrentPage] = useState(1); // Current pagination page

  // Fetch blog data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/articles.json"); // Adjust the URL based on your setup
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

  // Parse blog metadata from markdown files
  const blogsMetaData = async (blocks) => {
    const markdownBlogs = blocks.map((block) => block.Blog_fileURL); // Get blog markdown URLs
    const metaData = [];

    for (const fileName of markdownBlogs) {
      try {
        const response = await fetch(`${fileName}`); // Fetch markdown content
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fileName}`);
        }
        const fileContents = await response.text();
        const matterResult = matter(fileContents);
        metaData.push({
          title: matterResult.data.title,
          date: matterResult.data.date,
          subtitle: matterResult.data.subtitle,
          imageURL: matterResult.data.imageURL,
          slug: fileName.replace(".md", ""),
          author: matterResult.data.author, // Assuming author is in frontmatter
          category: matterResult.data.category, // Assuming category is in frontmatter
        });
      } catch (error) {
        console.error(`Error fetching ${fileName}:`, error);
      }
    }

    // Sort metaData by date (newest first)
    metaData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setMetaData(metaData);
    setMetadataLength(metaData.length);
    return metaData;
  };

  // Initialize metadata
  useEffect(() => {
    blogsMetaData(data);
  }, [data]);

  // Update current items based on pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * 6;
    setCurrentItems(getMetadata.slice(startIndex, startIndex + 6));
  }, [getMetadata, currentPage]);

  return (
    <main className="bg-white">
      {/* Main section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold">Discover insightful articles here</h1>
          <p className="text-lg mt-4">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center space-x-4 py-5">
          <button className="bg-gray-300 hover:bg-blue-500 hover:text-white text-black py-2 px-4 rounded">
            Technology
          </button>
          <button className="bg-gray-300 hover:bg-blue-500 hover:text-white text-black py-2 px-4 rounded">Money</button>
          <button className="bg-gray-300 hover:bg-blue-500 hover:text-white text-black py-2 px-4 rounded">Business</button>
          <button className="bg-gray-300 hover:bg-blue-500 hover:text-white text-black py-2 px-4 rounded">
            Productivity
          </button>
          <button className="bg-gray-300 hover:bg-blue-500 hover:text-white text-black py-2 px-4 rounded">Yada Yada</button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {currentItems.map((metaData, index) => (
            <div key={index} className="md:col-span-8 md:col-start-2 flex flex-col md:flex-row justify-between border-b border-gray-200 pb-8">
              <div className="flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>{metaData.author}</span>
                  <span className="mx-2">·</span>
                  <span>{metaData.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{metaData.title}</h2>
                <p className="text-gray-600">{metaData.subtitle}</p>
                <div className="flex items-center mt-4">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                    {metaData.category}
                  </span>
                  <span className="ml-4 text-gray-500 text-sm">3 min read</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-48 h-32">
                <img
                  src={metaData.imageURL}
                  alt={metaData.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <Pagination
            totalItems={metadataLength}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;
