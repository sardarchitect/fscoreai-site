'use client'
import { useState } from "react";
import { useThemeContext } from "@/src/context/theme";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginForm: React.FC = () => {
  const [theme] = useThemeContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      console.log("Invalid credentials. Please try again.");
    } else {
      router.push("/");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="flex flex-col items-center  mx-auto p-4">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="text-b3 block mb-1" htmlFor="email">Email or Phone Number</label>
          <input
            id="email"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-b3 block mb-1" htmlFor="password">Password</label>
          <div className="relative">
          <input
            id="password"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            // type="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 flex items-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
        </div>
          <div className="flex items-center mt-2">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me" className="ml-2 text-te3 text-gray-600">
              Remember me
            </label>

          </div>

        </div>

        <button className="bg-black text-b2 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg w-full">
          Log In
        </button>

        <a href="#" className="text-black text-b4 hover:underline text-center block mt-4">
          Forgot Password?
        </a>

      </form>

    </div>
  );
};

export default LoginForm;
