import React, { useContext } from 'react';
import hamburgerUrl from '../../assets/icons/hamburger.svg';
import closeUrl from '../../assets/icons/close.svg';
import wellnessLogoUrl from '../../assets/images/wellness-logo.png';
import searchIconUrl from '../../assets/icons/search.svg';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext.jsx';

const TabletNavbar = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useContext(AppContext);
  return (
    <nav className="wrapper hidden items-center justify-between pb-[4.375rem] pt-[3.75rem] md:flex xl:hidden">
      <Link onClick={toggleIsMenuOpen}>
        {isMenuOpen ? (
          <img src={closeUrl} width="48" height="48" alt="Close" />
        ) : (
          <img src={hamburgerUrl} width="48" height="48" alt="Hamburger" />
        )}
      </Link>
      <Link to="/">
        <img
          src={wellnessLogoUrl}
          width={142}
          height={56}
          alt="wellness logo"
        />
      </Link>
      <img className="h-7 w-7" src={searchIconUrl} alt="search icon" />
    </nav>
  );
};

export default TabletNavbar;
