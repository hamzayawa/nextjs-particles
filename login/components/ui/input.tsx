// components/ui/input.tsx
import React, { FC, InputHTMLAttributes } from 'react';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="bg-transparent border-b-2 border-gray-400 focus:border-gray-700 outline-none w-full py-2 px-0 text-gray-700 leading-tight"
      {...props}
    />
  );
};

export const InputLabel: FC<{ htmlFor: string; children: ReactNode }> = ({
  htmlFor,
  children,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute top-3 left-0 text-gray-400 transition-all duration-300"
    >
      {children}
    </label>
  );
};