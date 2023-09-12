import { FieldValues, UseFormRegister } from "react-hook-form";
import { Children, cloneElement } from "react";
import TextBox from "@/components/TextBox";
const FormControlsUnion = TextBox;
type Props = {
  [key: string]: any;
};

export default function FormControl({ children, errors, ...rest }: Props) {
  let inputName;
  return (
    <div className="flex flex-col">
      {Children.map(children, (child) => {
        if (child.type === FormControlsUnion) {
          inputName = child.props.name;
          return cloneElement(child, { ...rest });
        }
        return child;
      })}
      {inputName && errors[inputName] && (
        <div className="text-red-500">{errors[inputName].message}</div>
      )}
    </div>
  );
}
