import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register?: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  [key: string]: any;
};

export default function Input({ register, name, error, ...rest }: Props) {
  const registerAttr = register ? register : (param: string) => {};
  return (
    <div>
      <input {...registerAttr(name, { required: true })} {...rest} />
      {error}
    </div>
  );
}
