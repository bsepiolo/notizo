import React, { ReactElement, Children, cloneElement } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import FormControl from "@/app/components/FormControl";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: SubmitHandler<any>;
  schema: any;
  children: ReactElement[];
};

export default function Form<T extends FieldValues>({
  children,
  onSubmit,
  schema,
}: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<T>({ resolver: zodResolver(schema) });

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
