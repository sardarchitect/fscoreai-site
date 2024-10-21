import Image from "next/image";

const DescriptionTwo = () => {
  return (
    <>
      <div className="bg-white z-0 overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 sm:p-32 h-screen">
          
          {/* Text Content Section */}
          <div className="px-4 py-2 z-10">
            <p className="text-black he2">Key Benefits of Draftflow for Your Firm</p>
            <p className="t1 py-4 text-gray-700">
            Draftflow is designed specifically for firms in the AEC industry. Through this one unique system, Draftflow benefits a large set of stakeholders:             </p>
          
            
            {/* Learn More Button */}
            <button className="bg-blue-500 text-white c1 py-5 px-14 rounded mt-4 hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Empty Space or Image Section */}
          <div className="relative hidden lg:block">
            <div className="w-full h-full flex items-center justify-center">
              {/* Placeholder for the empty space or an image */}
              <Image
            src={"/"}
            height={100}
            width={100}
            alt="ai pics"
            className="hidden sm:block  absolute "
          />
            </div>
          </div>

          {/* Background Image */}
         
        </div>
      </div>
    </>
  );
};

export default DescriptionTwo;
