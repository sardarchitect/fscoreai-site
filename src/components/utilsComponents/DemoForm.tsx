"use client";
import { useFormPopUpContext } from "@/src/context/formPopup";
import { useThemeContext } from "@/src/context/theme";
import { sql } from "@vercel/postgres";
import SubmissionAlert from "@/src/components/utilsComponents/SubmissionAlert";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMobileMenuContext } from "@/src/context/mobileMenu";

interface RequestBody {
  name: string;
  email: string;
  company_name: string;
  job_title: string;
  short_description: string;
  Agree: boolean;
}

const DemoForm = ({open} :any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenuContext()
  const [showPopup, setShowPopup] = useFormPopUpContext()
  const [theme, setTheme] = useThemeContext();
  const [showMsg, setShowMsg] = useState(false);

  const onSubmit = async (data: any) => {
    await addUserData(data);
    const targetSection = document.getElementById('contact-submission-alert');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    reset();
    ShowAlert()
  };

  function ShowAlert() {
    setShowMsg(true);
    setTimeout(() => {
    setShowMsg(false);
    setMobileMenuOpen(false)
    }, 10000);1
  }
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showPopup]);
  useEffect(() => {
    setShowPopup(open)
  }, [open])

  async function addUserData(data: RequestBody) {
    try {
      const response = await fetch('/api', {
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
      console.log('User data added successfully:', responseData);
    } catch (error) {
      console.error('Error adding user data:', error);
    }
  }
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setMobileMenuOpen(false)
  };

  return (
    <>
     
      {showPopup && (
        <div className="cursor-default ">

        <div className={`${theme} backdrop-blur-sm fixed inset-0 bg-opacity-5 flex items-center justify-center z-50 w-screen overflow-hidden`} onClick={togglePopup}>
          <div
            className="dark:text-white dark:bg-theme-blue bg-white text-theme-blue dark:border-white border-theme-blue p-6 max-w-lg max-h-[80%] overflow-y-auto rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 m-5">
              <button onClick={togglePopup}
              className="hover:dark:text-theme-blue px-4 py-3 hover:bg-theme-color hover:text-white hover:dark:bg-white border-2 dark:border-white border-theme-blue rounded-xl">X</button>
            </div>
            <h2 className="text-4xl font-bold mb-4 pr-10">We'd love to talk about how we can work together.</h2>
            <p className="text-xl mt-4 tracking-wide mb-4" id='contact-submission-alert'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, in.</p>
            {showMsg===true && 
        <div className="animate-fadeIn dark:border-2 shadow-xl border rounded-full sm:mt-auto mt-5">
        {/* <div className="px-4 sm:px-6 sm:col-span-3 sm:py-6 lg:py-8 shadow-xl border rounded-lg"> */}
          <SubmissionAlert type='success' message="Thank you for submitting your form. We will get back to you shortly." />
        </div>}

            <form noValidate method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="pb-12 mt-5">
                <div className="mt-10">
                  <div className="sm:col-span-4 mb-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6">Full name</label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        id="name"
                        placeholder="Enter your name"
                        className="block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                  </div>

                  <div className="sm:col-span-4 mb-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/gm,
                            message: "Please enter a valid email address",
                          },
                        })}
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>              

                  <div className="sm:col-span-4 mb-4">
                    <label
                      htmlFor="company_name"
                      className="block text-sm font-medium leading-6 "
                    >
                      Company Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("company_name")}
                        id="company_name"
                      placeholder="Enter company name"
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4 mb-4">
                    <label
                      htmlFor="job_title"
                      className="block text-sm font-medium leading-6 "
                    >
                      Job Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("job_title")}
                        id="job_title"
                      placeholder="Enter your job title"
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>   

                  <div className="sm:col-span-4 mb-4">
                    <label htmlFor="short_description" className="block text-sm font-medium leading-6">Short description</label>
                    <div className="mt-2">
                      <textarea
                        {...register("short_description", { required: "Short description is required" })}
                        id="short_description"
                        rows={4}
                        placeholder="Write your thoughts here..."
                        className="block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset dark:bg-rgb-2-6-23 dark:ring-gray-100 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                      {errors.short_description && <p className="text-red-500 text-sm mt-1">{errors.short_description.message}</p>}
                    </div>
                  </div>

                  <div className="sm:col-span-4 mb-4">
                    <p className="mt-4 text-sm leading-6">
                      <span className="cursor-pointer">
                        <input
                          type="checkbox"
                          id="agree"
                          {...register("Agree")}
                          className="mr-4 cursor-pointer"
                        />
                        <label htmlFor="agree" className="cursor-pointer">
                        I agree to be receive communications from Fscore AI, and I understand Fscore AI will process my information in accordance with Fscore AI's &nbsp;
                          <Link legacyBehavior href={`/privacy_policy`}>
                            <span className="hover:border-b-2 cursor-pointer">privacy policy</span>
                          </Link>.
                        </label>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md border border-gray-700 dark:bg-indigo-600 px-3 py-2 text-sm font-semibold dark:text-white shadow-sm dark:hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default DemoForm;
