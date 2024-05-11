import React from 'react';

const Blog_card = (props: any) => {
  // Destructure props for easier access
  const { title, subtitle, date, buttonUrl , buttonText, imageURL} = props;
  function navigatePage(fileName: string) {
    const slug = fileName.replace(".md", "");
    window.location.href = slug;
  }
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-200 shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          {/* Use imageUrl prop for the image source */}
          <img className="rounded-t-lg" src={imageURL} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            {/* Use title prop for the title */}
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
          </a>
          {/* Use description prop for the description */}
          <p className="font-normal text-gray-700 mb-3">{subtitle}</p>
          <p className="font-normal text-gray-700 mb-3">{date}</p>
        <div className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center items-end inline-flex  cursor-pointer"
        onClick={() => {
          navigatePage(buttonUrl);
        }}> 
            {buttonText} 
           </div> 
        </div>
      </div>
    </div>
  );
};

export default Blog_card;



          