import React, { useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './sections/HeroSection';
import Sections from './sections/Sections';
import { AppContext } from './context/AppContext';
import Menu from './components/Menu';

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
