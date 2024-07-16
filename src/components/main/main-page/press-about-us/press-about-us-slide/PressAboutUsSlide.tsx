import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useFormatDate } from '@/hooks/useFormatDate';

interface PressAboutUsSlideProps {
  imgSrc: string;
  title: string;
  text: string;
  link: string;
  date: Date;
}

const PressAboutUsSlide = ({
  imgSrc,
  title,
  text,
  link,
  date,
}: PressAboutUsSlideProps) => {
  const t = useTranslations('Press_about_us');
  const formattedDate = useFormatDate(date, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const sentences = text
    .split('.')
    .filter((sentence) => sentence.trim().length > 0);

  const half = Math.floor(sentences.length / 2);

  const firstParagraph = sentences.slice(0, half).join('. ') + '.';
  const secondParagraph = sentences.slice(half).join('. ') + '.';

  return (
    <div className="xl:pl-[110px]">
      <div className="mb-6 flex justify-between gap-5">
        <div className="max-w-[684px] max-3xl:max-w-[528px] max-ml:max-w-[510px] max-md:max-w-none">
          <div className="mb-8 flex items-center gap-[20px]">
            <svg className="h-[1rem] w-[5rem] max-custom:hidden">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
            <h3 className="font-groppled text-[20px] font-bold leading-[1.32] text-textViolet max-sm:text-[18px]">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="mb-4 [&>p:first-child]:mb-3">
              <p className="text-xl leading-[1.5] text-textViolet max-ml:text-[18px] max-sm:text-base">
                {firstParagraph}
              </p>
              <p className="text-xl leading-[1.5] text-textViolet max-ml:text-[18px] max-sm:text-base">
                {secondParagraph}
              </p>
            </div>
            <div className="flex min-w-[200px] flex-shrink-0 basis-[35%] flex-col items-end max-custom:hidden md:hidden">
              <span className="mb-4 text-right font-medium leading-[1.32] text-lightViolet">
                {formattedDate}
              </span>
              <div className="relative mb-6 h-[280px] w-full">
                <Image
                  className="bg-red object-cover"
                  src={imgSrc}
                  fill
                  sizes="100%"
                  alt={title ?? ''}
                />
              </div>
              <Link
                href={link}
                className="inline-block rounded-[32px] border-2 border-solid border-yellow px-[29px] py-4 text-xl font-medium text-textViolet transition-all duration-200 ease-linear hover:bg-yellow"
              >
                {t('link_text')}
              </Link>
            </div>
          </div>
          <span className="float-right font-medium leading-[1.32] text-lightViolet max-md:hidden max-custom:block">
            {formattedDate}
          </span>
        </div>
        <div className="relative w-[537px] flex-shrink-0 max-3xl:max-h-[491px] max-3xl:w-[420px] max-ml:max-h-[390px] max-ml:w-[280px] max-md:hidden">
          <Image
            className="bg-red object-cover"
            src={imgSrc}
            fill
            sizes="100%"
            alt={title ?? ''}
          />
        </div>
      </div>
      <Link
        href={link}
        className="inline-block rounded-[32px] border-2 border-solid border-yellow px-6 py-4 text-xl font-medium text-textViolet transition-all duration-200 ease-linear hover:bg-yellow max-md:hidden max-custom:inline-block max-sm:px-[26.5px] max-sm:py-3"
      >
        {t('link_text')}
      </Link>
    </div>
  );
};

export default PressAboutUsSlide;
