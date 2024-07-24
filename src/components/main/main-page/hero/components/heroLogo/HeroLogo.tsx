import React from 'react';
import Image from 'next/image';

interface HeroLogoProps {
  locale: string;
}

const HeroLogo: React.FC<HeroLogoProps> = ({ locale }) => {
  const isUkr = locale === 'ua';
  const isIt = locale === 'it';

  return (
    <Image
      src={
        isUkr
          ? '/images/heroSection/hero_logo.png'
          : isIt
            ? '/images/heroSection/it_logo.svg'
            : '/images/heroSection/en_logo.svg'
      }
      alt="Boop"
      width={isUkr ? 391 : 435}
      height={isUkr ? 227 : 227}
      className="relative z-10 h-auto"
    />
  );
};

export default HeroLogo;
