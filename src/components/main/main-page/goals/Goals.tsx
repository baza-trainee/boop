import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import GoalCard from './goalCard/GoalCard';
import { useTranslations, useLocale } from 'next-intl';
import GetGoalsCardsInfo from './GoalsCardInfo';

const Goals = () => {
  const t = useTranslations('Goals');
  const locale = useLocale();
  const goalsCards = GetGoalsCardsInfo();

  return (
    <section className=" w-full  bg-bgViolet pb-10    pt-10 xs:mb-[70px] md:mb-[88px]  md:pb-[50px] ml:mb-[100px] lg:pb-[60px] lg:pt-[60px] xl:mb-[120px] xl:pb-[70px] xl:pt-[80px] 2xl:mb-[120px] 2xl:pb-[104px]">
      <div className="container flex flex-col gap-11">
        <SectionTitle title={t('title')} />
        <ul className="flex w-full flex-col items-center justify-center gap-[70px] md:flex-row md:flex-wrap md:justify-around md:gap-x-6 md:gap-y-[96px] lg:justify-between">
          {goalsCards.map((el, index) => {
            return (
              <li
                key={index}
                className="flex w-[308px] justify-center lg:w-auto"
              >
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
