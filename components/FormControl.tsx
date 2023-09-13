import { FieldError } from "react-hook-form";
import { Children, ReactElement, cloneElement } from "react";
import TextBox from "@/components/TextBox";
import { ValidationRules } from "@/types/validation-rules.type";
import { FieldValues, UseFormRegister } from "react-hook-form";

const FormControlsUnion = TextBox;
type Props = {
  children: ReactElement | ReactElement[];
  errors?: { [key: string]: FieldError };
  rules: ValidationRules;
  register?: UseFormRegister<FieldValues>;
};

export default function FormControl({
  children,
  errors,
  rules,
  register,
}: Props) {
  let inputName;
  return (
    <div className="flex flex-col">
      {Children.map(children, (child) => {
        if (child.type === FormControlsUnion) {
          inputName = child.props.name;
          return cloneElement(child, { rules, register });
        }
        return child;
      })}
      {inputName && errors && errors[inputName] && (
        <div className="text-red-500">{errors[inputName].message}</div>
      )}
    </div>
  );
}
