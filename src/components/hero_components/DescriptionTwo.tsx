"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"; // Import Framer Motion
import cardData from "./cardData";
import { useRef } from "react";


// const index = useRef();
// const { scrollYProgress } = useScroll({
//   target: index,
//   offset: ['start end', 'start start']
// })
// const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
// // const scale = useTransform(progress, range, [1, targetScale]);



const DescriptionTwo = ({}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white mt-40 z-0 overflow-hidden">
      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-start">
        
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

        {/* Right Side: Scrollable Sticky Cards */}
        <div className="sticky col-span-12 lg:col-span-6 hidden lg:flex items-center justify-center h-screen overflow-y-scroll no-scrollbar">
          <motion.div
       
            className="space-y-5 h-full w-full" // Scrollable container
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {cardData.map((card, index) => (
              <motion.div
             
                key={index}
                className="sticky top-20 bg-white shadow-lg rounded-lg p-6 w-full flex flex-col items-start h-[300px] mb-12" // Sticky with enough margin to create spacing
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Card Content */}
                <div className="flex items-center mb-4">
                  <Image
                    src={card.icon}
                    alt="Icon"
                    width={40} // Adjusted width
                    height={40} // Adjusted height
                    className="block mr-4 "
                  />
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionTwo;
