import Link from "next/link";
import Image from "next/image";

const DescriptionOne = () => {
  return (
    <section
      className="relative  w-full h-[460px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url("/home/blue-bg.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for darkening the background slightly */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Centered Text in Grid Layout */}
        <div className="col-span-12 flex items-center justify-center">
          <div className="text-center px-8">
            <p className="sm:he2 h3 text-white">
              Create <span className="text-Earth-50">Flawless</span> Drawings with{" "}
              <span className="text-Earth-50">Draftflow</span>
            </p>
            <p className="mt-6 t1 text-gray-300 max-w-lg mx-auto">
              Draftflow is a subscription-based software that provides real-time, context-specific assistance to architects and engineers during production of drawings in Autodesk Revit.
            </p>

            {/* Call-to-Action Button with Link */}
            <div className="mt-8 flex justify-center">
              <Link href="/book-demo">
                <p className="bg-blue-500  text-white flex justify-center px-6 py-5 w-52 rounded-l-lg rounded-r-lg c1 hover:bg-blue-600">
                  Book a Demo
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionOne;
