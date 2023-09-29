"use client";
import Form from "@/app/components/ui/Form";
import FormControl from "@/app/components/ui/FormControl";
import TextBox from "@/app/components/ui/TextBox";
import Button from "@/app/components/ui/Button";
import FieldLabel from "@/app/components/ui/FieldLabel";
import { signInSchema } from "@/constants/validation-rules";
import { signInHandler } from "@/app/actions/sign-in";
import { SubmitHandler } from "react-hook-form";
import { useToastStore } from "@/store/toast";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

type Props<T> = {
  t: T;
};

type FormFields = {
  email: string;
  password: string;
};

type SignInSchema = z.infer<typeof signInSchema>;
export default function SignInForm<T extends Record<string, any>>({
  t,
}: Props<T>) {
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
  console.log();
  return (
    <Form<SignInSchema> onSubmit={onSubmit} schema={signInSchema}>
      <FormControl>
        <FieldLabel htmlFor="email">{t.form_fields.email}</FieldLabel>
        <TextBox
          id="email"
          name="email"
          type="email"
          placeholder={t.form_fields.email_placeholder}
        />
      </FormControl>

      <FormControl>
        <FieldLabel htmlFor="password">{t.form_fields.password}</FieldLabel>
        <TextBox
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
        />
      </FormControl>
      <Button type="submit" className="mt-4">
        {t.sign_in.submit}
      </Button>
    </Form>
  );
}
