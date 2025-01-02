import React from 'react';

import NoRadiusOnRightBottomCorner from '../components/NoRadiusOnRightBottomCorner';
import { Button } from '../components/Button';
import arrowDown from '../assets/icons/arrow-down.svg';
import { GoArrowRight } from 'react-icons/go';

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
      <Button>Primary</Button>
      <Button size="sm">Primary Small</Button>
      <Button size="lg">Primary Large</Button>
      <Button variant="transparent">Transparent</Button>
      <Button variant="transparent" size="sm">
        Transparent small
      </Button>
      <Button variant="transparent" size="lg">
        Transparent large
      </Button>
      <Button variant="red">Red</Button>
      <Button variant="red" size="sm">
        Red small
      </Button>
      <Button iconURL={arrowDown} variant="red" size="lg">
        Red Large
      </Button>
      <Button variant="ice">Ice</Button>
    </section>
  );
};

export default HeroSection;
