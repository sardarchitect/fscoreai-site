"use client";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useThemeContext } from "@/context/theme";
import DemoForm from "./utilsComponents/DemoForm";
import { useFormPopUpContext } from "../context/formPopup";
const Navbar = () => {
  const [theme, setTheme] = useThemeContext();
  const [showPopup, setShowPopup] = useFormPopUpContext();

  return (
    <div className={`${theme} min-h-full`}>
      <Disclosure as="nav" className="" >
 {({ open }) => (

          <nav
            // className={`navbar-responsive ${theme} lg:flexBetween padding-container relative z-30 `}
            className={`px-10 lg:py-5 navbar-responsive bg-white dark:bg-theme-color lg:flexBetween relative z-30 `}
          >

            <div className="flex justify-between items-center">
              <Link href="/">
                {/* dark mode */}
                <Image
                  src="/fscore_logo.png"
                  alt="logo"
                  width={70}
                  height={10}
                  className={` p-1 ${(theme==='dark') ? 'hidden' : 'visible'}`}
                ></Image>
                {/* light mode */}
                <Image
                  src="/FSCORE_logo_light.png"
                  alt="logo"
                  width={200}
                  height={10}
                  className={`p-1 ${(theme==='light') ? 'hidden' : 'visible'}`}
                ></Image>
              </Link>

              <div className={`-mr-2 my-10 block-to-display hidden`}>
              {/* <div className={`-mr-2 my-10 block-to-display hidden`}> */}
                {/* Mobile menu button */}
                <Disclosure.Button
                  className={`inline-flex items-center justify-center rounded-md ${theme} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                >
                  {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> */}
                  <span className="sr-only">Open main menu</span>
                  
                  {open ? (
                    <XMarkIcon  className="dark:text-white dark:border-white border-theme-blue text-theme-blue block  h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon  className="dark:text-white dark:border-white border-theme-blue text-theme-blue block  h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <ul className="lg:flex block-to-hide gap-8">
              {NAV_LINKS.map((link, index) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className={` dark:text-white duration-500 ease-in-out regular-16 justify-end cursor-pointer transition-all dark:hover:bg-gray-400 rounded-xl py-2 px-3 `}
                  // className={`regular-16 flexCenter ${activeLink === 0 ? "text-white" : "text-black"} cursor-pointer pb-1.5 transition-all hover:font-bold  `}
                >
                  {link.label}
                </Link>
              ))}

                <div
                    // <button
                  // href="#"
                  onClick={() => {setShowPopup(!showPopup)}}
                  className="inline-block text-sm px-4 py-3 leading-none border-2 rounded dark:text-white dark:border-white border-theme-blue hover:border-transparent hover:text-white hover:bg-theme-blue dark:hover:text-theme-blue hover:dark:bg-white cursor-pointer mt-4 lg:mt-0"
                >
                  Book Demo
                <DemoForm />
              {/* </button> */}
                </div>

              <button
                className={`w-14 h-8 m-auto rounded-full bg-gray-400 flex items-center justify-start p-1 focus:outline-none transition duration-300 ease-in-out ${
                  theme === "light" ? "bg-theme-blue" : "bg-white"
                }`}
                onClick={() => {
                  theme == "light" ? setTheme("dark") : setTheme("light");
                }}
              >
                <div
                  className={`w-6 h-6  rounded-full  shadow-md transform transition duration-300  ${
                    theme === "light" ? "translate-x-0 bg-white" : "translate-x-6 bg-theme-blue"
                  }`}
                ></div>
              </button>
            </ul>

            {/* code to display menu in mobile view */}
            <Disclosure.Panel className="bg-white dark:bg-theme-blue px-10 block-to-display hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {NAV_LINKS.map((link, index) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </nav>
          )}

      </Disclosure>
    </div>
  );
};

export default Navbar;

// {({ open }) => (

