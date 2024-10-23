  import Image from "next/image";

  const DescriptionTwo = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-white mt-10 z-0 overflow-hidden">
        {/* Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
          
          {/* Left Side: Text Content Section */}
          <div className="col-span-12 lg:col-span-6 px-4 py-2">
            <p className="h3 sm:he2 text-black">
              Key Benefits of Draftflow for Your Firm
            </p>
            <p className="t1 py-4 text-gray-700">
              Draftflow is designed specifically for firms in the AEC industry. Through this one unique system, Draftflow benefits a large set of stakeholders:
            </p>
            
            {/* Learn More Button */}
            <button className="bg-blue-500 text-white c1 py-5 px-14 rounded mt-4 hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Side: Image Section */}
          <div className="col-span-12 lg:col-span-6 relative hidden lg:flex items-center justify-center">
            <Image
              src="/path-to-your-image.jpg" // Replace with the actual path to your image
              alt="AI-generated visualization"
              width={400}
              height={400}
              className="block"
            />
          </div>
        </div>
      </section>
    );
  };

  export default DescriptionTwo;
