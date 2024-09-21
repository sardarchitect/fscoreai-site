import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmpassword: z.string().min(8, { message: "Password confirmation must be at least 8 characters long" }),
  }).refine(data => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ['confirmpassword'],
  });

export type SignupFormType = z.infer<typeof SignupFormSchema>;