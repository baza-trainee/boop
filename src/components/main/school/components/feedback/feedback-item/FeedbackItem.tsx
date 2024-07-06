import Image from 'next/image';
import React from 'react';

interface FeedbackItemProps {
  id: number;
  imgSrc: string;
  name: string;
  text: string;
}

const FeedbackItem = ({ id, imgSrc, name, text }: FeedbackItemProps) => {
  return (
    <div className="odd:self-start even:self-end">
      <div className="text-center">
        <div className="relative mb-6 h-[188px] w-[180px] overflow-hidden rounded-full border-2 border-solid border-yellow">
          <Image
            className="object-contain"
            src={imgSrc}
            fill
            sizes="100%"
            alt={name}
          />
        </div>
        <p className="title-gradient font-groppled text-2xl font-bold leading-[1.5]">
          {name}
        </p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default FeedbackItem;
