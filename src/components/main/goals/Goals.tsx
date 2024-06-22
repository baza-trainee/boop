import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import GoalCard from './goalCard/GoalCard';
import { useTranslations, useLocale } from 'next-intl';
import GetGoalsCardsInfo from './GoalsCardInfo';

const Goals = () => {
  const t = useTranslations('Goals');
  const locale = useLocale();
  const goalsCards = GetGoalsCardsInfo();

  return (
    <section className="mb-[120px] w-full  bg-bgViolet pb-[104px]  pt-[60px]">
      <div className="container flex flex-col gap-8">
        <SectionTitle title={t('title')} />
        <ul className="flex w-full items-center justify-between">
          {goalsCards.map((el, index) => {
            return (
              <li key={index}>
                <GoalCard card={el} index={index} locale={locale} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Goals;
