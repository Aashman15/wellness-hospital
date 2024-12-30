import React from 'react';
import hamburgerUrl from '../assets/icons/hamburger.svg';
import wellnessLogoUrl from '../assets/images/wellness-logo.png';

const Navbar = () => {
  return (
    <header>
      <nav className="bg-red flex justify-between pt-[1.875rem] pb-[4.375rem]">
        <img src={wellnessLogoUrl} alt="" />
        <img src={hamburgerUrl} width="48" height="48" alt="Hamburger" />
      </nav>
      <nav></nav>
      <nav></nav>
    </header>
  );
};

export default Navbar;
