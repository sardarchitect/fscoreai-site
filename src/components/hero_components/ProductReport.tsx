import Image from "next/image";
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";


const ProductReport = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Control background animation only when in view
  const controls = useAnimation();
  const yPos = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const [mousePosition, setMousePosition] = useState<any>({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const calculateMovement = (axisValue: any, iconPosition: any) => {
    // Calculate movement limited to -100px to +100px relative to the icon's position
    return Math.max(-100, Math.min(100, (axisValue - iconPosition) / 5));
  };

  useEffect(() => {
    // Update window size only on the client
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0 && latest < 1) {
        controls.start({ y: yPos.get() });
      }
    });
  }, [scrollYProgress, controls, yPos]);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

      {/* Static Background Image */}
      {/* <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `url(/home/BG.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}

      {/* Content Section */}
      <div className="relative  z-10 max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Text Section */}
        <div className="col-span-12 text-center px-4 py-16 lg:px-8">
          <p className="h3 sm:he2 text-gray-900">
            <span className="text-[#666666]">What is</span> Draftflow?
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
        {/* <div className="col-span-12 flex justify-center relative ">
          <motion.div
            className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[80%] h-[50%]"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div className="w-full" style={{}}>
                <motion.div
                  className=""
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(85%, 69%)` }}
                  whileInView={{
                    opacity: 1,
                    transform: `translate(28%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div className="bg-[url(/home/1.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"></motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="w-full " style={{}}>
                <motion.div
                  className="w-full "
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(-53%, 79%)` }}
                  whileInView={{
                    opacity: 1,
                    transform: `translate(30%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div className="bg-[url(/home/2.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"></motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div className="w-full">
                <motion.div
                  className="w-full "
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(85%, -60%)` }}
                  whileInView={{
                    opacity: 1,
                    transform: `translate(15%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div className="bg-[url(/home/3.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"></motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="w-full">
                <motion.div
                  className="w-full "
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(-15%, -60%)` }}
                  whileInView={{
                    opacity: 1,
                    transform: `translate(50%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div className="bg-[url(/home/4.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"></motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div> */}

        <div className="col-span-12 flex justify-center relative ">
          {/* Main Image with Zoom-In Animation */}

          <motion.div
            className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[80%] h-[50%]"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseMove={handleMouseMove}
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
                    transform: `translate(28%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/1.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    animate={
                      windowSize.width && windowSize.height // Ensure we have dimensions
                      ? {
                          x: calculateMovement(mousePosition.x, windowSize.width / 2),
                          y: calculateMovement(mousePosition.y, windowSize.height / 2),
                        }
                      : { x: 0, y: 0 }}
                    // animate={{
                    //   x: calculateMovement(
                    //     mousePosition.x,
                    //     window.innerWidth / 2
                    //   ),
                    //   y: calculateMovement(
                    //     mousePosition.y,
                    //     window.innerHeight / 2
                    //   ),
                    // }}

                    // transition={{ type: "spring", stiffness: 150, damping: 20 }}
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
                    transform: `translate(30%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/2.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    animate={
                      windowSize.width && windowSize.height // Ensure we have dimensions
                      ? {
                          x: calculateMovement(mousePosition.x, windowSize.width / 2),
                          y: calculateMovement(mousePosition.y, windowSize.height / 2),
                        }
                      : { x: 0, y: 0 }}
                    // transition={{ type: "spring", stiffness: 150, damping: 20 }}
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
                    transform: `translate(15%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/3.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    animate={
                      windowSize.width && windowSize.height // Ensure we have dimensions
                      ? {
                          x: calculateMovement(mousePosition.x, windowSize.width / 2),
                          y: calculateMovement(mousePosition.y, windowSize.height / 2),
                        }
                      : { x: 0, y: 0 }}
                    // transition={{ type: "spring", stiffness: 150, damping: 20 }}
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
                    transform: `translate(50%, -30%)`,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.div
                    className="bg-[url(/home/4.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    animate={
                      windowSize.width && windowSize.height // Ensure we have dimensions
                      ? {
                          x: calculateMovement(mousePosition.x, windowSize.width / 2),
                          y: calculateMovement(mousePosition.y, windowSize.height / 2),
                        }
                      : { x: 0, y: 0 }}
                    //  transition={{ type: "spring", stiffness: 150, damping: 20 }}
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
              <Image src="/home/1.1.png" alt="Icon 4" width={150} height={40} />
            </motion.div>

            <motion.div
              className="absolute top-40 left-10"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/2.2.png" alt="Icon 4" width={70} height={40} />
            </motion.div>

            <motion.div
              className="absolute top-64 left-32"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/3.3.png" alt="Icon 4" width={140} height={40} />
            </motion.div>

            <motion.div
              className="absolute -top-5 right-32 transform -translate-y-7"
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
                className="absolute "
              />
            </motion.div>

            <motion.div
              className="absolute top-48 right-24 transform -translate-y-7"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/5.5.png" alt="Icon 2" width={80} height={40} />
            </motion.div>

            <motion.div
              className="absolute top-80  right-40 transform -translate-y-7"
              style={{}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image src="/home/6.6.png" alt="Icon 2" width={150} height={40} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReport;
