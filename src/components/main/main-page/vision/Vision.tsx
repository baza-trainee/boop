import React from 'react';
import { useTranslations } from 'next-intl';

const Vision = () => {
  const t = useTranslations('Vision');

  return (
    <section className="container flex w-full flex-col items-center justify-center gap-6 pb-6 text-center xs:mb-[70px]  md:mb-[88px] ml:mb-[100px]    xl:mb-[120px]">
      <h3 className="font-raleway text-xl font-bold  leading-[132%] text-textViolet">
        {t('subtitle')}
      </h3>
      <h2 className="title-gradient font-groppled font-bold xs:text-[28px] xs:leading-[160%] md:text-[32px] ml:text-5xl    ml:leading-[124%] lg:w-[1056px]">
        {t('text')}
      </h2>
    </section>
  );
};

export default Vision;
