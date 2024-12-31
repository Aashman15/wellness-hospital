import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './sections/HeroSection';

const App = () => {
  return (
    <>
      <div className="bg-nav-hero">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default App;
