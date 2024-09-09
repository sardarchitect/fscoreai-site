"use client"
import React, { MouseEvent, useState } from 'react';
import Link from "next/link";
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
    router.push('/login'); // Use router.push for client-side navigation
  };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Register</h1>
          <p>Enter your email below to register for your account</p>
        </div>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter Full Name" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="m@example.com" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input id="confirmpassword" type="password" {...register("confirmpassword")} />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>
          <button type="submit">Register</button>
          <button onClick={handleGoogleLogin}>Register with Google</button>
        </div>
        <div>
          Already have an account?{" "}
          <Link href="/login" className="underline">Login</Link>
        </div>
      </form>
    );
  }

export default RegisterForm;

type RegisterFormType = z.infer<typeof schema>;
