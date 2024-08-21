import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import GetTextBlockTraining from '../assets/GetTextBlockTraining';

const Training = () => {
  const t = useTranslations('School');
  const textBlock = GetTextBlockTraining();
  const text = t('training.text');
  const paragraphs = text.split('\n');

  return (
    <section className="relative mb-[70px] font-raleway text-xl font-normal leading-normal text-textViolet antialiased before:absolute before:top-[45px] before:block before:h-[350px] before:w-full before:bg-bgYellow before:content-[''] xs:before:h-[288px] md:mb-[100px] md:before:top-[68px] md:before:h-[435px] md:before:w-[48%] ml:before:h-[373px] lg:before:top-[60px] lg:before:h-[378px] xl:mb-[120px] xl:before:h-[312px] xl:before:w-1/2 4xl:before:h-[302px] 4xl:before:w-[806px]">
      <div className="container mx-auto max-w-screen-3xl">
        <h2 className="title-gradient after:contetnt[''] flex items-center justify-start gap-6 py-[2.5px] font-groppled text-2xl font-bold leading-[1.6] after:hidden after:h-[4px] after:w-[80px] after:bg-no-repeat after:py-1 md:text-[28px] md:after:block md:after:-translate-y-3/4 md:after:bg-[url('/icons/school/title_line_desk.svg')] ml:text-[32px]">
          {t('training_title')}
        </h2>
        <div className="relative flex justify-between xs:flex-col">
          <svg className="z-10 ml:w-[58px] ml:h-[76px] absolute hidden ml:-top-[6%] ml:right-[49%] ml:block lg:right-[48%] lg:h-[108px] lg:w-[76px] xl:right-[46%] xl:h-[117px] xl:w-[81px] 3xl:-top-[7%] 4xl:right-[56%]">
                   <use
                  href="/icons/school/party-hat-violet.svg#party-hat-violet"
                ></use>
                  </svg>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="order-1 mt-6 max-w-[350px] text-base font-normal leading-normal md:mt-6 md:max-w-[293px] md:text-[18px] ml:mt-16 ml:max-w-[385px] lg:max-w-[510px] lg:text-[20px] xl:mt-10 xl:max-w-[587px] 3xl:mb-24 3xl:mt-8 4xl:max-w-[630px]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="order-3 h-fit text-base font-normal leading-normal md:max-w-[310px] md:text-lg md:leading-normal ml:max-w-[383px] lg:max-w-[466px] lg:text-[20px] xl:max-w-[478px] 3xl:max-w-[526px] 4xl:mb-[134px] 4xl:max-w-[686px]">
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
              className="order-2 m-auto mt-6 h-[285px] w-[244px] md:absolute md:bottom-[191px] md:h-[204px] md:w-[175px] ml:bottom-[38px] lg:h-[245px] lg:w-[213px] xl:bottom-[48px] xl:h-[257px] xl:w-[240px] 3xl:bottom-[33px] 3xl:h-[254px] 3xl:w-[263px] 4xl:bottom-0 4xl:h-[322px] 4xl:w-[295px]"
            />
            <Image
              src="/icons/school/training_right.jpg"
              alt=""
              width={349}
              height={255}
              className="order-last m-auto h-[223px] w-[350px] md:absolute md:bottom-0 md:left-[55px] md:h-[161px] md:w-[253px] ml:left-[200px] ml:h-[151px] ml:w-[236px] lg:left-[237px] lg:h-[209px] lg:w-[325px] xl:left-[281px] xl:h-[220px] xl:w-[332px] 3xl:left-[287px] 3xl:h-[255px] 3xl:w-[349px] 4xl:left-[320px] 4xl:h-[239px] 4xl:w-[366px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
