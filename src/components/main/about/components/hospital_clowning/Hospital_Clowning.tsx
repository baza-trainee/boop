import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Hospital_Clowning = () => {
  const t = useTranslations('About.hospital_clowning');
  return (
    <section className="py-[70px]">
      <div className="container">
        <h2 className="title-gradient after:contetnt[''] mb-8 flex  items-center justify-start gap-2 py-[2.5px] font-groppled text-2xl font-bold leading-[1.7] after:block after:h-[4px] after:w-[80px] after:-translate-y-3/4 after:bg-[url('/icons/school/title_line_desk.svg')] after:bg-no-repeat after:py-1 md:py-[6px] ml:text-[32px] ml:leading-[1.6]">
          {t('title')}
        </h2>
        <div className="flex flex-col gap-6 font-raleway text-base leading-normal text-textViolet md:text-lg lg:text-xl">
          <p className="order-2 font-bold leading-[1.32] antialiased">
            {t('subtitle')}
          </p>
          <p className="order-2 ">{t('paragraph_1')}</p>
          <p className="order-2">{t('paragraph_2')}</p>
          <p className="order-4">{t('paragraph_3')}</p>
          <p className="order-4">{t('paragraph_4')}</p>
          <Image
            src="/images/about/top@2x.jpg"
            alt=""
            width={306}
            height={370}
            className="order-1 m-auto h-[417px] w-[350px] md:absolute md:bottom-[191px] md:h-[204px] md:w-[175px] ml:bottom-[38px] lg:h-[245px] lg:w-[213px] xl:bottom-[48px] xl:h-[257px] xl:w-[240px] 3xl:bottom-[33px] 3xl:h-[254px] 3xl:w-[263px] 4xl:bottom-0 4xl:h-[322px] 4xl:w-[295px]"
          />
          <Image
            src="/images/about/bottom@2x.jpg"
            alt=""
            width={306}
            height={370}
            className="order-3 m-auto h-[422px] w-[350px] md:absolute md:bottom-0 md:left-[55px] md:h-[161px] md:w-[253px] ml:left-[200px] ml:h-[151px] ml:w-[236px] lg:left-[237px] lg:h-[209px] lg:w-[325px] xl:left-[290px] xl:h-[220px] xl:w-[332px] 3xl:left-[287px] 3xl:h-[255px] 3xl:w-[349px] 4xl:h-[239px] 4xl:w-[366px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hospital_Clowning;
