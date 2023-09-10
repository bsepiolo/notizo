import React, { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
      {React.Children.map(children, (child) => {
        return child.props.id
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.id,
                error: errors[child.props.name],
              },
            })
          : child;
      })}
    </form>
  );
}
