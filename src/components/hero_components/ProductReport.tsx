import Image from "next/image";
import { motion, useMotionValue, useTransform, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ProductReport = () => {

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Control background animation only when in view
  const controls = useAnimation();
  const yPos = useTransform(scrollYProgress, [1, 0], ["100%", "0%"]);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0 && latest < 1) {
        controls.start({ y: yPos.get() });
      }
    });
  }, [scrollYProgress, controls, yPos]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };


  })

// desktop view

  if (windowWidth && windowWidth > 900) {
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
          opacity: 1.5,
          zIndex: 0,
        }}
        // whileInView={{ y: "0%" ,}}
        initial={{ y: "100%" }}
        animate={controls}
        // initial={{ y: "100%" }}
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
              className="bg-[url(/home/image.png)] bg-center bg-no-repeat  bg-contain w-[80%] h-[50%]"
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-1/2 flex items-center justify-center">

                <motion.div
                  className="w-full"
                  style={{}}
                >
                  <motion.div
                    className=""
                    style={{}}
                    initial={{ opacity: 0, transform: `translate(85%, 69%)` }}
                    whileInView={{ opacity: 1, transform: `translate(28%, -30%)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <motion.div
                      className="bg-[url(/home/1.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    >
                    </motion.div>

                    {/* <Image src="/home/1.png" alt="Icon 1" width={180} height={40} className="" /> */}
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
                    <motion.div
                      className="bg-[url(/home/2.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    >
                    </motion.div>
                    {/* <Image src="/home/2.png" alt="Icon 2" width={180} height={40} className="" /> */}
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
                    whileInView={{ opacity: 1, transform: `translate(15%, -50%)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <motion.div
                      className="bg-[url(/home/3.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    >
                    </motion.div>
                    {/* <Image src="/home/3.png" alt="Icon 3" width={180} height={40} className="" /> */}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full"
                >
                  <motion.div
                    className="w-full "
                    style={{}}
                    initial={{ opacity: 0, transform: `translate(-15%, -60%)` }}
                    whileInView={{ opacity: 1, transform: `translate(50%, -50%)` }}
                    transition={{ duration: 1.2 }}
                  >
                    <motion.div
                      className="bg-[url(/home/4.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                    >
                    </motion.div>
                    {/* <Image src="/home/4.png" alt="Icon 4" width={180} height={40} className="" /> */}
                  </motion.div>
                </motion.div>
              </div>



            </motion.div>

            {/* bg-Images with Zoom-In Animation */}
            <div className="absolute grid grid-rows-3 w-full h-full">
              <div className="row-span-1 h-fit  w-full flex relative ">
                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2.5rem", left: 0, transform: "translate(5rem, -20%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/1.1.png" alt="Icon 4" width={150} height={40} />
                </motion.div>
                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2rem", right: 0, transform: "translate(50%, -25%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/4.4.png" alt="Icon 4" width={150} height={40} />
                </motion.div>

              </div>
              <div className="row-span-1 h-fit bg-red-500 flex relative">
              <motion.div
                  className="absolute"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2.5rem", left: 0, transform: "translate(0rem, -20%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/2.2.png" alt="Icon 4" width={70} height={40} />
                </motion.div>

                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2.5rem", right: 0, transform: "translate(85%, -30%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/5.5.png" alt="Icon 2" width={80} height={40} />
                </motion.div>
              </div>
              <div className="row-span-1 h-fit relative bg-black">
              <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2.5rem", left: 0, transform: "translate(5rem, -30%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/3.3.png" alt="Icon 4" width={140} height={40} />
                </motion.div>

                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2rem", right: 0, transform: "translate(50%, -35%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/6.6.png" alt="Icon 2" width={150} height={40} />
                </motion.div>
              </div>
            </div>
            <div>





            </div>



          </div>
        </div>
      </section>
    );
  }
  // mobile view
 else if (windowWidth && windowWidth <= 900) {
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
          <div className="col-span-12 flex justify-center items-center relative ">
            {/* Main Image with Zoom-In Animation */}
            <motion.div
              className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[300px] h-[180px]"
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-1/2 flex items-center justify-center">
                <motion.div
                  className="relative w-full h-full"
                  style={{}}
                >
                  <motion.div
                    className="absolute top-[0%] left-[10%] bg-[url(/home/1.png)] bg-center bg-no-repeat bg-contain md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                  >
                  </motion.div>

                  {/* <Image src="/home/1.png" alt="Icon 1" width={180} height={40} className="" /> */}
                </motion.div>

                <motion.div
                  className="w-full h-full relative"
                  style={{}}
                >
                  <motion.div
                    className="absolute top-[0%] right-[15%] bg-[url(/home/2.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                  >
                  </motion.div>
                  {/* <Image src="/home/2.png" alt="Icon 2" width={180} height={40} className="" /> */}
                </motion.div>
              </div>

              <div className="relative h-1/2 flex items-center justify-center">

                <motion.div
                  className="w-full h-full relative"
                  style={{}}
                >
                  <motion.div
                    className="absolute -top-[15%] left-[0%] bg-[url(/home/3.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                  >
                  </motion.div>
                  {/* <Image src="/home/3.png" alt="Icon 3" width={180} height={40} className="" /> */}
                </motion.div>
                <motion.div
                  className="w-full h-full relative"
                  style={{}}
                >
                  <motion.div
                    className="absolute -top-[15%] -right-[10%] bg-[url(/home/4.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
                  >
                  </motion.div>
                  {/* <Image src="/home/4.png" alt="Icon 4" width={180} height={40} className="" /> */}
                </motion.div>
              </div>
            </motion.div>

              {/* bg-Images with Zoom-In Animation */}
              <div className="absolute grid grid-rows-3 w-full h-full">
              <div className="row-span-1 h-fit  w-full flex relative ">
                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2.5rem", left: 0, transform: "translate(-2rem, -20%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/1.1.png" alt="Icon 4" width={100} height={40} />
                </motion.div>
                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2rem", right: 0, transform: "translate(50%, -25%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/4.4.png" alt="Icon 4" width={100} height={40} />
                </motion.div>
              </div>

              <div className="row-span-1 h-fit flex relative">
              <motion.div
                  className="absolute hidden"
                  style={{ top: "50%", left: "50%",  transform: "translate(2rem, -20%)" }}
                >
                  <Image src="/home/2.2.png" alt="Icon 4" width={50} height={40} />
                </motion.div>

                <motion.div
                  className="absolute hidden"
                  style={{ top: "50%", left: "50%", transform: "translate(100%, -30%)" }}
                >
                  <Image src="/home/5.5.png" alt="Icon 2" width={50} height={40} />
                </motion.div>
              </div>

              <div className="row-span-1 h-fit relative bg-black">
              <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2.5rem", left: 0, transform: "translate(-2rem, -30%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/3.3.png" alt="Icon 4" width={100} height={40} />
                </motion.div>

                <motion.div
                  className="absolute "
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  whileInView={{ opacity: 1, top: "2rem", right: 0, transform: "translate(50%, -30%)" }}
                  transition={{ duration: 1.2 }}
                >
                  <Image src="/home/6.6.png" alt="Icon 2" width={100} height={40} />
                </motion.div>
              </div>
            </div>



          </div>
        </div>
      </section>
    );
  };
}

export default ProductReport;


















// import Image from "next/image";
// import { motion, useMotionValue, useTransform, useScroll, useAnimation } from "framer-motion";
// import { useEffect, useRef } from "react";

// const ProductReport = () => {

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
//       {/* <div
//         className="absolute inset-0 opacity-10 z-0"
//         style={{
//           backgroundImage: `url(/home/BG.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div> */}

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
//             className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[80%] h-[50%]"
//             initial={{ scale: 0.6 }}
//             whileInView={{ scale: 1.2 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="relative h-1/2 flex items-center justify-center">

//               <motion.div
//                 className="w-full"
//                 style={{}}
//               >
//                 <motion.div
//                   className=""
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(85%, 69%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(28%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                   <motion.div
//                     className="bg-[url(/home/1.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
//                   >
//                   </motion.div>

//                   {/* <Image src="/home/1.png" alt="Icon 1" width={180} height={40} className="" /> */}
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 className="w-full "
//                 style={{}}
//               >
//                 <motion.div
//                   className="w-full "
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(-53%, 79%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(30%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                    <motion.div
//                     className="bg-[url(/home/2.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
//                   >
//                   </motion.div>
//                   {/* <Image src="/home/2.png" alt="Icon 2" width={180} height={40} className="" /> */}
//                 </motion.div>
//               </motion.div>
//             </div>

//             <div className="relative h-1/2 flex items-center justify-center">
//               <motion.div
//                 className="w-full"
//               >
//                 <motion.div
//                   className="w-full "
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(85%, -60%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(15%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                    <motion.div
//                     className="bg-[url(/home/3.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
//                   >
//                   </motion.div>
//                   {/* <Image src="/home/3.png" alt="Icon 3" width={180} height={40} className="" /> */}
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 className="w-full"
//               >
//                 <motion.div
//                   className="w-full "
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(-15%, -60%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(50%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                    <motion.div
//                     className="bg-[url(/home/4.png)] bg-center bg-no-repeat bg-contain lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] w-[80px] h-[80px]"
//                   >
//                   </motion.div>
//                   {/* <Image src="/home/4.png" alt="Icon 4" width={180} height={40} className="" /> */}
//                 </motion.div>
//               </motion.div>
//             </div>



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
//               <Image src="/home/4.4.png" alt="Icon 2" width={180} height={40} className="absolute " />
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



















// import Image from "next/image";
// import { motion, useMotionValue, useTransform, useScroll, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { number } from "react-admin";
// import { Anybody } from "next/font/google";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const ProductReport = () => {

//   const posX = useMotionValue(0);
//   const posY = useMotionValue(0);
//   const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
//   const [closestImage, setClosestImage] = useState(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
//   const sectionRef = useRef<HTMLElement>(null);


//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });


// const posX = useMotionValue(0);
// const posY = useMotionValue(0);

// const handleMouseMove = (e: MouseEvent) => {
//   const { clientX, clientY } = e;
//   cursorX.set(clientX); // Keep cursor X value relative to the window
//   cursorY.set(clientY); // Keep cursor Y value relative to the window

//   let deltaX = clientX - window.innerWidth / 2;
//   let deltaY = clientY - window.innerWidth / 2;

//   const easingFactor = 0.1; // Determines the speed (smaller values are slower)

//   // Boundary limits
//   const boundary = {
//     minX: 50,   // Minimum X position
//     maxX: window.innerWidth - 50,  // Maximum X position
//     minY: 50,   // Minimum Y position
//     maxY: window.innerHeight - 50  // Maximum Y position
//   };

//   // Smoothly interpolate towards the target position
//   let getX = posX.get()
//   let getY = posY.get()

//   getX += (clientX - getX) * easingFactor
//   getY += (clientY - getY) * easingFactor

//   // Apply boundaries
//   getX = Math.max(boundary.minX, Math.min(boundary.maxX, getX));
//   getY = Math.max(boundary.minY, Math.min(boundary.maxY, getY));

//   posX.set(getX)
//   posY.set(getY)
// };


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



//   const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
//     const { pageX, pageY, clientX, clientY } = e;
//     setCursorPosition({ x: clientX, y: clientY })
//     console.log("Cursor:", clientX, clientY);
//     console.log("Image Position:", cursorPosition.x, cursorPosition.y);

//     let minDistance = window.innerWidth / 2;
//     let nearestImage = null;
//     // Calculate the distance to each image and find the closest one
//     imageRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const distance = calculateDistance(ref, clientX, clientY);
//         if (distance < minDistance) {
//           minDistance = distance;
//           nearestImage = index; // or store the actual ref
//         }
//       }
//     });

//     // Trigger callback when closest image changes
//     if (nearestImage !== closestImage) {
//       setClosestImage(nearestImage);
//       // You can perform a callback here
//       console.log(`Closest image is now: ${nearestImage}`);
//     }
//   };

//   useGSAP(() => {
//     gsap.set('manu',{xPercent:-50, yPercent: -50})

//     sectionRef.current?.addEventListener('mousemove', e => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;
//       gsap.to('#manu', 0.5, {x: mouseX, y: mouseY}); // <-- automatically reverted

//   })


//   }, { scope: sectionRef }) // <-- scope for selector text (optional)


//   // Function to calculate distance between cursor and image
//   function calculateDistance(element, cursorX, cursorY) {
//     const rect = element.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const deltaX = cursorX - centerX;
//     const deltaY = cursorY - centerY;

//     return Math.sqrt(deltaX ** 2 + deltaY ** 2); // Euclidean distance
//   };

//   const getTransformStyle = (el) => {
//     if (closestImage === el) {
//       return {
//         // transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
//         transform: `translate(-180%, -180%)`,
//         position: 'fixed',
//         transition: 'transform 0.2s ease-in-out',
//         left: cursorPosition.x + 'px',
//         top: cursorPosition.y + 'px',
//         zIndex: '999',
//         // pointerEvents: 'none'
//       }
//     }
//   };

//   // useEffect(() => {
//   //   window.addEventListener("mousemove", handleMouseMove);
//   //   return () => window.removeEventListener("mousemove", handleMouseMove);
//   // }, []);

//   return (
//     <section
//       ref={sectionRef}
//       onMouseMove={(e) => handleMouseMove(e)}
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
//       {/* <div
//         className="absolute inset-0 opacity-10 z-0"
//         style={{
//           backgroundImage: `url(/home/BG.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div> */}

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
//             className="bg-[url(/home/image.png)] bg-center bg-no-repeat bg-contain w-[80%] h-[50%]"
//             initial={{ scale: 0.6 }}
//             whileInView={{ scale: 1.2 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="relative h-1/2 flex items-center justify-center">

//               <motion.div
//                 className=" w-full relative "
//                 style={{}}
//               >
//                 <motion.div
//                   className="fixed bg-red-900"
//                   id="manu"
//                   ref={(el) => (imageRefs.current[0] = el)}
//                   style={{}}
//                   // initial={{ opacity: 0, transform: `translate(85%, 69%)` }}
//                   // whileInView={{ opacity: 1, transform: `translate(38%, 30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                   <Image src="/home/1.png" alt="Icon 1" width={180} height={40}
//                     className={`bg-green-50`}
//                     // style={getTransformStyle(0)}
//                   />
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 className="w-full "
//                 style={{}}
//               >
//                 <motion.div
//                   className=""
//                   ref={(el) => (imageRefs.current[1] = el)}
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(-53%, 79%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(30%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                   <Image src="/home/2.png" alt="Icon 2" width={180} height={40}
//                     className="" />
//                 </motion.div>
//               </motion.div>
//             </div>

//             <div className="relative h-1/2 flex items-center justify-center">
//               <motion.div
//                 className="w-full"
//               >
//                 <motion.div
//                   className="w-full "
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(85%, -60%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(25%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                   <Image src="/home/3.png" alt="Icon 3" width={180} height={40}
//                     className=""
//                     ref={(el) => (imageRefs.current[2] = el)} />
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 className="w-full"
//               >
//                 <motion.div
//                   className="w-full "
//                   style={{}}
//                   initial={{ opacity: 0, transform: `translate(-15%, -60%)` }}
//                   whileInView={{ opacity: 1, transform: `translate(50%, -30%)` }}
//                   transition={{ duration: 1.2 }}
//                 >
//                   <Image src="/home/4.png" alt="Icon 4" width={180} height={40} className="" ref={(el) => (imageRefs.current[3] = el)} />
//                 </motion.div>
//               </motion.div>
//             </div>



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
//               <Image src="/home/4.4.png" alt="Icon 2" width={180} height={40} className="absolute " />
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






