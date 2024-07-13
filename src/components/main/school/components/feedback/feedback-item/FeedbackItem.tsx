import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface FeedbackItemProps {
  idx: number;
  imgSrc: string;
  name: string;
  text: string;
}

// max-md:[&>div:first-child]:even:right-0

const FeedbackItem = ({ idx, imgSrc, name, text }: FeedbackItemProps) => {
  return (
    <div className="relative pb-[21px] pl-[88px] pr-[24px] odd:self-start even:self-end max-ml:pl-[55px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:pl-[15px] sm:pt-[65px]">
      <div className="w-[180px] text-center max-ml:w-[130px] sm:absolute sm:left-0 sm:top-0 sm:z-[2]">
        <div
          className={clsx(
            'relative mb-6 h-[188px] w-full overflow-hidden rounded-full border-2 border-solid max-ml:h-[130px]',
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
      <div className="relative flex min-h-[230px] items-center justify-center py-[65px] pl-[105px] pr-[44px] max-ml:py-[45px] max-ml:pl-[85px] max-ml:pr-[30px] max-sm:px-[28px] max-sm:pb-[50px] max-sm:pt-[40px]">
        <Image
          src={'/images/feedback/text-bg.png'}
          alt={'background image'}
          fill
          sizes="100%"
          className="-z-[1]"
        />
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
          className="absolute -bottom-[20px] -left-[15px] h-[72px] w-[60px]"
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

        <p className="max-w-[530px] text-center max-lg:max-w-[450px] max-ml:max-w-[350px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeedbackItem;
