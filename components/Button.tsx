import { ReactElement } from "react";

enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
}
type Props = {
  variant?: "primary" | "secondary" | "text";
  isOutlined?: boolean;
  type?: "submit" | "button" | "reset";
  children: string | ReactElement | ReactElement[];
  className?: string;
  onClick?: () => void;
};

export default function TextBox({
  children,
  variant = "primary",
  type = "button",
  isOutlined = false,
  className,
  onClick,
}: Props) {
  const outlinedClasses = {
    primary: "border border-primary hover:bg-gray-400",
    secondary: "border border-gray-100 hover:bg-gray-400",
    text: "bg-transparent text-black hover:bg-gray-400",
  };
  const filledClasses = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-black hover:bg-opacity-80",
    text: "bg-transparent text-black hover:bg-gray-400",
  };
  const mainClasses = isOutlined
    ? outlinedClasses[variant]
    : filledClasses[variant];

  return (
    <button
      type={type}
      className={`h-input-lg rounded px-4 py-2 transition-colors duration-75 ${mainClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
