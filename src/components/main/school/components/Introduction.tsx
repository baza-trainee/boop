'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Introduction = () => {
  const t = useTranslations('School');

  return (
    <div className="relative mb-[72.5px] lg:mb-[100px] 3xl:mb-[120px]">
      <h2 className="title-gradient mb-[26.5px] font-groppled text-2xl font-bold leading-[1.6] md:mb-8 md:text-[28px] ml:text-[32px]">
        {t('main_title')}
      </h2>
      <svg
        className={`absolute h-[1rem] w-[5rem] xs:hidden md:block lg:top-[11%] 3xl:top-[10%]`}
      >
        <use href="/icons/sprite.svg#title-line"></use>
      </svg>
      <h3 className="text-gradient ml:0 mb-4 font-raleway text-xl font-bold leading-[1.32] md:ml-[75px]  ml:ml-[77px] lg:ml-[98px] xl:ml-[103px] 3xl:ml-[110px] 4xl:ml-[142px]">
        {t('main_text_primary')}
      </h3>

      <div className="ml:0 flex items-center gap-3 md:ml-[77px] lg:ml-[110px]">
        <span className="font-raleway text-lg font-normal leading-normal text-textViolet lg:text-xl lg:leading-[1.32]">
          {t('main_text_secondary')}
        </span>
        <Image
          src="/images/logo.svg"
          alt="Boop logo"
          width={86}
          height={50}
          className="h-[30px] w-[52px] md:h-[50px] md:w-[86px]"
        />
        <span className="font-raleway text-lg font-normal leading-normal text-textViolet lg:text-xl lg:leading-[1.32]">
          {t('and')}
        </span>

        <Image
          src="/icons/partners/tabletochki.svg"
          alt="tabletochki logo"
          width={160}
          height={23}
          className="h-[11px] w-[91px] md:h-[23px] md:w-[160px]"
        />
      </div>
      <div className="relative mt-12 flex gap-6">
        <div className="h-[227px] w-[171px] bg-yellow bg-[url('/icons/school/right-photo.png')] bg-[length:171px_227px] bg-no-repeat md:h-[258px] md:w-[195px] md:bg-[length:195px_258px] ml:h-[375px] ml:w-[283px] ml:bg-[length:283px_374px] lg:h-[456px] lg:w-[344px] lg:bg-[length:344px_456px] xl:h-[466px] xl:w-[360px] xl:bg-[length:360px_466px] 3xl:h-[533px] 3xl:w-[416px] 3xl:bg-[length:416px_533px] 4xl:h-[627px] 4xl:w-[473px] 4xl:bg-[length:473px_627px]"></div>
        <div className="h-[198px] w-[154px] bg-gray-300 bg-[url('/icons/school/midle-photo.jpg')] bg-[length:154px_198px] bg-no-repeat  ml:h-[309px] ml:w-[241px] ml:bg-[length:241px_309px] lg:h-[378px] lg:w-[294px] lg:bg-[length:294px_378px] xl:h-[393px] xl:w-[309px] xl:bg-[length:309px_393px] 3xl:h-[406px] 3xl:w-[306px] 3xl:bg-[length:306px_406px] 4xl:h-[627px] 4xl:w-[473px] 4xl:bg-[length:473px_627px]"></div>
        <div className="hidden bg-gray-300 bg-[url('/icons/school/left-photo.jpg')] bg-no-repeat md:block md:h-[180px] md:w-[241px] md:translate-y-[-15%] md:bg-[length:241px_180px] ml:h-[242px] ml:w-[324px] ml:translate-y-[-40%] ml:bg-[length:324px_242px] lg:h-[348px] lg:w-[466px] lg:bg-[length:466px_348px] xl:h-[356px] xl:w-[489px] xl:bg-[length:489px_356px] 3xl:h-[395px] 3xl:w-[526px] 3xl:translate-y-[-35%] 3xl:bg-[length:526px_395px] 4xl:h-[465px] 4xl:w-[686px] 4xl:translate-y-[-30%] 4xl:bg-[length:686px_465px]"></div>
      </div>
    </div>
  );
};

export default Introduction;
