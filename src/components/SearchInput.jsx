import React from 'react';
import searchIconUrl from '../assets/icons/search.svg';
import { twMerge } from 'tailwind-merge';

const SearchInput = ({ inputClassName, containerClassName, imgClassName }) => {
  return (
    <div className={twMerge('relative', containerClassName)}>
      <input
        className={twMerge(
          `h-14 w-[15.0625rem] rounded-2xl border bg-transparent pl-14 text-gray-light placeholder:font-normal placeholder:text-gray-light focus:outline-none`,
          inputClassName,
        )}
        type="text"
        placeholder="Search"
      />
      <img
        className={twMerge(
          'absolute left-7 top-1/2 h-5 w-5 -translate-y-1/2',
          imgClassName,
        )}
        src={searchIconUrl}
        alt="search icon"
      />
    </div>
  );
};

export default SearchInput;
