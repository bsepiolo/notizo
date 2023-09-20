"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthResponse } from "@/types/auth-response.type";

export const signInHandler = async (formData: {
  email: string;
  password: string;
}): Promise<void | AuthResponse> => {
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
