import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

interface PressAboutUsSlideProps {
  imgSrc: string;
  title: string;
  textPart1: string;
  textPart2: string;
  link: string;
  date: string;
}

const PressAboutUsSlide = ({
  imgSrc,
  title,
  textPart1,
  textPart2,
  link,
  date,
}: PressAboutUsSlideProps) => {
  const t = useTranslations('Press_about_us');

  return (
    <div className="pl-[110px]">
      <div className="mb-6 flex justify-between gap-5">
        <div className="max-w-[538px]">
          <div className="mb-8 flex items-center gap-[20px]">
            <svg className="h-[1rem] w-[5rem]">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
            <h3 className="font-groppled text-[20px] font-bold leading-[1.32] text-textViolet">
              {title}
            </h3>
          </div>
          <div className="mb-4 [&>p:first-child]:mb-3">
            <p className="text-xl leading-[1.5] text-textViolet">{textPart1}</p>
            <p className="text-xl leading-[1.5] text-textViolet">{textPart2}</p>
          </div>
          <span className="text-lightViolet float-right font-medium leading-[1.32]">
            {date}
          </span>
        </div>
        <div className="relative w-[418px] ">
          <Image
            className="bg-red object-contain"
            src={imgSrc}
            fill
            sizes="100%"
            alt={title ?? ''}
          />
        </div>
      </div>
      <Link
        href={link}
        className="inline-block rounded-[32px] border-2 border-solid border-yellow px-6 py-4 text-xl font-medium text-textViolet transition-all duration-200 ease-linear hover:bg-yellow"
      >
        {t('link_text')}
      </Link>
    </div>
  );
};

export default PressAboutUsSlide;
