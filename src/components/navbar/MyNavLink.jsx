import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import activeNavlinkIndicator from '../../assets/icons/active-navlink-indicator.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

const MyNavLink = ({ item }) => {
  const location = useLocation();

  const isActiveNavlink = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <li className="flex flex-col items-center" key={item.label}>
      <NavLink
        className="font-regular flex items-center gap-x-2 text-sm text-gray-light"
        to={item.href}
      >
        <span>{item.label} </span>

        {item.hasSubLinks && (
          <img className="h-5 w-5" src={arrowDown} alt="down arrow" />
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
  );
};

export default MyNavLink;
