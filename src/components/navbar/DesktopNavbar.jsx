import React from 'react';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import { navLinks } from '../../constants';
import arrowDown from '../../assets/icons/arrow-down.svg';
import activeNavlinkIndicator from '../../assets/icons/active-navlink-indicator.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SearchInput from '../SearchInput';
import MyNavLink from './MyNavLink';

const DesktopNavbar = () => {
  return (
    <nav className="wrapper hidden justify-between pb-[4.375rem] pt-10 xl:flex">
      <Link to="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </Link>
      <div className="flex w-[55.4375rem] items-center justify-between">
        <ul className="flex gap-x-10">
          {navLinks.map((item) => (
            <MyNavLink key={item.label} item={item} />
          ))}
        </ul>
        <SearchInput />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
