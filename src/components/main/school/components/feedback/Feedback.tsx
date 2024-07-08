'use client';

import { Carousel } from '@/components/main/shared/carousel/Carousel';
import CarouselButton from '@/components/main/shared/carousel/carousel-button/CarouselButton';
import React from 'react';
import { items } from './items';
import FeedbackItem from './feedback-item/FeedbackItem';
import SectionTitle from '@/components/main/shared/SectionTitle';
import Image from 'next/image';

const Feedback = () => {
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto max-w-screen-3xl">
        <div className="mb-8 flex items-center justify-between gap-5">
          <SectionTitle title={'Відгуки студентів Школи Клоунів'} />
          <div className="flex items-center gap-2">
            <CarouselButton className="feedback-prev-el rotate-180" />
            <CarouselButton className="feedback-next-el" />
          </div>
        </div>
        <Carousel
          items={items}
          prevEl=".feedback-prev-el"
          nextEl=".feedback-next-el"
          slidesPerView={1}
          speed={500}
          renderItem={(items) => {
            return (
              <div className="relative">
                <div className="absolute right-[97px] top-[37px] h-[192px] w-[211px]">
                  <Image
                    src={'/icons/school/yellow-buddy-feedback.svg'}
                    alt={'yellow buddy'}
                    fill
                    sizes="100%"
                  />
                </div>
                <div className="flex flex-col">
                  {items.map((item) => (
                    <FeedbackItem
                      key={item.id}
                      imgSrc={item.imgSrc}
                      name={item.name}
                      text={item.text}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
};

export default Feedback;
