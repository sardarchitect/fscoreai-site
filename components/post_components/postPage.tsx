import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "./getPostMetadata";
import { useEffect, useState } from 'react';



const PostPage = (props: any) => {

  const slugURL = props.slug
const [data, setData] = useState<string>(""); // State variable data initialized to null
const [post, setPost] = useState<any>(null); // State variable to store post content

const fetchArticleContent = async (contentFile: any) => {
  try {
    const response = await fetch(contentFile);
    if (!response.ok) {
      throw new Error('Failed to fetch article content');
    }
    const contentData = await response.text();
    setData(contentData)
  } catch (error) {
    console.error('Error fetching article content:', error);
    return null;
  }
};



useEffect(() => {
  if (slugURL) {
    fetchArticleContent(slugURL);
  }
}, [slugURL]);

useEffect(() => {
  const getPostContent = async () => {
    const matterResult = matter(data);
    return matterResult;
  };

  if (data) {
    getPostContent().then((content) => {
      setPost(content);
    });
  }
}, [data]);


  return (
    <>
    {post && <div>
      {/* <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div> */}

      <article className="prose m-auto">
        <Markdown className="">{post.content}</Markdown>
      </article>
    </div>}
    </>
  );
};

export default PostPage;
