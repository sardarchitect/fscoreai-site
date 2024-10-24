import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import testimonials from "./testimonials";

const DescriptionThree = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 0, 100], [-10, 0, 10]);

  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-6xl font-semibold text-blue-600 uppercase tracking-wide">
            From our Community
          </p>
          <p className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Draftflow uses a SaaS business model with tiered pricing!
          </p>
        </div>

        {/* Scrollable Testimonials with Motion */}
        <div className="relative mt-10 flex justify-center items-center overflow-hidden">
          <motion.div
            ref={scrollRef}
            drag="x"
            dragConstraints={{ left: -600, right: 600 }}
            className="flex space-x-6"
            style={{ x }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`bg-white shadow-lg rounded-lg p-8 text-left w-96 flex-none transition-transform duration-300 ${
                  index === 1 ? "scale-105 opacity-100" : "scale-90 opacity-50"
                }`}
                style={{ rotate }}
              >
                <p className="text-lg text-gray-700 mb-4">
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
            ))}
          </motion.div>
        </div>

        {/* Scroll Left Button */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3"
          onClick={() => {
            scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
          }}
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

        {/* Scroll Right Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3"
          onClick={() => {
            scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
          }}
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
      </div>
    </section>
  );
};

export default DescriptionThree;
