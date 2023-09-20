import React, { ReactElement, Children, cloneElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormControl from "@/app/components/FormControl";

type Props = {
  onSubmit: SubmitHandler<any>;
  children: ReactElement[];
};

export default function Form({ children, onSubmit }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col"
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
