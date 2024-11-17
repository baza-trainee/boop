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

  const sentences = text.split('.').map((sentence) => sentence.trim()).filter(Boolean);

  const half = Math.ceil(sentences.length / 2);
  const [firstParagraph, secondParagraph] = [
    sentences.slice(0, half).join('. ') + (half > 0 ? '.' : ''),
    sentences.slice(half).join('. ') + (half < sentences.length ? '.' : ''),
  ];

  return (
    <div className="xl:pl-[110px]">
      <div className="mb-6 flex justify-between gap-5">
        <div className="md:max-w-[510px] lg:max-w-[528px] 4xl:max-w-[684px]">
          <div className="mb-8 flex items-center gap-[20px]">
            <svg className="hidden h-[1rem] w-[5rem] custom:block">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
            <h3 className="pt-2 font-groppled text-[18px] font-bold leading-[1.32] text-textViolet sm:text-[20px]">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="mb-4 [&>p:first-child]:mb-3">
              <p className="text-base leading-[1.5] text-textViolet sm:text-[18px] ml:text-xl">
                {firstParagraph}
              </p>
              <p className="text-base leading-[1.5] text-textViolet sm:text-[18px] ml:text-xl">
                {secondParagraph}
              </p>
            </div>
            <div className="hidden min-w-[200px] flex-shrink-0 basis-[35%] flex-col items-end custom:flex md:hidden">
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
                target="_blank"
                className="hidden rounded-[32px] border-2 border-solid border-yellow bg-inherit px-6 py-[18px] font-raleway text-xl font-medium leading-none text-textViolet transition-all duration-200 ease-linear hover:bg-[#FFFDEA] active:border-[#E27E00] active:bg-[#FFFDEA] disabled:cursor-not-allowed disabled:border-[#E3E3E4] disabled:bg-inherit disabled:text-[#97979A] custom:inline-block md:hidden"
              >
                {t('link_text')}
              </Link>
            </div>
          </div>
          <span className="float-right font-medium leading-[1.32] text-lightViolet custom:hidden md:block">
            {formattedDate}
          </span>
        </div>
        <div className="relative hidden max-h-[390px] w-[280px] flex-shrink-0 md:inline-block lg:max-h-[491px] lg:w-[420px] 4xl:w-[540px]">
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
        target="_blank"
        className="inline-block rounded-[32px] border-2 border-solid border-yellow bg-inherit px-6 py-[18px] font-raleway text-xl font-medium leading-none text-textViolet transition-all duration-200 ease-linear hover:bg-[#FFFDEA] active:border-[#E27E00] active:bg-[#FFFDEA] disabled:cursor-not-allowed disabled:border-[#E3E3E4] disabled:bg-inherit disabled:text-[#97979A] custom:hidden md:inline-block"
      >
        {t('link_text')}
      </Link>
    </div>
  );
};

export default PressAboutUsSlide;
