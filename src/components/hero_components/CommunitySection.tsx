import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import testimonials from "./testimonials";

const CommunitySection = () => {
  const cardWidth = 395; // Desktop card width in pixels
  const mobileCardWidth = 300; // Mobile card width in pixels
  const mdCardWidth = 350; // Medium (md) card width in pixels
  const maxIndex = testimonials.length - 1;
  const centeredCard = Math.floor(testimonials?.length / 2); // Calculate the index of the centered card based on the total number of testimonials.
  const x = useMotionValue(0);

  const [currentIndex, setCurrentIndex] = useState(centeredCard); // This ensures the card at the middle of the array is aligned at the center of the viewport.
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isInView, setIsInView] = useState(false); // Track if section is in view

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to manage interval
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  const calculateOffset = (index: number) => {
    // Ensure refs are valid
    if (!cardRefs.current.length || index < 0 || index >= cardRefs.current.length) {
      console.error("Invalid index or card references are not initialized.");
      return 0;
    }
    // Calculate card widths and centers
    const cardWidths = cardRefs.current.map((card) => card?.getBoundingClientRect().width || 0);
    // Calculate cumulative offsets (center of each card)
    const cardCenters: number[] = [];
    let cumulativeOffset = 0;
    cardWidths.forEach((width, i) => {
      const center = cumulativeOffset + width / 2; // Center of the current card
      cardCenters.push(center);
      cumulativeOffset += width;
    });
    // If the current index matches the centeredCard, no offset is needed as it's already in view.
    if (index === centeredCard) {
      return 0; // Reference index, no offset needed
    }

    const offset = cardCenters[index] - cardCenters[centeredCard];
    return -offset; // Negative for leftward movement
  };


  const moveCards = (direction: string) => {
    let newIndex = currentIndex;
    if (direction === "left" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === "right" && currentIndex < maxIndex) {
      newIndex = currentIndex + 1;
    }

    handleInteraction(newIndex);
  };

  const handleInteraction = (index: number) => {
    setCurrentIndex(index);

    // Restart the animation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Update position
    animate(x, calculateOffset(index), {
      duration: 1,
      ease: "easeInOut",
    });

    // Restart auto-slide timer
    startAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === maxIndex ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 6 seconds
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMedium(window.innerWidth >= 768 && window.innerWidth < 1024);
      animate(x, calculateOffset(currentIndex), {
        duration: 1,
        ease: "easeInOut",
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  // Infinite Auto-Swipe while in view
  useEffect(() => {
    if (!isInView) return; // Do nothing if not in view

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView]);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden w-full py-16 lg:py-24 bg-gradient-to-br from-[#B6C4E1] via-[#CCD7E1] to-[#DCE5E2]">
      <div className="container-width mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="sm:he2 h2 text-Charcoal-80 tracking-wide">
            From our <span className="text-Mercury-50">Community</span>
          </p>
          <p className="mt-2 t1 text-Mercury-50">
            Draftflow is continuously evolving, thanks to insights from
            forward-thinking firms like yours. Here’s what some of our partners
            are saying:
          </p>
        </div>

        <div
          className={`relative mt-12 ${isMobile || isMedium
            ? "overflow-x-scroll"
            : "flex justify-center items-center"
            }`}
        >
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
                  ref={(el) => setCardRef(el, index)}
                  className={`bg-white shadow-lg rounded-lg p-8 text-start cursor-pointer flex-none transition-all duration-1000 transform  ${isMobile || isMedium
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
        <div className="indicator-container text-center hidden md:block">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${currentIndex === index ? "active" : ""
                }`}
              onClick={() => handleInteraction(index)}
            ></span>
          ))}
        </div>

        <div className="absolute inset-y-1/2 left-5 hidden md:block">
          {currentIndex !== 0 && (
            <button
              className="transform -translate-y-1/2 bg-black text-white rounded-full shadow-lg p-3"
              onClick={() => moveCards("left")}
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
          )}
        </div>

        <div className="absolute inset-y-1/2 right-5 hidden md:block">
          {currentIndex !== maxIndex && (
            <button
              className="transform -translate-y-1/2 bg-black text-white rounded-full shadow-lg p-3"
              onClick={() => moveCards("right")}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;