'use client'
import { useScreenSize } from '@/src/hooks/getScreenSize';
import Image from 'next/image'
import React from 'react'

const TeamSection = () => {
    const { category } = useScreenSize();

    const getMiddleImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 130, height: 130 };
            case "tablet":
                return { width: 220, height: 220 };
            case "laptop":
                return { width: 350, height: 350 };
            default:
                return { width: 350, height: 350 };
        }
    };
    const getSideImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 130, height: 130 };
            case "tablet":
                return { width: 200, height: 200 };
            case "laptop":
                return { width: 300, height: 300 };
            default:
                return { width: 300, height: 300 };
        }
    };
    const getBgImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 200, height: 200 };
            case "tablet":
                return { width: 250, height: 250 };
            case "laptop":
                return { width: 550, height: 550 };
            default:
                return { width: 550, height: 550 };
        }
    };
    const getBottomBgLineImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 350, height: 350 };
            case "tablet":
                return { width: 450, height: 450 };
            case "laptop":
                return { width: 1000, height: 1000 };
            default:7
                return { width: 1200, height: 1200 };
        }
    }
        
    const getTopBgLineImageSize = () => {
        switch (category) {
            case "mobile":
                return { width: 200, height: 200 };
            case "tablet":
                return { width: 250, height: 250 };
            case "laptop":
                return { width: 650, height: 650 };
            default:7
                return { width: 650, height: 650 };
        }
    };

    const sideImageSize = getSideImageSize();
    const middleImageSize = getMiddleImageSize();
    const bgImgSize = getBgImageSize()
    const bgBottomLineImgSize = getBottomBgLineImageSize()
    const bgTopLineImgSize = getTopBgLineImageSize()

    return (
        <section className="my-16">
            <div className="flex items-center relative justify-center pt-8 md:pt-12 lg:pt-36">
                <Image alt="team-image" src={"/about_us/teams/top_left_bg.svg"} {...bgImgSize} className="left-0 top-0 absolute -z-10"></Image>
                <Image alt="team-image" src={"/about_us/teams/top_left_line.svg"} {...bgTopLineImgSize} className="left-0 top-0 absolute -z-10"></Image>
                <Image alt="team-image" src="/about_us/teams/top_left.svg" {...sideImageSize} className='translate-y-4 lg:translate-y-48 md:translate-y-24 ' />
                <Image alt="team-image" src="/about_us/teams/top_middle.svg" {...middleImageSize} className="lg:ml-[3%] lg:mr-[11%] md:mx-[4%] mx-[1%]" />
                <Image alt="team-image" src="/about_us/teams/top_right.svg" {...sideImageSize} className='translate-y-4 lg:translate-y-20  md:translate-y-12'/>
            </div>
            <div className="text-center mt-6 lg:my-20 md:mt-20 md:mb-12">
                <div className="h3 sm:h2 lg:w-[20%] md:w-[60%] w-[90%] mx-auto text-Mercury-50 mb-2">
                    <span className="text-Charcoal-60">Our</span> Experts
                    <span className="text-Charcoal-60"> are like </span> No other
                </div>
                <p className="te3 sm:te1 lg:w-[30%] md:w-[60%] w-[90%] mx-auto text-gray-600 mb-10">
                    Our mission is to streamline the architectural drawing process and elevate the quality of construction documents through cutting-edge technology.
                </p>
            </div>
            <div className="relative flex items-center justify-center pb-2 md:pb-2 lg:pb-8"> 
                <Image alt="team-image" src={"/about_us/teams/bottom_bg.svg"} {...bgImgSize} className="right-0 bottom-0 absolute -z-10"></Image>
                <Image alt="team-image" src={"/about_us/teams/bottom_bg_line.svg"} {...bgBottomLineImgSize} className="lg:right-10 md:right-10 -right-10 -bottom-0 absolute -z-10"></Image>
                <Image alt="team-image" src="/about_us/teams/bottom_left.svg" {...sideImageSize} className='-translate-y-6 lg:-translate-y-20 md:-translate-y-12 '/>
                <Image alt="team-image" src="/about_us/teams/bottom_middle.svg" {...middleImageSize} className="lg:mx-[8%] md:mx-[4%] mx-[1%]" />
                <Image alt="team-image" src="/about_us/teams/bottom_right.svg" {...sideImageSize} className='-translate-y-6 lg:-translate-y-32 md:-translate-y-20 ' />
            </div>
        </section>
    )
}

export default TeamSection;