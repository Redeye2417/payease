"use client";
import React, { JSX } from "react";
import clsx from "clsx";

export function Card({
  title,
  children,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={clsx(
        "border border-gray-300 rounded-xl p-5 shadow-sm bg-white p-4",
        className
      )}
    >
      <h1 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}


