'use client'
import { useState } from "react";
import { useThemeContext } from "@/context/theme";

const LoginForm: React.FC = () => {
    const [theme] = useThemeContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", { email, password });
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h2 >Login</h2>
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
      <button type="submit" >Login</button>
    </form>
    
  );
};

export default LoginForm;
