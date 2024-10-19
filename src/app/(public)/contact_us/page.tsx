"use client";
import SubmissionAlert from "@/src/components/utilsComponents/SubmissionAlert";
import { useThemeContext } from "@/src/context/theme";
import Image from "next/image";
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
  } = useForm();

  const [showMsg, setShowMsg] = useState(false);
  const [theme, setTheme] = useThemeContext();

  const onSubmit = async (data: any) => {
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
      console.log('Email sent successfully:', responseData);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <main className="py-16">
      <div className="dark:text-white dark:bg-rgb-2-6-23 bg-white text-theme-blue px-4 sm:px-6 lg:px-8 py-8">
        <div className="py-5 sm:text-justify text-center">
          <h2 className="text-4xl font-bold">
            We'd love to talk about how we can work together.
          </h2>
          <p id='contact-submission-alert' className="text-xl mt-4 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, in.
          </p>
        </div>

        {/* Grid Layout for 50-50% split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Form Section (Left Side) */}
          <div className="bg-white dark:bg-gray-800 shadow-lg border rounded-lg px-6 py-8">
            {showMsg && (
              <div className="animate-fadeIn shadow-xl border rounded-full mb-5">
                <SubmissionAlert type='success' message="Thank you for submitting your form. We will get back to you shortly." />
              </div>
            )}
            <form noValidate method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium leading-6"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6"
                  >
                    Email address
                  </label>
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
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
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
                    rows={4}
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    placeholder="Describe your project..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      {...register("Agree", {})}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="agree" className="font-medium text-gray-700">
                      I agree to receive communications from Fscore AI, and I understand Fscore AI will process my information in accordance with Fscore AI's{" "}
                      {/* <Link href="/privacy_policy">
                        <a className="text-indigo-600 hover:underline">privacy policy</a>
                      </Link> */}
                    </label>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side Section (Text Section) */}
          <div className="bg-white dark:bg-gray-800 shadow-lg border rounded-lg px-6 py-8">
            <p className="text-2xl font-semibold mb-4">Why Connect With Us?</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae delectus neque amet nesciunt cum voluptatem illo. Ducimus, quos eos. Facere odio illum impedit veniam!
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci culpa nisi expedita fugiat dolor quibusdam quidem animi commodi voluptates itaque.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ContactUs;
 