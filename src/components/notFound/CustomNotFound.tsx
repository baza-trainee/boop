import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="relative z-10 bg-bgWhite px-5 pb-[82px] pt-[156px] after:absolute after:left-[3px] after:top-[109px] after:-z-10 after:h-full after:w-full after:bg-[url('/icons/404/xs_footprints.svg')] after:bg-no-repeat after:content-[''] md:pt-[200px]">
      <h2 className="title-gradient mb-2 h-[24px] bg-clip-text py-1 text-center font-groppled text-[24px] font-bold leading-[1.7] md:h-[45px] md:text-[40px] xl:text-5xl">
        {t('title')}
      </h2>
      <p className="text-center text-[16px] font-medium leading-[1.32] text-textViolet md:text-[20px]">
        {t('text')}
      </p>

      <Image
        src="/icons/404/404.svg"
        alt="Clown"
        width={352}
        height={130}
        className="m-auto mb-[133px] mt-[30px] block"
      />

      <Link
        href="/"
        rel="noopener noreferrer"
        className="m-auto block w-full max-w-[193px] rounded-[32px] bg-red py-5 text-center font-raleway text-xl font-bold leading-none text-[#ffffff]"
      >
        {t('btn')}
      </Link>
    </div>
  );
};
