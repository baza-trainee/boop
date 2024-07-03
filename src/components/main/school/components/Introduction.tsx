import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Introduction = () => {
  const t = useTranslations('School');
  return (
    <div className="relative mb-[120px]">
      <h2 className="title-gradient mb-8 font-groppled text-3xl font-bold">
        {t('main_title')}
      </h2>
      <svg className="absolute top-[10%] h-[1rem] w-[5rem]">
        <use href="/icons/sprite.svg#title-line"></use>
      </svg>
      <h3 className="text-gradient mb-4 ml-[110px] font-raleway  text-xl font-bold leading-[1.32]">
        {t('main_text_primary')}
      </h3>

      <div className="ml-[110px] flex items-start gap-3">
        <span className="font-raleway text-xl font-normal leading-[1.32] text-textViolet">
          {t('main_text_secondary')}
        </span>
        <Image src="/images/logo.svg" alt="Boop logo" width={86} height={50} />
        <span className="font-raleway text-xl font-normal leading-normal text-textViolet">
          {t('and')}
        </span>

        <Image
          src="/icons/partners/tabletochki.svg"
          alt="tabletochki logo"
          width={160}
          height={23}
        />
      </div>
      <div className="relative mt-12 flex gap-6">
        <div className="bg- h-[533px] w-[416px] bg-yellow bg-[url('/icons/school/right-photo.png')] bg-[length:416px_533px] bg-no-repeat"></div>
        <div className="h-[406px] w-[306px]  bg-gray-300 bg-[url('/icons/school/midle-photo.jpg')] bg-[length:306px_406px] bg-no-repeat"></div>
        <div className="h-[395px] w-[526px] translate-y-[-35%] bg-gray-300 bg-[url('/icons/school/left-photo.jpg')] bg-[length:526px_395px] bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default Introduction;
