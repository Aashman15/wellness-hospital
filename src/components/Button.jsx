import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex gap-3.5 justify-center items-center rounded-full text-base font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-gray-light hover:bg-primary/90',
        transparent: 'bg-transparent text-gray-light hover:bg-primary',
        red: 'bg-red text-white border-primary hover:bg-red/90',
      },
      size: {
        default: 'py-12  px-30',
        sm: 'py-8 px-16 rounded-xl',
        lg: 'py-18 w-64 text-xl',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
);

const Button = ({ text, className, variant, size, ...props }, ref) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {text}
    </button>
  );
};
