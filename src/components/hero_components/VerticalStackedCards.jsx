'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import cardData from "./cardData";

const VerticelStackedCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState("half"); // Track current step: "half" or "full"

  const [windowWidth, setWindowWidth] = useState(null);
  const stackAreaRef = useRef(null);
  const cards = cardData;

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const stackArea = stackAreaRef.current;
    if (stackArea) {
      const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;

      // Adjusted index for halfway and full transitions based on scroll position
      const adjustedIndex = Math.floor((1 - proportion) * (1.25));

      if (adjustedIndex >= 0 && adjustedIndex <= cards.length) {
        setActiveIndex(adjustedIndex);

        // Set step to "half" when scrolling to the halfway point
        if (proportion > 0.25 && proportion <= 0.75) {
          setStep("full");
        }
        // Set step to "full" when scrolling reaches the full transition point
        else if (proportion <= 0.25) {
          setStep("half");
        }
      }
    }
  }
  const getTransformStyle = (index, activeIndex, step) => {
    if (index === activeIndex) {
      return "translate(-50%, -50%)";
      //  return "translate(-50%, -50%) rotate(0deg)";
    } else if (index > activeIndex) {
      return "translate(50%, 120vh)";
    } else {
      return `translate(-50%, -50%)`;
      // return `translate(-50%, -50%) rotate(${(activeIndex - (index + 1)) * 10}deg)`;
    }
    return "translate(-50%, -50%)"; // Default position for other cards
  };
  const myStyle = (index, activeIndex, step, cards) => ({
    transform: getTransformStyle(index, activeIndex, step),
    zIndex: index - cards.length,
    transition: "transform 0.6s ease-in-out",
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const adjustLayout = () => {
    return windowWidth < 800 ? "beforebegin" : "afterbegin";
  };
  console.log(windowWidth)

  return (
    <div className="w-full h-auto max-w-7xl m-auto flex flex-col items-center justify-center">
      {/* desktop and tab view */}
        <div className={`w-full flex h-[500vh] justify-center relative stack-area`} ref={stackAreaRef}>
          {/* <div className={`w-full hidden lg:flex md:flex h-[${cards.length * 100}vh] justify-center relative stack-area`} ref={stackAreaRef}> */}
          <div className="flex flex-col items-center justify-center h-screen sticky top-0 basis-1/2 right">
            <div className="relative w-full h-full">

              {cards.map((card, index) => (
                <div
                  key={index}
                  style={myStyle(index, activeIndex, step, cards)}
                  className="absolute top-1/2 flex flex-col justify-between card ">
                  {(card.description || card.title) ?
                    (<div className={`w-full h-[330px] p-14 bg-[#FFFFFF] rounded-md shadow-2xl border-2 backdrop-blur-[30px] flex-col justify-center items-center gap-2.5`}
                    >
                      <div className="flex-col justify-start text-center items-center gap-5 flex">
                        <div className="item-center font-bold  leading-tight">
                          <Image src={card.icon} height={100} width={100}></Image>
                        </div>
                        <div className=" text-[#171724] text-base font-bold font-['Inter'] leading-tight">
                          {card.title}
                        </div>
                        <div className="text-[#676767] text-sm font-normal font-['Inter'] leading-snug">
                          {card.description}
                        </div>
                      </div>
                    </div>)
                    : (<div></div>)
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
};

export default VerticelStackedCards;


// {/* <div className={`w-full flex flex-col justify-center relative stack-area`} ref={stackAreaRef}>
// <div className={`flex flex-col items-center justify-center p-8 ${adjustLayout()} `}>
//   {/* Left Side: Text Content Section */}
//   <div className="col-span-12 lg:col-span-6 px-4 py-2">
//     <p className="h3 sm:he2 text-black">
//       Key Benefits of Draftflow for Your Firm
//     </p>
//     <p className="t1 py-4 text-gray-700">
//       Draftflow is designed specifically for firms in the AEC industry. Through this one unique system, Draftflow benefits a large set of stakeholders:
//     </p>

//     {/* Learn More Button */}
//     <button className="bg-blue-500 text-white c1 py-5 px-14 rounded mt-4 hover:bg-blue-600 transition duration-300">
//       Learn More
//     </button>
//   </div>
// </div>
// <div className="flex flex-col items-center justify-center">
//   <div className=" w-full h-full">

//     {cards.map((card, index) => (
//       <div
//         key={index}
//         className="flex flex-col justify-between card ">
//         {(card.description || card.title) ?
//           (<div className={`m-4 p-14 bg-[#FFFFFF] rounded-md shadow-2xl border-2 backdrop-blur-[30px] flex-col justify-center items-center gap-2.5`}
//           >
//             <div className="flex-col justify-start text-center items-center gap-5 flex">
//               <div className="item-center font-bold  leading-tight">
//                 <Image src={card.icon} height={100} width={100}></Image>
//               </div>
//               <div className=" text-[#171724] text-base font-bold font-['Inter'] leading-tight">
//                 {card.title}
//               </div>
//               <div className="text-[#676767] text-sm font-normal font-['Inter'] leading-snug">
//                 {card.description}
//               </div>
//             </div>
//           </div>)
//           : (<div></div>)
//         }
//       </div>
//     ))}
//   </div>
// </div>
// </div>
// } */}