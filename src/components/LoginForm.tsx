'use client'
import { useState } from "react";
import { useThemeContext } from "@/src/context/theme";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginForm: React.FC = () => {
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
    <div className="flex flex-col w-auto  gap-1">
      
      <div className="flex justify-center items-center py-8">
      <hr className="absolute w-2/4 sm:w-1/4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">or</span>
        
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 w-410  h-55">
          <label className="b3 block mb-3" htmlFor="email">Email </label>
          <input
            id="email"
            className="border h-56px border-gray-300 rounded-lg px-3 py-2 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
        </div>

        <div className="mb-4">
          <label className="b3 block mb-1" htmlFor="password">Password</label>
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
            <label htmlFor="remember-me" className="ml-2 te3 font-semibold text-black">
              Remember me
            </label>

          </div>

        </div>

        <button className="bg-black b2 hover:bg-gray-800 text-white font-bold py-4 rounded-lg mt-4 w-full">
          Log In
        </button>

        <a href="#" className="text-black b4 underline text-center block mt-5">
          Forgot Password? 
        </a>

      </form>
      

    </div>
  );
};

export default LoginForm;

