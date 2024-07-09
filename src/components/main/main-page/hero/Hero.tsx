import React from 'react';
import Image from 'next/image';

import { useLocale, useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="container mx-auto max-w-screen-3xl box-border flex h-[876px] items-center justify-center bg-inherit">
      <Image
        src="/images/hero-bg-image.svg"
        alt=""
        width={996}
        height={1090}
        className="absolute right-0 top-0 z-[2]"
      />
      <div className="relative h-[733px] w-[878px] items-center justify-center ">
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
        <div
          className={`flex flex-col items-center ${locale === 'en' ? 'gap-3' : 'gap-6'} pt-[172px]`}
        >
          <Image
            src="/images/heroSection/hero_logo.png"
            alt=""
            width={391}
            height={227}
            className="relative z-10"
          />
          <h2 className="z-10 w-[275px] text-center font-groppled text-xl font-semibold leading-[132%] text-bgWhite">
            {t('title')}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
