'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const MainPage = () => {
  const t = useTranslations();

  return (
    <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
      <h1 className="absolute bottom-20 left-[50%] -translate-x-[50%] text-5xl font-bold uppercase text-red-800">
        {t('hello')}
      </h1>
      <Image
        src={`/images/pennywise.jpg`}
        alt="pennywise"
        width={800}
        height={500}
      />
    </div>
  );
};

export default MainPage;
