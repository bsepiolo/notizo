"use client";
import Form from "@/app/components/ui/Form";
import FormControl from "@/app/components/ui/FormControl";
import TextBox from "@/app/components/ui/TextBox";
import Button from "@/app/components/ui/Button";
import FieldLabel from "@/app/components/ui/FieldLabel";
import { signUpSchema } from "@/constants/validation-rules";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { signUpHandler } from "@/app/actions/sign-up";
import { toast } from "react-hot-toast";

type Props<T> = {
  t: T;
};

type FormFields = {
  email: string;
  password: string;
};
type SignUpSchema = z.infer<typeof signUpSchema>;

export default function SignInForm<T extends Record<string, any>>({
  t,
}: Props<T>) {
  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const { error } = await signUpHandler(formData);
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form<SignUpSchema> onSubmit={onSubmit} schema={signUpSchema}>
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
