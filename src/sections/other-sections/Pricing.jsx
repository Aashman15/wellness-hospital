import React from 'react';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import tick from '../../assets/icons/tick.png';
import { Button } from '../../components/Button';

const pricings = [
  {
    title: 'Join Room',
    isRecommended: false,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa accumsan volutpat. ',
    price: '$19.3',
  },
  {
    title: 'VIP',
    isRecommended: true,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa accumsan volutpat. ',
    price: '$30.5',
  },
  {
    title: 'VVIP Room',
    isRecommended: false,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa accumsan volutpat. ',
    price: '$50.6',
  },
];

const PricingCard = ({ title, isRecommended, paragraph, price }) => {
  const Feature = ({ feature }) => (
    <li className="flex items-start gap-3">
      <img
        className="mt-1"
        src={tick}
        height={24}
        width={24}
        alt="green tick"
      />
      <span className="text-2xl text-[#5B5B5B]">{feature}</span>
    </li>
  );

  return (
    <div className="rounded-3xl border-2 border-gray-100 p-7">
      <h2 className="mb-5 font-ibm text-3xl font-bold">
        <span className="text-[#2677BC]">{title}</span>
        {isRecommended && (
          <span className="text-[#84D4F4]"> (Recommended)</span>
        )}
      </h2>
      <p className="mb-5 text-xl text-[#5B5B5B]">{paragraph}</p>
      <h3 className="mb-5">
        <span className="text-[40px] font-bold text-[#3498DB]">{price}</span>
        <span className="text-2xl text-[#969696]"> / Person</span>
      </h3>
      <div className="mb-5 h-[2px] bg-[#C8C8C8]"></div>
      <h4 className="mb-5 text-2xl text-[#3498DB]">Features</h4>
      <ul className="mb-6 flex flex-col gap-4">
        <Feature feature={'Bedside Cabinet'} />
        <Feature feature={'Waiting Chair + Sofa'} />
        <Feature feature={'Bathroom (Hot & Cold Water)'} />
        <Feature feature={'TV LED + WIFI'} />
      </ul>

      <div className="flex flex-col items-center gap-3">
        <Button variant="transparent" className="w-full">
          See More Features
        </Button>
        <span className="text-sm text-[#969696]">or</span>
        <Button className="w-full">Choose Plan</Button>
      </div>
    </div>
  );
};
const Pricing = () => {
  return (
    <div className="wrapper py-14">
      <div className="align-to flex flex-col items-start gap-7">
        <NoRadiusOnRightBottomCorner text={'Pricing'} />
        <h2 className="font-ibm text-3xl font-bold text-[#3498DB]">
          Pick a Plan for Hospitalization Cost
        </h2>
        <p className="text-xl text-[#313131]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          hendrerit metus ex, id ullamcorper massa accumsan volutpat. 
        </p>
      </div>
      <div className="mb-10 mt-12 grid grid-cols-1 gap-7 xl:grid-cols-3">
        {pricings.map((pricing) => (
          <PricingCard
            title={pricing.title}
            paragraph={pricing.paragraph}
            price={pricing.price}
            isRecommended={pricing.isRecommended}
          />
        ))}
      </div>
      <div className="text-center">
        {' '}
        <Button>See More Plan</Button>
      </div>
    </div>
  );
};

export default Pricing;
