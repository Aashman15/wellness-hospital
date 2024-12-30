import React from 'react';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import { navLinks } from '../../constants';
import searchIconUrl from '../../assets/icons/search.svg';

const DesktopNavbar = () => {
  return (
    <nav className="hidden xl:flex justify-between  wrapper pt-10 pb-[4.375rem]">
      <a href="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </a>
      <div className="flex justify-between items-center w-[55.4375rem]">
        <ul className="flex gap-x-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="text-gray-light font-medium text-sm"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative">
          <input
            className="w-[15.0625rem] h-14 bg-transparent border rounded-2xl pl-14 "
            type="text"
            placeholder="Search"
          />
          <img
            className="absolute left-7 top-1/2 -translate-y-1/2 h-5 w-5"
            src={searchIconUrl}
            alt="search icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
