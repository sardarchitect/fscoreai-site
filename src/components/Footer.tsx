"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/src/constants";
import { useThemeContext } from "@/src/context/theme";
import SocialHandles from "./utilsComponents/SocialHendles";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [theme] = useThemeContext();
  const currentPath = usePathname();  

  if (currentPath === "/login" || currentPath === "/signup") {
    return null; // Hide the Navbar for these pages
  }
  return (
    <main className={`${theme}`}>
      <footer className="bg-white text-theme-blue dark:bg-theme-blue dark:text-white text-center mx-auto max-w-7xl p-4 lg:px-8">
        <hr className="border-gray-50" />
        <ul className="sm:space-x-20 space-x-2 flex flex-col sm:flex-row justify-center mt-6">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`regular-16 cursor-pointer pb-1.5 transition-all hover:text-gray-50`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col sm:flex-row justify-between items-center">
          <div className="">Copyright © 2024 Fscore AI LLC. All rights reserved.</div>
          <SocialHandles />
          <div className="flex flex-col sm:flex-row items-center">
            <Link href='/terms_of_use' className="font-bold hover:border-b-2">Terms of Use</Link>
            <span className="hidden sm:inline"> & </span>
            <Link href='/privacy_policy' className="font-bold hover:border-b-2">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
