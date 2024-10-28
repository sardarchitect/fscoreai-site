import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import testimonials from "./testimonials";

const DescriptionThree = () => {
  const cardWidth = 395; // The width of a card in pixels
  const gap = 24; // Gap between the cards
  const totalCardWidth = cardWidth + gap; // Combined width of a card and gap
  const maxIndex = testimonials.length - 1; // Maximum index of cards
  
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second card (index 1) centered
  const x = useMotionValue(0); // The X offset for the scrolling animation
  
  // This function calculates the X offset needed to center the card at 'index'
  const calculateOffset = (index: number) => {
    const windowWidth = window.innerWidth; // Get the current width of the window
    const centerPosition = (windowWidth - cardWidth) / 3.5; // Calculate center position based on window size
    return -(index * totalCardWidth - centerPosition); // Return the X offset needed to center the card
  };

  // Move cards left or right based on user input (button click)
  const moveCards = (direction: string) => {
    let newIndex = currentIndex; // Initialize the new index with the current index

    if (direction === "left" && currentIndex > 0) {
      newIndex = currentIndex - 1; // Move one card to the left
    } else if (direction === "right" && currentIndex < maxIndex) {
      newIndex = currentIndex + 1; // Move one card to the right
    }

    setCurrentIndex(newIndex); // Update the index of the currently centered card
    animate(x, calculateOffset(newIndex)); // Animate the X offset to center the new card
  };

  

  // Recalculate and update the card positions when the window is resized
  useEffect(() => {
    const handleResize = () => {
      animate(x, calculateOffset(currentIndex)); // Recalculate and animate to the correct position on resize
    };

    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup resize listener on unmount
    };
  }, [currentIndex]);

  return (
    <section className="relative scroll-smooth bg-gradient-to-br from-[#B6C4E1] via-[#CCD7E1] to-[#DCE5E2] w-full py-16 lg:py-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className=" text-center">
          <p className="he2 text-Charcoal-80 tracking-wide">
            From our <span className="text-Mercury-50">Community</span>
          </p>
          <p className="mt-2 t1 text-Mercury-50">
            Draftflow uses a SaaS business model with tiered pricing!
          </p>
        </div>

        {/* Scrollable cards */}
        <div className="relative mt-12   flex justify-center  items-center ">
          <motion.div
            className="flex justify-start  space-x-6"
            style={{ x }} // Use x motion value for scrolling animation
          >
            {testimonials.map((testimonial, index) => {
              const isCenter = index === currentIndex; // Check if the current card is centered
              const isLeft = index === currentIndex - 1; // Check if the card is to the left of the center
              const isRight = index === currentIndex + 1; // Check if the card is to the right of the center

              return (
                <motion.div
                  key={testimonial.id}
                  className={`bg-white shadow-lg  rounded-lg p-8 text-start w-96 cursor-pointer scroll-smooth  flex-none transition-transform duration-300 transform ${
                    isCenter
                      ? "scale-105 opacity-100 z-10" // Center card gets larger scale and full opacity
                      : isLeft
                      ? "rotate-12 scale-95 opacity-70 -z-0" // Left card gets rotation and smaller scale
                      : isRight
                      ? "-rotate-12 scale-95 opacity-70 -z-0" // Right card gets rotation and smaller scale
                      : "opacity-0 pointer-events-none" // Cards far from center are hidden
                  }`}
                  style={{
                    transformOrigin: isLeft ? "center " : isRight ? "center " : "center", // Adjust tilt origin
                  }}
                >
                  <p className="text-lg items-center text-gray-700 mb-4">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex  justify-start items-start">
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

        {/* Scroll left button */}
        <button
          className="absolute left  top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full shadow-lg p-3"
          onClick={() => moveCards("left")}
          disabled={currentIndex === 0} // Disable button if no more cards to the left
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scroll right button */}
        <button
          className="absolute  right-10 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full shadow-lg p-3"
          onClick={() => moveCards("right")}
          disabled={currentIndex === maxIndex} // Disable button if no more cards to the right
        >
          <svg
            className="w-6  h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default DescriptionThree;
