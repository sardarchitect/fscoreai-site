"use client"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0); // Set the initial active link index

useEffect(() => {
  if(activeLink === 0){
    console.log(activeLink)
  }else{
  }
}, [activeLink]);
  const handleClick = (index: number) => {
    setActiveLink(index); // Update the active link index when a link is clicked
  };


  return (
    <nav className="bg-gray-80 h-24 flexBetween max-container padding-container relative z-30 ">
      <Link href="/">
        <Image src="/demoo_logo.png" alt="logo" width={150} height={10}></Image>
      </Link>
      <ul className="hidden gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link href={link.href}
          key={link.key}
          className={`text-white regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold  `} 
          // className={`regular-16 flexCenter ${activeLink === 0 ? "text-white" : "text-black"} cursor-pointer pb-1.5 transition-all hover:font-bold  `} 
          onClick={() => handleClick(index)} 
          >
            {link.label}
          </Link>
        )) }
      </ul>

      <Image src="/menu.svg" alt="menu_button" 
      width={22} 
      height={10} 
      className="inline-block cursor-pointer lg:hidden"></Image>
    </nav>
  )
}

export default Navbar