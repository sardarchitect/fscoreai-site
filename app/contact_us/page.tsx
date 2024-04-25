"use client";
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

  const onSubmit = async (data: any) => {
    await addUserData(data);
    reset();
  };

  const [persons, setPersons] = useState([]);

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
    <>
      <div className="text-white bg-rgb-2-6-23 px-4 sm:px-6 lg:px-8 py-8">
        <div className="py-5">
          <h2 className="text-4xl font-bold">
            We'd love to talk about how we can work together.
          </h2>
          <p className="text-xl mt-4 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, in.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 m-auto">
          <div className="px-4 sm:px-6 sm:col-span-3 sm:py-6 lg:py-8 shadow-xl">
            <form noValidate method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className=" pb-12 mt-5">
                <div className="mt-10 ">
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
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset bg-rgb-2-6-23 ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" // Add h-24 class for height
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-900/10 pb-12">
                  <p className="mt-4 text-sm leading-6 ">
                      <span className="cursor-pointer">
                      <input
                        type="checkbox"
                        id="agree"
                        {...register("Agree", {})}
                        className="mr-4 cursor-pointer"
                      />
                      <label htmlFor="agree" className="cursor-pointer">
                      By submitting I agree to be contacted by DiRoots for the
                        purposes of this contact form. For more information
                        please review our &nbsp;
                        <Link legacyBehavior href={`/privacy_policy`} >
                          <span className="text-blue-900 cursor-pointer">
                          privacy policy.
                          </span>
                        </Link>
                      </label>
                      
                      </span>
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  {/* <button
                    type="button"
                    className="text-sm font-semibold leading-6 "
                  >
                    Reset
                  </button> */}
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ContactUs;
