import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().nonempty().trim(),
});

export const signUpSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim().min(8),
});
export type SignUpSchema = z.infer<typeof signUpSchema>;
