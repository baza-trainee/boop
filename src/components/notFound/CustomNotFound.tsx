import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="h-full bg-bgWhite bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-left-top bg-no-repeat pb-[72px] pt-[120px]">
      <h2 className="title-gradient mb-6 bg-clip-text text-center  font-groppled font-bold leading-[1.7] 3xl:text-5xl ">
        {t('title')}
      </h2>
      <p className="mb-20 text-center text-xl font-medium leading-[1.32] text-textViolet ">
        {t('text')}
      </p>
      <div className="mb-[60px] flex items-center justify-center text-center font-groppled text-[300px] font-bold leading-[1.55] text-yellow">
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
        className="m-auto block w-full max-w-[193px] rounded-[32px] bg-red py-5 text-center font-raleway text-xl font-bold leading-none text-[#ffffff] "
      >
        {t('btn')}
      </Link>
    </div>
  );
};
