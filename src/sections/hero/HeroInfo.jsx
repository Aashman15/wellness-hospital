import React from 'react';

import { BiTime } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';
import { Button } from '../../components/Button';
import ButtonIconContainer from '../../components/ButtonIconContainer';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';

const HeroInfo = () => {
  return (
    <div className="xl:w-">
      <NoRadiusOnRightBottomCorner text={'Your Health is Our Priority'} />
      <h1 className="mb-7 mt-9 font-ibm text-4xl font-bold text-gray-light">
        More Than Medicine It’s Personal
      </h1>
      <p className="text-xl tracking-normal text-gray-light">
        Wellness Hospital will always serve you wholeheartedly. Health is a
        priority.
      </p>
      <div className="mb-12 mt-9 flex flex-col justify-center gap-y-4 md:flex-row md:items-center md:gap-5">
        <Button className="min-w-fit" size="lg">
          <span>Book Appointment</span>
          <ButtonIconContainer>
            <GoArrowRight />
          </ButtonIconContainer>
        </Button>
        <p className="text-sm text-gray-light">or</p>
        <Button
          variant="transparent"
          className="border-text-gray-light min-w-fit text-gray-light"
          size="lg"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col gap-y-5 xl:mt-32 xl:flex-row xl:gap-5">
        <div className="mx-auto flex h-22 w-22 items-center justify-center rounded-2xl bg-green-light text-white xl:mx-0">
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
    </div>
  );
};

export default HeroInfo;
