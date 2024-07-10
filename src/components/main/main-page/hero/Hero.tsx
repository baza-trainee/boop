import React from 'react';
import Image from 'next/image';

import { useLocale, useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <section className="container relative mx-auto box-border flex h-[645px] max-w-screen-3xl  flex-col items-center justify-center  pt-14">
      <Image
        src="/images/heroSection/hero_bg_xs.svg"
        alt=""
        width={390}
        height={711}
        className="absolute -top-2 right-0 z-[2] h-[711px] w-[390px] "
      />
      {/* <div className="relative h-[733px] w-[878px] items-center justify-center ">
        {!isMobile && (
          <>
            <Image
              src="/images/heroSection/orange_circle.png"
              alt=""
              width={329}
              height={329}
              className="absolute left-0 top-[107px] z-0"
            />

            <Image
              src="/images/heroSection/purpul_circle.png"
              alt=""
              width={213}
              height={213}
              className="absolute  bottom-0 right-[244px] z-10"
            />
            <Image
              src="/images/heroSection/red_circle.png"
              alt=""
              width={213}
              height={213}
              className="absolute  right-0 top-0 z-10"
            />
          </>
        )} */}
      <div
        className={` flex w-[247px] flex-col items-center justify-center ${locale === 'en' ? 'gap-3' : 'gap-6'} `}
      >
        <Image
          src="/images/heroSection/hero_logo.png"
          alt=""
          width={391}
          height={227}
          className="relative z-10 px-[5px]"
        />
        <h2 className="z-10 w-[245px] text-center font-groppled text-xl font-semibold leading-[132%] text-bgWhite">
          {t('title')}
        </h2>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
