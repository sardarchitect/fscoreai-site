'use client'
import { useState } from "react";
import { useThemeContext } from "@/src/context/theme";
import handleSignUp from "../app/signup/actions";

const SignupForm: React.FC = () => {
  const [theme] = useThemeContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle signup logic here
    handleSignUp({ name, email, password });
    console.log("Signup submitted:", { name, email, password });
  };

  return (


    <form onSubmit={handleSubmit} >
      <h2 >Sign Up</h2>
      <span className="text-black">

      <input
        className=" mt-5 rounded p-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className=" mt-5 rounded p-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className=" mt-5 rounded p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </span>
      <button className="border rounded px-2 p-2 mx-2" type="submit">Sign Up</button>
    </form>

  );
};

export default SignupForm;
