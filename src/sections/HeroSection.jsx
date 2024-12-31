import React from 'react';
import Menu from '../components/Menu';
import NoRadiusOnRightBottomCorner from '../components/NoRadiusOnRightBottomCorner';

const HeroSection = () => {
  return (
    <section className="wrapper h-screen text-center">
      <NoRadiusOnRightBottomCorner text={'Your Health is Our Priority'} />
      <h1 className="mb-7 mt-9 font-ibm text-4xl font-bold text-gray-light">
        More Than Medicine It’s Personal
      </h1>
      <p className="text-xl tracking-normal text-gray-light">
        Wellness Hospital will always serve you wholeheartedly. Health is a
        priority.
      </p>
    </section>
  );
};

export default HeroSection;
