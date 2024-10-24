// // pages/blog/[slug].tsx
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { GetStaticPaths, GetStaticProps } from "next";
// import Markdown from "markdown-to-jsx";
// import Link from "next/link";

// // Function to get content of a blog post by its slug
// const getPostContent = (slug: string) => {
//   const folder = path.join("public", "blog");
//   const filePath = path.join(folder, `${slug}.md`);
//   const content = fs.readFileSync(filePath, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };

// // Get all the slugs for dynamic routing
// export const getStaticPaths: GetStaticPaths = async () => {
//   const folder = path.join("public", "blog");
//   const files = fs.readdirSync(folder);

//   const paths = files.map((fileName) => ({
//     params: { slug: fileName.replace(".md", "") },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// // Get the post content to render
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = params?.slug as string;
//   const post = getPostContent(slug);

//   return {
//     props: {
//       post: {
//         content: post.content,
//         data: post.data,
//       },
//     },
//   };
// };

// // Post Page Component
// const PostPage = ({ post }: { post: { content: string; data: { title: string; date: string } } }) => {
//   const { title, date } = post.data;

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <div className="my-12 text-center">
//         <h1 className="text-4xl font-bold mb-4">{title}</h1>
//         <p className="text-gray-500">{date}</p>
//       </div>

//       <article className="prose mx-auto">
//         <Markdown>{post.content}</Markdown>
//       </article>

//       <div className="flex justify-between mt-8">
//         {/* Dynamic navigation to previous/next posts */}
//         <Link href="/blog">
//           <a className="text-blue-600 hover:underline">← Back to Blog</a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PostPage;

import React from 'react'

const page = () => {
  return (
    <div>
      blog
    </div>
  )
}

export default page

