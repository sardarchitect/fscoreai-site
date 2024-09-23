"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useThemeContext } from "@/context/theme";
import SocialHendles from "./utilsComponents/SocialHendles";

const Footer = () => {
  const [theme, setTheme] = useThemeContext();
  return (
    <main className={`${theme}`}>
      <footer className="bg-white text-theme-blue dark:bg-theme-blue dark:text-white text-center mx-auto  max-w-7xl items-center justify-between p-4 lg:px-8">
      <hr className="border-gray-50"/>
        <ul className="sm:space-x-20 space-x-2 flex justify-center sm:flexCenter mt-6">
          {NAV_LINKS.map((link, index) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-16 cursor-pointer pb-1.5 transition-all hover:text-gray-50`}
            >
              {link.label}
            </Link>
          ))}
        </ul>


        <div className="mt-5 flex justify-between items-center">
      
            <div className="">Copyright © 2024 Fscore AI LLC. All rights reserved.</div>
            <SocialHendles />
            <div className="">
              <Link href='/terms_of_use' className="font-bold hover:border-b-2">Terms of Use</Link>
              <span> & </span>
              <Link href='/privacy_policy' className="font-bold hover:border-b-2">Privacy Policy</Link>
            </div>
            
          </div>
      </footer>
    </main>
  );
};

export default Footer;
