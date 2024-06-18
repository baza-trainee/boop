import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="h-full bg-bgWhite bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-left-top bg-no-repeat 3xl:pb-[72px] 3xl:pt-[120px]">
      <h2 className="title-gradient bg-clip-text text-center font-groppled  3xl:mb-6 3xl:text-5xl 3xl:font-bold 3xl:leading-[1.7] ">
        {t('title')}
      </h2>
      <p className="text-center font-raleway text-[#50439F] 3xl:mb-20 3xl:text-xl 3xl:font-medium 3xl:leading-[1.32] ">
        {t('text')}
      </p>
      <div className="flex items-center justify-center text-center font-groppled text-yellow 3xl:mb-[60px]  3xl:text-[300px] 3xl:font-bold 3xl:leading-[1.55]">
        <span className="3xl:h-[205px]">4</span>
        <svg className="mx-10 h-[207px] w-[209px]">
          <use href="/icons/404/404.svg#notFound"></use>
        </svg>
        <span className="3xl:h-[205px]">4</span>
      </div>
      <Link
        href="/"
        rel="noopener noreferrer"
        target="_self"
        className="m-auto block w-full rounded-[32px] bg-red text-center font-raleway text-[#ffffff] 3xl:max-w-[193px] 3xl:py-5 3xl:text-xl 3xl:font-bold 3xl:leading-none "
      >
        {t('btn')}
      </Link>
    </div>
  );
};
