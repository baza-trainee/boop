import React from 'react';
import Image from 'next/image';

interface HeaderLogo {
  locale: string;
}

const HeaderLogo: React.FC<HeaderLogo> = ({ locale }) => {
  const uaLocale = locale === 'ua';
  const itLocale = locale === 'it';

  return (
    <div>
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
    </div>
  );
};
export default HeaderLogo;
