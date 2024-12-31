import React from 'react';
import SearchInput from './SearchInput';
import MyNavLink from './navbar/MyNavLink';
import { navLinks } from '../constants';

const Menu = () => {
  return (
    <div className="wrapper h-screen">
      <SearchInput inputClassName="w-full" containerClassName={'md:hidden'} />
      <ul className="mt-[3.75rem] flex flex-col gap-10">
        {navLinks.map((item) => (
          <MyNavLink key={item.label} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
