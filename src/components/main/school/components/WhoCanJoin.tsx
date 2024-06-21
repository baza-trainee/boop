import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import data from '../assets/data.json';
import { useTranslations } from 'next-intl';

const WhoCanJoin = () => {
  const t = useTranslations('School');
  return (
    <>
      <SectionTitle title={t('join_title')} />
      <div className="relative flex justify-start gap-[141px]">
        <ul
          role="list"
          className="leading-norma mt-12 max-w-[487px] pl-8 font-raleway text-xl font-normal"
        >
          {data.paragraphs.map((paragraph, pIndex) => (
            <li
              key={pIndex}
              className="relative mb-8 before:absolute before:left-[-24px] before:top-1/2 before:h-4 before:w-4
          before:-translate-y-1/2  before:rounded-full last:mb-0 before:odd:bg-violet before:even:bg-red"
            >
              {paragraph.text.map((segment, sIndex) => (
                <span
                  key={sIndex}
                  className={`${segment.highlight ? 'text-yellow' : 'text-textViolet'} `}
                >
                  {segment.content}
                </span>
              ))}
            </li>
          ))}
        </ul>
        <div className="relative h-[516px] w-[526px]">
          <div className="absolute bottom-0 h-[242px] w-[525px] bg-[#50439F]"></div>
          <div className="absolute inset-0 left-1/2 h-[516px] w-[387px] -translate-x-1/2 bg-[url('/icons/school/man-smiling-with-fake-red-nose@2x.png')]  bg-[length:387px_516px]"></div>
        </div>
        <svg className="absolute right-0 top-0 h-[43px] w-[60px]">
          <use href="/icons/sprite.svg#bow-red"></use>
        </svg>
      </div>
    </>
  );
};

export default WhoCanJoin;
