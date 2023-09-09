"use client";
import Link from "next/link";
import Messages from "@/components/Messages";
import { useForm, SubmitHandler } from "react-hook-form";
type FormFields = {
  email: string;
  password: string;
};
export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          {...register("email", { required: true })}
        />
        {errors.email && <span role="alert">This field is required</span>}

        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          aria-invalid={errors.password ? "true" : "false"}
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          {...register("password", { required: true })}
        />
        {errors.password && <span role="alert">This field is required</span>}

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
      </form>
    </div>
  );
}
