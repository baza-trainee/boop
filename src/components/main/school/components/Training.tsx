import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import GetTextBlockTraining from '../assets/GetTextBlockTraining';

const Training = () => {
  const t = useTranslations('School');
  const textBlock = GetTextBlockTraining();

  return (
    <section className="relative mb-[70px] font-raleway text-xl font-normal leading-normal text-textViolet antialiased before:absolute before:block before:h-[288px] before:w-full before:bg-bgYellow before:content-[''] xs:before:top-[45px] md:mb-[100px] md:before:top-[40px] md:before:h-[435px] md:before:w-[48%] ml:before:h-[373px] lg:before:h-[378px]  xl:mb-[120px] xl:before:h-[312px] xl:before:w-1/2 4xl:before:h-[302px]">
      <div className="container mx-auto max-w-screen-3xl">
        <SectionTitle title={t('training_title')} />
        <div className="relative flex justify-between xs:flex-col">
          <svg className="absolute xs:hidden ml:-top-[8%] ml:right-[23%] ml:block lg:-top-[10%] lg:right-[50%] lg:h-[108px] lg:w-[76px] xl:right-[47%] xl:h-[114px] xl:w-[77px] 4xl:-top-[12%] ">
            <use href="/icons/school/party-hat-violet.svg#party-hat-violet"></use>
          </svg>

          <div className="flex xs:flex-col xs:gap-6 md:flex-row md:items-start md:justify-between">
            <p className="mt-6 text-base font-normal leading-normal xs:order-1 md:max-w-[293px] md:text-lg ml:mt-9 ml:max-w-[385px] lg:max-w-[510px] lg:text-xl xl:max-w-[587px] 3xl:mb-24 3xl:mt-8 4xl:max-w-[630px]">
              {t('training.text')}
            </p>
            <div className="h-fit text-base font-normal leading-normal xs:order-3 md:max-w-[310px] md:text-lg ml:max-w-[383px] lg:max-w-[466px] lg:text-xl xl:max-w-[478px] 3xl:max-w-[526px] 4xl:max-w-[686px]">
              {textBlock.map((block, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {block.paragraph}
                </p>
              ))}
            </div>
            <Image
              src="/icons/school/training_left.jpg"
              alt=""
              width={263}
              height={254}
              className="h-[285px] w-[244px] xs:order-2 xs:m-auto md:absolute md:bottom-[191px] md:h-[204px] md:w-[175px] ml:bottom-[38px] lg:h-[245px] lg:w-[213px] xl:bottom-[48px] xl:h-[257px] xl:w-[240px] 3xl:bottom-[33px] 3xl:h-[254px] 3xl:w-[263px] 4xl:bottom-0 4xl:h-[322px] 4xl:w-[295px]"
            />
            <Image
              src="/icons/school/training_right.jpg"
              alt=""
              width={349}
              height={255}
              className="h-[223px] w-[350px] xs:order-last xs:m-auto md:absolute md:bottom-0 md:left-[55px] md:h-[161px] md:w-[253px] ml:left-[200px] ml:h-[151px] ml:w-[236px] lg:left-[237px] lg:h-[209px] lg:w-[325px] xl:left-[290px] xl:h-[220px] xl:w-[332px] 3xl:left-[287px] 3xl:h-[255px] 3xl:w-[349px] 4xl:h-[239px] 4xl:w-[366px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
