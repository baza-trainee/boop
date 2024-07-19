import React from 'react';

type GoalCardProps = {
  card: { cardNumber: string; text: string };
  index: number;
  locale: string;
};

const GoalCard = ({
  card: { cardNumber, text },
  index,
  locale,
}: GoalCardProps) => {
  return (
    <div
      className={`relative flex h-[100px] items-center justify-center ${index === 0 ? (locale === 'en' ? 'w-[308px] xs:w-[361px]' : locale === 'it' ? 'w-[308px] xs:w-[337px]' : 'w-[288px]') : index === 1 ? 'w-[260px]' : index === 2 ? (locale === 'it' ? 'w-[310px] xs:w-[317px]' : 'w-[315px]') : locale === 'it' ? 'w-[165px]' : 'w-[133px]'}`}
    >
      <h5
        className={`  absolute z-0  m-0 box-border pt-[105px] font-groppled text-[150px] font-bold leading-none text-lightVioletSecond lg:pt-0`}
      >
        {cardNumber}
      </h5>
      <p className="relative z-10  text-center font-groppled text-xl font-bold leading-normal text-textViolet">
        {text}
      </p>
    </div>
  );
};

export default GoalCard;
