import React from 'react';

import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import { Button } from '../../components/Button';
import ButtonIconContainer from '../../components/ButtonIconContainer';
import { GoArrowRight } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';

const HeroInfo = () => {
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
      <div className="mb-12 mt-9 flex flex-col gap-y-4">
        <Button className="w-full" size="lg">
          <span>Book Appointment</span>
          <ButtonIconContainer>
            <GoArrowRight />
          </ButtonIconContainer>
        </Button>
        <p className="text-sm text-gray-light">or</p>
        <Button
          variant="transparent"
          className="border-text-gray-light w-full text-gray-light"
          size="lg"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="h-22 w-22 mx-auto flex items-center justify-center rounded-2xl bg-green-light text-white">
          <BiTime size={45} />
        </div>
        <div className="text-white">
          <h2 className="text-lg font-medium">Open Hours</h2>
          <p className="mt-2">
            Mon - Fri &nbsp;&nbsp;| &nbsp;&nbsp; 08:00 AM to 05:00 PM{' '}
          </p>
          <p className="mb-1.5">
            Sat - sun &nbsp;&nbsp;| &nbsp;&nbsp; 09:00 AM to 03:00 PM{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroInfo;
