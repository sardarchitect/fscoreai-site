"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { NAV_LINKS } from "@/src/constants";
import DemoForm from "./utilsComponents/DemoForm";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useThemeContext } from "@/src/context/theme";
import { useFormPopUpContext } from "@/src/context/formPopup";
import { useMobileMenuContext } from "@/src/context/mobileMenu";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenuContext();
  const [bgColor, setBgColor] = useState("bg-white text-theme-blue");
  const [demoFormBorder, setDemoFormBorder] = useState(
    "text-white border-white"
  );
  const [theme, setTheme] = useThemeContext();
  const [showPopup, setShowPopup] = useFormPopUpContext();
  const currentPath = usePathname();  

  useEffect(() => {
    const newBgColor =
      theme === "dark"
        ? "text-white bg-theme-blue"
        : "bg-white text-theme-blue";
    setDemoFormBorder(
      theme === "dark"
        ? "text-white border-white"
        : "border-theme-blue text-theme-blue"
    );
    setBgColor(newBgColor);
  }, [theme]);
  
  if (currentPath === "/login" || currentPath === "/signup") {
    return null; // Hide the Navbar for these pages
  }
  return (
       (<div className={`${theme} min-h-full sm:sticky sm:top-0 sm:z-50 `}>
      <header className={` top-0 left-0 right-0 z-50 bg-white dark:bg-theme-blue  `}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <Link href="/">
              {/* light mode */}
              <Image
                src="/fscore_logo.png"
                alt="logo"
                width={70}
                height={10}
                className={` p-1 ${theme === "dark" ? "hidden" : "visible"}`}
              ></Image>
              {/* dark mode */}
              <Image
                src="/FSCORE_Dark.png"
                alt="logo"
                width={70}
                height={10}
                className={`p-1 ${theme === "light" ? "hidden" : "visible"}`}
              ></Image>
            </Link>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>

              <Bars3Icon
                aria-hidden="true"
                className="dark:text-white dark:border-white border-theme-blue text-theme-blue block  h-10 w-10"
              />
            </button>
          </div>
          <Popover.Group className="lg:flex hidden gap-8">
            {/* <Popover.Group className="lg:flex block-to-hide gap-8"> */}
            {NAV_LINKS.map((link, index) => (
              <Link
                href={link.href}
                key={link.key}
                className={` dark:text-white duration-500 ease-in-out cursor-pointer rounded-xl py-2 px-3   transform hover:scale-110 ${currentPath == link.href ? "bg-gray-80" : ""}  `}
              >
                {link.label}
              </Link>
            ))}

            <div
              onClick={() => {
                setShowPopup(!showPopup);
              }}
              className="inline-block text-sm px-4 py-3 leading-none border-2 rounded dark:text-white dark:border-white border-theme-blue hover:border-transparent hover:text-white hover:bg-theme-blue dark:hover:text-theme-blue hover:dark:bg-white cursor-pointer mt-4 lg:mt-0"
            >
              Book Demo
              <DemoForm />
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
                  theme === "light"
                    ? "translate-x-0 bg-white"
                    : "translate-x-6 bg-theme-blue"
                }`}
              ></div>
            </button>
          </Popover.Group>
        </nav>

        {/* mobile view */}
        <div className={`${theme}`}>
          <Dialog
            className="lg:hidden bg-white dark:bg-theme-blue px-10 "
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            {/* <Dialog className="lg:hidden bg-white dark:bg-theme-blue px-10 block-to-display hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}> */}
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel
              className={`${bgColor} fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
            >
              <div className="flex items-center justify-between">
                <Link href="/">
                  {/* light mode */}
                  <Image
                    src="/fscore_logo.png"
                    alt="logo"
                    width={70}
                    height={10}
                    className={`p-1 ml-3 ${
                      theme === "dark" ? "hidden" : "visible"
                    }`}
                  ></Image>
                  {/* dark mode */}
                  <Image
                    src="/FSCORE_Dark.png"
                    alt="logo"
                    width={70}
                    height={10}
                    className={`p-1 ml-3 ${
                      theme === "light" ? "hidden" : "visible"
                    }`}
                  ></Image>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className={`block h-10 w-10 ${demoFormBorder}`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {NAV_LINKS.map((link, index) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    onClick={() => setMobileMenuOpen(false)}
                    className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    

                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex justify-between pb-5">
                <div
                  onClick={() => {
                    setShowPopup(!showPopup);
                  }}
                  className={`inline-block text-sm ml-4 px-4 py-3 leading-none border-2 rounded ${demoFormBorder} `}
                >
                  Book Demo
                  <DemoForm />
                </div>

                <button
                  className={`w-14 h-8 my-auto rounded-full bg-gray-400 flex  justify-start p-1 focus:outline-none transition duration-300 ease-in-out  ${
                    theme === "light" ? "bg-theme-blue" : "bg-white"
                  }`}
                  onClick={() => {
                    theme == "light" ? setTheme("dark") : setTheme("light");
                  }}
                >
                  <div
                    className={`w-6 h-6 rounded-full  shadow-md transform transition duration-300  ${
                      theme === "light"
                        ? "translate-x-0 bg-white"
                        : "translate-x-6 bg-theme-blue"
                    }`}
                  ></div>
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </header>
    </div>)
  );
}
