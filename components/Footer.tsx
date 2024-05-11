"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useThemeContext } from "@/context/theme";

const Footer = () => {
  const [theme, setTheme] = useThemeContext();
  return (
    <main className={`${theme}`}>
    <footer className="bg-white text-theme-blue dark:bg-theme-blue dark:text-white text-center py-10 h-screen">
      <div>@2024 abc's blogs</div>
      <ul className="m-auto underline space-x-5 flexCenter">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={link.key}
            className={` regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold  `}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="">
      <div className="flexCenter">
        <Link href="/">
          <Image
            src="/fscore_logo_text.png"
            alt="logo"
            width={100}
            height={10}
          ></Image>
        </Link>
          <span className="font-bold text-xl">&nbsp;Site name</span>
      </div>

      </div>
      <div>
        Powered by
        <span className="underline">Site Name</span> - Home for tech readers
      </div>
    </footer>
    </main>
  );
};

export default Footer;
