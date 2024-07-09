import React from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

const Founders = () => {
  const t = useTranslations('Founders');

  return (
    <section className="container max-w-screen-3xl mx-auto mb-[120px] flex items-center justify-between whitespace-pre bg-inherit">
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
    </section>
  );
};

export default Founders;
