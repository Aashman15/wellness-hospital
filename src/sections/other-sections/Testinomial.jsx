import React from 'react';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import testinomialPerson1 from '../../assets/images/testinomial-person-1.png';
import testinomialPerson2 from '../../assets/images/testinomial-person-2.png';
import testinomialPerson3 from '../../assets/images/testinomial-person-3.png';
import { Button } from '../../components/Button';

const TestinomalCard = ({ isFirst, className, paragraph, imgUrl, name }) => (
  <div className={className}>
    <div className="px-4">
      <p>
        <span className="font-ibm text-4xl font-bold text-[#63BBE9]">“</span>
        <span className="text-xl text-[#424242]">{paragraph}</span>
      </p>
      <div className="mt-6 flex items-center gap-4">
        <img src={imgUrl} alt="testinomial person image" />
        <h2 className="text-lg font-medium text-[#3498DB]">{name}</h2>
      </div>
    </div>
    <div
      className={
        isFirst
          ? 'mt-12 h-1 rounded-full bg-[#2ECC71]'
          : 'mt-12 h-[1px] bg-[#E1E1E1]'
      }
    ></div>
  </div>
);

const Testinomial = () => {
  return (
    <div className="bg-[#F5F8FA] py-14 md:py-[72px] xl:py-24">
      <div className="wrapper">
        <div className="text-center">
          {' '}
          <NoRadiusOnRightBottomCorner text={'TESTINOMIAL'} />
          <h2 className="mb-12 mt-7 font-ibm text-3xl font-bold text-[#3498DB]">
            Review About Our Services from Patient
          </h2>
        </div>
        <div className="flex">
          <TestinomalCard
            isFirst
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa accumsan volutpat."
            imgUrl={testinomialPerson1}
            name="Housewife & Mother of 3"
          />
          <TestinomalCard
            className="hidden md:block"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa accumsan volutpat."
            imgUrl={testinomialPerson2}
            name="Former Inpatient"
          />
          <TestinomalCard
            className="hidden xl:block"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa accumsan volutpat."
            imgUrl={testinomialPerson3}
            name="Former Pregnant Mother"
          />
        </div>
        <div className="mt-9 flex gap-4">
          <Button
            className="border-[#AFAFAF] text-[#AFAFAF]"
            variant="transparent"
          >
            Prev
          </Button>
          <Button variant="transparent">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
