import React from 'react';
import { Button } from '../../components/Button';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import aboutUsImageUrl from '../../assets/images/about-us.png';
import aboutUsPersonOne from '../../assets/images/about-us-person-1.png';
import aboutUsPersonTwo from '../../assets/images/about-us-person-2.png';
import vice from '../../assets/images/vice.png';

const AboutUs = () => {
  return (
    <div className="rounded-3xl bg-gray-100 px-4 md:mx-5 md:px-11 xl:mx-8">
      <div className="flex flex-col gap-14 py-12 xl:flex-row-reverse xl:gap-24">
        <div>
          <NoRadiusOnRightBottomCorner text={'About Us'} />
          <h2 className="mb-5 mt-8 font-ibm text-3xl font-bold text-[#3498DB]">
            We Are Always Ensure Best Medical Treatment
          </h2>
          <p className="mb-14 font-heebo text-xl text-[#313131]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            hendrerit metus ex, id ullamcorper massa accumsan volutpat. Etiam
            viverra pharetra dui, nec aliquet nisi consequat sit amet. 
          </p>
          <div className="relative mb-8 rounded-2xl border-2 border-gray-divider py-11">
            <div className="absolute top-0 flex -translate-y-1/2">
              <img src={aboutUsPersonTwo} alt="" />
              <img src={aboutUsPersonOne} alt="" />
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              hendrerit metus ex, id ullamcorper massa accumsan volutpat. Etiam
              viverra pharetra dui, nec aliquet nisi consequat sit amet.”
            </p>
            <div className="mt-8 flex gap-3">
              <img src={vice} alt="" />
              <p className="text-lg text-[#3498DB]">
                Vice Director of Wellness Hospital
              </p>
            </div>
          </div>
          <Button variant="red">More About Us</Button>
        </div>
        <img
          className="w-full xl:h-[683px] xl:w-[550px]"
          src={aboutUsImageUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
