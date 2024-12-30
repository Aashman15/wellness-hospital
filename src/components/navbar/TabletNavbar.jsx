import React from 'react';
import hamburgerUrl from '../../assets/icons/hamburger.svg';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import searchIconUrl from '../../assets/icons/search.svg';

const TabletNavbar = () => {
  return (
    <nav className="hidden md:flex justify-between items-center xl:hidden wrapper pt-[3.75rem] pb-[4.375rem]">
      <a href="/">
        <img src={hamburgerUrl} width="48" height="48" alt="Hamburger" />
      </a>
      <a href="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </a>
      <img className="h-7 w-7" src={searchIconUrl} alt="search icon" />
    </nav>
  );
};

export default TabletNavbar;
