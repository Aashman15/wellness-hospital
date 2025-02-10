import React from 'react';

import heroImageUrl from '../../assets/images/lady-doctor-for-hero-section.png';
import { Button } from '../../components/Button';

const HeroInput = ({ placeholder }) => (
  <div className="relative h-14 w-full">
    <input
      className="h-full w-full rounded-2xl border-2 border-[#E1E1E1] px-6 py-4"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const HeroImageAndForm = () => {
  return (
    <div className="relative">
      <img
        className="mt-12.5 xl:mt-0 xl:max-w-[650px]"
        src={heroImageUrl}
        alt=""
      />
      <form className="w-full rounded-t-2xl bg-white px-8 pt-8">
        <div className="flex gap-4">
          <HeroInput placeholder={'Doctor Type'} />
          <HeroInput placeholder={'Doctor Name'} />
        </div>
        <div className="mb-5 mt-4 flex gap-4">
          <HeroInput placeholder={'Date'} />
          <HeroInput placeholder={'Time'} />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-full bg-gray-divider"></div>
          <Button className="mb-1 min-w-fit">Check Doctor Availability</Button>
          <div className="h-[2px] w-full bg-gray-divider"></div>
        </div>
      </form>
    </div>
  );
};

export default HeroImageAndForm;
