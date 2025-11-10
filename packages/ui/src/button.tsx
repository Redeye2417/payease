"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      type="button"
      className={clsx(
        " bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
        className // ✅ allows overrides
      )}
    >
      {children}
    </button>
  );
};

