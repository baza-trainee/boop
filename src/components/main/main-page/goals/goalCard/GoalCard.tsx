import Image from 'next/image';
import React from 'react';

type GoalCardProps = {
  card: { cardNumber: string; text: string; width: number; height: number };
  index: number;
  locale: string;
};

const GoalCard = ({
  card: { cardNumber, text, width, height },
  index,
  locale,
}: GoalCardProps) => {
  return (
    <div
      className={`relative flex h-[100px] items-center justify-center ${index === 0 ? (locale === 'en' ? 'w-[308px] xs:w-[361px]' : locale === 'it' ? 'w-[308px] xs:w-[361px]' : 'w-[288px]') : index === 1 ? 'w-[260px]' : index === 2 ? (locale === 'it' ? 'w-[310px] xs:w-[317px]' : 'w-[315px]') : locale === 'it' ? 'w-[165px]' : 'w-[133px]'}`}
    >
          <Image
        src={cardNumber}
        alt=""
        className="absolute"
        width={width}
        height={height}
      />
      <p className="relative z-10 pt-4 text-center  font-groppled text-xl font-bold leading-normal text-textViolet lg:pt-1">
        {text}
      </p>
    </div>
  );
};

export default GoalCard;
