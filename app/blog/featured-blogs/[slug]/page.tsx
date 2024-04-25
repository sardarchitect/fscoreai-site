import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "public/blog/featured-blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  // const blogsMetaData = (fileData: any) => {
  //   const matterResult = matter(fileData);
  //   return {
  //     title: matterResult.data.title,
  //     date: matterResult.data.date,
  //     subtitle: matterResult.data.subtitle,
  //   };
  // }
  // console.log(blogsMetaData(data), "gog")
  // console.log("manugog")
  
  // Read all file names from the directory
  const getPostFiles = () => {
    try {
      const files = fs.readdirSync("public/blog/");
      return files;
    } catch (error) {
      console.error("Error reading directory:", error);
      return [];
    }
  };
  const files = getPostFiles();
  let currentIndex = -1;
  for (let i = 0; i < files.length; i++) {
    if (files[i].replace(".md", "") === slug) {
      currentIndex = i;
      break;
    }
  }
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose m-auto">
        <Markdown>{post.content}</Markdown>
      </article>
      <div className="flex justify-between w-full lg:w-auto lg:m-10">
        {currentIndex > 0 && (
          <div className="bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <Link
              id="link"
              legacyBehavior
              href={`/blog/${files[currentIndex - 1].replace(".md", "")}`}
            >
              Prev
            </Link>
          </div>
        )}
        {currentIndex < files.length - 1 && (
          <div className="bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <Link
              id="link"
              legacyBehavior
              href={`/blog/${files[currentIndex + 1].replace(".md", "")}`}
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPage;
