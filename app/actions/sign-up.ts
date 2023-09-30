"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthResponse } from "@/types/auth-response.type";
import { redirect } from "next/navigation";

export const signUpHandler = async (formData: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const { email, password } = formData;
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_BASE_URL}/api/callback`,
    },
  });

  if (error) {
    return { error: { status: error.status, message: error.message } };
  }
  redirect(
    `/pl/?email-verification-message=Check email to continue sign in process`
  );
};
