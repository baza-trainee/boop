import React from 'react';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import PressAboutUsSlide from './press-about-us-slide/PressAboutUsSlide';
import { useTranslations } from 'next-intl';
import { useGetAllPressQuery } from '@/store/api/pressApi';

const PressAboutUs = () => {
  const t = useTranslations('Press_about_us');
  const { data, isFetching, isError } = useGetAllPressQuery();

  if (!data) return;
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between gap-5">
          <h2 className="title-gradient font-groppled text-3xl font-bold max-sm:text-[28px]">
            {t('title')}
          </h2>
          <div className="flex items-center gap-2">
            <CarouselButton className="press-about-us-prev-el rotate-180" />
            <CarouselButton className="press-about-us-next-el" />
          </div>
        </div>
        {data && !isError && !isFetching && (
          <Carousel
            items={data.data}
            prevEl=".press-about-us-prev-el"
            nextEl=".press-about-us-next-el"
            slidesPerView={1}
            speed={500}
            renderItem={(item) => (
              <PressAboutUsSlide
                imgSrc={item.imageLink}
                title={item.titleUA}
                text={item.textUA}
                link={item.sourceLink}
                date={item.createdAt}
              />
            )}
          />
        )}
      </div>
    </section>
  );
};

export default PressAboutUs;
