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
    return null; // Hide the Footer for these pages
  }

  return (
    <main>
      <footer className="bg-[#0c0b16] text-white text-center p-8 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left Section with Logo and Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="/Fscore-icon.svg" // Replace with your actual logo path
              alt="Fscore AI Logo"
              width={50} // Adjust size accordingly
              height={50}
            />
            <p className="mt-4 text-gray-400">
              Transforming architecture and engineering <br /> with intelligent systems that automate <br /> drawing production.
            </p>
            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <SocialHandles /> {/* Assuming this component handles your social icons */}
            </div>
          </div>

          {/* Center Section with Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-24 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <h3 className="font-bold">Fscore AI</h3>
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link key={link.key} href={link.href} className="hover:text-gray-400">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-2">
              <h3 className="font-bold">Get Connected</h3>
              <div className="flex flex-col space-y-1">
                <Link href="/contact_us" className="hover:text-gray-400">Contact Us</Link>
                <Link href="/community" className="hover:text-gray-400">Community</Link>
                <Link href="/login" className="hover:text-gray-400">LogIn</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 m-auto  pt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col sm:flex-row justify-center sm:text-center  lg:text-left space-y-2 sm:space-y-0 sm:space-x-6">
            <Link href="/terms_of_use" className="hover:text-gray-400">Terms of Use</Link>
            <Link href="/privacy_policy" className="hover:text-gray-400">Privacy Policy</Link>
          </div>
          <div className="text-gray-500 lg:text-right  sm:text-center ">&copy; 2024 Fscore AI LLC. All rights reserved.</div>
        </div>
      </footer>
    </main> 
  );
}

export default Footer;
