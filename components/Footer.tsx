"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useThemeContext } from "@/context/theme";

const Footer = () => {
  const [theme, setTheme] = useThemeContext();
  return (
    <main className={`${theme} `}>
      <footer className="bg-white text-theme-blue dark:bg-theme-blue dark:text-white text-center sm:p-20 p-10">

        <ul className="sm:space-x-20 space-x-2 flex justify-center sm:flexCenter">
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


        <div className="mt-5">
          <hr className="border-gray-50"/>
          <div className="flex justify-around mt-5 text-sm">
            <div>Copyright © 2024 Fscore AI LLC. All rights reserved.</div>
            <div>Terms of Use & Privacy Policy</div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
