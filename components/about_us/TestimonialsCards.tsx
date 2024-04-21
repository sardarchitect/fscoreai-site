import React from 'react'

const TestimonialsCards = (props: any) => {
  const { name , profession, discription, imageURL} = props;
  const roundImage = {
      width: "200px", 
      height: "200px",
      borderRadius: "50%",
      overflow: "hidden",
  }
  return (
    <div className="text-center">
    <div className="">
  <div className="text-white sm:p-10  ">
    <div  className="px-5 ">
      <a href="#">
        <img style={roundImage} className="m-auto" src={"/blogs_images/img3.png"} alt="latest post" />
      </a>
    </div>
    <div className="px-5 mb-10">
      <div className="">
        {/* Use title prop for the title */}
        <h5 className=" font-bold text-2xl tracking-tight">
        name
        </h5>
      </div>
      {/* Use description prop for the description */}
      <p className="font-normal mb-3">profession
</p>
      <p className="font-normal  mb-3">description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sequi commodi accusamus ratione non mollitia esse, excepturi a laboriosam illum voluptates libero, perspiciatis vitae suscipit praesentium? Aliquid magnam quam ducimus aspernatur modi asperiores, esse expedita?</p>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default TestimonialsCards