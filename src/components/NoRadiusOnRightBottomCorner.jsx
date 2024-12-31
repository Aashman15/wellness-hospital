import React from 'react';
import { twMerge } from 'tailwind-merge';

const NoRadiusOnRightBottomCorner = ({ text, className }) => {
  return (
    <div
      className={twMerge(
        'inline-block rounded-t-[20px] rounded-bl-[20px] border-2 border-green-light bg-green px-6 py-3 text-base font-bold tracking-widest text-gray-light',
        className,
      )}
    >
      <p>{text}</p>
    </div>
  );
};

export default NoRadiusOnRightBottomCorner;
