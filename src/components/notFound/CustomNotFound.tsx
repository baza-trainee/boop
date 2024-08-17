import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="relative z-10 bg-bgWhite px-5 pb-[82px] pt-[156px] after:absolute after:left-[3px] after:top-[109px] after:-z-10 after:h-full after:w-full after:bg-[url('/icons/404/xs_footprints.svg')] after:bg-no-repeat after:content-[''] md:pb-[262px] md:pt-[200px] md:after:left-0 md:after:top-[99px] md:after:bg-[url('/icons/404/md_footprints.svg')] ml:after:top-[69px] ml:after:bg-[url('/icons/404/ml_footprints.svg')] lg:after:bg-[url('/icons/404/lg_footprints.svg')] xl:after:bg-[url('/icons/404/xl_footprints.svg')] 3xl:after:top-[17px] 3xl:after:bg-[url('/icons/404/3xl_footprints.svg')] 4xl:pt-[240px] 4xl:after:top-0 4xl:after:bg-[url('/icons/404/4xl_footprints.svg')]">
      <h2 className="title-gradient mb-2 h-[24px] bg-clip-text py-1 text-center font-groppled text-[24px] font-bold leading-[1.7] md:h-[45px] md:text-[40px] ml:mb-6 ml:text-[48px] xl:text-[48px] 4xl:mb-8">
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
        className="m-auto mb-[133px] mt-[30px] block md:mb-[67px] md:mt-[52px] md:h-[211px] md:w-[500px] ml:mt-[84px] ml:h-[209px] ml:w-[562px] lg:mb-[70px] 3xl:mb-[59px] 3xl:w-[573px] 4xl:mb-[64px] 4xl:mt-[100px] 4xl:w-[562px]"
      />

      <Link
        href="/"
        rel="noopener noreferrer"
        className="m-auto block w-full max-w-[206px] rounded-[32px] bg-red py-5 text-center font-raleway text-xl font-bold leading-none text-[#ffffff]"
      >
        {t('btn')}
      </Link>
    </div>
  );
};
