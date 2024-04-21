"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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

  // const updatedNavigation = navigation.map((item) => {
  //   const isCurrent = item[userInfo?.role] && location.pathname === item.href;
  //   return {
  //     ...item,
  //     current: isCurrent,
  //   };
  // });

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
    <div className="min-h-full">
      <Disclosure as="nav" className="">
        {({ open }) => (
          <nav
            className={`bg-rgb-2-6-23 sm:flexBetween padding-container relative z-30 `}
          >
            <div className="flex justify-between">
              <Link href="/">
                <Image
                  src="/fscore_logo.png"
                  alt="logo"
                  width={120}
                  height={10}
                ></Image>
              </Link>

              

<div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

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
                <a
                  href="#"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Book Demo
                </a>
              </button>
            </ul>
            
            {/* code to display menu in mobile view */}
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {NAV_LINKS.map((link, index) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  {cartItems && cartItemsLength > 0 ? (
                    <Link to="/cart">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6 relative top-5"
                          aria-hidden="true"
                        />
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-2 relative left-2 bottom-4">
                          {cartItemsLength}
                        </span>
                      </button>
                    </Link>
                  ) : (
                    <Link to="/">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                  )}
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Link
                      to={item.link}
                      className={classNames(
                        "block rounded-md px-4 py-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div> */}
            </Disclosure.Panel>
          </nav>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
