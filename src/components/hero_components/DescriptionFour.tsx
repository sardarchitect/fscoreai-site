'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Array containing data for each card
const cardData = [
  {
    title: "Real-time Error Detection System",
    description: "Our innovative real-time error detection system operates seamlessly in the background, keeping your projects on track. Users can customize detection frequency to suit their workflow.",
    additionalInfo: " As it reviews your Revit documents against comprehensive project-based checklists, any potential errors are promptly identified. You'll receive gentle on-screen notifications, allowing you to quickly view issues through an easy to navigate error table.",
    buttonLabel: "Get Started",
    imageSrc: "/home/real-time error detection system.png",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  {
    title: "Smart Error Resolution System",
    description: "Streamline your project corrections with our Smart Error Resolution System. Upon detecting errors, you have the option to automatically resolve them with just a few clicks. ",
    additionalInfo: "Our intuitive user interface suggests fixes based on your established checklist definitions, making error management faster and more efficient.",
    buttonLabel: "Get Started",
    imageSrc: "/home/smart error resolution system.png",
    imageAlt: "Issue Checklist",
    reverseLayout: false,
  },
  {
    title: "In-built Checklists",
    description: "Ensure your designs meet the highest standards with our extensive in-built checklists, covering essential areas such as: ",
    additionalInfo: (
      <div>
        <ul className="list-disc list-inside">
          <li>Graphical Standards</li>
          <li>Information Consistency and Compliance</li>
          <li>Scope Capture</li>
        </ul>
      </div>
    ),
    buttonLabel: "Get Started",
    imageSrc: "/home/in-built checklists.png",
    imageAlt: "Issue Checklist",
    reverseLayout: true,
  },
  {
    title: "Project Analytics",
    description: "Gain valuable insights into your team's performance with our robust Project Analytics feature. Admins and managers can monitor how Draftflow is utilized across projects, enabling informed decision-making and enhancing project outcomes.",
    additionalInfo: " Elevate your workflow and ensure quality with Draftflow’s powerful features!",
    buttonLabel: "Get Started",
    imageSrc: "/home/project analytics.png",
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        style={{ top: headerTop, opacity: headerOpacity }}
        className="lg:sticky lg:top-0 md:sticky md:top-0 static h-auto pt-20 pb-8 z-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="he2 text-gray-800">
            No more Hassle, yada yada
          </p>
          <p className="mt-4 t1 text-gray-600">
            Draftflow uses a SaaS business model with tiered pricing, allowing flexibility in pricing based on required features.
          </p>
        </div>
      </motion.div>
      <div className="h-auto mx-auto">
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
      className="mx-auto lg:sticky lg:top-[35vh] md:sticky md:top-[35vh] static lg:h-[70vh] md:h-[70vh] h-full mb-10"
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
          <h3 className="h4 ">
            {card.title}
          </h3>
          <p className="mt-4 text-gray-700">{card.description}</p>
          <div className="mt-4 text-gray-600">{card.additionalInfo}</div>
          <button className="mt-4 px-6 py-2 text-black border border-solid border-black font-bold rounded">
            {card.buttonLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
