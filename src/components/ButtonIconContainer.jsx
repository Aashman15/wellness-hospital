import React from 'react';
import { twMerge } from 'tailwind-merge';

const ButtonIconContainer = ({ children, className }) => {
  return (
    <span
      className={twMerge(
        'inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default ButtonIconContainer;
