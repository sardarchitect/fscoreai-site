'use client'
import { useState } from "react";
import { useThemeContext } from "@/src/context/theme";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
    const [theme] = useThemeContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", { email, password });
    
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
    
        if (res?.error) {
          console.log("Invalid credentials. Please try again.");
        } else {
          // Redirect to the homepage after successful login
          router.push("/");
        }
  };


  return (
    
    <form onSubmit={handleSubmit}>
      <h2 >Login</h2>
      <input
      className="mt-5 rounded p-2 text-black"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
      className="mt-5 rounded p-2 text-black"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className=" rounded px-2 p-2 mx-2" type="submit" >Login</button>
    </form>
    
  );
};

export default LoginForm;
