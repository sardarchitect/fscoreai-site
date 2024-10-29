import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Array containing data for each card
const cardData = [
  {
    title: "Real-time Error Detection System",
    description: "Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track.",
    additionalInfo: "As it reviews your Revit documents against comprehensive project checklists, any potential errors are promptly identified.",
    buttonLabel: "Get Started",
    imageSrc: "/left_globe.jpg",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
  {
    title: "Smart Error Resolution System",
    description: "Resolve errors quickly and intuitively.",
    additionalInfo: "Our system compares project checklists with your Revit documents, instantly detecting issues and offering resolutions.",
    buttonLabel: "Get Started",
    imageSrc: "/left_globe.jpg",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  {
    title: "Real-time Error Detection System",
    description: "Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track.",
    additionalInfo: "As it reviews your Revit documents against comprehensive project checklists, any potential errors are promptly identified.",
    buttonLabel: "Get Started",
    imageSrc: "/left_globe.jpg",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
  {
    title: "Smart Error Resolution System",
    description: "Resolve errors quickly and intuitively.",
    additionalInfo: "Our system compares project checklists with your Revit documents, instantly detecting issues and offering resolutions.",
    buttonLabel: "Get Started",
    imageSrc: "/left_globe.jpg",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  // {}
];

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const DescriptionFour = () => {
  const controls = useAnimation();

  return (

    <section className="">

      {/* Sticky Heading Section */}
      <div className="sticky top-20 py-8 z-10 max-w-7xl m-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            No more Hassle, yada yada
          </h1>
          <p className="mt-4 text-gray-600">
            Draftflow uses a SaaS business model with tiered pricing, allowing flexibility in pricing based on required features.
          </p>
        </div>
      </div>

      <div className="h-[60vh] snap-mandatory overflow-y-scroll snap-y m-auto"
      >
        {cardData.map((card, index) => {
          if(!card.imageSrc){
             return (<div className={`snap-start h-[60vh] p-6 mb-10`}></div>)
          }
          return (
            <div
              key={index}
              className={`bg-white max-w-7xl m-auto sticky top-0 snap-normal snap-start h-[60vh] shadow-lg rounded-lg p-6 flex flex-col ${card.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
                } items-center mb-10 z-[${index + 1}]`}
            >
              {/* Image */}
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              {/* Text */}
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-bold text-sky-500">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-700">{card.description}</p>
                <p className="mt-4 text-gray-600">{card.additionalInfo}</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="h-40"></div> */}
    </section>

  );
};

export default DescriptionFour;




//     {/* Sticky Heading Section */}
//     {/* <div className="sticky top-20 bg-gray-100 py-8 z-10">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">
//           No more Hassle, yada yada
//         </h1>
//         <p className="mt-4 text-gray-600">
//           Draftflow uses a SaaS business model with tiered pricing, allowing flexibility in pricing based on required features.
//         </p>
//       </div>
//     </div> */}
// <div className="bg-gray-100 ">

//   {/* Cards Container */}
//   <div className="">
//     {cardData.map((card, index) => {
//       const [ref, inView] = refs[index];
//       return (
//         <motion.div
//           // ref={ref}
//           ref={(el) => {(cardRefs.current[index] = el)}} // Set ref for visibility observer
//           key={index}
//           // variants={cardVariants}
//           // initial="hidden"
//           // animate={inView ? "visible" : "hidden"}
//           // style = {{scrollIntoView({ behavior: "smooth", block: "start"})}}
//           className={`bg-white h-[60vh] shadow-lg rounded-lg p-6 flex flex-col ${
//             card.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
//           } items-center mb-10 z-[${index + 1}]`}
//         >
//           {/* Image */}
//           <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
//             <Image
//               src={card.imageSrc}
//               alt={card.imageAlt}
//               width={200}
//               height={200}
//               className="rounded-lg"
//             />
//           </div>
//           {/* Text */}
//           <div className="md:w-2/3 md:pl-8">
//             <h3 className="text-xl font-bold text-sky-500">
//               {card.title}
//             </h3>
//             <p className="mt-4 text-gray-700">{card.description}</p>
//             <p className="mt-4 text-gray-600">{card.additionalInfo}</p>
//             <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
//               {card.buttonLabel}
//             </button>
//           </div>
//         </motion.div>
//       );
//     })}
//     <div className="h-20"></div>
//   </div>
// </div>

















// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";

// // Animation variants for each card
// const cardVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const DescriptionFour = () => {
//   const controls = useAnimation();

//   // Intersection observer for triggering animation
//   const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });

//   useEffect(() => {
//     if (inView1) controls.start("visible");
//   }, [controls, inView1]);

//   useEffect(() => {
//     if (inView2) controls.start("visible");
//   }, [controls, inView2]);

//   useEffect(() => {
//     if (inView3) controls.start("visible");
//   }, [controls, inView3]);

//   useEffect(() => {
//     if (inView4) controls.start("visible");
//   }, [controls, inView4]);

//   return (
//     <div className="bg-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto py-16">
//         {/* Heading Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800">
//             No more Hassle, yada yada
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Draftflow uses a SaaS business model with tiered pricing, allowing flexibility in pricing based on required features.
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="space-y-12">
//           {/* Card 1: Real-time Error Detection System */}
//           <motion.div
//             ref={ref1}
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView1 ? "visible" : "hidden"}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center"
//           >
//             {/* Image on the Left */}
//             <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
//               <Image
//                 src="/left_globe.jpg"
//                 alt="Issue Checklist"
//                 width={200}
//                 height={200}
//                 className="rounded-lg"
//               />
//             </div>
//             {/* Text on the Right */}
//             <div className="md:w-2/3 md:pl-8">
//               <h3 className="text-xl font-bold text-sky-500">
//                 Real-time Error Detection System
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 As it reviews your Revit documents against comprehensive project checklists, any potential errors are promptly identified.
//               </p>
//               <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
//                 Get Started
//               </button>
//             </div>
//           </motion.div>

//           {/* Card 2: Smart Error Resolution System (Image on Right) */}
//           <motion.div
//             ref={ref2}
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView2 ? "visible" : "hidden"}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row-reverse items-center"
//           >
//             {/* Image on the Right */}
//             <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
//               <Image
//                 src="/left_globe.jpg"
//                 alt="Issue Checklist"
//                 width={200}
//                 height={200}
//                 className="rounded-lg"
//               />
//             </div>
//             {/* Text on the Left */}
//             <div className="md:w-2/3 md:pr-8">
//               <h3 className="text-xl font-bold text-sky-500">
//                 Smart Error Resolution System
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 Resolve errors quickly and intuitively.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 Our system compares project checklists with your Revit documents, instantly detecting issues and offering resolutions.
//               </p>
//               <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
//                 Get Started
//               </button>
//             </div>
//           </motion.div>

//           {/* Card 3: Real-time Error Detection System (Image on Left) */}
//           <motion.div
//             ref={ref3}
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView3 ? "visible" : "hidden"}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center"
//           >
//             {/* Image on the Left */}
//             <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
//               <Image
//                 src="/left_globe.jpg"
//                 alt="Issue Checklist"
//                 width={200}
//                 height={200}
//                 className="rounded-lg"
//               />
//             </div>
//             {/* Text on the Right */}
//             <div className="md:w-2/3 md:pl-8">
//               <h3 className="text-xl font-bold text-sky-500">
//                 Real-time Error Detection System
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 As it reviews your Revit documents against comprehensive project checklists, any potential errors are promptly identified.
//               </p>
//               <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
//                 Get Started
//               </button>
//             </div>
//           </motion.div>

//           {/* Card 4: Smart Error Resolution System (Image on Right) */}
//           <motion.div
//             ref={ref4}
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView4 ? "visible" : "hidden"}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row-reverse items-center"
//           >
//             {/* Image on the Right */}
//             <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
//               <Image
//                 src="/left_globe.jpg"
//                 alt="Issue Checklist"
//                 width={200}
//                 height={200}
//                 className="rounded-lg"
//               />
//             </div>
//             {/* Text on the Left */}
//             <div className="md:w-2/3 md:pr-8">
//               <h3 className="text-xl font-bold text-sky-500">
//                 Smart Error Resolution System
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 Resolve errors quickly and intuitively.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 Our system compares project checklists with your Revit documents, instantly detecting issues and offering resolutions.
//               </p>
//               <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
//                 Get Started
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DescriptionFour;
