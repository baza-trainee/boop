'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '../../shared/SectionTitle';

import { useGetAllPhotoQuery } from '@/store/api/photoApi';
import { useMediaQuery } from 'react-responsive';

import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import Image from 'next/image';

const Photos = () => {
  const t = useTranslations('School');
  const { data, isFetching, isError } = useGetAllPhotoQuery();
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });
  const isSmallDesktop = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1350px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 427px) and (max-width: 1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 426px) ',
  });

  const items = data?.data?.filter((el) => el.location === 'school');
  const limit = isLargeDesktop
    ? 5
    : isSmallDesktop
      ? 3
      : isTablet
        ? 2
        : isMobile
          ? 1
          : 4;

  return (
    <section className="container bg-bgWhite  pb-[120px] ">
      <div className="flex items-center justify-between pb-8">
        <SectionTitle title={t('photo_title')} />
        <div className="flex items-center  gap-2">
          <CarouselButton className="photos-prev-el rotate-180" />
          <CarouselButton className="photos-next-el" />
        </div>
      </div>

      {isFetching && <p className="container">Loading...</p>}
      {isError && <p className="container">Something went wrong!</p>}

      {!isFetching && items && (
        <Carousel
          items={items}
          prevEl=".photos-prev-el"
          nextEl=".photos-next-el"
          slidesPerView={limit}
          speed={500}
          spaceBetween={24}
          renderItem={(item, index) => (
            <div className="relative h-[412px]  flex-1  sm:w-full md:w-[306px]">
              <Image
                src={item.imageUrl}
                alt={`photoSchool-${index + 1}`}
                fill
                className="h-auto object-cover"
                sizes="(max-width: 768px) 50hw,  306px"
              />
            </div>
          )}
        />
      )}
    </section>
  );
};

export default Photos;
