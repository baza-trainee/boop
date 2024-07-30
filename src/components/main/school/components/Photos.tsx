'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '../../shared/SectionTitle';

import { useGetAllPhotoQuery } from '@/store/api/photoApi';

import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import Image from 'next/image';
import Loader from '@/components/shared/loader/Loader';

const Photos = () => {
  const t = useTranslations('School');
  const { data, isFetching, isError } = useGetAllPhotoQuery();
  const items = data?.data?.filter((el) => el.location === 'school');

  if (isFetching) return <Loader />;

  return (
    <section className="container mx-auto max-w-screen-3xl pb-[90px] md:pb-[100px] xl:pb-[120px]">
      <div className="flex items-center justify-between pb-8">
        <SectionTitle title={t('photo_title')} />
        <div className="flex items-center gap-2">
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
          speed={500}
          spaceBetween={24}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          renderItem={(item, index) => (
            <div className="relative h-[450px] flex-1 sm:w-full md:h-[254px] md:w-[197px] ml:h-[365px] ml:w-[283px] lg:h-[348px] lg:w-[270px] xl:h-[380px] xl:w-[283px] 3xl:h-[412px] 3xl:w-[306px] 4xl:h-[541px] 4xl:w-[402px]">
              <Image
                src={item.imageUrl}
                alt={`photoSchool-${index + 1}`}
                fill
                className="h-auto w-full bg-[#D9D9D9] object-cover"
                sizes="(max-width: 768px) 33hw, 306px"
              />
            </div>
          )}
        />
      )}
    </section>
  );
};

export default Photos;
