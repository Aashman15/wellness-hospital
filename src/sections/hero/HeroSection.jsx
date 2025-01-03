import React from 'react';

import HeroInfo from './HeroInfo';
import HeroImageAndForm from './HeroImageAndForm';

const HeroSection = () => {
  return (
    <section className="wrapper text-center">
      <HeroInfo />
      <HeroImageAndForm />
    </section>
  );
};

export default HeroSection;
