import React from 'react';
import doctorExperimenting from '../../assets/images/doctor-experimenting.png';
import { Button } from '../../components/Button';

const Immediate = () => {
  return (
    <div className="items-center rounded-3xl xl:mx-8 xl:flex xl:bg-[#2677BC]">
      <div className="px-4 xl:px-0">
        <div className="rounded-3xl bg-[#2677BC] px-12 pb-[153px] pt-[70px] text-[#FAFAFA] xl:pb-0">
          <h2 className="text-3xl font-bold">
            Want to Immediately See Our Trusted Doctor?
          </h2>
          <p className="mb-10 mt-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            hendrerit metus ex, id ullamcorper massa accumsan volutpat. Etiam
            viverra pharetra dui, nec aliquet nisi consequat sit amet. 
          </p>

          <div className="text-center xl:text-left">
            <Button variant="ice">Book Appointment Now</Button>
          </div>
        </div>
      </div>
      <div className="-mt-28 w-full px-12 md:px-20 xl:mt-0 xl:px-0">
        <img
          className="h-full w-full rounded-3xl rounded-l-none xl:rounded-br-3xl xl:rounded-tr-3xl"
          src={doctorExperimenting}
          alt="doctor experimenting"
        />
      </div>
    </div>
  );
};

export default Immediate;
