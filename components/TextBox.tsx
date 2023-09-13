import { FieldValues, UseFormRegister } from "react-hook-form";
import { ValidationRules } from "@/types/validation-rules.type";

type Props = {
  name: string;
  id: string;
  type: string;
  register?: UseFormRegister<FieldValues>;
  placeholder: string;
  rules?: ValidationRules;
};

export default function TextBox({
  register,
  rules,
  name,
  id,
  placeholder,
}: Props) {
  const registerAttribute = {
    ...(register && { ...register(name, rules) }),
  };

  return (
    <div>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        {...registerAttribute}
        className="rounded-md h-input-lg px-4 py-2 bg-white border border-gray-200 w-full"
      />
    </div>
  );
}
