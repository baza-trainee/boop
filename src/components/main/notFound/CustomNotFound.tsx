import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="h-full bg-bgWhite bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-left-top bg-no-repeat px-10 pb-[350px] 3xl:pb-[72px] pt-[120px] md:pt-[200px]">
      <h2 className="title-gradient bg-clip-text text-center font-groppled mb-6 text-3xl xl:text-5xl font-bold leading-[1.3] md:leading-[1.7]">
        {t('title')}
      </h2>
      <p className="text-center text-xl font-medium leading-[1.32] text-textViolet ">
        {t('text')}
      </p>
      <div
        className="mb-[65px] flex items-center justify-center text-center font-groppled text-[200px] md:text-[300px] font-bold leading-[1.55] text-yellow items-baseline">
        <span className="h-[155px]">4</span>
        <Image
          src="/icons/404/404.svg"
          alt="Clown"
          width={200}
          height={200}
          className="px-3 md:px-7 max-md:max-w-[135px]"
        />
        <span className="h-[155px]">4</span>
      </div>
      <Link
        href="/"
        rel="noopener noreferrer"
        className="m-auto block w-full rounded-[32px] bg-red text-center font-raleway text-[#ffffff] max-w-[193px] py-5 text-xl font-bold leading-none "
      >
        {t('btn')}
      </Link>
    </div>
  );
};
