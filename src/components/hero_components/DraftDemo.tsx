import Link from "next/link";
import Image from "next/image";
import { useFormPopUpContext } from "@/src/context/formPopup";
import DemoForm from "../utilsComponents/DemoForm";

const DraftDemo = () => {
  const [showPopup, setShowPopup] = useFormPopUpContext();

  return (
    <section
      className="relative w-full h-[460px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(/home/Blue-bg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for darkening the background slightly */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 container-width mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-12 w-full h-full items-center">
        {/* Centered Text in Grid Layout */}
        <div className="col-span-12 flex items-center justify-center w-full">
          <div className="text-center px-4 sm:px-0">
            <div className="sm:he2 h3 text-white">
              Create <span className="text-Earth-50">Flawless</span> Drawings with <span className="text-Earth-50">Draftflow</span>
            </div>
            <p className="mt-6 t1 text-gray-300 w-full max-w-[830px] mx-auto">
              Enable your architectural team to produce impeccable construction documents with unprecedented speed and accuracy, elevating your firm’s competitive edge.
            </p>

            {/* Call-to-Action Button with Link */}
            <div className="mt-8 flex justify-center">
            <div onClick={() => setShowPopup(!showPopup)} className="bg-Neptune-50  text-white flex justify-center px-6 py-5 w-52 rounded-l-lg rounded-r-lg c1 hover:bg-Earth-50 cursor-pointer">
              Book a Demo
              <DemoForm />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DraftDemo;
