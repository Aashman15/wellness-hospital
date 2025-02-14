import React from 'react';
import footerLogo from '../../assets/images/footer-logo.png';
import facebook from '../../assets/images/facebook.png';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';
import { Button } from '../../components/Button';

const footerLinks = [
  {
    header: 'Quick Links',
    links: ['Home', 'About Me', 'Portfolio', 'Blog'],
  },
  {
    header: 'Work Category',
    links: ['Architecture', 'Nature', 'Modeling', 'Event', 'Branding'],
  },
  {
    header: 'Legal',
    links: [
      'Return Policy',
      'Shipping Policy',
      'Privacy Policy',
      'Terms of Services',
    ],
  },
];

const FooterLinksCard = ({ header, links }) => (
  <div>
    <h2 className="font-heebo text-2xl font-medium text-[#2677BC]">{header}</h2>
    <ul className="mt-3 flex flex-col gap-4">
      {links.map((link) => (
        <li className="font-heebo text-sm font-medium text-[#63BBE9]">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

const FooterInput = ({ placeholder }) => (
  <div className="relative h-14 w-full">
    <input
      className="h-full w-full rounded-full border-2 border-[#3498DB] px-6 py-4 placeholder-[#969696]"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const Footer = () => {
  return (
    <div className="bg-[#F5F8FA] py-16">
      <div className="wrapper grid grid-cols-2 gap-y-12 xl:gap-y-11">
        <div className="col-start-1 col-end-3 xl:col-end-2 xl:row-start-1 xl:row-end-3 xl:mr-36">
          <img src={footerLogo} alt="Footer wellness logo image" />
          <div className="mb-7 mt-8 flex items-center gap-4 xl:mt-14">
            <FooterInput placeholder={'Email address'} />
            <Button
              variant="transparent"
              className="border-[#3498DB] text-[#3498DB]"
            >
              Subscribe
            </Button>
          </div>
          <p className="max-w-[48ch] font-lato text-base text-[#2677BC]">
            Nullam ultrices lorem et augue placerat blandit. Nam nisl lacus,
            imperdiet quis dui pretium, pretium vehicula turpis. Fusce
            scelerisque fermentum lacinia.
          </p>
          <div className="mt-12 flex gap-4 xl:mt-20">
            <img src={whatsapp} alt="whatsapp logo" />
            <img src={facebook} alt="facebook logo" />
            <img src={instagram} alt="instagram logo" />
          </div>
        </div>
        <div className="col-start-1 col-end-3 flex flex-wrap gap-x-[60px] gap-y-[40px] xl:col-start-2">
          {footerLinks.map((l) => (
            <FooterLinksCard header={l.header} links={l.links} />
          ))}
        </div>
        <div className="row-start-3 row-end-4 xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3">
          <h2 className="font-heebo text-2xl font-medium text-[#2677BC]">
            Location
          </h2>
          <h3 className="mb-4 mt-3 font-heebo text-sm font-medium text-[#2677BC]">
            Surabaya
          </h3>
          <p className="max-w-[30ch] font-heebo text-sm text-[#969696]">
            Jl. Danau Jonge 12, Mayjend Sungkono, Surabaya
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
