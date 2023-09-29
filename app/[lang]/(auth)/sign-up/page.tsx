"use client";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";

import Form from "@/app/components/Form";
import FormControl from "@/app/components/FormControl";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/ui/Button";
import FieldLabel from "@/app/components/FieldLabel";
import Heading from "@/app/components/Heading";
import { SignUpSchema, signUpSchema } from "@/constants/validation-rules";
import { signUpHandler } from "@/app/actions/sign-up";
import { useToastStore } from "@/store/toast";

type FormFields = {
  email: string;
  password: string;
};
export default function SignUp() {
  const { setToast } = useToastStore();

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const { error, success } = await signUpHandler(formData);
    if (error) {
      setToast({ message: error.message, type: "error" });
    }
    if (success) {
      setToast({ message: success.message, type: "success" });
    }
  };

  return (
    <>
      <Heading>Create account</Heading>
      <Form<SignUpSchema> onSubmit={onSubmit} schema={signUpSchema}>
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
          Sign up
        </Button>
        <p className="text-center mt-10">
          Already have an account?{" "}
          <Link href="/" className="text-blue font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </Form>
    </>
  );
}
