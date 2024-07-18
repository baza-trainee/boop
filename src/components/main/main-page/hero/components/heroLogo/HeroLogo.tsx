import React from 'react';
import Image from 'next/image';

interface HeroLogoProps {
  locale: string;
}

const HeroLogo: React.FC<HeroLogoProps> = ({ locale }) => {
  const isUkr = locale === 'ua';

  return (
    <Image
      src={
        isUkr
          ? '/images/heroSection/hero_logo.png'
          : '/images/heroSection/en_logo.svg'
      }
      alt="Boop"
      width={isUkr ? 391 : 391}
      height={isUkr ? 227 : 204}
      className="relative z-10 h-auto"
    />
  );
};

export default HeroLogo;
