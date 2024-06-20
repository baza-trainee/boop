import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

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
  return (
    <div className="">
      <div className="flex justify-between gap-5">
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
          <span className="float-right">{date}</span>
        </div>
        <div className="relative w-[434px]">
          <Image
            className="object-contain"
            src={imgSrc}
            fill
            sizes="100%"
            alt={title ?? ''}
          />
        </div>
      </div>
      <Link href={link} className="">
        Читати більше
      </Link>
    </div>
  );
};

export default PressAboutUsSlide;
