"use client";
import Link from "next/link";
import { FOOTER_LINKS } from "@/src/constants";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

const Footer = () => {
  const currentPath = usePathname();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  if (currentPath === "/login" || currentPath === "/signup") {
    return null; // Hide the Footer for these pages
  }

  async function addUserData(data: FormData) {
    try {
      const response = await fetch('/api/email/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add user data');
      }
      const responseData = await response.json();
      reset();
      console.log('User data added successfully:', responseData);
    } catch (error) {
      console.error('Error adding user data:', error);
    }
  }

  const onSubmit = async (data: FormData) => {
    console.log('Email:', data.email);
    await addUserData(data);
  };

  return (
    <main>
      <footer className="bg-[#0c0b16] text-gray-400 text-center p-8 pt-20 lg:px-8">
        <div className="max-w-7xl mb-20 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Subscription Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <div className="text-white w-[363px] h3 mb-4">
              <span className="text-Charcoal-40">Start a Project with</span> Draftflow
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-r rounded from-[#FFFFFF] to-[#514F4F] flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your Email Address.."
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                className="p-3 bg-[#444444] rounded-sm h-14 w-full text-white placeholder-gray-400 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              {/* Mobile View: Subscribe Button */}
              <button type="submit" className="bg-blue-500 c1 w-full sm:hidden justify-center text-center items-center p-5 h-14 rounded text-white">
                Subscribe
              </button>

              {/* Desktop View: Arrow Icon */}
              <button type="submit" className="hidden sm:block bg-gray-50 p-5 h-14 rounded text-black">
                <img src="/home/arrow.svg" alt="arrow icon" />
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-24 gap-8 text-center lg:text-left">
            <div className="flex flex-col h4 items-center lg:items-start space-y-2">
              <div className="flex flex-col pr-5  w-[231px] text-Charcoal-30 space-y-2">
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
            <div className="flex justify-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 h4"><img src="/linkdin.svg" alt="LinkedIn Icon" /> LinkedIn</div>
              <div className="flex gap-2 h4"><img src="/Instagram.svg" alt="Instagram Icon" /> Instagram</div>
              <div className="flex gap-2 h4"><img src="/facebook.svg" alt="Facebook Icon" /> Facebook</div>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t max-w-7xl border-gray-700 m-auto pt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col sm:flex-row justify-center sm:text-center lg:text-left space-y-2 sm:space-y-0 sm:space-x-6">
            <Link href="/terms_of_use" className="hover:text-gray-400 text-Charcoal-60">Terms of Use</Link>
            <Link href="/privacy_policy" className="hover:text-gray-400 text-Charcoal-60">Privacy Policy</Link>
          </div>
          <div className="text-gray-500 lg:text-right sm:text-center">&copy; 2024 Fscore AI LLC. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
