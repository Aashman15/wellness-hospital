import React from 'react';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import doctor1 from '../../assets/images/doctor1.png';
import doctor2 from '../../assets/images/doctor2.png';
import doctor3 from '../../assets/images/doctor3.png';
import doctor4 from '../../assets/images/doctor4.png';
import doctor5 from '../../assets/images/doctor5.png';
import doctor6 from '../../assets/images/doctor6.png';
import { Button } from '../../components/Button';

const doctors = [
  {
    imgSrc: doctor1,
    name: 'Micol Efigenia',
    title: 'Cardiologist',
    careerSummary:
      'Cardiologist with 8 years experience. Has been certified as the best heart doctor.',
  },
  {
    imgSrc: doctor2,
    name: 'Irma Winnifred',
    title: 'Dentist',
    careerSummary:
      'Cardiologist with 8 years experience. Has been certified as the best heart doctor.',
  },
  {
    imgSrc: doctor3,
    name: 'Mnason Prabhakar',
    title: 'Phatologist',
    careerSummary:
      'Cardiologist with 8 years experience. Has been certified as the best heart doctor.',
  },
  {
    imgSrc: doctor4,
    name: 'Lage Rodrigo',
    title: 'Orthopedics',
    careerSummary:
      'Cardiologist with 8 years experience. Has been certified as the best heart doctor.',
  },
  {
    imgSrc: doctor5,
    name: 'Giusi Marjut',
    title: 'Surgeon',
    careerSummary:
      'Cardiologist with 8 years experience. Has been certified as the best heart doctor.',
  },
  {
    imgSrc: doctor6,
    name: 'Freyr Johano',
    title: 'Internist',
    careerSummary:
      'Cardiologist with 8 years experience. Has been certified as the best heart doctor.',
  },
];

const DoctorCard = ({ imgSrc, name, title, careerSummary }) => {
  return (
    <div className="rounded-3xl bg-[#F5F8FA] px-7 py-8 text-center">
      <img src={imgSrc} className="mx-auto" alt="doctor image" />
      <h2 className="mb-2 mt-4 text-3xl font-bold text-[#2677BC]">{name}</h2>
      <h3 className="text-2xl text-[#FF6F61]">{title}</h3>
      <p className="mt-5 text-lg text-[#5B5B5B]">{careerSummary}</p>
    </div>
  );
};

const Doctors = () => {
  return (
    <div className="wrapper py-12 text-center">
      <NoRadiusOnRightBottomCorner text={'OUR DOCTORS'} />
      <h2 className="mb-10 mt-8 font-ibm text-3xl font-bold text-[#3498DB]">
        Meet Our Expert Doctors
      </h2>
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-3">
        {doctors.map((doctor, _index) => (
          <DoctorCard
            key={_index}
            imgSrc={doctor.imgSrc}
            name={doctor.name}
            title={doctor.title}
            careerSummary={doctor.careerSummary}
          />
        ))}
      </div>
      <Button className="mt-10">See More Doctors</Button>
    </div>
  );
};

export default Doctors;
