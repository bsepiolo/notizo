import { FieldError } from "react-hook-form";
import { Children, ReactElement, cloneElement } from "react";
import TextBox from "@/app/components/TextBox";
import ValidationError from "@/app/components/ValidationError";
import { FieldValues, UseFormRegister } from "react-hook-form";

const FormControlsUnion = TextBox;
type Props = {
  children: ReactElement | ReactElement[];
  errors?: { [key: string]: FieldError };
  register?: UseFormRegister<FieldValues>;
};

export default function FormControl({
  children,
  errors = {},
  register,
}: Props) {
  let inputName;
  return (
    <div className="flex flex-col relative pb-4.5">
      {Children.map(children, (child) => {
        if (child.type === FormControlsUnion) {
          inputName = child.props.name;
          return cloneElement(child, {
            register,
            isError: errors[inputName],
          });
        }
        return child;
      })}

      {inputName && errors[inputName] && (
        <ValidationError>{errors[inputName].message}</ValidationError>
      )}
    </div>
  );
}
