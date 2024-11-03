import { useForm, SubmitHandler } from "react-hook-form";
import { Suspense, useState } from "react";
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
    <section
      className="relative w-full m-auto max-w-7xl h-full min-h-screen flex items-center justify-center text-center"
    >
      {/* Overlay for darkening the background slightly */}
      {/* <div className="absolute inset-0  opacity-20 z-0"></div> */}

      {/* Content Section */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Left Section: Text Content */}
        <div className="col-span-12 lg:col-span-6 order-2 md:order-1 lg:order-1 flex text-start mt-5 mb-5 md:mt-28 md:mb-8 lg:mt-28 lg:mb-8 flex-col justify-center">
          <p className="h3 sm:he3 font-semibold text-Mercury-50">
            Revolutionize <span className="text-[#666666]">your AEC firm's</span> quality control <span className="text-[#666666]">process with</span> Draftflow.
          </p>
          <p className="mt-4 text-gray-50">
            Draftflow catches production drawing mistakes early,
            speeding up the review process and preventing
            construction delays and changes.
          </p>

          {/* Subscribe Form */}
          <div className="mt-8 m-auto sm:px-6 lg:px-0 w-full text-start">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:flex md:flex block mx-auto w-full justify-start"
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
                className={`p-[19px] border lg:mb-auto md:mb-auto mb-3 te3 lg:w-[320px] w-full lg:rounded-l-lg md:rounded-l-lg shadow-2xl text-gray-700 ${errors.email ? "border-red-500" : ""}`}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 h-[56px] lg:w-[179px] w-full text-white px-6 py-2 lg:rounded-r-lg md:rounded-r-lg  hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
              
            </form>
              {/* Validation Error Message */}
              {errors.email && (
                <p className="text-red-500 te3 text-sm pt-[5px] pl-[19px]">{errors.email.message}</p>
              )}
          </div>
        </div>

        {/* Right Section: Empty Space for Balance */}
        <div className="col-span-12 lg:col-span-6 order-1 md:order-2 lg:order-2 mt-5 mb-5 md:mt-28 md:mb-8 lg:mt-28 lg:mb-8 flex-col justify-center">
          <Suspense fallback={<p>Loading video...</p>}>
            <HeroVideo />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
