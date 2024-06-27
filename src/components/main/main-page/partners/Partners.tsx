import React from 'react';
// import { useTranslations } from 'next-intl';
import { partnerItems } from './partnerItems';
import PartnersCard from './partnersCard/PartnersCard';

const Partners = () => {
  // const t = useTranslations('Press_about_us');
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="flex flex-row w-full h-full items-center justify-center font-groppled text-textViolet">
        <div className="flex flex-col bg-bgViolet py-[50px] pl-[80px] gap-[32px]">
          <div className="flex gap-[10px] flex-row">
            <p>Наші друзі</p>
            <svg className="h-[1rem] w-[5rem]">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
          </div>
          <div className='flex flex-wrap gap-[24px] w-[636px]'>
            {partnerItems.map(({ url, name, img, width, height }, index) => (
              <PartnersCard url={url} name={name} img={img} key={index} width={width} height={height} />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-bgYellow py-[50px] pl-[80px] pr-[20px] gap-[32px]">
          <div className="flex gap-[10px] flex-row">
            <p>та партнери</p>
            <svg className="h-[1rem] w-[5rem]">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
          </div>
          <div className='flex flex-wrap gap-[24px] w-[636px]'>
            {partnerItems.map(({ url, name, img, width, height }, index) => (
              <PartnersCard url={url} name={name} img={img} key={index} width={width} height={height} />
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col bg-bgYellow">
          <div className="flex gap-[10px] flex-row p-[0px] pt-[70px] pl-[100px]">
            <p>та партнери</p>
            <svg className="h-[1rem] w-[5rem]">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Partners;
