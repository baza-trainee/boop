import React from 'react';

type GoalCardProps = {
  text: string;
  cardNumber: string;
};

const GoalCard = ({ cardNumber, text }: GoalCardProps) => {
  return (
    <div className="relative h-[93px] ">
      <h5 className="text-lightViolet absolute -top-[70px] right-1/2 z-0 translate-x-1/2 transform font-groppled text-[150px] font-bold leading-normal">
        {cardNumber}
      </h5>
      <p className="relative z-10 text-center font-groppled text-xl font-bold leading-normal text-textViolet">
        {text}
      </p>
    </div>
  );
};

export default GoalCard;
