import React, { ReactElement, Children, cloneElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormControl from "@/components/FormControl";

type Props = {
  onSubmit: SubmitHandler<any>;
  children: ReactElement[];
  defaultValues?: Record<string, string | number | boolean>;
};

export default function Form({ defaultValues, children, onSubmit }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {Children.map(children, (child) => {
        if (child.type === FormControl) {
          return cloneElement(child, { register, errors });
        }
        return child;
      })}
    </form>
  );
}
