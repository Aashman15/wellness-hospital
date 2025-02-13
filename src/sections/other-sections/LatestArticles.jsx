import React from 'react';
import NoRadiusOnRightBottomCorner from '../../components/NoRadiusOnRightBottomCorner';
import { Button } from '../../components/Button';
import article1 from '../../assets/images/article1.png';
import article2 from '../../assets/images/article2.png';
import article3 from '../../assets/images/article3.png';
import articlebtn from '../../assets/images/articlebtn.png';

const articles = [
  {
    number: '01',
    date: 'January 12, 2024',
    title: 'Limit your time playing with gadgets to maintain eye health',
    imgUrl: article1,
  },
  {
    number: '02',
    date: 'January 13, 2024',
    title: 'Everything you need to know about We Wellness Hospital',
    imgUrl: article2,
  },
  {
    number: '03',
    date: 'January 14, 2024',
    title: 'Limit your time playing with gadgets to maintain eye health',
    imgUrl: article3,
  },
];

const ArticleCard = ({ number, date, title, imgUrl }) => (
  <div className="min-w-[289px] overflow-x-hidden">
    <h1 className="mb-6 font-ibm text-[52px] font-bold text-[#84D4F4]">
      {number}
    </h1>
    <p className="mb-5 font-medium text-[#FF6F61]">{date}</p>
    <h2 className="mb-6 max-w-[20ch] text-2xl font-medium text-[#313131]">
      {title}
    </h2>
    <div className="relative">
      <img
        className="w-full rounded-3xl"
        src={imgUrl}
        alt="article card image"
      />
      <img
        className="absolute bottom-4"
        src={articlebtn}
        alt="article btn image"
      />
    </div>
  </div>
);

const LatestArticles = () => {
  return (
    <div className="wrapper py-14 xl:flex xl:items-center xl:gap-14">
      <div className="xl:min-w-[43ch]">
        <NoRadiusOnRightBottomCorner
          className={'mb-8'}
          text={'FROM THE BLOG'}
        />
        <h2 className="mb-6 font-ibm text-3xl font-bold text-[#3498DB]">
          Our Latest Article Update
        </h2>
        <p className="mb-9 text-xl text-[#313131]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          hendrerit metus ex, id ullamcorper massa accumsan volutpat. 
        </p>
        <Button>See More Article</Button>
      </div>
      <div>
        <div className="mt-12 flex gap-9">
          {articles.map((a) => (
            <ArticleCard
              number={a.number}
              date={a.date}
              title={a.title}
              imgUrl={a.imgUrl}
            />
          ))}
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

export default LatestArticles;
