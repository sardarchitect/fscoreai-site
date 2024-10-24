import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const DescriptionFour = () => {
  const controls = useAnimation();

  // Intersection observer for triggering animation
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView1) controls.start("visible");
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) controls.start("visible");
  }, [controls, inView2]);

  useEffect(() => {
    if (inView3) controls.start("visible");
  }, [controls, inView3]);

  useEffect(() => {
    if (inView4) controls.start("visible");
  }, [controls, inView4]);

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto py-16">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            No more Hassle, yada yada
          </h1>
          <p className="mt-4 text-gray-600">
            Draftflow uses a SaaS business model with tiered pricing, allowing flexibility in pricing based on required features.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-12">
          {/* Card 1: Real-time Error Detection System */}
          <motion.div
            ref={ref1}
            variants={cardVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center"
          >
            {/* Image on the Left */}
            <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src="/left_globe.jpg"
                alt="Issue Checklist"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Text on the Right */}
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-bold text-sky-500">
                Real-time Error Detection System
              </h3>
              <p className="mt-4 text-gray-700">
                Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track.
              </p>
              <p className="mt-4 text-gray-600">
                As it reviews your Revit documents against comprehensive project checklists, any potential errors are promptly identified.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Card 2: Smart Error Resolution System (Image on Right) */}
          <motion.div
            ref={ref2}
            variants={cardVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row-reverse items-center"
          >
            {/* Image on the Right */}
            <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src="/left_globe.jpg"
                alt="Issue Checklist"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Text on the Left */}
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-xl font-bold text-sky-500">
                Smart Error Resolution System
              </h3>
              <p className="mt-4 text-gray-700">
                Resolve errors quickly and intuitively.
              </p>
              <p className="mt-4 text-gray-600">
                Our system compares project checklists with your Revit documents, instantly detecting issues and offering resolutions.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Card 3: Real-time Error Detection System (Image on Left) */}
          <motion.div
            ref={ref3}
            variants={cardVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center"
          >
            {/* Image on the Left */}
            <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src="/left_globe.jpg"
                alt="Issue Checklist"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Text on the Right */}
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-bold text-sky-500">
                Real-time Error Detection System
              </h3>
              <p className="mt-4 text-gray-700">
                Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track.
              </p>
              <p className="mt-4 text-gray-600">
                As it reviews your Revit documents against comprehensive project checklists, any potential errors are promptly identified.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Card 4: Smart Error Resolution System (Image on Right) */}
          <motion.div
            ref={ref4}
            variants={cardVariants}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row-reverse items-center"
          >
            {/* Image on the Right */}
            <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src="/left_globe.jpg"
                alt="Issue Checklist"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Text on the Left */}
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-xl font-bold text-sky-500">
                Smart Error Resolution System
              </h3>
              <p className="mt-4 text-gray-700">
                Resolve errors quickly and intuitively.
              </p>
              <p className="mt-4 text-gray-600">
                Our system compares project checklists with your Revit documents, instantly detecting issues and offering resolutions.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionFour;
