"use client";
import Link from "next/link";
import Messages from "@/components/Messages";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import FormControl from "@/components/FormControl";
import TextBox from "@/components/TextBox";

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
        <FormControl
          rules={{ required: { value: true, message: "field required" } }}
        >
          <label htmlFor="email">Email</label>
          <TextBox
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </FormControl>

        <FormControl
          rules={{ required: { value: true, message: "field required" } }}
        >
          <label htmlFor="password">Password</label>
          <TextBox
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </FormControl>
        <button
          type="submit"
          className="bg-green-700 rounded px-4 py-2 text-white mb-2"
        >
          Sign Up
        </button>
        <Link
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          Sign in
        </Link>
        <Messages />
      </Form>
    </div>
  );
}
