"use client"
import React from 'react';

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { any, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { account, ID } from "@/appwrite/appwriteClient";

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
    const  from = useForm<RegisterFormType>({resolver:zodResolver(schema)});
    const { formState:{errors} } = from;
    const onSumbit = async (values: RegisterFormType) =>{
        // const user = await account.create(ID.unique(), value.email, value.password);
        // console.log('user', user);
        const res = await fetch('/api/signup',{
          method:'POST',
          headers:{
            'content-Type': 'application/json'
          },
          body:JSON.stringify(values)
        });
        console.log('res',res);
    }

    console.log('error', errors)

  return (
   
    <form 
    className="mx-auto grid w-[350px] gap-6"
    onSubmit={from.handleSubmit(onSumbit)}
    >
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to register to your account
          </p>
        </div>
        <div className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="name"
              placeholder="Enter Full Name"
              {...from.register("name")} 
            />
            {errors.name && <p className=''>{errors.name.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...from.register("email")} 
            />
            {errors.email && <p className=''>{errors.email.message}</p>}
          </div>
          <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...from.register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="grid gap-2">
             <Label htmlFor="password">confirm Password</Label>
            <Input id="confirmpassword" type="password" {...from.register("confirmpassword")} />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
          <Button variant="outline" className="w-full" >
            Register with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
    </form> 
      
    
  )
}

export default RegisterForm;

type RegisterFormType = z.infer<typeof schema>;