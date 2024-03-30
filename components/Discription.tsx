import Image from "next/image";

const Discription = () => {
  return (
    <>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3">
  <div className="sm:col-span-2 relative">
    <Image
      src={"/left_globe.jpg"}
      height={500}
      width={1000}
      alt="ai pics"
      className="absolute inset-0 w-full object-cover"
    />
  </div>
  <div className="sm:col-span-1  bg-black bg-opacity-50 p-8">
    <p className="text-xl font-bold text-sky-500">About AI</p>
    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 py-2 text-white">Heading Here</h2>
    <p className="text-sm sm:text-base lg:text-lg py-4 text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti dolorem necessitatibus perspiciatis saepe esse voluptates fugit quisquam aspernatur itaque laboriosam voluptatum voluptas distinctio ut dolorum, veritatis voluptatem hic quas.
    </p>
  </div>
</div> */}
      <div className="bg-blue-500 z-0 ">
        <div className="relative flex flex-wrap sm:p-32 bg-black bg-opacity-90 h-screen">
          <Image
            src={"/left_globe.jpg"}
            height={500}
            width={500}
            alt="ai pics"
            className="hidden sm:block w-3/5 top-0 left-0 absolute z-0"
          />
          <div className="w-full sm:w-1/2 lg:w-1/2 "></div>

          <div className=" w-full sm:w-full lg:w-1/2 px-4 py-2 z-10">
            <p className="text-xl font-bold text-sky-500">About AI</p>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 py-2 text-white">
              Heading Here
            </h2>
            <p className="text-sm sm:text-base lg:text-lg py-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              deleniti dolorem necessitatibus perspiciatis saepe esse voluptates
              fugit quisquam aspernatur itaque laboriosam voluptatum voluptas
              distinctio ut dolorum, veritatis voluptatem hic quas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discription;
