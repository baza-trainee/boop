'use client';
import Image from 'next/image';
import React from 'react';

export interface AboutLogoProps {
  text: string;
  isUkr?: boolean;
  isIt?: boolean;
}

const AboutLogo: React.FC<AboutLogoProps> = ({ text, isUkr, isIt }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[18px] md:flex-row md:items-start md:justify-center md:gap-[5px] ">
      <Image
        src={
          isUkr
            ? '/images/heroSection/hero_logo.png'
            : '/images/heroSection/en_logo.svg'
        }
        alt="Boop"
        width={isUkr ? 150 : 167}
        height={isUkr ? 87 : 87}
        className="relative"
      />
      <h1
        className={`${isIt ? 'w-[370px] md:w-[370px] ml:w-[420px]' : 'w-[350px] md:w-[470px] ml:w-[530px]'} title-gradient relative text-center font-groppled text-[28px] font-bold leading-[132%] md:top-[20px]    ml:text-[32px] ml:leading-[150%] `}
      >
        {text}
      </h1>
    </div>
  );
};

export default AboutLogo;
