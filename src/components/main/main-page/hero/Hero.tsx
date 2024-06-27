import React from 'react';

// import { useTranslations } from 'next-intl';

const Hero = () => {
  //   const t = useTranslations('Hero');

  return (
    <section className="container mx-auto mb-[100px] flex items-center justify-center bg-blue-300 pt-[43px]">
      <div className="flex h-[733px] w-[878px] items-center justify-center border-2 border-blue-900">
        {/* <SectionTitle title={t('title')} /> */}
        Hello world!
      </div>
    </section>
  );
};

export default Hero;
