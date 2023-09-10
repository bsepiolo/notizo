import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register?: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  [key: string]: any;
};

export default function Input({ register, name, error, ...rest }: Props) {
  const attrs = {
    ...(register && { ...register(name, { required: true }) }),
    ...rest,
  };
  return (
    <div className="flex flex-col">
      <input {...attrs} />
      {error && <span role="alert">This is required</span>}{" "}
    </div>
  );
}
