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
      className={`relative h-[93px] ${index === 0 ? (locale === 'en' ? 'w-[361px]' : 'w-[288px]') : index === 1 ? 'w-[264px]' : index === 2 ? 'w-[315px]' : 'w-[133px]'}`}
    >
      <h5 className="absolute -top-[70px] right-1/2 z-0 translate-x-1/2 transform font-groppled text-[150px] font-bold leading-normal text-lightVioletSecond">
        {cardNumber}
      </h5>
      <p className="relative z-10 text-center font-groppled text-xl font-bold leading-normal text-textViolet">
        {text}
      </p>
    </div>
  );
};

export default GoalCard;
