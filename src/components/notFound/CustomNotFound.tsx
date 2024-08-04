import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const CustomNotFound = () => {
  const t = useTranslations('Error');

  return (
    <div className="h-full bg-bgWhite bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-left-top bg-no-repeat px-10 pb-[350px] pt-[120px] md:pt-[200px] 3xl:pb-[72px]">
      <h2 className="title-gradient mb-6 bg-clip-text text-center font-groppled text-3xl font-bold leading-[1.3] md:leading-[1.7] xl:text-5xl">
        {t('title')}
      </h2>
      <p className="text-center text-xl font-medium leading-[1.32] text-textViolet">
        {t('text')}
      </p>
      <div className="mb-[65px] flex items-center items-baseline justify-center">
        <Image
          src="/icons/404/404.svg"
          alt="Clown"
          width={562}
          height={209}
          className="mt-[65px]"
        />
      </div>
      <Link
        href="/"
        rel="noopener noreferrer"
        className="m-auto block w-full max-w-[193px] rounded-[32px] bg-red py-5 text-center font-raleway text-xl font-bold leading-none text-[#ffffff]"
      >
        {t('btn')}
      </Link>
    </div>
  );
};
