import React from 'react';
import hamburgerUrl from '../../assets/icons/hamburger.svg';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';

const MobileNavbar = () => {
  return (
    <nav className="flex justify-between wrapper pt-[1.875rem] pb-[4.375rem] md:hidden">
      <a href="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </a>
      <a href="/">
        <img
          className="w-12 h-12"
          src={hamburgerUrl}
          width="48"
          height="48"
          alt="Hamburger"
        />
      </a>
    </nav>
  );
};

export default MobileNavbar;
