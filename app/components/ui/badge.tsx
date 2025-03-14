import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const variantStyles = {
    default: "bg-purple-100 text-purple-800",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 bg-transparent",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};