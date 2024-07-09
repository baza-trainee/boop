import React from 'react';

import { useTranslations } from 'next-intl';
import MissionCard from './missionCard/MIssionCard';
import SectionTitle from '../../shared/SectionTitle';
import GetMissionCardsInfo from './MissionCardsInfo';

const Mission = () => {
  const t = useTranslations('Mission');
  const missionCards = GetMissionCardsInfo();

  return (
    <section className="mb-[120px]">
      <div className="container mx-auto max-w-screen-3xl flex flex-col gap-8">
        <SectionTitle title={t('title')} />
        <ul className="flex w-full items-center justify-between">
          {missionCards.map((el, index) => {
            return (
              <li key={index}>
                <MissionCard card={el} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Mission;
