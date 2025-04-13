import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).trim(),
});

export const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).trim(),
  email: z.string().email().trim(),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).trim(),
});
