"use client";
import Link from "next/link";
import Messages from "@/components/Messages";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import FormControl from "@/components/FormControl";
import TextBox from "@/components/TextBox";
import Button from "@/components/Button";
import FieldLabel from "@/components/FieldLabel";
import { VALIDATION_RULES } from "@/constants/validation-rules";

type FormFields = {
  email: string;
  password: string;
};
export default function SignUp() {
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
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
          Sign Up
        </Button>

        <Messages />
      </Form>
    </div>
  );
}
