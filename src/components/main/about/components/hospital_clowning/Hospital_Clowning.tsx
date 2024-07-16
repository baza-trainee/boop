import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { Fragment } from 'react';

const Hospital_Clowning = () => {
  const t = useTranslations('About.hospital_clowning');

  const text = t('subtitle');
  const paragraphs = text.split('\n');
  return (
    <section className="py-[70px]">
      <div className="container md:px-10 ml:px-[64px]">
        <h2 className="title-gradient after:contetnt[''] mb-8 flex  items-center justify-start gap-2 py-[2.5px] font-groppled text-2xl font-bold leading-[1.7] after:block after:h-[4px] after:w-[80px] after:-translate-y-3/4 after:bg-[url('/icons/school/title_line_desk.svg')] after:bg-no-repeat after:py-1 md:py-[6px] ml:text-[32px] ml:leading-[1.6]">
          {t('title')}
        </h2>
        <div className="flex flex-col gap-6 font-raleway text-base leading-normal text-textViolet md:relative md:gap-4 md:text-lg lg:text-xl">
          <div className="order-2 text-pretty font-bold leading-[1.32] antialiased md:order-1 md:max-w-[47%]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <p className="order-2 md:order-1 md:w-1/2">{t('paragraph_1')}</p>
          <p className="order-2 md:order-1 md:w-1/2">{t('paragraph_2')}</p>
          <p className="order-4 md:order-1 md:max-w-[421px] ml:ml-[77px] ml:max-w-[455px]">
            {t('paragraph_3')}
          </p>
          <p className="order-4 block md:order-1 md:m-auto md:max-w-[510px] ml:ml-[77px] ml:max-w-[471px]">
            {t('paragraph_4')}
          </p>
          <Image
            src="/images/about/top@2x.jpg"
            alt=""
            width={306}
            height={370} //width: 283px; height: 342px;
            className="order-1 m-auto h-[417px] w-[350px] md:absolute md:right-0 md:h-[402px] md:w-[332px] ml:right-[153px]  ml:h-[342px] ml:w-[283px] lg:h-[245px] lg:w-[213px] xl:h-[257px] xl:w-[240px] 3xl:h-[254px] 3xl:w-[263px]  4xl:h-[322px] 4xl:w-[295px]"
          />
          <Image
            src="/images/about/bottom@2x.jpg"
            alt=""
            width={306}
            height={370} //width: 283px; height: 342px;
            className="order-3 h-[422px] w-[350px] md:absolute md:bottom-[150px] md:right-0 md:m-auto md:h-[293px] md:w-[243px] ml:bottom-0 ml:h-[342px]  ml:w-[283px]  lg:h-[209px] lg:w-[325px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hospital_Clowning;
