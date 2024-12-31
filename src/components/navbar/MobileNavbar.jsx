import React, { useContext } from 'react';
import hamburgerUrl from '../../assets/icons/hamburger.svg';
import closeUrl from '../../assets/icons/close.svg';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext.jsx';

const MobileNavbar = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useContext(AppContext);

  return (
    <nav className="wrapper flex justify-between pb-[4.375rem] pt-[1.875rem] md:hidden">
      <Link to="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </Link>
      <Link onClick={toggleIsMenuOpen}>
        {isMenuOpen ? (
          <img
            className="h-12 w-12"
            src={closeUrl}
            width="48"
            height="48"
            alt="close"
          />
        ) : (
          <img
            className="h-12 w-12"
            src={hamburgerUrl}
            width="48"
            height="48"
            alt="Hamburger"
          />
        )}
      </Link>
    </nav>
  );
};

export default MobileNavbar;
