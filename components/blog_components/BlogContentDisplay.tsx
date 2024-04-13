"use client";
import Image from "next/image";
import PostPage from "./blogPage";

const BlogContentDisplay = ({ content }) => {
  return (
    <>
      {content && (
        <div className="text-white lg:px-10">
          <Image
            width={600}
            height={500}
            src={content.thumbnail}
            alt="Blog Thumbnail"
            className="w-full mb-4"
          />

          {/* <h2 className="sm:text-4xl text-2xl sm:w-2/3 m-auto text-center font-semibold my-5 font-Merriweather ">{content.title}</h2> */}
          {/* <h2 className="text-xl font-semibold mb-2 font-Merri_weather">{content.title}</h2> */}
          {/* <PostPage slug={content.contentFile}/> */}

          <PostPage slug={content.contentFile} />

          {/* <p className="mb-2 text-xl ">{content.summary}</p> */}
        </div>
      )}
    </>
  );
};

export default BlogContentDisplay;
