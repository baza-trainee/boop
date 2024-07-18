import React from 'react';
import Image from 'next/image';

const HeroLogo = () => {
  return (
    <Image
      src="/images/heroSection/hero_logo.png"
      alt="Boop"
      width={391}
      height={227}
      className="relative z-10 "
    />
  );
};

export default HeroLogo;
