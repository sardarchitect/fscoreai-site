'use client'
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
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
];

const DescriptionFour = () => {
  const cardContainer = useRef<HTMLDivElement | null>(null);
const [headerHeight, setHeaderHeight] = useState(0)
useEffect(() => {
  const handleScroll = () => {
    if(cardContainer.current){
      const containerPositionY = cardContainer.current.getBoundingClientRect().top
      if(containerPositionY < 0){
        setHeaderHeight(110)
        console.log(containerPositionY)
      }else{
        setHeaderHeight(0)
      }
    }
  }
  window.addEventListener('scroll' , handleScroll)
  return () => window.removeEventListener('scroll' , handleScroll)
}, [])

  return (

    <section className="max-w-7xl m-auto">

      {/* Sticky Heading Section */}
      <div 
      className={`sticky top-0 h-[${headerHeight}vh] pt-[10%] pb-[13%] z-10 max-w-7xl m-auto`}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            No more Hassle, yada yada
          </h1>
          <p className="mt-4 text-gray-600">
            Draftflow uses a SaaS business model with tiered pricing, allowing flexibility in pricing based on required features.
          </p>
        </div>
      </div>
      <div
      ref={cardContainer}
      className="h-auto m-auto">
        {cardData.map((card, index) => {
          return <Cards key={index} index={index} range={[index * 0.25, 1]} card={card}></Cards>
         
        })}
      </div>

      {/* <div className="h-40"></div> */}
    </section>

  );
};

export default DescriptionFour;

function Cards({index, range, card}: any) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']

  })
  const targetScale = 1 - ( (cardData.length - index) * 0.05);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div
      key={index}
      ref={container}
      className={`m-auto scroll-smooth sticky top-[35vh] h-[70vh]`}
    >
      <motion.div
        // style={{  scale, transition: `all 0.8s` }}
        // style={{scale, top: `calc(-5vh + ${index * 25}px)` }}
        className={`relative scroll-smooth bg-white h-[60vh] m-auto max-w-7xl origin-top shadow-lg rounded-lg flex flex-col ${card.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-10 z-[${index + 1}]`}>
        <div className="relative w-2/5 h-3/4">
          {/* Image */}
          <div
            // style={{ scale: imageScale }}
            className="md:w-1/3 flex justify-center mb-4 md:mb-0">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              className="rounded-lg bg-cover"
            />
          </div>
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
      </motion.div>
    </div>
  );
}




