import React from 'react';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import { pressAboutUsItems } from './items';
import PressAboutUsSlide from './press-about-us-slide/PressAboutUsSlide';

const PressAboutUs = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="mb-8 flex items-center justify-between gap-5">
          <h2 className="title-gradient font-groppled text-3xl font-bold">
            Преса про нас
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
