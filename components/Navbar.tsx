"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0); // Set the initial active link index
  const [BGColor, setBGColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [menuState, setMenuState] = useState("hidden");

  useEffect(() => {
    // Define a function to get the current path
    const getCurrentPath = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", getCurrentPath);
    getCurrentPath();
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", getCurrentPath);
    };
  }, []);

  useEffect(() => {
    if (activeLink === 0) {
      setTextColor("text-white");
      setBGColor("bg-transparent");
    } else if (activeLink === 1) {
      setBGColor("bg-rgb-2-6-23");
      setTextColor("text-white");
    } else {
      setBGColor("bg-transparent");
      setTextColor("text-black");
    }
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [activeLink]);

  useEffect(() => {
    if (currentPath.startsWith("/blog/") && activeLink === 0) {
      setTextColor("text-black");
    }
  }, [currentPath]);

  const handleClick = (index: number) => {
    setActiveLink(index);
  };
  function handleToggle() {
    if (isOpen) {
      setMenuState("block");
      setOpen(false);
    } else {
      setMenuState("hidden");
      setOpen(true);
    }
  }

  return (
    <nav className={`bg-rgb-2-6-23 sm:flexBetween padding-container relative z-30 `}>
      <div className="flex justify-between">
      <Link href="/">
        <Image src="/fscore_logo.png" alt="logo" width={120} height={10}></Image>
      </Link>
      <Image
        src="/menu.svg"
        alt="menu_button"
        width={22}
        height={10}
        onClick={() => {
          handleToggle();
        }}
        className={`${
          { isOpen } ? " inline-block" : "hidden"
        }  cursor-pointer lg:hidden`}
      ></Image>
      </div>

      <ul className="hidden gap-8 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={link.key}
            className={`text-white duration-500 ease-in-out regular-16 justify-end cursor-pointer transition-all hover:bg-gray-400 rounded-xl py-2 px-3 `}
            // className={`regular-16 flexCenter ${activeLink === 0 ? "text-white" : "text-black"} cursor-pointer pb-1.5 transition-all hover:font-bold  `}
            onClick={() => handleClick(index)}
          >
            {link.label}
          </Link>
        ))}
         <button>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        Book Demo
      </a>
    </button>
      </ul>

      <div className={`sm:hidden ${menuState} h-full`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {NAV_LINKS.map((link, index) => (
            <Link
              href={link.href}
              key={link.key}
              className={`${textColor} regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold  `}
              // className={`regular-16 flexCenter ${activeLink === 0 ? "text-white" : "text-black"} cursor-pointer pb-1.5 transition-all hover:font-bold  `}
              onClick={() => handleClick(index)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
