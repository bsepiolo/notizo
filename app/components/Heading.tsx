import { Children, ReactElement, cloneElement } from "react";

type Props = {
  children?: string;
};

export default function Heading({ children }: Props) {
  return <h1 className="text-3xl font-montserrat mb-10">{children}</h1>;
}
