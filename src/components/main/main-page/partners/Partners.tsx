import React from 'react';
import { useTranslations } from 'next-intl';
import { partnerItems } from './partnerItems';
import PartnersCard from './partnersCard/PartnersCard';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import SectionTitle from '../../shared/SectionTitle';


const Partners = () => {
  const t = useTranslations('Partners');
  return (
    <section className="mb-[120px]">
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
          <div className="w-full h-[390px] flex flex-col bg-bgViolet gap-[24px] py-[15px] pl-[8px] ml:pl-10 xl:h-[376px] xl:py-[50px] xl:pl-[80px] xl:gap-[32px]">
          <div className="flex gap-[10px] flex-row">
          <SectionTitle title={t("title_1")}/>
          </div>
          <div className="overflow-y-hidden">
          <Carousel
              autoHeight={true}
              loop={true}
              items={partnerItems}
              prevEl=".partners-prev-el"
              nextEl=".partners-next-el"
              slidesPerView={1}
              direction="vertical"
              renderItem={(partnerItems) => {
                return(
                  <div className="relative flex flex-wrap gap-[24px] w-[350px]  ml:w-[436px] xl:w-[636px] 4xl:w-[828px]">
                  {partnerItems.map((item) => (
                    <PartnersCard
                      key={item.id}
                      imgSrc={item.imgSrc}
                      name={item.name}
                      id={item.id}
                      width={item.width}
                      height={item.height}
                      url={item.url}
                    />
                    ))}
                    <div className="absolute bottom-4 right-0 flex flex-col gap-[5px]">
                    <CarouselButton  className="partners-prev-el -rotate-90 " />
                    <CarouselButton  className="partners-next-el rotate-90" />
                    </div>
                </div>
                )}}
              />
          </div>
        </div>
        <div className="w-full h-[390px] flex flex-col bg-bgYellow gap-[24px] py-[15px] pl-[8px] ml:pl-10  xl:h-[376px] xl:py-[50px] xl:pl-[80px] xl:gap-[32px]">
          <div className="flex gap-[10px] flex-row">
          <SectionTitle title={t("title_2")}/>
          </div>
          <div className="overflow-y-hidden">
          <Carousel
              autoHeight={true}
              loop={true}
              items={partnerItems}
              prevEl=".partners-yellow-prev-el"
              nextEl=".partners-yellow-next-el"
              slidesPerView={1}
              direction="vertical"
              renderItem={(partnerItems) => {
                return(
                  <div className="relative flex flex-wrap gap-[24px] w-[350px] ml:w-[436px] xl:w-[636px]  4xl:w-[828px]">
                  {partnerItems.map((item) => (
                    <PartnersCard
                      key={item.id}
                      imgSrc={item.imgSrc}
                      name={item.name}
                      id={item.id}
                      width={item.width}
                      height={item.height}
                      url={item.url}
                    />
                    ))}
                    <div className="absolute bottom-4 right-0 flex flex-col gap-[5px]">
                    <CarouselButton  className="partners-yellow-prev-el -rotate-90" />
                    <CarouselButton  className="partners-yellow-next-el rotate-90" />
                    </div>
                </div>
                )}}
              />
          </div>
        </div>

      </div>
    </section>
  );
};
export default Partners;
