import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-12 max-w-7xl mx-auto py-10 pb-32 lg:py-20 items-center">
      {/* Left Section: Text Content */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-6 px-6">
        <p className="he2 text-start text-gray-900 leading-tight">
          Revolutionize your firm's quality control process using Draftflow.
        </p>
        <p className="te2 text-start text-gray-600">
        Draftflow catches production drawing mistakes early, <br /> leading to faster review times while reducing <br /> architect-caused change orders.        </p>
        <div className="">
        <form className="flex w-full max-w-lg ">
          <input
            type="email"
            placeholder="Enter your Email Address..."
            className="flex px-4 py-2 border rounded-l-lg shadow-2xl text-gray-700"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-l-lg rounded-r-lg hover:bg-blue-600">
            Subscribe
          </button>
        </form>
        </div>
      </div>

      {/* Right Section: Background Image */}
      <div className="col-span-12 lg:col-span-6 relative h-96">
        <div className="absolute inset-0 bg-gray-100">
          {/* Placeholder for background image */}
          <Image
            src="/hero_img.png"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Bottom Section: Email Subscription */}
      <div className="col-span-12 flex justify-center mt-8">

      </div>
    </section>
  );
};

export default HeroSection;
