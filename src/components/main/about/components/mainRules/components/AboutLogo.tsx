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
        className={`title-gradient relative w-[350px] text-center font-groppled text-[28px] font-bold leading-[132%] md:top-[20px] md:w-[570px]  ml:text-[32px] ml:leading-[150%] ${isIt && ' ml:w-[650px]'}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default AboutLogo;
