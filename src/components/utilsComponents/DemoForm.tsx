"use client";
import { useFormPopUpContext } from "@/src/context/formPopup";
import { useThemeContext } from "@/src/context/theme";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMobileMenuContext } from "@/src/context/mobileMenu";
import { useAlertPopUpContext } from "@/src/context/alertPopup";
import { ALERT_MESSAGES } from "@/src/constants/alertMessages";

interface RequestBody {
  name: string;
  email: string;
  company_name: string;
  job_title: string;
  short_description: string;
  Agree: boolean;
}

const DemoForm = ({ open }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenuContext()
  const [showPopup, setShowPopup] = useFormPopUpContext()
  const [theme, setTheme] = useThemeContext();
  const { showAlert } = useAlertPopUpContext();

  const onSubmit = async (data: any) => {
    await addUserData(data);
    const targetSection = document.getElementById('contact-submission-alert');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    reset();
    setShowPopup(false)
    showAlert(ALERT_MESSAGES.FORM_SUBMITTED);
  };
  
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
      const response = await fetch('/api/email/contactus', {
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
        <div className="cursor-default text-left">

          <div className={`${theme} sm:pt-0 pt-20 backdrop-blur-sm fixed inset-0 flex items-center justify-center w-screen h-screen overflow-hidden px-3`} onClick={togglePopup}>

            <div
              className="bg-theme-blue text-white border-white border-2 p-6 max-w-lg max-h-full overflow-y-scroll rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 m-4">
                <button onClick={togglePopup}
                  className="hover:dark:text-theme-blue px-4 py-3 hover:bg-theme-color hover:text-black hover:dark:bg-white border-2 dark:border-white border-theme-blue rounded-xl ">X</button>
              </div>

              <h2 className="text-4xl font-bold mb-1 pr-10">Let's Chat</h2>
              <p className="text-sm tracking-wide mb-4" id='contact-submission-alert'>Book a 1:1 meeting with us to get started.</p>
              <form noValidate method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-6 mt-4">
                  <div className="mt-5">
                    <div className="sm:col-span-4 mb-4">
                      <label htmlFor="name" className="block text-sm font-medium leading-6">Full name</label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", { required: "Name is required" })}
                          id="name"
                          placeholder="Enter your name"
                          className="block w-full rounded-md border-0 text-sm p-2 sm:p-3 shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">
                          {typeof errors.name.message === "string" ? errors.name.message : ""}
                        </p>}
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
                          className="block w-full rounded-md border-0 p-2 sm:p-3 text-sm shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">
                          {typeof errors.email.message === "string" ? errors.email.message : ""}
                        </p>}
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
                          className="block w-full rounded-md border-0 text-sm  p-2 sm:p-3  shadow-sm ring-1 ring-inset dark:ring-gray-300 dark:bg-rgb-2-6-23 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>



                    <div className="sm:col-span-4 mb-4">
                      <label htmlFor="short_description" className="block text-sm font-medium leading-6">Short description</label>
                      <div className="mt-2">
                        <textarea
                          {...register("short_description", { required: "Short description is required" })}
                          id="short_description"
                          rows={2}
                          placeholder="Write your thoughts here..."
                          className="block w-full rounded-md border-0 text-sm p-2 sm:p-3 shadow-sm ring-1 ring-inset dark:bg-rgb-2-6-23 dark:ring-gray-100 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                        {errors.short_description && <p className="text-red-500 text-sm mt-1">
                          {typeof errors.short_description.message === "string" ? errors.short_description.message : ""}
                        </p>}
                      </div>
                    </div>

                    <div className="sm:col-span-4 mb-4">
                      <span className="mt-4 text-sm leading-6">
                        <p className="text-xs">
                          By leaving your information you agree to receive communications from Fscore AI and agree to our <a href="/privacy_policy" className="font-bold underline">Privacy Policy</a>. You may unsubscribe from these communications at anytime. &nbsp;</p>
                      </span>
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
