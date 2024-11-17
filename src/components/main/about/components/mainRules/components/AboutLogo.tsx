'use client';
import Image from 'next/image';
import clsx from 'clsx';

export interface AboutLogoProps {
  text: string;
  isUkr?: boolean;
  isIt?: boolean;
}

const AboutLogo: React.FC<AboutLogoProps> = ({ text, isUkr = false, isIt = false }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[18px] md:flex-row md:items-start md:justify-center md:gap-[5px]">
      <Image
        src={
          isUkr
            ? '/images/heroSection/hero_logo.png'
            : isIt
              ? '/images/heroSection/it_logo.svg'
              : '/images/heroSection/en_logo.svg'
        }
        alt={isUkr ? 'Ukrainian Logo' : isIt ? 'IT Logo' : 'English Logo'}
        width={isUkr ? 150 : 167}
        height={87}
        className="relative"
      />
      <h1
        className={clsx(
          'title-gradient relative text-center font-groppled text-[28px] font-bold leading-[132%] md:top-[20px] ml:text-[32px] ml:leading-[150%]',
          isIt && 'w-[345px] md:w-[348px] ml:w-[395px]',
          isUkr && 'w-[350px] md:w-[470px] ml:w-[530px]',
          !isIt && !isUkr && 'w-[370px] md:w-[476px] ml:w-[543px]'
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default AboutLogo;
