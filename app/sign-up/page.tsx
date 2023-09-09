"use client";
import Link from "next/link";
import Messages from "@/components/Messages";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import Input from "@/components/Input";

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
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
        />

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
        />

        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
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
