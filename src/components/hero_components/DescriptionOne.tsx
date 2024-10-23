import Link from "next/link";
import Image from "next/image";

const DescriptionOne = () => {
  return (
    <section className="relative w-full h-screen space-y-10 grid grid-cols-12">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 col-span-12 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/about_us/bg-charcoal.svg")' }}
        >
          {/* Replace "/path-to-your-image.svg" with your actual background image */}
        </div>
      </div>

      {/* Centered Text in Grid Layout */}
      <div className="relative z-10 col-span-12 flex items-center justify-center">
        <div className="text-center px-8">
          <p className="sm:he2 h3 text-white">
          Create <span className="text-Earth-50">Flawless</span> Drawings <br />  with <span className="text-Earth-50">Draftflow</span>
          </p>
          <p className="mt-6 t1 text-gray-300 max-w-lg mx-auto">
            Draftflow is a subscription-based software that provides real-time, context-specific assistance to architects and engineers during production of drawings in Autodesk Revit.
          </p>

          {/* Call-to-Action Button with Link */}
          <div className="mt-8">
            <Link href="/book-demo">
              <p className="bg-blue-500 text-white px-6 py-3  rounded-l-lg rounded-r-lg c1 hover:bg-blue-600">
                Book a Demo
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionOne;
