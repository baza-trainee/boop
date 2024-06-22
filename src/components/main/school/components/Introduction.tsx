import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { useTranslations } from 'next-intl';

const Introduction = () => {
  const t = useTranslations('School');
  return (
    <div className="mb-[120px]">
      <SectionTitle title={t('main_title')} />
      <p
        className="mb-4 font-raleway font-normal text-textViolet
      3xl:text-xl 3xl:leading-normal"
      >
        {t('main_text_primary')}
        <br />
        {t('main_text_secondary')}
      </p>
      <div className="relative flex min-h-[630px] gap-6">
        <div className="bg- h-[564px] w-[440px] translate-y-[12%] bg-yellow bg-[url('/icons/school/right-photo.png')] bg-[length:440px_564px] bg-no-repeat"></div>
        <div className="h-[324px] w-[502px] bg-gray-300 bg-[url('/icons/school/midle-photo.jpg')] bg-[length:502px_324px] bg-no-repeat"></div>
        <div className="h-[400px] w-[306px] translate-y-[-19%] bg-gray-300 bg-[url('/icons/school/left-photo.jpg')] bg-[length:306px_400px] bg-no-repeat"></div>
        <svg className="absolute bottom-1/4 left-1/2 h-[62px] w-[69px] rotate-[14.68deg]">
          <use href="/icons/school/yellow_bow_tie.svg#yellow_bow_tie"></use>
        </svg>
      </div>
    </div>
  );
};

export default Introduction;
