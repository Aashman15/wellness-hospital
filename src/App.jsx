import React, { useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import Sections from './sections/Sections';
import { AppContext } from './context/AppContext';
import Menu from './components/Menu';
import HeroSection from './sections/hero/HeroSection';

const App = () => {
  const { isMenuOpen } = useContext(AppContext);

  return (
    <>
      <div className="bg-nav-hero">
        <Navbar />
        {isMenuOpen ? <Menu /> : <HeroSection />}
      </div>
      {!isMenuOpen && <Sections />}
    </>
  );
};

export default App;
