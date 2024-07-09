'use client';
import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { useTranslations } from 'next-intl';
import GetTextBlockJoin from '../assets/GetTextBlockJoin';
import { useMediaQuery } from 'react-responsive';

const WhoCanJoin = () => {
  const t = useTranslations('School');
  const textBlock = GetTextBlockJoin();

  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767.98px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024.98px)',
  });

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <>
      <SectionTitle title={t('join_title')} />
      <div className="relative flex items-end  justify-between">
        <ul
          role="list"
          className="leading-norma mt-12 pl-9 font-raleway text-base font-normal md:max-w-[331px] md:pl-8 md:text-lg ml:max-w-[481px] lg:max-w-[462px] lg:text-xl 3xl:max-w-[487px] 4xl:max-w-[602px] 4xl:pl-12"
        >
          {textBlock.map((block, index) => (
            <li
              key={index}
              className="relative mb-8 before:absolute before:left-[-36px] before:top-1/2 before:h-4 before:w-4 before:-translate-y-1/2 before:rounded-full
          last:mb-0  before:odd:bg-violet before:even:bg-red md:before:left-[-32px] 4xl:before:left-[-48px]"
            >
              <p key={index} className="mb-4 text-textViolet last:mb-0">
                {block.paragraph}
              </p>
            </li>
          ))}
        </ul>

        {isMobile ? (
          ''
        ) : (
          <div className="relative h-[322px] w-[250px] ml:h-[417px] ml:w-[328px] lg:h-[477px] lg:w-[396px] xl:h-[505px] xl:w-[484px] 3xl:h-[516px] 3xl:w-[526px] 4xl:h-[565px] 4xl:w-[544px]">
            <div className="absolute bottom-0 h-[154px] w-[250px] bg-[#50439F] ml:h-[200px] ml:w-[328px] lg:h-[224px] lg:w-[396px] xl:h-[237px] xl:w-[484px] 3xl:h-[242px] 3xl:w-[525px] 4xl:h-[265px] 4xl:w-[544px]"></div>
            <div className="absolute inset-0 left-1/2 h-[322px] w-[220px] -translate-x-1/2 bg-[url('/icons/school/man-smiling-with-fake-red-nose@2x.png')] bg-[length:220px_322px] ml:h-[417px] ml:w-[287px] ml:bg-[length:287px_417px]  lg:h-[477px] lg:w-[355px] lg:bg-[length:355px_477px] xl:h-[505px] xl:w-[357px] xl:bg-[length:357px_505px] 3xl:h-[516px]  3xl:w-[387px] 3xl:bg-[length:387px_516px] 4xl:h-[566px] 4xl:w-[401px]  4xl:bg-[length:401px_566px]"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhoCanJoin;
