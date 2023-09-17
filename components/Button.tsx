import { ReactElement } from "react";

enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
}
type Props = {
  variant?: "default" | "text" | "outlined";
  type?: "submit" | "button" | "reset";
  children: string | ReactElement | ReactElement[];
  color?: "primary" | "secondary" | "warning" | "success";
  className?: string;
  onClick?: () => void;
};

export default function TextBox({
  children,
  variant = "default",
  type = "button",
  className,
  color = "primary",
  onClick,
}: Props) {
  const outlinedColors = {
    primary: "border border-primary hover:bg-gray-400",
    secondary: "border border-gray-100 hover:bg-gray-400",
    success:
      "border border-green-500 text-green-500 hover:bg-green-500 hover:bg-opacity-10",
    warning:
      "border border-error text-error hover:bg-error hover:bg-opacity-10",
  };

  const defaultColors = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-black hover:bg-opacity-80",
    success: "bg-green-500 text-white hover:bg-opacity-80",
    warning: "bg-error text-white hover:bg-opacity-80",
  };

  const textColors = {
    primary: "bg-transparent text-black hover:bg-gray-400",
    secondary: "bg-transparent text-gray-100 hover:bg-gray-400",
    success:
      "bg-transparent text-green-500 hover:bg-green-500 hover:bg-opacity-10",
    warning: "bg-transparent text-error hover:bg-error hover:bg-opacity-10",
  };

  const mainClasses = {
    default: defaultColors,
    outlined: outlinedColors,
    text: textColors,
  };

  return (
    <button
      type={type}
      className={`h-input-lg rounded px-4 py-2 transition-colors duration-75 flex items-center justify-center ${className} ${mainClasses[variant][color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
