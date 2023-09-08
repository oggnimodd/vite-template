import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  test?: string;
}

const Button: React.FC<ButtonProps> = ({ test, children, ...props }) => {
  return (
    <button
      {...props}
      className="text-white bg-red-500 rounded-md px-3 py-2 hover:bg-red-400"
    >
      {children}
    </button>
  );
};

export default Button;
