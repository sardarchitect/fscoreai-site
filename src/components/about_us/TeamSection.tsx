'use client'
import { useScreenSize } from '@/src/hooks/getScreenSize';
import Image from 'next/image'
import React from 'react'

const TeamSection = () => {
    const { category } = useScreenSize();

    const getMiddleImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 100, height: 100 };
            case "tablet":
                return { width: 130, height: 130 };
            case "laptop":
                return { width: 220, height: 220 };
            default:
                return { width: 220, height: 220 };
        }
    };
    const getSideImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 100, height: 100 };
            case "tablet":
                return { width: 150, height: 150 };
            case "laptop":
                return { width: 180, height: 180 };
            default:
                return { width: 180, height: 180 };
        }
    };
    const getBgImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 150, height: 150 };
            case "tablet":
                return { width: 250, height: 250 };
            case "laptop":
                return { width: 500, height: 500 };
            default:
                return { width: 500, height: 500 };
        }
    };
    const getBottomBgLineImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 300, height: 300 };
            case "tablet":
                return { width: 450, height: 450 };
            case "laptop":
                return { width: 700, height: 700 };
            default:
                return { width: 800, height: 800 };
        }
    };

    const sideImageSize = getSideImageSize();
    const middleImageSize = getMiddleImageSize();
    const bgImgSize = getBgImageSize()
    const bgLineImgSize = getBottomBgLineImageSize()

    return (
        <section className="my-16">
            <div className="flex items-center relative justify-center">
                <Image alt="team-image" src={"/about_us/teams/top_left_bg.svg"} {...bgImgSize} className="left-0 top-0 absolute -z-10"></Image>
                <Image alt="team-image" src={"/about_us/teams/top_left_line.svg"} {...bgImgSize} className="left-0 top-0 absolute -z-10"></Image>
                <Image alt="team-image" src="/about_us/teams/top_left.svg" {...sideImageSize} />
                <Image alt="team-image" src="/about_us/teams/top_middle.svg" {...middleImageSize} className="lg:mx-20 md:mx-6 mx-2" />
                <Image alt="team-image" src="/about_us/teams/top_right.svg" {...sideImageSize} />
            </div>
            <div className="text-center mt-6">
                <div className="h3 sm:h2 lg:w-[20%] md:w-[60%] w-[90%] mx-auto text-Mercury-50 mb-2">
                    <span className="text-Charcoal-60">Our</span> Experts
                    <span className="text-Charcoal-60"> are like </span> No other
                </div>
                <p className="te3 sm:te1 lg:w-[30%] md:w-[60%] w-[90%] mx-auto text-gray-600 mb-10">
                    Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
                </p>
            </div>
            <div className="relative flex items-center justify-center"> 
                <Image alt="team-image" src={"/about_us/teams/bottom_bg.svg"} {...bgImgSize} className="right-0 bottom-0 absolute -z-10"></Image>
                <Image alt="team-image" src={"/about_us/teams/bottom_bg_line.svg"} {...bgLineImgSize} className="lg:right-10 md:right-10 -right-10 bottom-0 absolute -z-10"></Image>
                <Image alt="team-image" src="/about_us/teams/bottom_left.svg" {...sideImageSize} />
                <Image alt="team-image" src="/about_us/teams/bottom_middle.svg" {...middleImageSize} className="lg:mx-20 md:mx-6 mx-2" />
                <Image alt="team-image" src="/about_us/teams/bottom_right.svg" {...sideImageSize} className='lg:-translate-y-16 md:-translate-y-16 ' />
            </div>
        </section>
    )
}

export default TeamSection;


















// 'use client'
// import { useScreenSize } from '@/src/hooks/getScreenSize';
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// const TeamSection = () => {
//     const { width, height } = useScreenSize();

//   return (
//           <section className="mb-6 mt-16 ">
//             <div className="flex items-center relative justify-center">
//               <Image alt="team-image" src={"/about_us/teams/top_left_bg.svg"} width={500} height={500} className="left-0 top-0 absolute -z-10"></Image>
//               <Image alt="team-image" src={"/about_us/teams/top_left_line.svg"} width={500} height={500} className="left-0 top-0 absolute -z-10"></Image>
//               <Image alt="team-image" src={"/about_us/teams/top_left.svg"} width={300} height={300} className=""></Image>
//               <Image alt="team-image" src={"/about_us/teams/top_middle.svg"} width={300} height={300} className="mx-20 "></Image>
//               <Image alt="team-image" src={"/about_us/teams/top_right.svg"} width={300} height={300} className=""></Image>
//             </div>
//             <div className="">
//               <div className="h3 sm:h2 mx-auto text-center text-Mercury-50 mb-6">
//                 <span className="text-Charcoal-60">Our</span> Experts
//                 <span className="text-Charcoal-60"> are like </span> No other
//               </div>
//               <p className="te3 sm:te1 lg:w-[30%] md:w-[60%] w-[90%]  mx-auto text-center text-gray-600 mb-10">
//                 Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
//               </p>
//             </div>
//             <div className="relative flex items-center justify-center">
//               <Image alt="team-image" src={"/about_us/teams/bottom_bg.svg"} width={500} height={500} className="right-10 bottom-0 absolute -z-10"></Image>
//               <Image alt="team-image" src={"/about_us/teams/bottom_bg_line.svg"} width={1000} height={500} className="right-10 bottom-0 absolute -z-10"></Image>
//               <Image alt="team-image" src={"/about_us/teams/bottom_left.svg"} width={300} height={300} className=""></Image>
//               <Image alt="team-image" src={"/about_us/teams/bottom_middle.svg"} width={300} height={300} className="mx-20"></Image>
//               <Image alt="team-image" src={"/about_us/teams/bottom_right.svg"} width={300} height={300} className=""></Image>
//             </div>
//           </section>
//   )
// }

// export default TeamSection
