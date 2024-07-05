import React from 'react';

// import GoalCard from './goalCard/GoalCard';
import { useTranslations, useLocale } from 'next-intl';
import SectionTitle from '@/components/main/shared/SectionTitle';
import GetTeamCardsInfo from './GetTeamCardsInfo';
import TeamCard from './teamCard/TeamCard';
// import GetGoalsCardsInfo from './GoalsCardInfo';

const TeamStructure = () => {
  const t = useTranslations('About.team_structure');
  const locale = useLocale();
  const teamCards = GetTeamCardsInfo();

  return (
    <section className="container mb-[120px] flex w-full flex-col gap-[45px]">
      <SectionTitle title={t('title')} />

      <ul className="flex w-full items-center justify-between gap-6">
        {teamCards.map((el, index) => {
          return (
            <li key={index}>
              <TeamCard card={el} index={index} locale={locale} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TeamStructure;
