import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface FeedbackItemProps {
  idx: number;
  imgSrc: string;
  name: string;
  text: string;
}

const FeedbackItem = ({ idx, imgSrc, name, text }: FeedbackItemProps) => {
  return (
    <div className="relative pl-[120px] pt-[60px] odd:self-start even:self-end">
      <div className="absolute left-0 top-0 z-[2] w-[180px] text-center">
        <div
          className={clsx(
            'relative mb-6 h-[188px] w-full overflow-hidden rounded-full border-2 border-solid',
            idx === 0 && 'border-yellow',
            idx === 1 && 'border-red',
            idx === 2 && 'border-textViolet'
          )}
        >
          <Image
            className="object-contain"
            src={imgSrc}
            fill
            sizes="100%"
            alt={name}
          />
        </div>
        <h4 className="title-gradient font-groppled text-2xl font-bold leading-[1.5]">
          {name}
        </h4>
      </div>
      <div className="relative py-16 pl-16 pr-10">
        <Image
          src={'/images/feedback/text-bg.png'}
          alt={'background image'}
          fill
          sizes="100%"
          className="-z-[1]"
        />
        <p className="max-w-[550px] text-center">{text}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
