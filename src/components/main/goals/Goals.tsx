import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import GoalCard from './goalCard/GoalCard';
import { useTranslations, useLocale } from 'next-intl';

const Goals = () => {
  const t = useTranslations('Goals');
  const locale = useLocale();

  return (
    <section className="mt-[120px] w-full  bg-bgViolet pb-[104px]  pt-[60px]">
      <div className="container flex flex-col gap-8">
        <SectionTitle title={t('title')} />
        <ul className="flex w-full items-center justify-between">
          <li className={`w-[288px]  ${locale === 'en' ? 'w-[361px]' : ''}`}>
            <GoalCard
              cardNumber={t('first.cardNumber')}
              text={t('first.text')}
            />
          </li>
          <li className="w-[264px]">
            <GoalCard
              cardNumber={t('second.cardNumber')}
              text={t('second.text')}
            />
          </li>
          <li className="w-[315px]">
            <GoalCard
              cardNumber={t('third.cardNumber')}
              text={t('third.text')}
            />
          </li>
          <li className="w-[133px]">
            <GoalCard
              cardNumber={t('fourth.cardNumber')}
              text={t('fourth.text')}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Goals;
