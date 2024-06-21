import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import GetTextBlockTraining from '../assets/GetTextBlockTraining';

const Training = () => {
  const t = useTranslations('School');
  const textBlock = GetTextBlockTraining();

  return (
    <section className=" bg-bgWhite pb-[120px] font-raleway text-xl font-normal leading-normal text-textViolet antialiased">
      <div className="container">
        <SectionTitle title="Як проходить навчання" />
        <div className="relative flex">
          <div className="absolute -left-[120px] -z-0 h-[312px] w-[756px] bg-bgYellow">
            <svg className="absolute -top-[39px] right-[4px] h-[114px] w-[77px] rotate-[29.01deg]">
              <use href="/icons/sprite.svg#party-hat-violet"></use>
            </svg>
          </div>
          <div className="z-10 grid grid-cols-3 grid-rows-5 gap-x-6 gap-y-8 ">
            <div className="col-span-3 row-span-3 mt-8 max-w-[587px]">
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
              className="row-span-2 row-start-4 h-[254px] w-[263px]"
            />
            <Image
              src="/icons/school/training_right.jpg"
              alt=""
              width={349}
              height={255}
              className="col-span-2 row-span-2 row-start-4 h-[255px] w-[349px]"
            />
          </div>

          <div className="basis-1/2">
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
