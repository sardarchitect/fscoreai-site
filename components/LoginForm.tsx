"use client"; // Ensure it's a client-side component

import React, { MouseEvent, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { account, client } from "@/app/appwrite";
import { signUpWithGoogle } from "@/server/oauth";
import { useRouter } from "next/navigation";
import { Users } from "node-appwrite";


const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

function LoginForm() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
  });


  const onSubmit = async (values: LoginFormType) => {
    try {
      const session = await account.createEmailPasswordSession(values.email, values.password);
      if (session) {
        console.log("Logged in:", session);
    
      }
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };


  const handleGoogleLogin = async (event: MouseEvent) => {
    event.preventDefault();
    try {
      await signUpWithGoogle();
      router.push("/");
    } catch (error) {
      console.error("Google login failed", error);
    }
  };


  const handleRedirect = () => {
    router.push("/");
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Login</h1>
        <p>Enter your email and password to login</p>
      </div>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">
          Login
        </button>
        <button className="w-full" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </div>
      <div>
        Don't have an account?{" "}
        <Link href="/signup" className="underline">
          Signup
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;



