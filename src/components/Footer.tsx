"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/src/constants";
import { useThemeContext } from "@/src/context/theme";
import SocialHandles from "./utilsComponents/SocialHendles";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";


interface FormData {
  email: string;
}

const Footer = () => {
  const [theme] = useThemeContext();
  const currentPath = usePathname();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  if (currentPath === "/login" || currentPath === "/signup") {
    return null; // Hide the Footer for these pages
  }

  async function addUserData(data: FormData) {
    try {
      const response = await fetch('/api/email/subscribe', {
        method: 'POST', // or 'POST' if your API endpoint expects POST requests
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add user data');
      }
      const responseData = await response.json();
      reset()
      console.log('User data added successfully:', responseData);
    } catch (error) {
      console.error('Error adding user data:', error);
    }
  }
  
  
    const onSubmit = async (data: FormData) => {
      console.log('Email:', data.email);
      // making an API call
    await addUserData(data);
    };


  return (
    <main>
      <footer className="bg-black text-white py-10 md:py-28 text-center">
        <p className="h3 md:h2 font-semibold">Sign up for all the Future Updates</p>
        <p className="mt-9 te3 md:te1">
          Our mission is to streamline the architectural drawing process and elevate the quality  of
          construction documents through cutting-edge technology.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center gap-0 ">
            <input
              type="email"
              placeholder="Enter your Email Address.... "
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              className={`p-3 bg-[#444444] te3 rounded h-14 w-80 md:w-96 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <button type="submit" className="bg-gray-300 p-5 h-14 rounded z-5 sm:w-auto w-auto text-Mercury-50 b2">
              Subscribe
            </button>
          </form>
          {/* <input
            type="email"
            placeholder="Enter your Email Address.... "
            className="p-3 rounded-lg w-80 md:w-96"
          />
          <button className="bg-gray-800 p-3 rounded-lg w-40">Subscribe</button> */}
        </div>
      </footer>
      <footer className="bg-[#0c0b16] text-black text-center p-8 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left Section with Logo and Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="/Fscore-icon.svg" // Replace with your actual logo path
              alt="Fscore AI Logo"
              width={50} // Adjust size accordingly
              height={50}
            />
            <p className="mt-4 t4  text-gray-400">
              Transforming architecture and engineering <br /> with intelligent systems that automate <br /> drawing production.
            </p>
            {/* Social Media Icons */}
            <div className="mt-4 flex  ">
              <SocialHandles /> {/* Assuming this component handles your social icons */}
            </div>
          </div>

          {/* Center Section with Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-24 text-center lg:text-left ">
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <p className="b3 text-white">Fscore AI</p>
              <div className="flex flex-col t3 text-Charcoal-60 space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link key={link.key} href={link.href} className="hover:text-gray-400 ">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-2">
              <p className="b3 text-white">Get Connected</p>
              <div className="flex flex-col t3 text-Charcoal-60 space-y-2">
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
            <Link href="/terms_of_use" className="hover:text-gray-400 text-Charcoal-60">Terms of Use</Link>
            <Link href="/privacy_policy" className="hover:text-gray-400 text-Charcoal-60">Privacy Policy</Link>
          </div>
          <div className="text-gray-500 lg:text-right  sm:text-center ">&copy; 2024 Fscore AI LLC. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}

export default Footer;
