import React from 'react';

import HeroImageAndForm from './HeroImageAndForm';
import HeroInfo from './HeroInfo';

const HeroSection = () => {
  return (
    <section className="wrapper text-center xl:flex xl:items-center xl:gap-12 xl:text-left">
      <HeroInfo />
      <HeroImageAndForm />
    </section>
  );
};

export default HeroSection;
