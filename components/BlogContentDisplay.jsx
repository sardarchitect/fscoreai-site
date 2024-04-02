import Image from "next/image"

const BlogContentDisplay = ({content}) => {
  return (
    <>
       {
            content && (<div className="bg-white p-4 lg:p-10 shadow-md">
              <Image
                width={600}
                height={500}
                src={content.thumbnail}
                alt="Blog Thumbnail"
                className="w-full mb-4"
              />

              <h2 className="text-xl font-semibold mb-2">{content.title}</h2>

              <p className="text-gray-700 mb-2">{content.summary}</p>

              <p className="text-gray-500">{content.date}</p>
            </div>)
           }
    </>
  )
}

export default BlogContentDisplay