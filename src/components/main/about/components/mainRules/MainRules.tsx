import Image from 'next/image';
import React from 'react';

import { useTranslations } from 'next-intl';

const MainRules = () => {
  const t = useTranslations('About.main_rules');

  return (
    <section className="container mb-[120px] flex w-full flex-col gap-[70px] whitespace-pre-line pt-[100px]">
      <div className=" flex items-start justify-center gap-[5px] ">
        <Image
          src="/images/heroSection/hero_logo.png"
          alt=""
          width={150}
          height={87}
          className="relative"
        />
        <h1 className="text-g title-gradient relative top-[25px] w-[570px] font-groppled text-[32px] font-bold leading-[120%]">
          {t('title')}
        </h1>
      </div>
      <div className="relative flex items-start justify-between gap-6 font-raleway text-xl leading-normal text-textViolet">
        <div className="flex flex-1  flex-col  gap-6">
          <p className="w-[420px] pt-7">{t('rules.paragraph_1')}</p>
          <Image
            src="/images/mainRules/image_1.png"
            alt="image_1"
            width={960}
            height={640}
            className="relative"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 ">
          <div className="flex gap-6">
            <Image
              src="/images/mainRules/image_2.png"
              alt="image_2"
              width={306}
              height={370}
              className="min-h-[370px]"
            />
            <p className="w-[306px]">{t('rules.paragraph_2')}</p>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/images/mainRules/image_3.png"
              alt="image_3"
              width={2048}
              height={1346}
              className="relative z-10"
            />
            <p className="w-[414px]">{t('rules.paragraph_3')}</p>
          </div>
        </div>
        <Image
          src="/images/mainRules/orange_man.svg"
          alt="orange_man"
          width={168}
          height={164}
          className="absolute bottom-0 left-[75px]"
        />
      </div>
    </section>
  );
};

export default MainRules;
