import React from 'react';
import Image from 'next/image';
import Logo from '../shared/Logo/Logo';

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative z-0 h-[585px] w-full bg-bgWhite">
        <Image
          src="/images/clown.svg"
          alt="clown"
          width={154}
          height={136}
          className="absolute right-60"
        />
        <div
          className="bg-cover h-full w-full"
          style={{ backgroundImage: "url('/images/wave.svg')" }}
        >
          <div
            className="h-[571px] w-[881px]"
            style={{ backgroundImage: "url('/images/arrow.svg')" }}
          ></div>
        </div>
      </div>
      <div className="absolute z-10 left-20 top-20">
        <Logo />
        
      </div>
    </div>
  );
};

export default Footer;
