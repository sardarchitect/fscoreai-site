'use client'
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/src/constants";
import DemoForm from "./utilsComponents/DemoForm";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useThemeContext } from "@/src/context/theme";
import { useFormPopUpContext } from "@/src/context/formPopup";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const [theme, setTheme] = useThemeContext();
  const [showPopup, setShowPopup] = useFormPopUpContext();
  const currentPath = usePathname();



  if (currentPath === "/login" || currentPath === "/signup") return null; 

  return (
    <div >
      <header className="top-0 left-0 right-0 z-50 bg-white ">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <Link href="/">
              {/* Light mode */}
              <Image src="/fscore_logo.png" alt="logo" width={70} height={10} />
              {/* Dark mode */}
              <Image src="/FSCORE_Dark.png" alt="logo" width={70} height={10}  />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-10 w-10 dark:text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {NAV_LINKS.map(link => (
              <Link href={link.href} key={link.key} className={`dark:text-white duration-500 ease-in-out cursor-pointer py-2 px-3`}>
                {link.label}
              </Link>
            ))}

            {/* Book Demo Button */}
            <div onClick={() => setShowPopup(!showPopup)} className="inline-block text-sm px-4 py-3 leading-none border-2 rounded dark:text-white dark:border-white border-theme-blue cursor-pointer">
              Book a Demo
              <DemoForm />
            </div>
          </div>
        </nav>

        {/* Mobile View Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-10 bg-white dark:bg-theme-blue p-6">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <Image src="/fscore_logo.png" alt="logo" width={50} height={10}  />
                  <Image src="/FSCORE_Dark.png" alt="logo" width={50} height={10}  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="block h-10 w-10 dark:text-white" aria-hidden="true" />
                </button>
              </div>
              
              <div className="mt-4 space-y-1">
                {NAV_LINKS.map(link => (
                  <Link href={link.href} key={link.key} className="block text-lg py-2 dark:text-white" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}

                <div onClick={() => setShowPopup(!showPopup)} className="mt-6 text-center inline-block text-sm px-4 py-3 leading-none border-2 rounded dark:text-white dark:border-white border-theme-blue cursor-pointer">
                  Book a Demo
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
