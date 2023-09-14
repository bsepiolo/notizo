import { FieldValues, UseFormRegister } from "react-hook-form";
import { ValidationRules } from "@/types/validation-rules.type";

type Props = {
  name: string;
  id: string;
  type: string;
  register?: UseFormRegister<FieldValues>;
  placeholder: string;
  isError?: boolean;
  rules?: ValidationRules;
};

export default function TextBox({
  register,
  rules,
  name,
  id,
  placeholder,
  isError,
}: Props) {
  const registerAttribute = {
    ...(register && { ...register(name, rules) }),
  };

  const borderColorClass = `border ${
    isError ? "border-error" : "border-gray-100"
  }`;

  return (
    <div>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        {...registerAttribute}
        className={`rounded-2sm h-input-lg px-4 py-2 bg-white  w-full ${borderColorClass}`}
      />
    </div>
  );
}
