"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Array containing data for each card
const cardData = [
  {
    title: "Real-time Error Detection",
    description:
      "Draftflow’s real-time error detection system quietly monitors your Revit projects, comparing them against comprehensive checklists to catch potential issues immediately.",
    additionalInfo:
      "Get quick on-screen notifications and manage detected issues easily through an intuitive workflow.",
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/Real-time Error Detection System.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  {
    title: "Automated Error Resolution ",
    description:
      "When errors are detected, Draftflow suggests immediate resolutions, allowing you to correct issues as they occur with just a few clicks.",
    additionalInfo:
      "Let our AI-powered resolution system quickly resolve flagged issues to keep you on track and on budget.",
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/Smart Error Resolution System.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
  {
    title: "In-built Checklists that Meet Industry Standards",
    description:
      "Ensure consistency across designs with Draftflow’s extensive in-built checklists covering:",
    additionalInfo: (
      <div>
        <ul className="list-disc list-inside">
          <li>Graphical standards like annotation alignments, overlaps, and heirarchies.</li>
          <li>Informational consistency and compliance like checking whether your stairs meet ADA requirements.</li>
          <li>Scope capture like ensuring important elements are dimensioned in the right views.</li>
        </ul>
      </div>
    ),
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/inbuilt-checklists.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  {
    title: "Project Analytics",
    description:
      "Use Draftflow’s Project Analytics to gain insights into your team’s performance.",
    additionalInfo:
      "Managers can get  important insights into how Draftflow is being used in their current organization and projects.",
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/project analytics.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
];

const DrawingReviews: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });


  // Animate header opacity to disappear as the last card stacks
  const headerOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 1]);
  const headerTop = useTransform(scrollYProgress, [0.8, 1], [0, 0]);

  return (
    <section className="container-width mx-auto px-4 sm:px-6 lg:px-0" ref={ref}>
      <motion.div
        style={{ top: headerTop, opacity: headerOpacity }}
        className="lg:sticky lg:top-0 md:sticky md:top-0 static h-auto pt-20 pb-8 z-10 w-full mx-auto"
      >
        <div className="text-center w-full mb-12">
          <p className="sm:he2 h2 text-Mercury-50">
            Drawing Reviews{" "}
            <span className="text-Charcoal-60">have become</span> Easier{" "}
            <span className="text-Charcoal-60">than ever</span>
          </p>
        </div>
      </motion.div>

      <div className="h-auto w-full  mx-auto scroll-container">
        {cardData.map((card, index) => (
          <Cards key={index} index={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default DrawingReviews;

interface CardProps {
  index: number;
  card: {
    title: string;
    description: string;
    // additionalInfo: string | JSX.Element;
    additionalInfo: string | React.ReactNode;
    buttonLabel: string;
    imageSrc: string;
    imageAlt: string;
    reverseLayout: boolean;
  };
}



const Cards: React.FC<CardProps> = ({ index, card }) => {
  const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
   const [isMobile, setIsMobile] = useState(false);

  //  const { scrollYProgress } = useScroll({ target: ref });

  // Animate opacity from 0 to 1 in the center and back to 0 when leaving
  const opacity = isMobile
  ? useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) // Mobile animation
  : useTransform(scrollYProgress, [0, 0.5, 0.65], [0, 1, 0]); // Desktop animation;
//  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.2, 0.5, 1, 0.5, 0.0]);


  // Optional: Animate translateY for a smooth vertical motion effect
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  // const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.1, 0.5, 1, 0.5, 0.1]);
  // const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);

   // Detect screen size and update `isMobile`
   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
    key={index}
      ref={ref}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      className="snap-start mx-auto lg:sticky md:sticky static lg:h-[50vh] md:h-[50vh] h-full mb-10"
    >
      <motion.div
        className={`relative bg-white h-auto m-auto max-w-7xl origin-top flex flex-col ${
          card.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
        } items-center`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-4">
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            width={573} // Adjust width to maintain 50% on most screens
            height={519} // Adjust height to maintain the desired aspect ratio
            style={{ objectFit: 'cover' }} // or 'contain', depending on your use case
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-8">
          <p className="h4 drawing-reviews-h4 ">{card.title}</p>
          <p className="mt-4 text-gray-700">{card.description}</p>
          <div className="mt-4 text-gray-600">{card.additionalInfo}</div>
          {/* <button className="mt-4 px-6 py-2 text-black border border-solid border-black font-bold rounded">
            {card.buttonLabel}
          </button> */}
        </div>
      </motion.div>
    </motion.div>
  );
};














// const Cards: React.FC<CardProps> = ({ index, card }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref });

//   // Define translation animation based on scroll progress
//   const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, -40, -100]);
  
//   // Animate opacity based on scroll position
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.1, 0.6, 1, 0.6, 0.]);

//   return (
//     <motion.div
//       key={index}
//       ref={ref}
//       style={{
//         opacity,
//         transform: `translateY(${translateY}px)`, // Apply the vertical movement based on scroll position
//       }}
//       className="snap-start mx-auto lg:sticky md:sticky static lg:h-[50vh] md:h-[50vh] h-full mb-10"
//     >
//       <motion.div
//         className={`relative bg-white h-auto m-auto max-w-7xl origin-top flex flex-col ${
//           card.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
//         } items-center`}
//       >
//         {/* Image */}
//         <div className="w-full md:w-1/2 h-full flex justify-center items-center p-4">
//           <Image
//             src={card.imageSrc}
//             alt={card.imageAlt}
//             width={573} // Adjust width to maintain 50% on most screens
//             height={519} // Adjust height to maintain the desired aspect ratio
//             objectFit="cover"
//           />
//         </div>

//         {/* Text */}
//         <div className="w-full md:w-1/2 p-8">
//           <p className="h4 drawing-reviews-h4">{card.title}</p>
//           <p className="mt-4 text-gray-700">{card.description}</p>
//           <div className="mt-4 text-gray-600">{card.additionalInfo}</div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };
