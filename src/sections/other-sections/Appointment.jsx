import React from 'react';
import appointment1 from '../../assets/images/appointment1.png';
import appointment2 from '../../assets/images/appointment2.png';
import { Feature } from './Pricing';
import { Button } from '../../components/Button';

const appointments = [
  {
    imgUrl: appointment1,
    title: 'Book-In Hospital Visits ',
  },
  {
    imgUrl: appointment2,
    title: 'Get Virtual Care',
  },
];

const AppointmentCard = ({ imgUrl, title }) => (
  <div className="flex flex-col items-center md:flex-row">
    <img className="z-10 h-80 w-80" src={imgUrl} alt="appointment card image" />

    <div className="z-0 -mt-16 rounded-3xl bg-white px-7 pb-7 pt-28 md:-ml-16 md:mt-0 md:pl-28 md:pt-8">
      <h2 className="mb-4 text-3xl text-[#2677BC]">{title}</h2>
      <p className="mb-7 text-xl text-[#313131]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit
        metus ex, id ullamcorper massa accumsan volutpat. 
      </p>
      <ul className="mb-8 flex flex-col gap-3">
        <Feature feature={'Same or next day appointment'} />
        <Feature feature={'Personal membership'} />
        <Feature feature={'On-site lab service'} />
      </ul>
      <Button>Book Appointment</Button>
    </div>
  </div>
);

const Appointment = () => {
  return (
    <div className="bg-appointment rounded-3xl px-2 py-14 text-center md:mx-5 md:px-8">
      <h2 className="mb-6 font-ibm text-3xl font-bold text-[#3498DB]">
        We Are a Friendlier Healthcare Experience
      </h2>
      <p className="mb-12 text-2xl text-[#313131]">
        We make it easy for you to access our services
      </p>
      <div className="flex flex-col items-center gap-8 py-2.5 text-left">
        {appointments.map((a) => (
          <AppointmentCard key={a.title} title={a.title} imgUrl={a.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default Appointment;
