import fs from "fs";
import type { Metadata, ResolvingMetadata } from "next";
// import Markdown from "markdown-to-jsx";
import Markdown from "react-markdown";
import matter from "gray-matter";
import Link from "next/link";
import Social from "@/src/components/blog_components/Social";
import { useThemeContext } from "../../../../context/theme";

export async function generateMetadata(
  Props: any
  // { params, searchParams }: Props ,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id
  const slug = Props.params.slug;
  const post = getPostContent(slug);
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = "";

  return {
    title: post.data.title,
    openGraph: {
      images: '/blogs_images/img3new.png',
      // images: post.data.imageURL,
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    description: post.data.subtitle,
  };
}

function getPostContent(slug: string) {
  const folder = "public/blog/featured-blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  // const [theme, setTheme] = useThemeContext();

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
      const files = fs.readdirSync("public/blog/featured-blogs");
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
    <div className=" dark:text-white bg-white text-theme-blue dark:bg-theme-blue">
      <div className="pt-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose mx-6 sm:m-auto text-justify">
        <Markdown>{post.content}</Markdown>
      </article>

      <div className="flex justify-between w-11/12 lg:w-3/5 mt-10  m-auto lg:mt-20 ">
      
      <div className="content-center">
          <div className="bg-black hover:bg-gray-500 text-white font-bold h-10 content-center px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <Link
              id="link"
              legacyBehavior
              href={`/blog/featured-blogs/${files[currentIndex - 1]?.replace(
                ".md",
                ""
              )}`}
            >
              Prev
            </Link>
          </div>
          </div>
      
          <div className="flex w-full justify-center items-center space-x-4 ">
          {/* <div className="sm:flex hidden justify-center items-center space-x-4 "> */}
            <Social title={post.data.title} description={post.data.description} image={post.data.imageURL} url='#'/>
          </div>
          <div className="content-center">
      
          <div className="bg-black hover:bg-gray-500  text-white font-bold h-10 content-center px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <Link
              id="link"
              legacyBehavior
              href={`/blog/featured-blogs/${files[currentIndex + 1]?.replace(
                ".md",
                ""
              )}`}
            >
              Next
            </Link>
          </div>
      </div>
      </div>
          {/* <div className="sm:hidden flex justify-center items-center space-x-4 ">
            <Social title={post.data.title} description={post.data.description} image={post.data.imageURL} url='#'/>
          </div> */}
    </div>
  );
};

export default PostPage;
