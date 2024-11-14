'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Array containing data for each card
const cardData = [
  {
    title: "Real-time Error Detection",
    description: "Draftflow’s real-time error detection system quietly monitors your Revit projects, comparing them against comprehensive checklists to catch potential issues immediately. ",
    additionalInfo: "Get quick on-screen notifications and view issues easily through an intuitive error table.",
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/Real-time Error Detection System.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  {
    title: "Smart Error Resolution ",
    description: "When errors are detected, Draftflow suggests immediate resolutions, allowing you to correct issues with just a few clicks.",
    additionalInfo: " Our user-friendly interface helps manage errors quickly, keeping projects on track and on budget.",
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/Smart Error Resolution System.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
  {
    title: "In-built Checklists for High Standards",
    description: "Ensure consistency across designs with Draftflow’s extensive in-built checklists covering:  ",
    additionalInfo: (
      <div>
        <ul className="list-disc list-inside">
          <li>Graphical Standards</li>
          <li> Information Consistency and Compliance </li>
          <li>Scope Capture </li>
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
    description: "Use Draftflow’s Project Analytics to gain insights into your team’s performance.",
    additionalInfo: " Monitor usage patterns, make data-driven decisions, and optimize workflows to achieve top-notch project outcomes.",
    buttonLabel: "Get Started",
    imageSrc: "/home/videos/project analytics.gif",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
];

const DescriptionFour: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Animate header opacity to disappear as the last card stacks
  const headerOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const headerTop = useTransform(scrollYProgress, [0.8, 1], [0, -100]);

  return (
<section className="container-width mx-auto px-4 sm:px-6 lg:px-0" ref={ref}>
  <motion.div
    style={{ top: headerTop, opacity: headerOpacity }}
    className="lg:sticky lg:top-0 md:sticky md:top-0 static h-auto pt-20 pb-8 z-10 w-full mx-auto"
  >
    <div className="text-center w-full mb-12">
      <p className="sm:he2 h2 text-Mercury-50">
        Drawing Reviews <span className="text-Charcoal-60">have become</span> Easier <span className="text-Charcoal-60">than ever</span>
      </p>
    </div>
  </motion.div>

  <div className="h-auto w-full  mx-auto">
    {cardData.map((card, index) => (
      <Cards key={index} index={index} card={card} />
    ))}
  </div>
</section>

  );
};

export default DescriptionFour;

interface CardProps {
  index: number;
  card: {
    title: string;
    description: string;
    additionalInfo: string | JSX.Element;
    buttonLabel: string;
    imageSrc: string;
    imageAlt: string;
    reverseLayout: boolean;
  };
}

const Cards: React.FC<CardProps> = ({ index, card }) => {
  return (
    <motion.div
      key={index}
      className="mx-auto lg:sticky lg:top-[25vh] md:sticky md:top-[35vh] static lg:h-[70vh] md:h-[70vh] h-full mb-10"

    >
      <motion.div
        className={`relative bg-white h-auto m-auto max-w-7xl origin-top flex flex-col ${card.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-4">
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            width={573} // Adjust width to maintain 50% on most screens
            height={519} // Adjust height to maintain the desired aspect ratio
            objectFit="cover"
          />
        </div>
        
        {/* Text */}
        <div className="w-full md:w-1/2 p-8">
          <p className="h4 ">
            {card.title}
          </p>
          <p className="mt-4 text-gray-700">{card.description}</p>
          <div className="mt-4 text-gray-600">{card.additionalInfo}</div>
          {/* <button className="mt-4 px-6 py-2 text-black border border-solid border-black font-bold rounded">
            {card.buttonLabel}
          </button> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
