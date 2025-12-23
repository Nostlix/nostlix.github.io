import { MouseEventHandler, ReactNode } from "react";

interface ButtonType {
    primary: string;
    secondary: string;
    tertiary: string;
}

interface ButtonParams {
    children: ReactNode;
    variant: "primary" | "secondary" | "tertiary";
    onClick?: MouseEventHandler;
}

export default function Button({
    children,
    variant = "primary",
    onClick
}: Readonly<ButtonParams>) {
  const styles = "cursor-pointer px-4 py-2 rounded-md font-medium transition-all";
  const variants: ButtonType = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary: "bg-transparent border-1 border-gray-400 text-gray",
  };

  return (
    <button
        onClick={onClick}
        className={`${styles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}