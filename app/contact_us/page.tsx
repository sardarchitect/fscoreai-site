"use client";
import SubmissionAlert from "@/components/utilsComponents/SubmissionAlert";
import { useThemeContext } from "@/context/theme";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface RequestBody {
  name: string;
  email: string;
  company_name: string;
  job_title: string;
  short_description: string;
  Agree: boolean;
}

const ContactUs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [persons, setPersons] = useState([]);
  const [showMsg, setShowMsg] = useState(false);
  const [theme, setTheme] = useThemeContext();

  const onSubmit = async (data: any) => {
    await addUserData(data);
    // Scroll to the target section
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
    }, 5000);
  }

  async function addUserData(data: RequestBody) {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
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

  return (
    <main className={`${theme}`}>
      <div className="dark:text-white dark:bg-rgb-2-6-23 bg-white text-theme-blue px-4 sm:px-6 lg:px-8 py-8">
     <div>
        {/* <div className="py-5 text-justify"> */}
        <div className="py-5 sm:text-justify text-center">
          <h2 className="text-4xl font-bold">
            We'd love to talk about how we can work together.
          </h2>
          <p id='contact-submission-alert' className="text-xl mt-4 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, in.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:gap-x-6 gap-y-8 sm:grid-cols-6 sm-auto">
        
        <div className="px-4 sm:px-6 sm:col-span-3 sm:py-6 lg:py-8 shadow-xl border rounded-lg">
        {showMsg===false && 
        <div className="animate-fadeIn dark:border-2 shadow-xl border rounded-full sm:mt-auto mt-5">
        {/* <div className="px-4 sm:px-6 sm:col-span-3 sm:py-6 lg:py-8 shadow-xl border rounded-lg"> */}
          <SubmissionAlert type='success' message="Thank you for submitting your form. We will get back to you shortly." />
        </div>}
            <form noValidate method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className=" pb-12 mt-5">
                <div className="mt-10">
                  <div className="sm:col-span-4 ">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium leading-6 "
                    >
                      Full name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        id="name"
                      placeholder="Enter your name"
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset dark:ing-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 "
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/gm,
                            message: "Please enter a valid email address",
                          },
                        })}
                        type="email"
                        autoComplete="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
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

                  <div className="sm:col-span-4">
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

                  <div className="">
                    <label
                      htmlFor="short_description"
                      className="block text-sm font-medium leading-6"
                    >
                      Short description
                    </label>
                    <div className="mt-2">
                      <textarea
                        {...register("short_description", {
                          required: "Short description of your project",
                        })}
                        id="short_description"
                        rows={4} // Set the number of rows to determine the height
                        className="block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset dark:bg-rgb-2-6-23 dark:ring-gray-100 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6" // Add h-24 class for height
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="border-b dark:border-gray-900/10 pb-12">
                  <p className="mt-4 text-sm leading-6 ">
                      <span className="cursor-pointer">
                      <input
                        type="checkbox"
                        id="agree"
                        {...register("Agree", {})}
                        className="mr-4 cursor-pointer"
                      />
                      <label htmlFor="agree" className="cursor-pointer">
                      I agree to be receive communications from Fscore AI, and I understand Fscore AI will process my information in accordance with Fscore AI's &nbsp;
                        <Link legacyBehavior href={`/privacy_policy`} >
                          <span className="hover:border-b-2 cursor-pointer">
                          privacy policy.
                          </span>
                        </Link>
                      </label>
                      
                      </span>
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-start gap-x-6">
                  {/* <button
                    type="button"
                    className="text-sm font-semibold leading-6 "
                  >
                    Reset
                  </button> */}
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

          {/* maps */}
          <div className="sm:col-span-3 col-span-3 py-16">
            <span className="m-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.9032958392!2d-71.13509572908293!3d42.31423194975003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1715422015591!5m2!1sen!2sin" className="w-full" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </span>
            <span className="m-10 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27458.800850847038!2d76.69529713881917!3d30.65226833765403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febe1fc6b2bef%3A0x555c2d1b4e524afa!2sSector%2082%2C%20JLPL%20Industrial%20Area%2C%20Punjab!5e0!3m2!1sen!2sin!4v1715421986592!5m2!1sen!2sin"  height="250" className="w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </span>
          </div>

          
        </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
