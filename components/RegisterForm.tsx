"use client"
import React, { MouseEvent, useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpWithGoogle } from '@/server/oauth';
import { useRouter } from 'next/navigation'; // Import useRouter for client-side routing

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirmpassword: z.string().min(8, { message: "Password confirmation must be at least 8 characters long" }),
}).refine(data => data.password === data.confirmpassword, {
  message: "Passwords don't match",
  path: ['confirmpassword'],
});

function RegisterForm() {
  const [registered, setRegistered] = useState(false);
  const router = useRouter(); // Initialize useRouter for redirection

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: RegisterFormType) => {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (res.status === 201) {
      handleRedirect();
    } else {
      console.error('Registration failed');
    }
  };

  const handleGoogleLogin = async (event: MouseEvent) => {
    event.preventDefault();
    await signUpWithGoogle();
  };

  const handleRedirect = () => {
    setRegistered(true);
    router.push('/login'); // Use router.push for client-side navigation
  };

  if (!registered) {
    return (
      <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-muted-foreground">Enter your email below to register for your account</p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Enter Full Name" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <Input id="confirmpassword" type="password" {...register("confirmpassword")} />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>
          <Button type="submit" className="w-full">Register</Button>
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>Register with Google</Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">Login</Link>
        </div>
      </form>
    );
  }

  return (
    <div>
      You have successfully registered... Redirecting to login
    </div>
  );
}

export default RegisterForm;

type RegisterFormType = z.infer<typeof schema>;
