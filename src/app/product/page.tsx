'use client'
import { useThemeContext } from '@/src/context/theme';
import Image from 'next/image';
import React from 'react'

function ProductPage() {
    const [theme, setTheme] = useThemeContext();
  return (
    <div className={`${theme} mx-auto flex max-w-7xl items-center justify-between  lg:px`}>
        <header className="bg-white dark:bg-rgb-2-6-23 text-theme-blue dark:text-white pb-10 sm:h-screen bg-no-repeat bg bg-cover sm:flex justify-center items-center">
          <div className="sm:w-3/4">
            <h1 className="text-6xl p-10">
             Product
              <br />
              <span className="text-blue-100">Fscore AI's envisions a future</span>
            </h1>
            <p className="px-10 text-blue-100 ">
            Where architecture and engineering transcend traditional boundaries through the use of cutting-edge automation and innovation. We believe that the full toolset of architectural creativity should be available to a wider audience across the globe, democratizing good design to those who are unable to afford it otherwise. We also believe that the frustration of architects comes from the inefficiencies of their workflows, removing these inefficiencies will lead to a healthier industry.
            </p>
          </div>
          <div className="p-10 sm:block hidden rounded-lg">
            <Image
              src={"/blogs_images/img1.png"}
              alt="about us"
              height={120}
              width={500}
            />
          </div>
          <div className="hero-img">
        <Image
          src="/neuro_image.svg"
          alt="image"
          width={200}
          height={700}
          style={{
            objectFit: "cover",
          }}
          className="fixed w-screen left-0 top-0 h-full -z-50"
        />
      </div>
        </header>
    </div>
  )
}

export default ProductPage;