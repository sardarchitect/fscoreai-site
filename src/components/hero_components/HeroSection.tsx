import { useForm, SubmitHandler } from "react-hook-form";
import { Suspense, useEffect, useState } from "react";
import { HeroVideo } from "./Videos";

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

  useEffect(() => {});

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
      console.log("User data added successfully:", responseData);
      reset();
      setSubscribe(true);
    } catch (error) {
      console.error("Error adding user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Email submitted:", data.email);
    await addUserData(data);
  };

  return (
    <section className="relative  m-auto container-width h-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-0">
      <div className="relative z-10 mx-auto grid grid-cols-12  w-full h-full items-center">
        {/* Left Section: Text Content */}
        <div className="col-span-12 lg:col-span-6 order-2 md:order-1 lg:order-1 flex text-start   flex-col justify-center">
          <p className="h2 sm:he2  text-Mercury-50">
            Transform <span className="text-Charcoal-80">your Firm's</span>{" "}
            Quality Control <span className="text-Charcoal-80">with</span>{" "}
            Draftflow
          </p>
          <div className="mt-4 max-w-md sm:max-w-lg text-gray-50">
            Draftflow by FscoreAI is your firm’s essential tool for real-time
            error detection, streamlining reviews, and avoiding costly
            construction delays. Say goodbye to low-level markups and hello to
            flawless, efficient workflows.
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
                placeholder="Enter your Email Address..."
                {...register("email", {
                  required: "Email is required",
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
                disabled={loading}
              >
                {loading ? "Subscribing..." : isSubscribed ? "Subscribed" : "Subscribe"}
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
