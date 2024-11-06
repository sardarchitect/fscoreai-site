import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import testimonials from "./testimonials";

const DescriptionThree = () => {
  const cardWidth = 395; // Desktop card width in pixels
  const mobileCardWidth = 300; // Mobile card width in pixels
  const mdCardWidth = 350; // Medium (md) card width in pixels
  const gap = 24; // Gap between the cards
  const totalCardWidth = cardWidth + gap;
  const maxIndex = testimonials.length - 1;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const x = useMotionValue(0);

  const calculateOffset = (index: number) => {
    const windowWidth = window.innerWidth;
    const centerPosition = isMobile
      ? (windowWidth - mobileCardWidth) / 2
      : isMedium
      ? (windowWidth - mdCardWidth) / 2
      : (windowWidth - cardWidth) / 3.5;
    return -(index * totalCardWidth - centerPosition);
  };

  const moveCards = (direction: string) => {
    let newIndex = currentIndex;
    if (direction === "left" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === "right" && currentIndex < maxIndex) {
      newIndex = currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    animate(x, calculateOffset(newIndex));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMedium(window.innerWidth >= 768 && window.innerWidth < 1024);
      animate(x, calculateOffset(currentIndex));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  return (
    <section className="relative bg-gradient-to-br from-[#B6C4E1] via-[#CCD7E1] to-[#DCE5E2] w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center ">
          <p className="sm:he2 h2 text-Charcoal-80 tracking-wide">
            From our <span className="text-Mercury-50">Community</span>
          </p>
          <p className="mt-2 t1   text-Mercury-50">
            Draftflow is continuously evolving, thanks to insights from forward-thinking firms like yours. Here’s what some of our partners are saying: 
          </p>
        </div>

        {/* Scrollable cards */}
        <div className={`relative mt-12 ${isMobile || isMedium ? "overflow-x-scroll" : "flex justify-center items-center"}`}>
          <motion.div
            className={`flex ${isMobile || isMedium ? "space-x-4" : "space-x-6"}`}
            style={{ x: isMobile || isMedium ? undefined : x }}
          >
            {testimonials.map((testimonial, index) => {
              const isCenter = index === currentIndex;
              const isLeft = index === currentIndex - 1;
              const isRight = index === currentIndex + 1;

              return (
                <motion.div
                  key={testimonial.id}
                  className={`bg-white shadow-lg rounded-lg p-8 text-start cursor-pointer flex-none transition-transform duration-300 transform ${
                    isMobile || isMedium
                      ? ""
                      : isCenter
                      ? "scale-105 opacity-100 z-10"
                      : isLeft
                      ? "rotate-12 scale-95 opacity-70 -z-0"
                      : isRight
                      ? "-rotate-12 scale-95 opacity-70 -z-0"
                      : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    width: isMobile
                      ? mobileCardWidth
                      : isMedium
                      ? mdCardWidth
                      : cardWidth,
                    maxWidth: isMobile
                      ? mobileCardWidth
                      : isMedium
                      ? mdCardWidth
                      : cardWidth,
                    transformOrigin: isLeft ? "center" : isRight ? "center" : "center",
                  }}
                >
                  <p className="text-lg items-center text-gray-700 mb-4">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Buttons (Hidden on mobile) */}
        {!isMobile && (
          <>
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full shadow-lg p-3"
              onClick={() => moveCards("left")}
              disabled={currentIndex === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full shadow-lg p-3"
              onClick={() => moveCards("right")}
              disabled={currentIndex === maxIndex}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default DescriptionThree;
