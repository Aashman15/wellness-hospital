import React from 'react';

const StatisticCard = ({ value, title }) => (
  <div className="gap flex flex-col gap-2.5">
    <h2 className="font-ibm text-5xl font-bold text-[#3498DB]">{value}</h2>
    <p className="text-xl text-[#313131]">{title}</p>
  </div>
);

const Statistics = () => {
  return (
    <div className="wrapper grid grid-cols-2 justify-between gap-y-8 py-16 md:grid-cols-[repeat(4,max-content)]">
      <StatisticCard value={'500k+'} title={'Recovered Patients'} />
      <StatisticCard value={'90+'} title={'Expert Doctors'} />
      <StatisticCard value={'95%'} title={'Satisfaction Rate'} />
      <StatisticCard value={'100+'} title={'Awards'} />
    </div>
  );
};

export default Statistics;
