import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const ProductReport = () => {
  // Set up motion values for tracking cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    cursorX.set(clientX - window.innerWidth / 2); // Center relative to screen
    cursorY.set(clientY - window.innerHeight / 2); // Center relative to screen
  };

  // Scale cursor motion for a gentle "follow" effect
  const xPos = useTransform(cursorX, (x) => x * 0.05);
  const yPos = useTransform(cursorY, (y) => y * 0.05);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(/home/graph-up.png), url(/home/BG.jpg)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 opacity-10 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Text Section */}
        <div className="col-span-12 text-center px-4 py-16 lg:px-8">
          <p className="h3 sm:he2 text-gray-900">
            <span className="text-[#666666]">What is</span> Draftflow?
          </p>
          <p className="mt-6 t1 text-gray-600 mx-auto max-w-3xl">
            Draftflow is a subscription-based software that provides real-time, context-specific assistance to architects and engineers during the production of drawings in Autodesk Revit.
          </p>
          <p className="mt-4 t1 text-gray-600 mx-auto max-w-3xl">
            It enforces graphical standards, flags inconsistencies, and highlights missing scope in construction drawings, allowing architects and engineers to deliver flawless documents with speed and precision.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-12 flex justify-center relative">
          {/* Main Image with Zoom-In Animation */}
          <motion.div
            className="max-w-3xl sm:max-w-2xl"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/home/image.png"
              alt="Floor Plan Image"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </motion.div>

          {/* Overlay icons with cursor-follow effect */}
          <motion.div
            className="absolute top-0 left-72 transform -translate-y-7"
            style={{ x: xPos, y: yPos }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/1.png" alt="Icon 1" width={150} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-0 right-72 transform -translate-y-7"
            style={{ x: xPos, y: yPos }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/2.png" alt="Icon 2" width={150} height={40} />
          </motion.div>

          {/* Additional icons with the same follow effect */}
          <motion.div
            className="absolute top-36 right-56"
            style={{ x: xPos, y: yPos }}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/3.png" alt="Icon 3" width={150} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-36 left-56"
            style={{ x: xPos, y: yPos }}
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/4.png" alt="Icon 4" width={150} height={40} />
          </motion.div>

          {/* You can repeat for additional icons */}
        </div>
      </div>
    </section>
  );
};

export default ProductReport;



