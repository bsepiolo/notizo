"use client";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

export type ButtonVariant = "default" | "text" | "outlined";
export type ButtonColor = "primary" | "secondary" | "warning" | "success";
export type ButtonSize = "base" | "lg" | "sm";
type Props = {
  variant?: ButtonVariant;
  type?: "submit" | "button" | "reset";
  children: string | ReactElement | ReactElement[];
  to?: string;
  color?: ButtonColor;
  icon?: boolean;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
};

export default function TextBox({
  children,
  variant = "default",
  type = "button",
  className,
  color = "primary",
  icon,
  size = "base",
  to,
  onClick,
}: Props) {
  const router = useRouter();
  // SIZING
  const sizingIconClasses = {
    base: "h-input-base w-input-base text-xl",
    lg: "h-16 w-16 text-2xl",
    sm: "h-9 w-9",
  };
  const sizingStandardClasses = {
    base: "h-input-base px-3",
    sm: "h-9 text-sm px-2",
    lg: "h-16 px-3 text-lg px-4",
  };

  const sizingClasses = icon ? sizingIconClasses : sizingStandardClasses;

  // COLORS
  const outlinedColorClasses = {
    primary: "border border-primary hover:bg-gray-400",
    secondary: "border border-gray-100 hover:bg-gray-400",
    success:
      "border border-green-500 text-green-500 hover:bg-green-500 hover:bg-opacity-10",
    warning:
      "border border-error text-error hover:bg-error hover:bg-opacity-10",
  };

  const defaultColorClasses = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-black hover:bg-opacity-80",
    success: "bg-green-500 text-white hover:bg-opacity-80",
    warning: "bg-error text-white hover:bg-opacity-80",
  };

  const textColorClasses = {
    primary: "bg-transparent text-black hover:bg-gray-400",
    secondary: "bg-transparent text-gray-100 hover:bg-gray-400",
    success:
      "bg-transparent text-green-500 hover:bg-green-500 hover:bg-opacity-10",
    warning: "bg-transparent text-error hover:bg-error hover:bg-opacity-10",
  };

  // VARIANTS
  const variantClasses = {
    default: defaultColorClasses,
    outlined: outlinedColorClasses,
    text: textColorClasses,
  };

  const onClickHandler = () => {
    onClick && onClick();
    to ? router.push(to) : "";
  };

  return (
    <button
      type={type}
      className={`rounded transition-colors duration-75 flex items-center justify-center ${className} ${variantClasses[variant][color]} ${sizingClasses[size]}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
