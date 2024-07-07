'use client';

import { Carousel } from '@/components/main/shared/carousel/Carousel';
import CarouselButton from '@/components/main/shared/carousel/carousel-button/CarouselButton';
import React, { useEffect, useState } from 'react';
import FeedbackItem from './feedback-item/FeedbackItem';
import SectionTitle from '@/components/main/shared/SectionTitle';
import Image from 'next/image';
import { useGetAllTestimonialsQuery } from '@/store/api/testimonialsApi';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ITestimonial } from '@/types/testimonials';

const Feedback = () => {
  const { locale } = useParams();
  const t = useTranslations('School');
  const { data, isError, isFetching } = useGetAllTestimonialsQuery();
  const [feedbackData, setFeedbackData] = useState<ITestimonial[][] | null>(
    null
  );

  const chunkArray = (data: ITestimonial[], chunkSize: number) => {
    return data.reduce<ITestimonial[][]>((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  useEffect(() => {
    if (data?.data) setFeedbackData(chunkArray(data.data, 3));
  }, [data]);

  return (
    <section className="bg-bgWhite pb-[120px] pt-[120px]">
      <div className="container">
        <div className="mb-8 flex items-center justify-between gap-5">
          <SectionTitle title={t('feedback_title')} />
          <div className="flex items-center gap-2">
            <CarouselButton className="feedback-prev-el rotate-180" />
            <CarouselButton className="feedback-next-el" />
          </div>
        </div>
        {isFetching && <p className="container">Loading...</p>}
        {isError && <p className="container">Something went wrong!</p>}
        {!isFetching && feedbackData && (
          <Carousel
            items={feedbackData}
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
                      className="-z-[1]"
                    />
                  </div>
                  <div className="flex flex-col">
                    {items.map((item, idx) => (
                      <FeedbackItem
                        key={item.id}
                        imgSrc={item.imageUrl}
                        name={
                          locale === 'ua'
                            ? item.nameUa
                            : locale === 'en'
                              ? item.nameEn
                              : item.nameIt
                        }
                        text={
                          locale === 'ua'
                            ? item.reviewUa
                            : locale === 'en'
                              ? item.reviewEn
                              : item.reviewIt
                        }
                        idx={idx}
                      />
                    ))}
                  </div>
                </div>
              );
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Feedback;
