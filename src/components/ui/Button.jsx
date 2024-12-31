import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('inline-flex', {
  variants: {
    variant: {},
    size: {},
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

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
