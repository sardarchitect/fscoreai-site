'use client'
import { useState } from "react";
import { useThemeContext } from "@/context/theme";

const SignupForm: React.FC = () => {
  const [theme] = useThemeContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup submitted:", { name, email, password });
  };

  return (

   
    <form onSubmit={handleSubmit} >
      <h2 >Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
    
  );
};

export default SignupForm;
