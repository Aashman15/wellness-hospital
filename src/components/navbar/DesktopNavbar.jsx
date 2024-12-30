import React from 'react';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import { navLinks } from '../../constants';
import searchIconUrl from '../../assets/icons/search.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';
import activeNavlinkIndicator from '../../assets/icons/active-navlink-indicator.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';

const DesktopNavbar = () => {
  const location = useLocation();

  const isActiveNavlink = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <nav className="hidden xl:flex justify-between  wrapper pt-10 pb-[4.375rem]">
      <Link to="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </Link>
      <div className="flex justify-between items-center w-[55.4375rem]">
        <ul className="flex gap-x-10">
          {navLinks.map((item) => (
            <li className="flex flex-col items-center" key={item.label}>
              <NavLink
                className="flex items-center gap-x-2 text-gray-light font-regular text-sm"
                to={item.href}
              >
                <span>{item.label} </span>

                {item.hasSubLinks && (
                  <img className="w-5 h-5" src={arrowDown} alt="down arrow" />
                )}
              </NavLink>

              {isActiveNavlink(item.href) && (
                <img
                  className="pt-px"
                  src={activeNavlinkIndicator}
                  width="11"
                  height="13"
                  alt=""
                />
              )}
            </li>
          ))}
        </ul>
        <div className="relative">
          <input
            className="w-[15.0625rem] h-14 text-gray-light bg-transparent border rounded-2xl pl-14 placeholder:text-gray-light placeholder:font-normal focus:outline-none"
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
