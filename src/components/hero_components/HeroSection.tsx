import { useForm, SubmitHandler } from "react-hook-form";
import { Suspense, useState } from "react";
import { HeroVideo } from "./Videos";
import { motion } from "framer-motion";

type FormValues = {
  email: string;
};

const HeroSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState<boolean>(false);
  const [isSubscribed, setSubscribe] = useState<boolean>(false);

  const addUserData = async (data: FormValues) => {
    try {
      setLoading(true);
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

      // setTimeout(() => {
      // }, 2000)
      reset();
      setSubscribe(true);
      setLoading(false);
    } catch (error) {
      console.error("Error adding user data:", error);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Email submitted:", data.email);
    await addUserData(data);
  };

  return (
    <section className="relative m-auto container-width h-full min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-0">
      <div className="relative z-10 mx-auto grid grid-cols-12  w-full h-full items-center">
        {/* Left Section: Text Content */}
        <div className="col-span-12 lg:col-span-6 order-2 md:order-1 lg:order-1 flex text-start   flex-col justify-center">
          <p className="h2 sm:he2  text-Mercury-50">
            Elevate the
            <span className="text-Charcoal-80"> Quality </span>
            of Your 
            <span className="text-Charcoal-80"> Construction Drawings </span>
            with Draftflow
          </p>
          <div className="mt-4 max-w-md sm:max-w-lg text-gray-50">
          Automatically flag and resolve common architectural drafting errors in real time. 
          Save valuable time, avoid costly mistakes, and move beyond tedious markups 
          with seamless automated reviews!
            <p className="mt-5">Stay Updated – Subscribe Now</p>
          </div>

          {/* Subscribe Form */}
          <div className="mt-6 w-full text-start">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:flex md:flex block w-full justify-start"
            >
              {/* Email Input */}
              <input
                type="email"
                disabled={loading || isSubscribed}
                placeholder={isSubscribed ? "Thanks for Subscribing" : "Enter Your Email"}
                {...register("email", {
                  required: "Please provide your email address.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`px-6 py-2 h-[56px] border mb-3 lg:w-[320px] w-full lg:rounded-l-lg shadow-2xl text-gray-700 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />

             
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-Neptune-50 h-[56px] lg:w-[179px] w-full text-white px-6 py-2  lg:rounded-r-lg hover:bg-Earth-50"
              disabled={loading || isSubscribed}
            >
              {loading ? (
                "Subscribing..."
              ) : isSubscribed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center justify-center space-x-2"
                >
                  {/* <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-400"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 12.293l3.146-3.146a1 1 0 011.415 1.415l-4 4a1 1 0 01-1.415 0l-2-2a1 1 0 111.415-1.415L9 12.293z"
                      clipRule="evenodd"
                    />
                  </motion.svg> */}
                  <span>Subscribed</span>
                </motion.div>
              ) : (
                "Subscribe"
              )}
            </button>
            </form>

            {/* Validation Error Message */}
            {errors.email && (
              <p className="text-red-500 text-sm pt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Right Section: Video */}
        <div className="col-span-12 lg:col-span-6 order-1 md:order-2 lg:order-2  flex justify-center">
          <Suspense fallback={<p>Loading video...</p>}>
            <div className="w-full max-w-lg sm:max-w-xl lg:max-w-full">
              <HeroVideo />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
