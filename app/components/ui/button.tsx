import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "link" | "outline";
  size?: "default" | "icon" | "sm";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseStyles =
    "flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-offset-gray-900";
  const variantStyles = {
    default:
      "bg-black dark:bg-white text-white dark:text-black hover:bg-accent/90 dark:hover:bg-accent/80",
    ghost:
      "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300",
    link: "bg-transparent text-accent hover:underline hover:text-textProminent dark:text-accent/90",
    outline: "bg-transparent border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700",
  };
  const sizeStyles = {
    default: "px-6 py-3",
    icon: "p-2",
    sm: "px-4 py-2 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};