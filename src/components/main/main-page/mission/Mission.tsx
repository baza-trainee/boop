import React from 'react';

import { useTranslations } from 'next-intl';
import MissionCard from './missionCard/MIssionCard';
import SectionTitle from '../../shared/SectionTitle';

const Mission = () => {
  const t = useTranslations('Goals');

  return (
    <section className="mt-[120px] w-full  bg-inherit pb-[104px]  pt-[60px]">
      <div className="container flex flex-col gap-8">
        <SectionTitle title={t('title')} />
        <ul className="flex w-full items-center justify-between">
          <li className={`  `}>
            <MissionCard
              overlayText={t('first.cardNumber')}
              text="Лікарняна клоунада,         
              програма емоційної підтримки        
              дітей в лікарні"
              cardGradient="var(--blueCardGradient)"
              overlayGradient="var(--blueOverlayGradient)"
            />
          </li>
          <li className="">
            <MissionCard
              overlayText={t('second.cardNumber')}
              text="Організація соціально-реабілітаційних заходів"
              cardGradient="var(--redCardGradient)"
              overlayGradient="var(--redOverlayGradient)"
            />
          </li>
          <li className="">
            <MissionCard
              overlayText={t('third.cardNumber')}
              text="Розбудова волонтерської спільноти"
              cardGradient="var(--yellowCardGradient)"
              overlayGradient="var(--yellowOverlayGradient)"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Mission;
