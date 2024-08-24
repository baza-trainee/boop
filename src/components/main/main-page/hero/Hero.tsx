import { useLocale, useTranslations } from 'next-intl';

import AnimatedDivs from './components/animatedCircles/AnimatedCircles';
import HeroBg from './components/heroBg/HeroBg';
import HeroLogo from './components/heroLogo/HeroLogo';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="container relative mx-auto box-border flex max-w-screen-3xl flex-col items-center justify-center md:mb-10 ml:mb-[120px] lg:mb-10 xl:mb-10 4xl:mb-0">
      <div className="relative flex h-fit w-fit items-center justify-center">
        <AnimatedDivs />
        <div className="relative flex h-[588px] w-[608px] items-center justify-center pt-[100px] custom:h-[770px] custom:w-[869px] md:h-[810px] md:w-[869px] ml:h-[808px] ml:w-[1044px] lg:h-[990px] lg:w-[1205px] xl:h-[970px] xl:w-[1205px] 3xl:h-[860px] 3xl:w-[1530px] 4xl:h-[1105px] 4xl:w-[1920px]">
          <HeroBg />
          <div
            className={`z-10 flex flex-col items-center justify-center ${locale === 'ua' ? 'w-[237px] gap-8 md:w-[331px] ml:w-[391px]' : 'w-[265px] gap-11 md:w-[368px] md:gap-6 ml:w-[451px] 2xl:gap-3 3xl:gap-1'} `}
          >
            <HeroLogo locale={locale} />
            <h2
              className={`${locale === 'en' ? 'w-[275px]' : 'w-[245px]'} z-10 text-center font-groppled text-xl font-semibold leading-[132%] text-bgWhite md:w-[275px]`}
            >
              {t('title')}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
