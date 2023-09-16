"use client";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import FormControl from "@/components/FormControl";
import TextBox from "@/components/TextBox";
import Button from "@/components/Button";
import FieldLabel from "@/components/FieldLabel";
import Heading from "@/components/Heading";
import { VALIDATION_RULES } from "@/constants/validation-rules";
import { ToastContext } from "@/context/toast-context";
import { useContext } from "react";

type FormFields = {
  email: string;
  password: string;
};
export default function Index() {
  const { setToastState } = useContext(ToastContext);
  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    fetch("/auth/sign-in", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then(async (response) => {
      if (!response.ok) {
        const error = await response.text();
        console.log(error);
        setToastState({ visible: true });
      }
    });
  };

  return (
    <>
      <Heading>Log in</Heading>
      <Form onSubmit={onSubmit}>
        <FormControl rules={VALIDATION_RULES.email}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <TextBox
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </FormControl>

        <FormControl rules={VALIDATION_RULES.password}>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <TextBox
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </FormControl>
        <Button type="submit" variant="primary" className="mt-4">
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
