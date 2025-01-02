import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex gap-3.5 justify-center items-center rounded-full text-base font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-gray-light hover:bg-primary/90',
        transparent:
          'bg-transparent border-primary border-2 text-primary hover:bg-primary',
        red: 'bg-red border-primary border-2  text-white border-primary hover:bg-red/90',
        ice: 'bg-ice-light text-blue-dark hover:bg-ice-light/90 ',
      },
      size: {
        default: 'h-12  px-7',
        sm: 'h-10 px-4 rounded-xl',
        lg: 'h-16 px-8 text-xl',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
);

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

export { Button, buttonVariants };
