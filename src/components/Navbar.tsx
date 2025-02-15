'use client';

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/src/constants";
import DemoForm from "./utilsComponents/DemoForm";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useFormPopUpContext } from "@/src/context/formPopup";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useFormPopUpContext();
  const currentPath = usePathname();

 
  const getLinkClasses = (linkPath: string) => {
    return currentPath === linkPath
      ? "font-bold py-2 px-3 space  text-Neptune-50" // Styles for active link
      : "cursor-pointer py-2 px-3"; // Default styles
  };

  return (
    <div className="sticky top-0 z-50">
      {/* <header className="top-0 left-0 right-0 z-40 fixed lg:px-0 pl-4  lg:pr-0 pr-2 lg:backdrop-blur bg-white bg-opacity-70"> */}
      <header className=" px-0 pl-4  lg:pr-0 pr-2 lg:backdrop-blur bg-white bg-opacity-70">
        <nav className={`mx-auto flex container-width items-center ${mobileMenuOpen ? "bg-white" : "bg-transparent"} justify-between py-4 `} >
          <div className="flex lg:flex-1">
            <Link href="/">
              <Image src="/fscorebold.svg" alt="logo" width={171} height={50} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-10 w-10 dark:text-white" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-10 w-10 dark:text-white" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center  lg:flex gap-4">
            {NAV_LINKS.map((link): any => (
                <Link href={link.href} key={link.key} className={getLinkClasses(link.href)}>
                  {link.label}
                </Link>
            ))}

            {/* Book Demo Button */}
            <div onClick={() => setShowPopup(!showPopup)} className="inline-block text-sm px-5 py-4 leading-none  bg-Neptune-50 rounded  text-white hover:bg-Earth-50 font-semibold dark:border-white border-theme-blue cursor-pointer">
              Book a Demo
              <DemoForm />
            </div>
          </div>
        </nav>

        {/* Mobile View Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full">
            <div
              className={`lg:fixed md:fixed relative inset-0 z-10 bg-white dark:bg-theme-blue p-6 w-full h-screen transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              {/* Centered Content Container */}
              <div className="flex flex-col justify-center items-center mt-4 space-y-6">
                {NAV_LINKS.map(link => (
                    <Link
                      href={link.href}
                      key={link.key}
                      className={getLinkClasses(link.href)}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                ))}

                {/* Book Demo Button */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setShowPopup(!showPopup)
                  }}
                  className="mt-6 text-center  inline-block w-full text-sm px-4 py-3 leading-none border-2 rounded   border-theme-blue cursor-pointer"
                >
                  Book a Demo
                  <DemoForm  />
                </div>
              </div>
            </div>
          </div>
        )}

      </header>
    </div>
  );
}
