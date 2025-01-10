"use client";
import SubmissionAlert from "@/src/components/utilsComponents/SubmissionAlert";
import { useThemeContext } from "@/src/context/theme";
import Link from "next/link";
import React, { useState } from "react";

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
  } = useForm<RequestBody>();

  const [showMsg, setShowMsg] = useState(false);
  const [theme] = useThemeContext();

  const onSubmit = async (data: RequestBody) => {
    await addUserData(data);
    const targetSection = document.getElementById('contact-submission-alert');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    reset();
    ShowAlert();
  };

  function ShowAlert() {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 10000);
  }

  async function addUserData(data: RequestBody) {
    try {
      const response = await fetch('/api/email/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const responseData = await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <main className={`py-16 items-center flex justify-center`}>
      <div className=" container-width lg:px-0 px-4 bg-white text-theme-blue">
      {/* <div className=" container-width dark:text-white dark:bg-rgb-2-6-23 lg:px-0 px-4  bg-white text-theme-blue   "> */}
        {/* Centered Header Text */}
        <div className="text-center py-5">
          <h2 className="text-4xl font-bold">
            Let’s Explore How We Can Help You Succeed
          </h2>
          <p id='contact-submission-alert' className="text-xl mt-4 tracking-wide">
            Ready to elevate your projects? We’re here to discuss your needs, answer your questions, and explore solutions that streamline your workflow. Whether you’re curious about our technology or ready to get started, we’d love to connect!
          </p>
        </div>

        {/* Grid Layout for 50-50% split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Side Section (Why Connect With Us?) */}
          <div className="bg-white text-center lg:text-left rounded-lg  py-8">
          {/* <div className="bg-white  dark:bg-gray-800 text-center lg:text-left rounded-lg  py-8"> */}
            <p className="text-2xl font-semibold mb-4">Why Partner With Us?</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our mission is to empower architects and designers with innovative tools that save time, reduce errors, and boost productivity. By working together, we help you focus on what truly matters: creating exceptional designs and bringing your vision to life.
            </p>
            <p>Reach out to us at <Link href="mailto:support@fscore.ai" className="text-Neptune-50 hover:underline">support@fscore.ai</Link> for any additional queries.</p>

          </div>

          {/* Right Side Section (Form Section) */}
          <div className="bg-white rounded-lg  py-8">
          {/* <div className="bg-white dark:bg-gray-800   rounded-lg  py-8"> */}
            {showMsg && (
              <div className="animate-fadeIn shadow-xl border rounded-full mb-5">
                <SubmissionAlert type='success' message="Thank you for submitting your form. We will get back to you shortly." />
              </div>
            )}
            <form noValidate method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6  ">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                  {/* Full Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 block w-full rounded-md border-0 py-4 px-3 shadow-sm ring-1  focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      // className="mt-1 block w-full rounded-md border-0 py-4 px-3 shadow-sm ring-1  dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Address Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm  font-medium leading-6"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1 block w-full rounded-md border-0 py-4 px-3 shadow-sm ring-1 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      // className="mt-1 block w-full rounded-md border-0 py-4 px-3 shadow-sm ring-1  dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="short_description"
                    className="block text-sm font-medium leading-6"
                  >
                    Short description
                  </label>
                  <textarea
                    {...register("short_description", {
                      required: "Short description is required",
                    })}
                    id="short_description"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    // className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1  dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    placeholder="Describe your project..."
                  ></textarea>
                  {errors.short_description && (
                    <p className="text-red-500 text-sm mt-1">{errors.short_description.message}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      {...register("Agree", { required: "You must agree to continue" })}
                      type="checkbox"
                      className="h-4 w-4 mt-1 border-gray-300 rounded cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm ">
                    <label htmlFor="agree" className="font-medium text-gray-700">
                      I agree to receive communications from Fscore AI, and I understand Fscore AI will process my information in accordance with Fscore AI's{" "}
                      {/* <Link href="/privacy_policy">
            <a className="text-indigo-600 hover:underline">privacy policy</a>
            </Link> */}
                      {errors.Agree && (
                        <p className="text-red-500 text-sm mt-1">{errors.Agree.message}</p>
                      )}
                    </label>

                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center h-[56px] items-center  py-2 px-4 border border-transparent shadow-sm b2 rounded-md text-white bg-Neptune-50 hover:bg-Earth-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
