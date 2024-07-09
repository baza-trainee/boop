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
      className={`relative flex h-[93px] items-center justify-center ${index === 0 ? (locale === 'en' ? 'w-[308px] ml:w-[361px]' : 'w-[288px]') : index === 1 ? 'w-[260px]' : index === 2 ? 'w-[315px]' : 'w-[133px]'}`}
    >
      <h5
        className={`absolute  z-0  font-groppled text-[150px] font-bold leading-normal text-lightVioletSecond `}
      >
        {cardNumber}
      </h5>
      <p className="relative z-10 text-center font-groppled text-xl font-bold leading-normal text-textViolet">
        {text}
      </p>
    </div>
  );
};

export default GoalCard;
