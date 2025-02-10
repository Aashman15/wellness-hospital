import React, { useContext } from 'react';
import Menu from './components/Menu';
import Navbar from './components/navbar/Navbar';
import { AppContext } from './context/AppContext';
import HeroSection from './sections/hero/HeroSection';
import OtherSections from './sections/other-sections/OtherSections';

const App = () => {
  const { isMenuOpen } = useContext(AppContext);

  return (
    <>
      <div className="bg-nav-hero">
        <Navbar />
        {isMenuOpen ? <Menu /> : <HeroSection />}
      </div>
      {!isMenuOpen && <OtherSections />}
    </>
  );
};

export default App;
