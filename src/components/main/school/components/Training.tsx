import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import GetTextBlockTraining from '../assets/GetTextBlockTraining';

const Training = () => {
  const t = useTranslations('School');
  const textBlock = GetTextBlockTraining();

  return (
    <section className="mb-[120px] font-raleway text-xl font-normal leading-normal text-textViolet antialiased">
      <div className="container mx-auto max-w-screen-3xl">
        <SectionTitle title={t('training_title')} />
        <div className="relative flex justify-between">
          <div className="absolute -left-[120px] -z-0 h-[312px] w-[756px] bg-bgYellow">
            <svg className="absolute -right-[5%] -top-1/4 h-[114px] w-[77px]">
              <use href="/icons/school/party-hat-violet.svg#party-hat-violet"></use>
            </svg>
          </div>
          <div className=" z-10 grid grid-cols-2 grid-rows-subgrid">
            <div className=" col-span-2 mb-24 mt-8 max-w-[587px]">
              <h2 className="mb-4 font-medium subpixel-antialiased">
                {t('training.title')}
              </h2>
              <p>{t('training.text')}</p>
            </div>
            <Image
              src="/icons/school/training_left.jpg"
              alt=""
              width={263}
              height={254}
              className="row-start-2 h-[254px] w-[263px] -translate-y-8"
            />
            <Image
              src="/icons/school/training_right.jpg"
              alt=""
              width={349}
              height={255}
              className="row-start-2 h-[255px] w-[349px] -translate-x-16"
            />
          </div>

          <div className="h-fit max-w-[526px]">
            {textBlock.map((block, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {block.paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
