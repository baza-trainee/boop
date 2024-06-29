import React from 'react';
import Image from 'next/image';

import { useLocale, useTranslations } from 'next-intl';

const Founders = () => {
  const t = useTranslations('Founders');
  //   const locale = useLocale();

  return (
    <section className="container  mb-[120px]  flex   items-center justify-between bg-inherit ">
      <div className=" flex items-end gap-[2px]">
        <Image
          src="/images/founders_image.png"
          alt=""
          width={636}
          height={724}
          className=" "
        />
        <span className=" relative -bottom-4  h-4 w-[163px] origin-top-left -rotate-90 text-left font-raleway text-[12px] font-semibold leading-[132%] text-textViolet">
          Бюро усмішок та підтримки
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-raleway text-xl font-[500]  leading-[132%] text-mainViolet">
          {/* {t('subtitle')} */}
          Засновниці проєкту
        </h3>
        <h2 className="title-gradient w-[458px] pb-3 font-groppled text-5xl font-bold leading-[110%]">
          {/* {t('text')} */}
          Ольга Булкіна та Марина Бердар
        </h2>
        <p className="w-[300px] font-raleway text-xl font-bold leading-[132%] text-textViolet">
          Дипломовані лікарняні клоунеси. Тренерки. Почесні членкині організації
          ”SOCCORSO CLOWN”
        </p>
      </div>
    </section>
  );
};

export default Founders;
