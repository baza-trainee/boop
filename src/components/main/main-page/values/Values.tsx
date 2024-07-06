import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import ValueCard from './valueCard/ValueCard';
import GetValuesCardsInfo from './ValuesCardsInfo';
import { useTranslations } from 'next-intl';

const Values = () => {
  const t = useTranslations('Values');
  const valuesCards = GetValuesCardsInfo();

  return (
    <section className="mb-[120px] flex w-full flex-col gap-8">
      <div className="container">
        <SectionTitle title={t('title')} />
      </div>

      <div className="flex  w-full items-center  justify-center bg-bgYellow pb-[96px] pt-[55px]">
        <ul className="container flex h-[160px]  items-start justify-between  px-[120px]">
          {valuesCards.map((el, index) => {
            return (
              <li key={index}>
                <ValueCard card={el} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Values;
