import React from 'react';
import Image from 'next/image';

interface HeroLogoProps {
  locale: string;
  onClick?: () => void;
  className?: string;
}

const HeroLogo: React.FC<HeroLogoProps> = ({ locale, onClick, className }) => {
  const getSrc = (locale: string) => {
    switch (locale) {
      case 'ua':
        return '/images/heroSection/hero_logo.png';
      case 'it':
        return '/images/heroSection/it_logo.svg';
      default:
        return '/images/heroSection/en_logo.svg';
    }
  };

  const src = getSrc(locale);
  const width = locale === 'ua' ? 391 : 435;
  const height = 227;

  return (
    <div className={className} onClick={onClick}>
      <Image
        src={src}
        alt="Boop"
        width={width}
        height={height}
        className="relative z-10 h-auto"
      />
    </div>
  );
};

export default HeroLogo;
