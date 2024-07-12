import React from 'react';

import { useTranslations, useLocale } from 'next-intl';
import SectionTitle from '@/components/main/shared/SectionTitle';
import GetTeamCardsInfo from './GetTeamCardsInfo';
import TeamCard from './teamCard/TeamCard';
import Image from 'next/image';

const TeamStructure = () => {
  const t = useTranslations('About.team_structure');
  const locale = useLocale();
  const teamCards = GetTeamCardsInfo();

  return (
    <section className="container relative mb-[70px] flex w-full flex-col gap-8 md:mb-[100px] md:gap-[45px] xl:mb-[120px]">
      <Image
        src="/images/teamStructure/aboutPage_bg_violet.svg"
        alt=""
        width={467}
        height={1455}
        className="absolute -top-[740px] right-0 z-0 hidden 4xl:block"
      />
      <SectionTitle title={t('title')} />

      <ul className="flex w-full flex-col items-center justify-center gap-6 md:gap-[52px] ml:flex-row ml:justify-between ml:gap-6">
        {teamCards.map((el, index) => {
          return (
            <li
              key={index}
              className="flex w-full items-center justify-center 4xl:justify-start"
            >
              <TeamCard card={el} index={index} locale={locale} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TeamStructure;
