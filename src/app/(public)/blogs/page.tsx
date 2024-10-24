import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page


// "use client";
// import Blog_card from "@/src/components/blog_components/Blog_card";
// import Pagination from "@/src/components/blog_components/Pagination";
// import React, { useState, useEffect } from "react";
// import matter from "gray-matter";
// import { BlogMetadata } from "@/src/components/blog_components/blogMetadata";
// import { useThemeContext } from "@/src/context/theme";
// import { usePageUpdateContext } from "@/src/context/pageUpdate";

// interface Block {
//   Blog_fileURL: string;
// }

// const BlogsPage = () => {
//   const [data, setData] = useState([]);
//   const [getMetadata, setMetaData] = useState<BlogMetadata[]>([]);
//   const [metadataLength, setMetadataLength] = useState(0);
//   const [currentItems, setCurrentItems] = useState<BlogMetadata[]>([]);
//   const [theme] = useThemeContext();
//   const [currentPage, setCurrentPage] = usePageUpdateContext();
//   const itemsPerPage = 3; // Display 3 items per page

//   // Fetch blog data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/articles.json");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Process metadata
//   const blogsMetaData = async (blocks: any) => {
//     const markdownBlogs = blocks.map((block: any) => block.Blog_fileURL);
//     const metaData: BlogMetadata[] = [];

//     for (const fileName of markdownBlogs) {
//       try {
//         const response = await fetch(`${fileName}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch ${fileName}`);
//         }
//         const fileContents = await response.text();
//         const matterResult = matter(fileContents);
//         metaData.push({
//           title: matterResult.data.title,
//           date: matterResult.data.date,
//           subtitle: matterResult.data.subtitle,
//           imageURL: matterResult.data.imageURL,
//           slug: fileName.replace(".md", ""),
//         });
//       } catch (error) {
//         console.error(`Error fetching ${fileName}:`, error);
//       }
//     }

//     metaData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
//     setMetaData(metaData);
//     setMetadataLength(metaData.length);
//     return metaData;
//   };

//   useEffect(() => {
//     blogsMetaData(data);
//   }, [data]);

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     setCurrentItems(getMetadata.slice(startIndex, startIndex + itemsPerPage));
//   }, [getMetadata, currentPage]);

//   return (
//     <main className={`bg-white text-black mx-auto flex max-w-7xl flex-col items-center`}>
//       <div className="w-full px-8 lg:px-16">
//         {/* Hero Section */}
//         <div className="text-center py-10 border-b border-gray-300">
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Discover insightful articles here
//           </h2>
//           <p className="text-lg md:text-xl py-4">
//             Start building for free, then add a site plan to go live. Account plans unlock additional features.
//           </p>
//           {/* Recommended Topics */}
//           <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-6">
//   <button className="px-2 sm:px-4 py-2 bg-gray-200 rounded-lg">Technology</button>
//   <button className="px-2 sm:px-4 py-2 bg-gray-200 rounded-lg">Money</button>
//   <button className="px-2 sm:px-4 py-2 bg-gray-200 rounded-lg">Business</button>
//   <button className="px-2 sm:px-4 py-2 bg-gray-200 rounded-lg">Productivity</button>
//   <button className="px-2 sm:px-4 py-2 bg-gray-200 rounded-lg">Yada Yada</button>
// </div>
// </div>

//         {/* Blog Cards Section */}
//         <div className="py-10 w-full">
//           {/* Blog Cards (Each takes full screen width and stacks vertically) */}
//           <div className="flex flex-col gap-12">
//             {currentItems?.map((metaData: any, index: number) => (
//               <div key={index} className="border-b pb-6">
//                 <div className="flex flex-col md:flex-row justify-between items-start">
//                   {/* Text Section */}
//                   <div className="flex-grow md:w-2/3">
//                     <h3 className="text-2xl font-semibold">{metaData.title}</h3>
//                     <p className="text-gray-600">{metaData.subtitle}</p>
//                     <div className="text-sm text-gray-500 py-2">{metaData.date}</div>
//                     <a
//                       href={metaData.slug} // Functional Read More
//                       className="text-blue-500"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                   {/* Image Section */}
//                   <div className="w-full md:w-1/3 mt-4 md:mt-0">
//                     <img
//                       src={metaData.imageURL}
//                       alt={metaData.title}
//                       className="w-full h-64 object-cover rounded-lg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="pt-8 pb-16">
//           <Pagination totalItems={metadataLength} itemsPerPage={itemsPerPage} />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BlogsPage;
