import React from 'react';
import MobileNavbar from './MobileNavbar';
import TabletNavbar from './TabletNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {
  return (
    <header>
      <MobileNavbar />
      <TabletNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;
