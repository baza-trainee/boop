import React from 'react';
import Image from 'next/image';

import { useLocale, useTranslations } from 'next-intl';
import AnimatedDivs from './animatedCircles/AnimatedCircles';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="container relative mx-auto box-border flex max-w-screen-3xl flex-col   items-center justify-center md:mb-10 ml:mb-[120px]  lg:mb-10 xl:mb-10 4xl:mb-0">
      <div className="relative flex h-fit w-fit items-center justify-center ">
        <AnimatedDivs />
        <div className="relative flex h-[588px] w-[567px] items-center justify-center pt-[100px]  custom:h-[770px] custom:w-[869px] md:h-[810px] md:w-[869px] ml:h-[808px]  ml:w-[996px] lg:h-[990px] lg:w-[963px] xl:h-[970px] xl:w-[974px] 3xl:h-[860px] 3xl:w-[1530px] 4xl:h-[1105px] 4xl:w-[1920px]">
          <picture>
            <source
              media="(max-width: 650px)"
              srcSet="/images/heroSection/hero_bg_xs.svg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="/images/heroSection/hero_bg_md.svg"
            />
            <source
              media="(max-width: 1279px)"
              srcSet="/images/heroSection/hero_bg_ml.svg"
            />
            <source
              media="(max-width: 2560px)"
              srcSet="/images/heroSection/hero_bg_3xl.svg"
            />

            <Image
              src="/images/heroSection/hero_bg_3xl.svg"
              alt="BOOP"
              width={1173}
              height={1375}
              className="absolute -top-[73px] left-12  z-[2] w-[567px] blur-[1px] custom:left-[100px] custom:h-[900px] custom:w-[869px] md:-top-[128px] md:left-[158px] md:h-auto md:w-[869px] ml:left-[155px] ml:top-0 ml:h-[1008px] ml:w-[868px] lg:h-[1190px] lg:w-[963px] xl:left-[190px] xl:h-[1190px] xl:w-[974px] 2xl:left-[230px] 3xl:left-[535px] 3xl:top-0 3xl:h-[1090px] 3xl:w-[996px] 4xl:left-[743px]  4xl:h-[1380px] 4xl:w-[1173px]
        "
            />
          </picture>

          <div
            className={`  z-10 flex w-[247px]  flex-col items-center justify-center px-[5px]  md:w-[341px] ml:w-[433px] ml:px-5 ${locale === 'en' ? 'gap-3' : 'gap-8'} `}
          >
            <Image
              src="/images/heroSection/hero_logo.png"
              alt=""
              width={391}
              height={227}
              className="relative z-10 "
            />
            <h2 className="z-10 w-[245px] text-center font-groppled text-xl font-semibold leading-[132%] text-bgWhite md:w-[275px]">
              {t('title')}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
