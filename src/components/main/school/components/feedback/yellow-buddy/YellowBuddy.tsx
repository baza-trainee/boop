import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const YellowBuddy = () => {
  const isDecorHidden = useMediaQuery({
    query: '(max-width: 830px)',
  });

  return (
    <div
      className={clsx(
        'absolute right-[97px] top-[37px] h-[192px] w-[211px] max-lg:right-[0] max-lg:h-[179px] max-lg:w-[160px]',
        isDecorHidden && 'hidden'
      )}
    >
      <Image
        src={'/icons/school/yellow-buddy-feedback.svg'}
        alt={'yellow buddy'}
        fill
        sizes="100%"
        className="-z-[1]"
      />
    </div>
  );
};

export default YellowBuddy;
