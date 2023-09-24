"use client";

import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { signInSchema, SignInSchema } from "@/constants/validation-rules";

import Form from "@/app/components/Form";
import FormControl from "@/app/components/FormControl";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/Button";
import FieldLabel from "@/app/components/FieldLabel";
import Heading from "@/app/components/Heading";
import { signInHandler } from "@/app/actions/sign-in";
import { useToastStore } from "@/store/toast";
type FormFields = {
  email: string;
  password: string;
};

export default function Index() {
  const { setToast } = useToastStore();
  const searchParams = useSearchParams();
  const emailVerificationMessage = searchParams.get(
    "email-verification-message"
  );

  if (emailVerificationMessage) {
    setToast({ message: emailVerificationMessage, type: "success" });
  }

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const response = await signInHandler(formData);
    if (response?.error) {
      setToast({ message: response.error.message, type: "error" });
    }
  };

  return (
    <>
      <Heading>Log in</Heading>
      <Form<SignInSchema> onSubmit={onSubmit} schema={signInSchema}>
        <FormControl>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <TextBox
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </FormControl>

        <FormControl>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <TextBox
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </FormControl>
        <Button type="submit" className="mt-4">
          Sign in
        </Button>
        <p className="text-center mt-10">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-blue font-medium hover:underline"
          >
            Sign up for free
          </Link>
        </p>
      </Form>
    </>
  );
}
