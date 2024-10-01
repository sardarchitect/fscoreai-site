"use client";
import Blog_card from "@/src/components/blog_components/Blog_card";
import Pagination from "@/src/components/blog_components/Pagination";
import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import { BlogMetadata } from "@/src/components/blog_components/blogMetadata";
import Blog_card_horizontal from "@/src/components/blog_components/Blog_card_horizontal";
import { useThemeContext } from "@/src/context/theme";
import { usePageUpdateContext } from "@/src/context/pageUpdate";
import Image from "next/image";

interface Block {
  Blog_fileURL: string; // Adjust the type if Blog_fileURL is of different type
  // Add other properties if they exist
}
const BlogsPage = () => {
  const [data, setData] = useState([]);
  const [getMetadata, setMetaData] = useState();
  const [metadataLength, setMetadataLength] = useState();
  const [currentItems, setCurrentItems] = useState([]);
  const [theme] = useThemeContext();
  const [currentPage, setCurrentPage] = usePageUpdateContext();

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
    // get the 
    const metaData: BlogMetadata[] = [];
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

    
// Convert date strings to Date objects
metaData.forEach((item) => {
  const dateString = item.date;
  const [date, time] = dateString.split(",");
  const [day, month, year] = date.split("-");
  const [hour, minute] = time.trim().split(":");
  const dateItem = new Date(year, month - 1, day);
  item.dateObject = dateItem; 
});

// Sort the metaData array based on the dateObject property
metaData.sort((a, b) => b.dateObject.getTime() - a.dateObject.getTime());

// Remove the 'dateObject' property from each item (optional)
metaData.forEach((item) => delete item.dateObject);

    setMetaData(metaData);
    setMetadataLength(metaData.length);
    return metaData;
  };
  useEffect(() => {
    blogsMetaData(data);
  }, [data]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * 6;
    setCurrentItems(getMetadata?.slice(startIndex, startIndex + 6));
  }, [getMetadata, currentPage]);

  return (
    <main className={`${theme}  ` }>
      <div
        className={`dark:text-white dark:bg-rgb-2-6-23 bg-white text-theme-blue mx-auto flex max-w-7xl items-center justify-between  lg:px`}
      >
        <div className="w-screen">
          <div className="mx-10 h-3/4 text-center">
            <h2 className="sm:text-6xl text-3xl p-5">
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

            <div className="w-5/6 mx-auto lg:p-10 py-5 border-t dark:border-gray-200">
              <h3 className="text-4xl text-center  pb-10">Featured posts</h3>
              <div className=" grid-cols-1 md:grid-cols-3 gap-4">
                {currentItems?.map((metaData: any, index: number) => (
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

            <Pagination totalItems={metadataLength}></Pagination>
            <div className="hidden">
              {/* <div className="col-span-5 hidden"> */}
              {/* <div className="col-span-3 hidden sm:block "> */}
              <div className="p-10 shadow-md mb-4">
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
      <div className="hero-img">
        <Image
          src="/neuro_image.svg"
          alt="image"
          width={200}
          height={700}
          style={{
            objectFit: "cover",
          }}
          className="fixed w-screen left-0 top-0 h-full -z-50"
        />
      </div>
    </main>
  );
};

export default BlogsPage;
