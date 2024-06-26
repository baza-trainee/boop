import React from 'react';
// import { useTranslations } from 'next-intl';

const Partners = () => {
  // const t = useTranslations('Press_about_us');

  return (
    <section className=" pb-[120px] pt-[120px]">
      <div className="container flex flex-row w-full h-full p-[0px] font-groppled text-textViolet">
        <div className=" flex gap-[10px] flex-row p-[0px] bg-bgViolet">
          Наші друзі
          <svg className="h-[1rem] w-[5rem]">
              <use href="/icons/sprite.svg#title-line"></use>
          </svg>
        </div>
        <div className="flex gap-[10px] flex-row bg-bgYellow">
          та партнери
          <svg className="h-[1rem] w-[5rem]">
              <use href="/icons/sprite.svg#title-line"></use>
          </svg>
        </div>
      </div>
    </section>
  )

};
export default Partners;