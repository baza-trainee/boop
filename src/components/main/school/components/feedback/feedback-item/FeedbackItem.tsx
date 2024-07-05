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
    <div className="relative pb-[32px] pl-[88px] pr-[24px] pt-[65px] odd:self-start even:self-end">
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
            className="object-cover"
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
      <div className="relative flex min-h-[220px] items-center justify-center py-[65px] pl-[105px] pr-[44px]">
        <Image
          src={'/images/feedback/text-bg.png'}
          alt={'background image'}
          fill
          sizes="100%"
          className="-z-[1]"
        />
        {/* <div className="absolute -right-[23px] -top-[22px] h-[72px] w-[60px]">
          <Image
            src={'/icons/school/feedback-decoration.svg'}
            alt={'background image'}
            fill
            sizes="100%"
            className={clsx(
              idx === 0 && '[&>svg]:fill-[#837ABB]',
              idx === 1 && '[&>svg]:fill-[#F5E9CC]',
              idx === 2 && '[&>svg]:fill-[#EA6D50]'
            )}
          />
        </div> */}
        <svg
          className="absolute -right-[23px] -top-[22px] h-[72px] w-[60px]"
          width="66"
          height="75"
          viewBox="0 0 66 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5775 0.589445L65.8597 54.0796L52.791 74.2435L0.51386 20.7548L13.5775 0.589445Z"
            fill={idx === 0 ? '#837ABB' : idx === 1 ? '#F5E9CC' : '#EA6D50'}
          />
        </svg>
        <svg
          className="absolute -bottom-[31px] -left-[25px] h-[72px] w-[60px]"
          width="66"
          height="75"
          viewBox="0 0 66 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5775 0.589445L65.8597 54.0796L52.791 74.2435L0.51386 20.7548L13.5775 0.589445Z"
            fill={idx === 0 ? '#837ABB' : idx === 1 ? '#F5E9CC' : '#EA6D50'}
          />
        </svg>

        <p className="max-w-[530px] text-center">{text}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
