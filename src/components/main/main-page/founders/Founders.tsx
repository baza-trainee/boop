import React from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

const Founders = () => {
  const t = useTranslations('Founders');
  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isLargeScreen = useMediaQuery({
    query: '(min-width:1920px)',
  });

  return (
    <section className="container  flex  max-w-screen-3xl   flex-col-reverse items-center justify-center gap-8 whitespace-pre bg-inherit xs:mb-[70px] md:mb-[100px] md:flex-row md:justify-between md:gap-[23px] ml:mb-[100px]  xl:mb-[120px] 4xl:justify-center 4xl:gap-[200px]">
      {!isDesktop ? (
        <Image
          src="/images/founders_image_xs.png"
          alt="Founders foto"
          width={350}
          height={443}
          className=""
        />
      ) : (
        <div className="relative ml:w-[513px] lg:w-fit">
          <Image
            src="/images/founders_image.png"
            alt="Founders_foto"
            width={isLargeScreen ? 686 : 636}
            height={isLargeScreen ? 782 : 724}
            className=" "
          />
          <span className="absolute  bottom-0 right-0 h-4 w-[163px]  origin-top-left translate-x-[calc(100%+2px)] translate-y-full -rotate-90  text-left font-raleway text-[12px] font-semibold leading-[132%] text-textViolet">
            {t('caption')}
          </span>
        </div>
      )}
      {/* {isDesktop && (
      
        )} */}

      {/* <section className="container mx-auto mb-[120px] flex max-w-screen-3xl items-center justify-between whitespace-pre bg-inherit">
        <div className="flex items-end gap-[2px]">
          <Image
            src="/images/founders_image.png"
            alt="Founders foto"
            width={636}
            height={724}
            className=" "
          />
          <span className="relative -bottom-4  h-4 w-[163px] origin-top-left -rotate-90 text-left font-raleway text-[12px] font-semibold leading-[132%] text-textViolet">
            {t('caption')}
          </span>
        </div>

        <div className="flex flex-col ">
          <h3 className="font-raleway text-xl font-[500]  leading-[132%] text-mainViolet">
            {t('subtitle')}
          </h3>
          <h2 className="title-gradient w-[500px] pb-4 font-groppled text-5xl font-bold leading-[110%]">
            {t('title')}
          </h2>
          <p className="w-[350px] font-raleway text-xl font-bold leading-[132%] text-textViolet">
            {t('text')}
          </p>
        </div>
      </section> */}

      <div className="flex  flex-col  gap-4  xs:pl-5  md:pl-0 ">
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
