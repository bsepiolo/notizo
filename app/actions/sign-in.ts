"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const signInHandler = async (formData: {
  email: string;
  password: string;
}): Promise<void | { error: { status?: number; message: string } }> => {
  const { email, password } = formData;
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: { status: error.status, message: error.message } };
  }
};
