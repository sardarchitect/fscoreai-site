import Image from "next/image";
import { motion, useMotionValue, useTransform, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ProductReport = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Control background animation only when in view
  const controls = useAnimation();
  const yPos = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0 && latest < 1) {
        controls.start({ y: yPos.get() });
      }
    });
  }, [scrollYProgress, controls, yPos]);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    cursorX.set(clientX); // Keep cursor X value relative to the window
    cursorY.set(clientY); // Keep cursor Y value relative to the window
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
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
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `url(/home/BG.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Text Section */}
        <div className="col-span-12 text-center px-4 py-16 lg:px-8">
          <p className="h3 sm:he2 text-gray-900">
            <span className="text-[#666666]">What is</span> Draftflow?
          </p>
          <p className="mt-6 t1 text-gray-600 mx-auto max-w-3xl">
            Draftflow is a subscription-based software that provides real-time,
            context-specific assistance to architects and engineers during the
            production of drawings in Autodesk Revit.
          </p>
          <p className="mt-4 t1 text-gray-600 mx-auto max-w-3xl">
            It enforces graphical standards, flags inconsistencies, and
            highlights missing scope in construction drawings, allowing
            architects and engineers to deliver flawless documents with speed
            and precision.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-12 flex justify-center relative">
          {/* Main Image with Zoom-In Animation */}
          <motion.div
            className="max-w-3xl sm:max-w-2xl"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/home/image.png"
              alt="Floor Plan Image"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </motion.div>

          {/* Overlay icons with cursor-follow effect */}
          <div>
          <motion.div
            className="absolute -top-12 left-[215px] transform -translate-y-7"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/1.png" alt="Icon 1" width={180} height={40} />
          </motion.div>

          <motion.div
            className="absolute -top-12 right-60 transform -translate-y-7"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/2.png" alt="Icon 2" width={180} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-32 right-32"
            style={{ }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/3.png" alt="Icon 3" width={180} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-36 left-28"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/4.png" alt="Icon 4" width={180} height={40} />
          </motion.div>
          </div>
          <div>
          <motion.div
            className="absolute top-10 left-32"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/1.1.png" alt="Icon 4" width={150} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-40 left-10"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/2.2.png" alt="Icon 4" width={70} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-64 left-32"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/3.3.png" alt="Icon 4" width={140} height={40} />
          </motion.div>

          <motion.div
            className="absolute -top-5 right-32 transform -translate-y-7"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/4.4.png" alt="Icon 2" width={180} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-48 right-24 transform -translate-y-7"
            style={{  }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/home/5.5.png" alt="Icon 2" width={80} height={40} />
          </motion.div>

          <motion.div
            className="absolute top-80  right-40 transform -translate-y-7"
            style={{  }}
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
