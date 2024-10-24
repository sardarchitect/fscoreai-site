import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

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
      className="relative w-full h-screen flex items-center bg-gradient-to-br from-[#B6C4E1] via-[#CCD7E1] to-[#DCE5E2] justify-center text-center"
      style={{
        backgroundImage: `url(/heroimg.png), url(/herobg.jpg)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, ceter",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Overlay for darkening the background slightly */}
      <div className="absolute inset-0  opacity-20 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Left Section: Text Content */}
        <div className="col-span-12 lg:col-span-6 flex text-start mt-28 mb-48 flex-col justify-center">
          <p className="h3 sm:he3 font-semibold text-Mercury-50">
            Revolutionize <span className="text-[#666666]">your AEC firm's</span> quality control <span className="text-[#666666]">process with</span> Draftflow.
          </p>
          <p className="mt-4 te2 text-gray-50">
            Draftflow catches production drawing mistakes early, 
            speeding up the review process and preventing  
            construction delays and changes.
          </p>

          {/* Subscribe Form */}
          <div className="mt-8 text-start">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center lg:justify-start"
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
                className={`px-4 py-2 border rounded-l-lg shadow-2xl  text-gray-700 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />

              {/* Validation Error Message */}                                                                                                                                                                                                                                    
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Right Section: Empty Space for Balance */}
        <div className="col-span-12 lg:col-span-6"></div>
      </div>
    </section>
  );
};

export default HeroSection;
