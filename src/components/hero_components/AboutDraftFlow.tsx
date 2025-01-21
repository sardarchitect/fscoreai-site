import Image from "next/image";
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";


const AboutDraftFlow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Control background animation only when in view
  const controls = useAnimation();
  const yPos = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
    };

    // Initial check
    updateScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0 && latest < 1) {
        controls.start({ y: yPos.get() });
      }
    });
  }, [scrollYProgress, controls, yPos]);


  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-10 flex items-center justify-center text-center overflow-hidden"
    >
      {/* Moving Background Image controlled by scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/home/graph-up.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          zIndex: 0,
        }}
        animate={controls}
        initial={{ y: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Content Section */}
      <div className="relative  z-10 max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Text Section */}
        <div className="col-span-12 text-center px-4 py-16 lg:px-8">
          <p className="h3 sm:he2 text-Charcoal-80">
            What is<span className="text-Mercury-50"> Draftflow?</span>
          </p>
          {/* <MovingIcons /> */}

          <p className="mt-6 t1 text-gray-600 mx-auto max-w-3xl">
            Draftflow is a subscription-based software designed to streamline and
            enhance the quality control process for architectural construction drawings
            by providing real-time, context-specific assistance to architects in Autodesk® Revit.
          </p>
          <p className="mt-4 t1 text-gray-600 mx-auto max-w-3xl">
            Draftflow enforces graphical standards, flags data inconsistencies, and
            highlights potential missing scope, helping firms deliver flawless documents
            with speed and precision, while reducing the time spent on lengthy
            review process.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-12 flex justify-center relative ">

          {/* Main Image with Zoom-In Animation */}
          <motion.div
            className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain lg:w-[80%] lg:h-[50%] h-fit w-fit "
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            {/* First Row */}
            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div className="w-full">
                <motion.div
                  className=""
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(85%, 69%)` }}
                  whileInView={{
                    opacity: 1,
                    transform: isLargeScreen
                      ? `translate(38%, -30%)` // Large screen
                      : `translate(5%, -30%)`, // Mobile screen

                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/about-draft-flow/run-checklist.png)] bg-center bg-no-repeat bg-contain lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[160px] w-[100px] h-[80px]"
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="w-full">
                <motion.div
                  className=""
                  style={{}}
                  initial={{
                    opacity: 0,
                    transform: `translate(-53%, 79%)`,
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: isLargeScreen
                      ? `translate(30%, -30%)` // Large screen
                      : `translate(30%, -30%)`, // Mobile screen

                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/about-draft-flow/auto-detection.png)] bg-center bg-no-repeat bg-contain lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[160px] w-[100px] h-[80px]"
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div className="w-full">
                <motion.div
                  className=""
                  style={{}}
                  initial={{
                    opacity: 0,
                    transform: `translate(85%, -60%)`,
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: isLargeScreen
                      ? `translate(25%, -20%)` // Large screen
                      : `translate(-10%, -10%)`, // Mobile screen

                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/about-draft-flow/issues-checklist.png)] bg-center bg-no-repeat bg-contain lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[160px] w-[100px] h-[80px]"
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="w-full">
                <motion.div
                  className=""
                  style={{}}
                  initial={{
                    opacity: 0,
                    transform: `translate(-15%, -60%)`,
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: isLargeScreen
                      ? `translate(45%, -20%)` // Large screen
                      : `translate(45%, -10%)`, // Mobile screen

                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/about-draft-flow/auto-resolve.png)] bg-center bg-no-repeat bg-contain lg:w-[300px] lg:h-[200px] md:w-[300px] md:h-[160px] w-[130px] h-[80px]"
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                </motion.div>
              </motion.div>
            </div>

          </motion.div>


          <div>
            <motion.div
              className="absolute top-10 left-32"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/1.1.png" alt="Icon 4" 
                layout="responsive" 
                width={150} // Original width
                height={40} // Original height
                sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" />
            </motion.div>

            <motion.div
              className="absolute top-40 left-10"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/2.2.png" alt="Icon 4" 
                layout="responsive" sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" 
                width={70} height={40} />
            </motion.div>

            <motion.div
              className="absolute top-64 left-32"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/3.3.png" 
                layout="responsive" sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" 
                alt="Icon 4" width={140} height={40} />
            </motion.div>

            <motion.div
              className="absolute top-10 right-40 transform -translate-y-7"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src="/home/4.4.png"
                alt="Icon 2"
                width={180}
                height={40}
                layout="responsive" sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" 
              />
            </motion.div>

            <motion.div
              className="absolute top-48 right-24 transform -translate-y-7"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/5.5.png" 
                layout="responsive" sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" 
                alt="Icon 2" width={80} height={40} />
            </motion.div>

            <motion.div
              className="absolute top-80 right-40 transform -translate-y-7"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/6.6.png" alt="Icon 2" 
                layout="responsive" sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" 
                width={150} height={40} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDraftFlow;
