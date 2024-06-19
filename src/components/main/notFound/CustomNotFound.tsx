import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="h-full bg-bgWhite bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-left-top bg-no-repeat pt-[30px] px-10 pb-[350px] 3xl:pb-[72px] 3xl:pt-[120px]">
      <h2 className="title-gradient bg-clip-text text-center font-groppled mb-6 text-5xl font-bold leading-[1.3] md:leading-[1.7]">
        {t('title')}
      </h2>
      <p className="text-center font-raleway text-[#50439F] mb-20 text-xl font-medium leading-[1.32]">
        {t('text')}
      </p>
      <div className="flex items-baseline justify-center text-center font-groppled text-yellow mb-[60px] text-[150px] md:text-[300px] font-bold leading-none">
        <span className="w-[75px] md:w-auto">4</span>
        <svg className="mx-0 md:mx-10 h-[207px] min-w-[209px] w-[209px] scale-50 md:scale-100">
          <use href="/icons/404/404.svg#notFound"></use>
        </svg>
        <span className="w-[75px] md:w-auto">4</span>
      </div>
      <Link
        href="/"
        rel="noopener noreferrer"
        target="_self"
        className="m-auto block w-full rounded-[32px] bg-red text-center font-raleway text-[#ffffff] max-w-[193px] py-5 text-xl font-bold leading-none "
      >
        {t('btn')}
      </Link>
    </div>
  );
};
