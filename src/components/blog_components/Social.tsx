"use client";

// import type { Metadata, ResolvingMetadata } from 'next'
import React from "react";
import Head from "next/head";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

// export async function generateMetadata(
//   // { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   // const id = params.id

//   // fetch data
//   // const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

const Social = (props: any) => {
  const { title, description, image, url } = props;
  return (
    <div className="rounded-full border-1 p-3 pb-2">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <span className="mx-2">
        <FacebookShareButton
          // url={props}
          url={"https://github.com/next-share"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#fscore-blogs"}
        >
          {/* <img src='/social/icons-facebook.png' alt="Facebook Icon" className="w-12 h-12 text-white" /> */}
          <FacebookIcon size={32} round 
          className="duration-500 ease-in-out transition-all hover:transform hover:scale-125"/>
        </FacebookShareButton>
      </span>
      <span className="mx-2">
        <LinkedinShareButton
          // url={props}
          url={"https://www.linkedin.com/company/fscore/"}
        >
          <LinkedinIcon size={32} round 
          className="duration-500 ease-in-out transition-all hover:transform hover:scale-125"
          />
        </LinkedinShareButton>
      </span>

      <span className="mx-2">
        <TwitterShareButton
          // url={props}
          url={"https://github.com/next-share"}
        >
          <TwitterIcon size={32} round 
          className="duration-500 ease-in-out transition-all hover:transform hover:scale-125"
          />
        </TwitterShareButton>
      </span>
    </div>
  );
};

export default Social;
