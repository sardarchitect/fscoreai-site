'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import cardData from "./cardData";

const StackedCards = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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

      if (adjustedIndex > 0 && adjustedIndex <= cards.length) {
        setActiveIndex(adjustedIndex);
      }
    }
  }
  const getTransformStyle = (index, activeIndex) => {
    if (index === activeIndex) {
      return "translate(-40%, 60%) rotate(0deg)";
    }
    else if (index === activeIndex - 1) {
      return "translate(-50%, -50%) rotate(0deg)";
      // return "translate(50%, 120vh) rotate(-48deg)";
    }
    else if (index > activeIndex) {
      return "translate(-40%, 60vh) rotate(0deg)"; // Default position for other cards
    }
    else {
      return `translate(-50%, -50%) rotate(${(Math.random() * 20 - 10)}deg)`;
      // return `translate(-50%, -50%) rotate(${(activeIndex - (index + 1)) * 10}deg)`;
    }
  }
    const myStyle = (index, activeIndex) => ({
      transform: getTransformStyle(index, activeIndex),
      zIndex: index - cards.length,
      transition: "transform 0.4s ease-out",
    });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const adjustLayout = () => {
    return windowWidth < 800 ? "beforebegin" : "afterbegin";
  };

  {/* desktop and tab view */ }
  if (windowWidth > 900 && windowWidth !== null) {
    return (

      <div className="w-full  z-0 h-auto  m-auto flex flex-col items-center justify-center">
        
        <div className={`w-full max-w-7xl flex h-[500vh] justify-center relative stack-area`} ref={stackAreaRef}>
          {/* <div className={`w-full hidden lg:flex md:flex h-[${cards.length * 100}vh] justify-center relative stack-area`} ref={stackAreaRef}> */}
          <div className={`flex flex-col items-center justify-center h-screen sticky top-0 basis-1/2 p-8 left ${adjustLayout()}`}>
            {/* Left Side: Text Content Section */}
            <div className="col-span-12 lg:col-span-6 px-4 py-2">
              <p className="h3 sm:he2 w-[448px] text-Mercury-50">
             <span className="text-Charcoal-80"> Why</span> Choose Draftflow <span className="text-Charcoal-80">for Your Firm?</span>
              </p>
              <p className="t1 py-4 w-[448px] text-gray-700">
              Draftflow has been developed in collaboration with top architectural firms to address the unique demands of your industry. Here’s how Draftflow delivers measurable value:
              </p>

              {/* Learn More Button */}
              <button className="bg-blue-500 text-white c1 py-5 px-14 rounded mt-4 hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-screen sticky top-0 basis-1/2 right">
            <div className="relative w-full h-full">

              {cards.map((card, index) => (
                <div
                  key={index}
                  style={myStyle(index, activeIndex)}
                  className="absolute top-1/2 left-1/2 flex flex-col justify-between card ">
                  {(card.description || card.title) ?
                    (<div className={`w-[389px] h-auto p-14 bg-white rounded-md shadow-2xl   flex-col justify-center items-center gap-2.5`}
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
  }
  // mobile view
  else if (windowWidth <= 900 && windowWidth !== null) {
    return (
      <div className="w-full h-auto max-w-7xl m-auto flex flex-col items-center justify-center text-center">
        <div className={`w-full flex flex-col justify-center relative stack-area`} ref={stackAreaRef}>
          <div className={`flex flex-col items-center justify-center p-8 ${adjustLayout()} `}>
            {/* Left Side: Text Content Section */}
            <div className="col-span-12 lg:col-span-6 px-4 py-2">
              <p className="h3 sm:he2 text-black">
                Key Benefits of Draftflow for Your Firm
              </p>
              <p className="t1 py-4 text-gray-700">
                Draftflow is designed specifically for firms in the AEC industry. Through this one unique system, Draftflow benefits a large set of stakeholders:
              </p>

              {/* Learn More Button */}

            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" w-full h-full">

              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between card ">
                  {(card.description || card.title) ?
                    (<div className={`m-4 p-14 bg-[#FFFFFF] rounded-md shadow-2xl border-2  flex-col justify-center items-center gap-2.5`}
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
              <button className="bg-blue-500 h-[56px]  w-4/5 m-auto  text-white  py-2 lg:rounded-r-lg md:rounded-r-lg rounded-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return null
  }

};

export default StackedCards;
