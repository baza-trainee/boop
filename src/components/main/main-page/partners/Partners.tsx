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
      <div className="flex flex-row items-center justify-center">
        <div className="w-full h-[600px] flex flex-col bg-bgViolet py-[50px] pl-[80px] gap-[32px]">
          <div className="flex gap-[10px] flex-row">
          <SectionTitle title={t("title_1")}/>
          </div>
          <div >
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
                <div className="relative flex flex-wrap gap-[24px] w-[636px]">
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
        <div className="w-full h-[600px] flex flex-col bg-bgYellow py-[50px] pl-[80px] gap-[32px]">
          <div className="flex gap-[10px] flex-row">
          <SectionTitle title={t("title_2")}/>
          </div>
          <div >
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
                <div className="relative flex flex-wrap gap-[24px] w-[636px]">
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
