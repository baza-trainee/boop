import Image from 'next/image';
import React from 'react';

import { useTranslations } from 'next-intl';

const MainRules = () => {
  const t = useTranslations('About.main_rules');

  return (
    <section className="mx-auto mb-[70px] flex w-full max-w-screen-3xl flex-col gap-[50px] whitespace-pre-line px-[20px] pt-10 md:mb-[100px] md:gap-[70px] md:px-[40px]  ml:px-[64px] xl:mb-[120px] xl:px-[80px]  2xl:px-[120px]">
      <div className=" flex flex-col items-center justify-center gap-[18px] md:flex-row md:items-start md:justify-center md:gap-[5px] ">
        <Image
          src="/images/heroSection/hero_logo.png"
          alt=""
          width={150}
          height={87}
          className="relative"
        />
        <h1 className="title-gradient relative w-[350px] text-center font-groppled text-[28px] font-bold leading-[132%] md:top-[20px] md:w-[570px]  ml:text-[32px] ml:leading-[150%]">
          {t('title')}
        </h1>
      </div>
      <div className="relative flex flex-col gap-6 font-raleway text-[16px] leading-[150%] text-textViolet md:h-[720px] md:flex-row md:items-start md:justify-between md:text-lg ml:h-fit ml:leading-normal lg:text-xl">
        <div className="flex flex-col-reverse gap-6 md:w-[421px] md:flex-col md:gap-4   ml:w-auto ml:flex-1 ml:gap-6">
          <p className="md:w-[332px] md:pt-12 ml:w-[436px] ml:pt-0 lg:w-[368px] lg:pt-2 3xl:w-[420px] 3xl:pt-10">
            {t('rules.paragraph_1')}
          </p>
          <div className="md:w-[421px] ml:w-auto">
            <Image
              src="/images/mainRules/image_1.png"
              alt="image_1"
              width={960}
              height={640}
              className="relative"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-4 ml:flex-1 ml:gap-6  ">
          <div className="flex justify-between gap-5 md:h-[471px] md:w-[242px] md:flex-col md:gap-4 ml:h-fit ml:w-[436px] ml:flex-row ml:gap-6 lg:w-full">
            <div className="flex-1 ">
              <Image
                src="/images/mainRules/image_2.png"
                alt="image_2"
                width={402}
                height={450}
                className="min-h-[212px]   "
              />
            </div>
            <p className=" flex-1 ml:w-[206px] lg:w-[270px] 3xl:w-[306px]   4xl:box-border 4xl:w-[330px] ">
              {t('rules.paragraph_2')}
            </p>
          </div>

          <div
            className="first-line: flex flex-col-reverse gap-6 md:absolute md:bottom-0 md:right-0 md:w-[708px] md:flex-row-reverse
          ml:static ml:flex-col lg:w-fit"
          >
            <div className="md:w-[421px] ml:w-[436px] lg:w-full">
              <Image
                src="/images/mainRules/image_3.png"
                alt="image_3"
                width={2048}
                height={1346}
                className="relative z-10"
              />
            </div>
            <p className="md:w-[243px] ml:w-[359px] lg:w-[414px] 4xl:w-[447px]">
              {t('rules.paragraph_3')}
            </p>
          </div>
        </div>
        <Image
          src="/images/mainRules/orange_man.svg"
          alt="orange_man"
          width={168}
          height={164}
          className="absolute bottom-0 left-[75px] hidden ml:block"
        />
      </div>
    </section>
  );
};

export default MainRules;
