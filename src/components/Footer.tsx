"use client";
import Link from "next/link";
import { FOOTER_LINKS } from "@/src/constants";
import { usePathname } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAlertPopUpContext } from "../context/alertPopup";
import { ALERT_MESSAGES } from "../constants/alertMessages";
import { useState } from "react";
// import Alert from "./utilsComponents/Alert";

interface FormData {
  email: string;
}

const Footer = () => {
  const currentPath = usePathname();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { showAlert } = useAlertPopUpContext();
  const [isSubscribed, setIsSubscribed] = useState(false); // Track subscription status

  if (currentPath === "/login" || currentPath === "/signup") {
    return null; // Hide the Footer for these pages
  }

  const addUserData = async (data: FormData) => {
    try {
      const response = await fetch("/api/email/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add user data");
      }

      const responseData = await response.json();
      reset();
      setIsSubscribed(true); // Show tick animation

      showAlert(ALERT_MESSAGES.SUBSCRIPTION_SUCCESS);
    } catch (error) {
      console.error("Error adding user data:", error);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Email submitted:", data.email);
    await addUserData(data);
  };


  return (
    <main>
      {/* <Alert/> */}
      <footer className="bg-[#181824] text-gray-400 text-center lg:my-0 pt-[59px] lg:pt-[70px] lg:px-[20px] md:px-[32px] sm:px-[16px]">
        <div className="container-width mb-[52px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start   ">
          {/* Subscription Section */}

          <div className="flex flex-col items-center lg:items-start text-center lg:w-[374px] lg:text-left mb-8 lg:mb-0">
          {/* <div className="flex flex-col items-center lg:items-start text-center w-[374px] lg:text-left mb-8 lg:mb-0"> */}
            <div className="text-white lg:w-[362px] h3 mb-4">
            {/* <div className="text-white w-[362px] h3 mb-4"> */}
              <span className="text-Charcoal-40">Subscribe to Stay Updated with</span> Draftflow
              {/* <p className="mt-5">Subscribe Now</p> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-auto  sm:gap-0 gap-2 border-b sm:border-none border-gray-30 flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your Email Address.."
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                className="p-3 bg-[#444444]  h-14 w-full text-white gap-2 sm:gap-0 rounded-l-sm placeholder-gray-400 focus:outline-none"
              />


              {/* Mobile View: Subscribe Button */}
              <button type="submit"
                onSubmit={handleSubmit(onSubmit)}
                className="bg-blue-500 c1 w-full sm:hidden justify-center  text-center items-center p-5 h-14 rounded text-white">
                Subscribe
              </button>
              {/* Desktop View: Arrow Icon */}
              <button
                type="submit"
                onSubmit={handleSubmit(onSubmit)}
                className="hidden sm:flex bg-[#444444] border-l border-gray-600 p-5 h-14 rounded-r-sm text-black justify-center items-center"
              >
                {/* Tick Animation */}
                {isSubscribed ? (
                  <svg
                    className="w-6 h-6 text-green-500 animate-fadeIn"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <img src="/home/arrow.svg" alt="arrow icon" className="w-6 p-1 h-6" />
                )}
              </button>

            </form>
            {errors.email && <p className="text-red-500 mt-4 text-sm">{errors.email.message}</p>}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row  lg:space-x-24 gap-[27px] text-center lg:text-left">
            <div className="flex flex-col h4 items-center lg:items-start space-y-2">
              <div className="flex flex-col lg:w-[231px] text-[#BBBBBB] space-y-2">
              {/* <div className="flex flex-col   w-[231px] text-[#BBBBBB] space-y-2"> */}
                {FOOTER_LINKS.map((link) => (
                  <Link key={link.key} href={link.href} className="hover:text-gray-400">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Section with Divider (only for mobile view) */}
            <hr className="border-gray-700 sm:hidden " />

            {/* Social Media Links */}
            <div className="flex justify-center ">
              <div className="flex flex-col gap-2 text-[#BBBBBB] cursor-pointer">
                <div className="flex  gap-2 h4">
                  <a href="https://www.linkedin.com/company/fscore/" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                    <img src="/linkdin.svg" alt="LinkedIn Icon" />
                    LinkedIn
                  </a>
                </div>
                <div className="flex gap-2 h4">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                    <img src="/Instagram.svg" alt="Instagram Icon" />
                    Instagram
                  </a>
                </div>
                <div className="flex gap-2 h4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                    <img src="/facebook.svg" alt="Facebook Icon" />
                    Facebook
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=" border-t container-width border-gray-700 pb-10 m-auto pt-[52px] flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col-2 gap-[100px] sm:gap-6 sm:flex-row justify-center sm:text-center lg:text-left">
            <Link href="/terms_of_use" className="hover:text-gray-400  text-Charcoal-60">Terms of Use</Link>
            <Link href="/privacy_policy" className="hover:text-gray-400 text-Charcoal-60">Privacy Policy</Link>
          </div>
          <div className="text-gray-500 lg:text-right sm:text-center cursor-pointer">&copy; 2025 Fscore AI LLC. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
