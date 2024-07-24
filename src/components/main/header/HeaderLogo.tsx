import React from 'react';
import Image from 'next/image';

interface HeaderLogoProps {
  locale: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ locale }) => {
  const uaLocale = locale === 'ua';
  const itLocale = locale === 'it';

  return (
    <Image
      src={
        uaLocale
          ? '/icons/header/ua-logo.svg'
          : itLocale
            ? '/icons/header/it-logo.svg'
            : '/icons/header/en-logo.svg'
      }
      alt="Boop"
      width={86}
      height={50}
    />
  );
};
export default HeaderLogo;
