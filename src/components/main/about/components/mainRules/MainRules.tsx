import Logo from '@/components/main/footer/Logo/Logo';
import Image from 'next/image';
import React from 'react';

// import { useTranslations } from 'next-intl';
// import SectionTitle from '@/components/main/shared/SectionTitle';

const MainRules = () => {
  //   const t = useTranslations('About.team_structure');

  return (
    <section className="container mb-[120px] flex w-full flex-col gap-12 pt-[100px]">
      <div className="flex items-start justify-center gap-[5px] pb-[70px]">
        <Image
          src="/images/heroSection/hero_logo.png"
          alt=""
          width={150}
          height={87}
          className="relative"
        />
        <h1 className="text-g title-gradient relative top-[25px] w-[570px] font-groppled text-[32px] font-bold leading-[120%]">
          – робимо так, щоб дитинство тривало незалежно від обставин
        </h1>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default MainRules;
