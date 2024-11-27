// components/ui/button.tsx
import React, { FC, ButtonHTMLAttributes } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
      {...props}
    />
  );
};