// components/ui/card.tsx
import React, { FC, ReactNode } from 'react';

export const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="bg-white shadow-md rounded-md">{children}</div>;
};

export const CardHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="px-4 py-2 border-b">{children}</div>;
};

export const CardTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className="text-lg font-medium">{children}</h2>;
};

export const CardContent: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};