import React from 'react';
import { Button } from '../../components/Button';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import serviceOneImg from '../../assets/images/service-img-1.png';
import serviceTwoImg from '../../assets/images/service-img-2.png';
import serviceThreeImg from '../../assets/images/service-img-3.png';
import serviceFourImg from '../../assets/images/service-img-4.png';
import serviceFiveImg from '../../assets/images/service-img-5.png';
import serviceSixImg from '../../assets/images/service-img-6.png';

const services = [
  {
    imageUrl: serviceOneImg,
    number: '01',
    title: 'Dental Care',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lorem quis consequat.',
  },
  {
    imageUrl: serviceTwoImg,
    number: '02',
    title: 'Orthopedics',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lorem quis consequat.',
  },
  {
    imageUrl: serviceThreeImg,
    number: '03',
    title: 'Heart Care',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lorem quis consequat.',
  },
  {
    imageUrl: serviceFourImg,
    number: '04',
    title: 'Pathology',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lorem quis consequat.',
  },
  {
    imageUrl: serviceFiveImg,
    number: '05',
    title: 'Eye Care',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lorem quis consequat.',
  },
  {
    imageUrl: serviceSixImg,
    number: '06',
    title: 'Internal Disease',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lorem quis consequat.',
  },
];

const ServiceCard = ({ imageUrl, number, title, paragraph }) => {
  return (
    <div className="rounded-3xl bg-white p-8">
      <div className="flex items-center justify-between">
        <img src={imageUrl} height={80} width={80} alt="service card image" />
        <h2 className="font-ibm text-6xl font-bold text-[#D6F6FD]">{number}</h2>
      </div>
      <h2 className="mt- mb-6 mt-6 text-3xl font-medium text-[#2677BC]">
        {title}
      </h2>
      <p className="mb-6 text-xl text-[#5B5B5B]">{paragraph}</p>
      <Button variant="transparent">Explore More</Button>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="rounded-3xl bg-gray-100 px-4 md:mx-5 md:px-11 xl:mx-8">
      <div className="py-12">
        <NoRadiusOnRightBottomCorner text={'Our Services'} />
        <h2 className="mb-5 mt-8 font-ibm text-3xl font-bold text-[#3498DB]">
          Experienced in Multiple Medical Specialities
        </h2>
        <p className="mb-14 font-heebo text-xl text-[#313131]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          hendrerit metus ex, id ullamcorper massa accumsan volutpat. 
        </p>

        <div className="grid grid-cols-1 gap-7 xl:grid-cols-3">
          {services.map((service, _index) => (
            <ServiceCard
              key={_index}
              imageUrl={service.imageUrl}
              number={service.number}
              title={service.title}
              paragraph={service.paragraph}
            />
          ))}
        </div>

        <div className="text-center">
          <Button className="mt-10">See More Services</Button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
