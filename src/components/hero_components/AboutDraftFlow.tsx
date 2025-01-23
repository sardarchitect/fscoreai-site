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
        className=" bg-[url(/home/wavy-graph-up.png)] bg-center bg-no-repeat bg-cover w-full h-screen opacity-100 z-0 absolute inset-0"
        animate={controls}
        initial={{ y: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />


      {/* <motion.div
        className="lg:block hidden " // Set width/height for the container
      >
        <Image src="/home/new-graph-up.png" alt="graph" fill />
      </motion.div> */}


      {/* Content Section */}
      <div className="relative  z-10 max-w-7xl mb-20 mx-auto px-4 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Heading Section */}
        <div className="col-span-12 text-center px-4 pt-8 lg:px-8">
          <p className="h3 sm:he2 text-Charcoal-80">
            What is<span className="text-Mercury-50"> Draftflow?</span>
          </p>
        </div>

        {/* Text Section */}
        <div className="col-span-12 text-center px-4 pb-8 lg:pb-0 lg:px-8 order-2 lg:order-1">
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
        <div className="col-span-12 flex justify-center lg:pb-0 pb-6 pt-8 lg:pt-16 relative order-1 lg:order-2">

          {/* Main Image with Zoom-In Animation */}
          <motion.div
            className={`${isLargeScreen ? "bg-[url(/home/image.png)]" : "bg-[url(/home/main/new-image.png)]  shadow-[10px_10px_15px_rgba(0,0,0,0.15)]"} bg-center bg-no-repeat lg:bg-contain bg-[length:100%_90%] lg:w-[80%] lg:h-[50%] h-fit w-fit`}
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            {/* First Row */}
            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div className="w-full">
                <motion.div
                  initial={isLargeScreen
                    ? { opacity: 0, transform: `translate(85%, 69%)` }
                    : { opacity: 1, transform: `translate(-20%, -20%)` }}
                  whileInView={
                    isLargeScreen
                      ? { opacity: 1, transform: `translate(38%, -30%)` }
                      : { opacity: 1, transform: `translate(-20%, -20%)` }
                  }
                  transition={isLargeScreen ? { duration: 1.2 } : undefined}
                >
                  <motion.div
                    className={`${isLargeScreen ? "bg-[url(/home/about-draft-flow/run-checklist.png)]" : "bg-[url(/home/1.png)]"} bg-center bg-no-repeat bg-contain lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[160px] w-[100px] h-[80px]`}
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                  {/* bg-icons animation */}
                  <motion.div
                    className="absolute"
                    initial={isLargeScreen
                      ? { opacity: 0, transform: `translate(50%, 50%)` }
                      : { opacity: 1, transform: `translate(-2rem, -3.5rem)` }}
                    whileInView={isLargeScreen
                      ? { opacity: 1, transform: `translate(-7rem, -9rem)` }
                      : { opacity: 1, transform: `translate(-2rem, -3.5rem)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image src="/home/1.1.png" alt="Icon 4"
                      width={isLargeScreen ? 130 : 90}
                      height={70} />
                  </motion.div>


                  <motion.div
                    className="absolute hidden  lg:block "
                    initial={{ opacity: 0, transform: `translate(50%, 50%)` }}
                    whileInView={{ opacity: 1, transform: `translate(-13rem, -20%)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image src="/home/2.2.png" alt="Icon 4"
                      width={80}
                      height={50} />
                  </motion.div>

                  <motion.div
                    className="absolute"
                    initial={isLargeScreen
                      ? { opacity: 0, transform: `translate(50%, 50%)` }
                      : { opacity: 1, transform: `translate(-1rem, 2rem)` }}
                    whileInView={isLargeScreen
                      ? { opacity: 1, transform: `translate(-5rem, 8rem)` }
                      : { opacity: 1, transform: `translate(-1rem, 2rem)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image src="/home/3.3.png" alt="Icon 4"
                      width={isLargeScreen ? 100 : 70}
                      height={40} />
                  </motion.div>

                </motion.div>
              </motion.div>


              <motion.div className="w-full">
                <motion.div
                  initial={
                    isLargeScreen
                      ? { opacity: 0, transform: `translate(-53%, 79%)` }
                      : { opacity: 1, transform: `translate(40%, -20%)` }
                  }
                  whileInView={
                    isLargeScreen
                      ? { opacity: 1, transform: `translate(30%, -30%)` }
                      : { opacity: 1, transform: `translate(40%, -20%)` }
                  }
                  transition={isLargeScreen ? { duration: 1.2 } : undefined}
                >
                  <motion.div
                    className={`${isLargeScreen ? "bg-[url(/home/about-draft-flow/auto-detection.png)]" : "bg-[url(/home/2.png)]"} z-10 relative bg-center bg-no-repeat bg-contain lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[160px] w-[100px] h-[80px]`}
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                  <motion.div
                    className="absolute z-0 "
                    initial={isLargeScreen
                      ? { opacity: 0, transform: `translate(50%, 50%)` }
                      : { opacity: 1, transform: `translate(2.5rem, -4rem)` }}
                    whileInView={isLargeScreen
                      ? { opacity: 1, transform: `translate(6.5rem, -10rem)` }
                      : { opacity: 1, transform: `translate(2.5rem, -4rem)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image src="/home/4.4.png" alt="Icon 4"
                      width={isLargeScreen ? 140 : 80}
                      height={80} />
                  </motion.div>

                  <motion.div
                    className="absolute z-0 hidden  lg:block "
                    initial={{ opacity: 0, transform: `translate(50%, 50%)` }}
                    whileInView={{ opacity: 1, transform: `translate(17rem, -40%)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image src="/home/5.5.png" alt="Icon 4"
                      width={isLargeScreen ? 80 : 50}
                      height={40} />
                  </motion.div>

                  <motion.div
                    className="absolute z-0"
                    initial={isLargeScreen
                      ? { opacity: 0, transform: `translate(50%, 50%)` }
                      : { opacity: 1, transform: `translate(2rem, 2rem)` }}
                    whileInView={isLargeScreen
                      ? { opacity: 1, transform: `translate(6.5rem, 7.5rem)` }
                      : { opacity: 1, transform: `translate(2rem, 2rem)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image src="/home/6.6.png" alt="Icon 4"
                      width={isLargeScreen ? 100 : 70}
                      height={40} />
                  </motion.div>

                </motion.div>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div className="w-full">
                <motion.div
                  initial={
                    isLargeScreen
                      ? { opacity: 0, transform: `translate(85%, -60%)` }
                      : { opacity: 1, transform: `translate(-40%, -30%)` }
                  }
                  whileInView={
                    isLargeScreen
                      ? { opacity: 1, transform: `translate(25%, -20%)` }
                      : { opacity: 1, transform: `translate(-40%, -30%)` }
                  }
                  transition={isLargeScreen ? { duration: 1.2 } : undefined}
                >
                  <motion.div
                    className={`${isLargeScreen ? "bg-[url(/home/about-draft-flow/issues-checklist.png)]" : "bg-[url(/home/3.png)]"} bg-center bg-no-repeat bg-contain lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[160px] w-[100px] h-[80px]`}
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="w-full">
                <motion.div
                  initial={
                    isLargeScreen
                      ? { opacity: 0, transform: `translate(-15%, -60%)` }
                      : { opacity: 1, transform: `translate(50%, -30%)` }
                  }
                  whileInView={
                    isLargeScreen
                      ? { opacity: 1, transform: `translate(45%, -20%)` }
                      : { opacity: 1, transform: `translate(50%, -30%)` }
                  }
                  transition={isLargeScreen ? { duration: 1.2 } : undefined}
                >
                  <motion.div
                    className={`${isLargeScreen ? "bg-[url(/home/about-draft-flow/auto-resolve.png)]" : "bg-[url(/home/4.png)]"} bg-center bg-no-repeat bg-contain lg:w-[300px] lg:h-[200px] md:w-[300px] md:h-[160px] w-[130px] h-[80px]`}
                    transition={{ type: "tween", duration: 0.1 }}
                  />
                </motion.div>
              </motion.div>
            </div>

          </motion.div>




        </div>

      </div >
    </section >
  );
};

export default AboutDraftFlow;
