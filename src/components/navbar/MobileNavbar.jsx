import React from 'react';
import hamburgerUrl from '../../assets/icons/hamburger.svg';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  return (
    <nav className="flex justify-between wrapper pt-[1.875rem] pb-[4.375rem] md:hidden">
      <Link to="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </Link>
      <Link to="/">
        <img
          className="w-12 h-12"
          src={hamburgerUrl}
          width="48"
          height="48"
          alt="Hamburger"
        />
      </Link>
    </nav>
  );
};

export default MobileNavbar;
