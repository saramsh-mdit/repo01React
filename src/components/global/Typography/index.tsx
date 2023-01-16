import React, { ReactNode } from 'react';

export const Heading = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`text-4xl font-bold text-blue-600 ${className}`}>
      {children}
    </div>
  );
};
