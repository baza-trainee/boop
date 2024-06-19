import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Image
    src="/images/logo.svg"
    alt="logo"
    width={93}
    height={54}
  />
    
  );
};

export default Logo;