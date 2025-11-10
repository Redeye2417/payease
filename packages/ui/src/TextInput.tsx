"use client";

import clsx from "clsx";

export const TextInput = ({
  placeholder,
  onChange,
  label,
  className,
}: {
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}) => {
  return (
    <div className="pt-2" suppressHydrationWarning>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={label}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={clsx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          className
        )}
      />
    </div>
  );
};
