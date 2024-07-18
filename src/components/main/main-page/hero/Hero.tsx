import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

import AnimatedDivs from './components/animatedCircles/AnimatedCircles';
import HeroBg from './components/heroBg/HeroBg';
import HeroLogo from './components/heroLogo/HeroLogo';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="container relative mx-auto box-border flex max-w-screen-3xl flex-col   items-center justify-center md:mb-10 ml:mb-[120px]  lg:mb-10 xl:mb-10 4xl:mb-0">
      <div className="relative flex h-fit w-fit items-center justify-center ">
        <AnimatedDivs />
        <div className="relative flex h-[588px] w-[567px] items-center justify-center pt-[100px]  custom:h-[770px] custom:w-[869px] md:h-[810px] md:w-[869px] ml:h-[808px]  ml:w-[996px] lg:h-[990px] lg:w-[963px] xl:h-[970px] xl:w-[974px] 3xl:h-[860px] 3xl:w-[1530px] 4xl:h-[1105px] 4xl:w-[1920px]">
          <HeroBg />
          <div
            className={`z-10 flex w-[247px]  flex-col items-center justify-center px-[5px]  md:w-[341px] ml:w-[433px] ml:px-5 ${locale === 'en' ? 'gap-3' : 'gap-8'} `}
          >
            <HeroLogo />
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
