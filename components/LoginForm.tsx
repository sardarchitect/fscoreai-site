"use client"; // Ensure it's a client-side component

import React, { MouseEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { account } from "@/appwrite/appwriteClient"; 
import { signUpWithGoogle } from "@/server/oauth"; 
import { useRouter } from "next/navigation";


const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false); 
  const router = useRouter(); 

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
  });

  
  const onSubmit = async (values: LoginFormType) => {
    try {
      const session = await account.createEmailPasswordSession(values.email, values.password); 
      if (session) {
        handleRedirect(); 
      }
    } catch (error) {
      console.error("Login failed", error); 
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
    setLoggedIn(true); 
    router.push("/");
  };


  if (!loggedIn) {
    return (
      <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">Enter your email and password to login</p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email"
              {...register("email")} 
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="underline">
            Signup
          </Link>
        </div>
      </form>
    );
  }


}

export default LoginForm;


type LoginFormType = z.infer<typeof schema>;
