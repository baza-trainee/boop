import React from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

const Founders = () => {
  const t = useTranslations('Founders');
  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isSmallScreen = useMediaQuery({
    query: '(min-width:320px) and (max-width:1023px)',
  });

  return (
    <section className="container  flex  max-w-screen-3xl   flex-col-reverse items-center justify-center gap-8 whitespace-pre bg-inherit xs:mb-[70px] md:mb-[88px] md:flex-row md:justify-between md:gap-[23px] ml:mb-[100px]  xl:mb-[120px] 4xl:justify-center 4xl:gap-0">
      <div className="flex gap-[2px] ">
        {isSmallScreen ? (
          <Image
            src="/images/founders_image_xs.png"
            alt="Founders foto"
            width={350}
            height={443}
            className=""
          />
        ) : (
          <Image
            src="/images/founders_image.png"
            alt="Founders foto"
            width={636}
            height={724}
            className=" "
          />
        )}
        {isDesktop && (
          <span className="relative -bottom-4 h-4  w-[163px] origin-top-left -rotate-90 self-end text-left font-raleway text-[12px] font-semibold leading-[132%] text-textViolet">
            {t('caption')}
          </span>
        )}
      </div>

      <div className="flex  flex-col justify-center gap-4 xs:w-full xs:pl-5 md:w-[309px] md:pl-0 ml:w-[359px] lg:w-[466px]  xl:w-[488px] 2xl:w-[526px] 4xl:w-[544px] ">
        <h3 className="font-raleway text-xl font-[500]  leading-[132%] text-mainViolet ">
          {t('subtitle')}
        </h3>
        <h2 className="title-gradient  font-groppled font-bold xs:text-[28px] xs:leading-[160%] md:text-[32px] lg:text-5xl xl:w-[500px] xl:leading-[110%]">
          {t('title')}
        </h2>
        <p className=" w-[308px] font-raleway text-xl font-bold leading-[132%] text-textViolet xl:w-[350px]">
          {t('text')}
        </p>
      </div>
    </section>
  );
};

export default Founders;
