import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ValueCard from './valueCard/ValueCard';
import GetValuesCardsInfo from './ValuesCardsInfo';

const Values = () => {
  const valuesCards = GetValuesCardsInfo();

  return (
    <section className="mt-[120px] flex w-full flex-col    gap-8">
      <div className="m-auto w-[1536px] px-[120px]">
        <SectionTitle title="Наші цінності" />
      </div>

      <div className="flex w-full items-center  justify-center bg-bgYellow pb-[96px] pt-[55px]">
        <ul className="flex w-[1536px] flex-wrap items-center justify-center gap-x-[271px]  gap-y-12 px-[120px]">
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
