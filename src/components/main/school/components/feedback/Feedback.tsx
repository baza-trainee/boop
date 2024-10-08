'use client';

import { Carousel } from '@/components/main/shared/carousel/Carousel';
import CarouselButton from '@/components/main/shared/carousel/carousel-button/CarouselButton';
import { useCallback, useEffect, useState } from 'react';
import FeedbackItem from './feedback-item/FeedbackItem';
import SectionTitle from '@/components/main/shared/SectionTitle';
import { useGetAllTestimonialsQuery } from '@/store/api/testimonialsApi';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ITestimonial } from '@/types/testimonials';
import AnimatedFeedbackMan from './yellow-buddy/AnimatedFeedbackMan';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

const Feedback = () => {
  const { locale } = useParams();
  const t = useTranslations('School');
  const { data, isError, isFetching } = useGetAllTestimonialsQuery();
  const [feedbackData, setFeedbackData] = useState<ITestimonial[][] | null>(
    null
  );

  const isDecorHidden = useMediaQuery({
    query: '(max-width: 830px)',
  });

  const chunkArray = useCallback((data: ITestimonial[], chunkSize: number) => {
    return data.reduce<ITestimonial[][]>((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  }, []);

  useEffect(() => {
    if (data?.data && window.innerWidth > 430) {
      setFeedbackData(chunkArray(data.data, 3));
    } else if (data?.data && window.innerWidth <= 430) {
      setFeedbackData(chunkArray(data.data, 1));
    }
  }, [data]);

  if (!feedbackData) return;
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto max-w-screen-3xl">
        <div className="mb-8 flex items-center justify-between gap-5">
          <SectionTitle
            className="max-md:[&>svg]:hidden"
            title={t('feedback_title')}
          />
          {feedbackData?.length > 1 && (
            <div className="flex items-center gap-2">
              <CarouselButton className="feedback-prev-el rotate-180" />
              <CarouselButton className="feedback-next-el" />
            </div>
          )}
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
            renderItem={(items, index) => {
              return (
                <div className="relative">
                  <AnimatedFeedbackMan
                    index={index}
                    className={clsx(
                      'absolute right-[97px] top-[37px] h-[192px] w-[211px] cursor-pointer max-lg:right-[0] max-lg:h-[179px] max-lg:w-[160px]',
                      isDecorHidden && 'hidden'
                    )}
                  />
                  <div className="flex flex-col max-md:gap-4">
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
