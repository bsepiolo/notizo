import { Children, ReactElement, cloneElement } from "react";

type Props = {
  children?: string;
  htmlFor: string;
};

export default function FieldLabel({ children, htmlFor }: Props) {
  return (
    <label htmlFor={htmlFor} className="mb-1">
      {children}
    </label>
  );
}
