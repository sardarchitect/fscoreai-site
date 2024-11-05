import Image from "next/image";
import { motion, useMotionValue, useTransform, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ProductReport = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

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

    let deltaX = clientX - window.innerWidth / 2;
    let deltaY = clientY - window.innerWidth / 2;

    const easingFactor = 0.1; // Determines the speed (smaller values are slower)

    // Boundary limits
    const boundary = {
      minX: 50,   // Minimum X position
      maxX: window.innerWidth - 50,  // Maximum X position
      minY: 50,   // Minimum Y position
      maxY: window.innerHeight - 50  // Maximum Y position
    };

    // Smoothly interpolate towards the target position
    let getX = posX.get()
    let getY = posY.get()

    getX += (clientX - getX) * easingFactor
    getY += (clientY - getY) * easingFactor

    // Apply boundaries
    getX = Math.max(boundary.minX, Math.min(boundary.maxX, getX));
    getY = Math.max(boundary.minY, Math.min(boundary.maxY, getY));

    posX.set(getX)
    posY.set(getY)

  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      <div className="relative z-10 max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
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
        <div className="col-span-12 flex justify-center relative ">
          {/* Main Image with Zoom-In Animation */}
          <motion.div
            className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[80vw] h-[50vh]"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-1/2 flex items-center justify-center">

              <motion.div
                className=" w-full relative"
                style={{}}
              >
                <motion.div
                  className="w-full "
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(85%, 69%)` }}
                  whileInView={{ opacity: 1, transform: `translate(38%, -30%)` }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/1.png" alt="Icon 1" width={180} height={40} className="" />
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full "
                style={{}}
              >
                <motion.div
                  className="w-full "
                  style={{}}
                  initial={{ opacity: 0, transform: `translate(-53%, 79%)` }}
                  whileInView={{ opacity: 1, transform: `translate(30%, -30%)` }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/2.png" alt="Icon 2" width={180} height={40} className="" />
                </motion.div>
              </motion.div>
            </div>

            <div className="relative h-1/2 flex items-center justify-center">
              <motion.div
                className="w-full"
              >
                 <motion.div
                className="w-full "
                style={{}}
                initial={{ opacity: 0, transform: `translate(85%, -60%)` }}
                whileInView={{ opacity: 1, transform: `translate(25%, -30%)` }}
                transition={{ duration: 1.2 }}
              >
                <Image src="/home/3.png" alt="Icon 3" width={180} height={40} className="" />
              </motion.div>
              </motion.div>

              <motion.div
                className="w-full"
              >
              <motion.div
             className="w-full "
             style={{}}
             initial={{ opacity: 0, transform: `translate(-15%, -60%)` }}
             whileInView={{ opacity: 1, transform: `translate(50%, -30%)` }}
             transition={{ duration: 1.2 }}
           >
                <Image src="/home/4.png" alt="Icon 4" width={180} height={40} className="" />
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
              <Image src="/home/4.4.png" alt="Icon 2" width={180} height={40} className="absolute " />
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




















// import Image from "next/image";
// import { motion, useMotionValue, useTransform, useScroll, useAnimation } from "framer-motion";
// import { useEffect, useRef } from "react";

// const ProductReport = () => {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);

//   const posX = useMotionValue(0);
//   const posY = useMotionValue(0);

//   const sectionRef = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   // Control background animation only when in view
//   const controls = useAnimation();
//   const yPos = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

//   useEffect(() => {
//     scrollYProgress.onChange((latest) => {
//       if (latest > 0 && latest < 1) {
//         controls.start({ y: yPos.get() });
//       }
//     });
//   }, [scrollYProgress, controls, yPos]);

//   const handleMouseMove = (e: MouseEvent) => {
//     const { clientX, clientY } = e;
//     cursorX.set(clientX); // Keep cursor X value relative to the window
//     cursorY.set(clientY); // Keep cursor Y value relative to the window

//     let deltaX = clientX - window.innerWidth / 2;
//     let deltaY = clientY - window.innerWidth / 2;

//     const easingFactor = 0.1; // Determines the speed (smaller values are slower)

//     // Boundary limits
//     const boundary = {
//       minX: 50,   // Minimum X position
//       maxX: window.innerWidth - 50,  // Maximum X position
//       minY: 50,   // Minimum Y position
//       maxY: window.innerHeight - 50  // Maximum Y position
//     };

//     // Smoothly interpolate towards the target position
//     let getX = posX.get()
//     let getY = posY.get()

//     getX += (clientX - getX) * easingFactor
//     getY += (clientY - getY) * easingFactor

//     // Apply boundaries
//     getX = Math.max(boundary.minX, Math.min(boundary.maxX, getX));
//     getY = Math.max(boundary.minY, Math.min(boundary.maxY, getY));

//     posX.set(getX)
//     posY.set(getY)

//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full pt-10 flex items-center justify-center text-center overflow-hidden"
//     >
//       {/* Moving Background Image controlled by scroll */}
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(/home/graph-up.png)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           opacity: 0.5,
//           zIndex: 0,
//         }}
//         animate={controls}
//         initial={{ y: "100%" }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       />

//       {/* Static Background Image */}
//       <div
//         className="absolute inset-0 opacity-10 z-0"
//         style={{
//           backgroundImage: `url(/home/BG.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div>

//       {/* Content Section */}
//       <div className="relative z-10 max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
//         {/* Text Section */}
//         <div className="col-span-12 text-center px-4 py-16 lg:px-8">
//           <p className="h3 sm:he2 text-gray-900">
//             <span className="text-[#666666]">What is</span> Draftflow?
//           </p>
//           <p className="mt-6 t1 text-gray-600 mx-auto max-w-3xl">
//             Draftflow is a subscription-based software that provides real-time,
//             context-specific assistance to architects and engineers during the
//             production of drawings in Autodesk Revit.
//           </p>
//           <p className="mt-4 t1 text-gray-600 mx-auto max-w-3xl">
//             It enforces graphical standards, flags inconsistencies, and
//             highlights missing scope in construction drawings, allowing
//             architects and engineers to deliver flawless documents with speed
//             and precision.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="col-span-12 flex justify-center relative ">
//           {/* Main Image with Zoom-In Animation */}
//           <motion.div
//             className="relative bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[80vw] h-[50vh] sm:max-w-2xl"
//             initial={{ scale: 0.6 }}
//             whileInView={{ scale: 1.2 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             {/* <Image
//               src="/home/image.png"
//               alt="Floor Plan Image"
//               width={500}
//               height={500}
//               layout="responsive"
//               objectFit="cover"
//             /> */}

//           {/* Overlay icons with cursor-follow effect */}
//             <motion.div
//               className="absolute lg:left-[50%] lg:top-[50%] bg-[url(/home/1.png)] bg-no-repeat bg-cover w-[-15%] h-[30%] lg:w-[15%] lg:h-[30%] transform"
//               style={{  }}
//               initial={{ opacity: 0 , transform: `translate(-50%, -50%)`}}
//               whileInView={{ opacity: 1 , transform: `translate(-360%, -160%)`}}
//               transition={{ duration: 1.2 }}
//             >
//               {/* <Image src="/home/1.png" alt="Icon 1" width={180} height={40} className="absolute "/> */}
//             </motion.div>

//             <motion.div
//               className="absolute bg-[url(/home/2.png)] bg-no-repeat bg-cover w-[15%] h-[30%] transform "
//               style={{}}
//               initial={{ opacity: 0, transform: `translate(-50%, -50%)` }}
//               whileInView={{ opacity: 1 , transform: `translate(190%, -160%)`}}
//               transition={{ duration: 1.2 }}
//             >
//               {/* <Image src="/home/2.png" alt="Icon 2" width={180} height={40} className="absolute "/> */}
//             </motion.div>

//             <motion.div
//               className="absolute bg-[url(/home/3.png)] bg-no-repeat bg-cover w-[150px] h-[150px]"
//               style={{}}
//               initial={{ opacity: 0 , transform: `translate(-50%, -50%)`}}
//               whileInView={{ opacity: 1 , transform: `translate(-290%, -50%)`}}
//               transition={{ duration: 1.2 }}
//             >
//               {/* <Image src="/home/3.png" alt="Icon 3" width={180} height={40} className="absolute "/> */}
//             </motion.div>

//             <motion.div
//               className="absolute bg-[url(/home/4.png)] bg-no-repeat bg-cover w-[15%] h-[30%]"
//               style={{}}
//               initial={{ opacity: 0 , transform: `translate(-50%, -50%)`}}
//               whileInView={{ opacity: 1 , transform: `translate(300%, -50%)`}}
//               transition={{ duration: 1.2 }}
//             >
//               {/* <Image src="/home/4.png" alt="Icon 4" width={180} height={40} className="absolute "/> */}
//             </motion.div>

//           </motion.div>
//           <div>
//             <motion.div
//               className="absolute top-10 left-32"
//               style={{}}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               <Image src="/home/1.1.png" alt="Icon 4" width={150} height={40} />
//             </motion.div>

//             <motion.div
//               className="absolute top-40 left-10"
//               style={{}}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               <Image src="/home/2.2.png" alt="Icon 4" width={70} height={40} />
//             </motion.div>

//             <motion.div
//               className="absolute top-64 left-32"
//               style={{}}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               <Image src="/home/3.3.png" alt="Icon 4" width={140} height={40} />
//             </motion.div>

//             <motion.div
//               className="absolute -top-5 right-32 transform -translate-y-7"
//               style={{}}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               <Image src="/home/4.4.png" alt="Icon 2" width={180} height={40} className="absolute "/>
//             </motion.div>

//             <motion.div
//               className="absolute top-48 right-24 transform -translate-y-7"
//               style={{}}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               <Image src="/home/5.5.png" alt="Icon 2" width={80} height={40} />
//             </motion.div>

//             <motion.div
//               className="absolute top-80  right-40 transform -translate-y-7"
//               style={{}}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               <Image src="/home/6.6.png" alt="Icon 2" width={150} height={40} />
//             </motion.div>
//           </div>



//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductReport;

