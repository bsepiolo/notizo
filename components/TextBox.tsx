import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  [key: string]: any;
};

export default function TextBox({ register, rules, name, ...rest }: Props) {
  return (
    <div>
      <input
        name={name}
        {...register(name, rules)}
        {...rest}
        className="rounded-md px-4 py-2 bg-inherit border w-full"
      />
    </div>
  );
}
