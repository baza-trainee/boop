import React from 'react';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import { pressAboutUsItems } from './items';
import PressAboutUsSlide from './press-about-us-slide/PressAboutUsSlide';
import { useTranslations } from 'next-intl';

const PressAboutUs = () => {
  const t = useTranslations('Press_about_us');

  return (
    <section className="mb-[120px]">
      <div className="container mx-auto max-w-screen-3xl">
        <div className="mb-8 flex items-center justify-between gap-5">
          <h2 className="title-gradient font-groppled text-3xl font-bold">
            {t('title')}
          </h2>
          <div className="flex items-center gap-2">
            <CarouselButton className="press-about-us-prev-el rotate-180" />
            <CarouselButton className="press-about-us-next-el" />
          </div>
        </div>
        <Carousel
          items={pressAboutUsItems}
          prevEl=".press-about-us-prev-el"
          nextEl=".press-about-us-next-el"
          slidesPerView={1}
          speed={500}
          renderItem={(item) => <PressAboutUsSlide {...item} />}
        />
      </div>
    </section>
  );
};

export default PressAboutUs;
