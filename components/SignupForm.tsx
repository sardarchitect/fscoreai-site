"use client"
import React, { MouseEvent, useState } from 'react';
import Link from "next/link";
import { SignupFormSchema, SignupFormType } from '@/schema/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpWithGoogle } from '@/server/oauth';
import { useRouter } from 'next/navigation';






function SignupForm() {
  const router = useRouter();

  const onSubmit = async (values: SignupFormType) => {
    console.log(values);
    
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

  const handleRedirect = () => {
    router.push('/login');
  };

  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormType>({ resolver: zodResolver(SignupFormSchema) });

  const handleGoogleLogin = async (event: MouseEvent) => {
    event.preventDefault();
    await signUpWithGoogle();
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

export default SignupForm;


