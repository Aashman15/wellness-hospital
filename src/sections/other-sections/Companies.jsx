import React from 'react';
import company1ImageUrl from '../../assets/images/company-1.png';
import company2ImageUrl from '../../assets/images/company-2.png';
import company3ImageUrl from '../../assets/images/company-3.png';
import company4ImageUrl from '../../assets/images/company-4.png';

const Companies = () => {
  return (
    <div className="wrapper grid grid-cols-1 gap-y-10 py-24 md:grid-cols-2 xl:grid-cols-4">
      <img className="mx-auto" src={company1ImageUrl} alt="" />
      <img className="mx-auto" src={company2ImageUrl} alt="" />
      <img className="mx-auto" src={company3ImageUrl} alt="" />
      <img className="mx-auto" src={company4ImageUrl} alt="" />
    </div>
  );
};

export default Companies;
