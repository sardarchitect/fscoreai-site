"use client";
import { ALERT_MESSAGES } from "@/src/constants/alertMessages";
import { useAlertPopUpContext } from "@/src/context/alertPopup";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { useForm } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  company_name: string;
  job_title: string;
  short_description: string;
  Agree: boolean;
}

type SubscribeFormValues = {
  email: string;
};

const ContactUs = () => {
  // Contact Form
  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    reset: resetContact,
    formState: { errors: contactErrors },
  } = useForm<ContactFormValues>();

  // Subscribe Form
  const {
    register: registerSubscribe,
    handleSubmit: handleSubscribeSubmit,
    reset: resetSubscribe,
    formState: { errors: subscribeErrors },
  } = useForm<SubscribeFormValues>();

  const { showAlert } = useAlertPopUpContext();


  const [loading, setLoading] = useState<boolean>(false);
  const [isSubscribed, setSubscribe] = useState<boolean>(false);

  const onSubmitContact = async (data: ContactFormValues) => {
    await addUserData(data);
    const targetSection = document.getElementById('contact-submission-alert');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    resetContact();
    showAlert(ALERT_MESSAGES.FORM_SUBMITTED);
  };

   // Handle Subscribe Form Submission
   const onSubmitSubscribe = async (data: SubscribeFormValues) => {
    try {
      const response = await fetch("/api/email/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      resetSubscribe();
      setSubscribe(true);
      showAlert(ALERT_MESSAGES.SUBSCRIPTION_SUCCESS);
    } catch (error) {
      console.error("Error subscribing:", error);
      showAlert(ALERT_MESSAGES.FORM_ERROR);
    } 
  };


  async function addUserData(data: ContactFormValues) {
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
    <main className={``}>
       {/* Header Section */}
       <header className="bg-ab-bg overflow-x-hidden sm:px-[16px] md:px-[32px] lg:px-[0px] w-full mb-[66px] gap-6 md:gap-36 pt-[66px] pb-[78px]  flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="container-width lg:px-0 px-4 flex flex-col md:flex-row gap-8 md:gap-24  ">
          {/* Left side with the main heading */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="h3 md:h2 lg:h2 leading-tight text-Charcoal-40">
             Let’s Explore How We Can <span className="text-white"> Help You Succeed </span>
            </p>
          </div>

          {/* Right side with the mission statement */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <p className="text-white te1 leading-relaxed" id='contact-submission-alert'>
            Ready to elevate your projects? We’re here to discuss your needs, answer your questions, and explore solutions that streamline your workflow. Whether you’re curious about our technology or ready to get started, we’d love to connect!
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto container-width lg:px-0 px-4 bg-white text-theme-blue">
        {/* Grid Layout for 50-50% split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Side Section (Why Connect With Us?) */}
          <div className="bg-white text-center lg:text-left rounded-lg  py-8">
          {/* <div className="bg-white  dark:bg-gray-800 text-center lg:text-left rounded-lg  py-8"> */}
          <div className="h3 md:h2 lg:h2 leading-tight text-Mercury-50 mb-6">
            <span className="text-Charcoal-60">Why</span> Partner
            <span className="text-Charcoal-60"> With Us? </span> 
          </div>
            <p className="t1 mb-6 lg:max-w-md ">
              Our mission is to empower architects and designers with innovative tools that save time, reduce errors, and boost productivity. By working together, we help you focus on what truly matters: creating exceptional designs and bringing your vision to life.
            </p>
            <div className="h4 md:h3 lg:h3 leading-tight text-Mercury-50 mb-4 mt-8"> Email </div>
            <p className="te1">Reach out to us at <Link href="mailto:support@fscore.ai" className="text-Neptune-50 hover:underline">support@fscore.ai</Link> for any additional queries.</p>

          </div>

          {/* Right Side Section (Form Section) */}
          <div className="bg-white rounded-lg  py-8">
            <form noValidate method="POST" onSubmit={handleContactSubmit(onSubmitContact)}>
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
                      {...registerContact("name", { required: "Name is required" })}
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 block w-full rounded-md border-0 py-4 px-3 shadow-sm ring-1  focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      // className="mt-1 block w-full rounded-md border-0 py-4 px-3 shadow-sm ring-1  dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    />
                    {contactErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{contactErrors.name.message}</p>
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
                      {...registerContact("email", {
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
                    {contactErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>
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
                    {...registerContact("short_description", {
                      required: "Short description is required",
                    })}
                    id="short_description"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    // className="mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1  dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    placeholder="Describe your project..."
                  ></textarea>
                  {contactErrors.short_description && (
                    <p className="text-red-500 text-sm mt-1">{contactErrors.short_description.message}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      {...registerContact("Agree", { required: "You must agree to continue" })}
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
                      {contactErrors.Agree && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.Agree.message}</p>
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
