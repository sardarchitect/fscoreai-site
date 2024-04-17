"use client";
import Blog_card from "@/components/blog_components/Blog_card";
import Pagination from "@/components/blog_components/Pagination";
import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import { BlogMetadata } from "@/components/blog_components/blogMetadata";
import Blog_card_horizontal from "@/components/blog_components/Blog_card_horizontal";

interface Block {
  Blog_fileURL: string; // Adjust the type if Blog_fileURL is of different type
  // Add other properties if they exist
}
const BlogsPage = () => {
  const [data, setData] = useState([]);
  const [getMetadata, setMetaData] = useState();

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

  const blogsMetaData = async (blocks: any) => {
    const markdownBlogs = blocks.map((block: any) => {
      return block.Blog_fileURL;
    });

    // Define an array to store the metadata of each markdown file
    const metaData: BlogMetadata[] = [];
    // Fetch file contents for each markdown file

    for (const fileName of markdownBlogs) {
      try {
        const response = await fetch(`${fileName}`); // Adjust the path based on your server setup
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
        });
      } catch (error) {
        console.error(`Error fetching ${fileName}:`, error);
      }
    }
    setMetaData(metaData);
    return metaData;
  };

  useEffect(() => {
    blogsMetaData(data);
  }, [data]);

  return (
    <div className="bg-rgb-2-6-23">
      <div className="w-screen">
        <div className="mx-10 h-3/4 text-white text-center">
          <h2 className="text-6xl p-5">
            Lorem consectetur adipisicing elit. Eveniet, recusandae?
          </h2>
          {/*note: add background */}
          <p className="text-2xl p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="lg:px-10  m-auto">
          <div className="lg:p-10 py-5">
            {getMetadata?.map(
              (metaData: any, index: number) =>
                index === 2 && (
                  <div key={index}>
                    <Blog_card_horizontal
                      {...metaData}
                      buttonUrl={data[index].Blog_fileURL}
                      buttonText={"Read More"}
                    />
                  </div>
                )
            )}
          </div>

          <div className="w-5/6 mx-auto lg:p-10 py-5 border-t border-gray-200">
            <h3 className="text-4xl text-center text-white pb-10">
              Featured posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getMetadata?.map((metaData: any, index: number) => (
                <div key={index}>
                  <Blog_card
                    {...metaData}
                    buttonUrl={data[index].Blog_fileURL}
                    buttonText={"Read More"}
                  />
                </div>
              ))}
            </div>
          </div>

          <Pagination></Pagination>
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
