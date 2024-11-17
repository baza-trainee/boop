'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

import { useGetAllPhotoQuery } from '@/store/api/photoApi';
import { IPhoto } from '@/types/photo';

import SectionTitle from '../../shared/SectionTitle';
import SecondaryBtn from '../../shared/SecondaryBtn';
import GalleryList from './galleryList/GalleryList';

const Gallery = () => {
  const t = useTranslations('Gallery');
  const { data, isFetching, isError } = useGetAllPhotoQuery();
  const items = data?.data?.filter((el) => el.location === 'gallery');

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1919px)',
  });

  let limit: number;
  let decorativeIndex: number;

  switch (true) {
    case isMobile:
      limit = 3;
      decorativeIndex = 4;
      break;
    case isTablet:
      limit = 8;
      decorativeIndex = 4;
      break;
    case isDesktop:
      limit = 11;
      decorativeIndex = 6;
      break;
    default:
      limit = 14;
      decorativeIndex = 8;
  }

  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      setPhotos(items.slice(0, limit));
      setCurrentIndex(limit);
    }
  }, [items?.length]);

  const loadMorePhotos = () => {
    if (items) {
      const nextIndex = currentIndex + limit;
      const nextPhotos = items.slice(currentIndex, nextIndex);
      setPhotos((prevPhotos) => [...prevPhotos, ...nextPhotos]);
      setCurrentIndex(nextIndex);
    }
  };

  const scrollToStartSection = () => {
    const nextSection = document.getElementById('gallery');
    if (nextSection) {
      const nextSectionTop =
        nextSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: nextSectionTop - 100,
        behavior: 'smooth',
      });
    }
  };

  const showLessPhotos = () => {
    if (items) {
      setPhotos(items.slice(0, limit));
      setCurrentIndex(limit);
    }

    scrollToStartSection();
  };

  const isLoadMoreDisabled = items && items.length === photos.length;
  const isBtnShowed = items && items.length > limit;

  return (
    <section
      id="gallery"
      className="container mx-auto mb-[70px] md:mb-[100px] xl:mb-[120px]"
    >
      <SectionTitle title={t('title')} />
      {isError && <p className="container">Something went wrong!</p>}
      {isFetching && <p>Loading...</p>}
      {!isFetching && items && (
        <GalleryList
          images={photos}
          decorativeIndex={decorativeIndex}
          limit={limit}
        />
      )}
      <div className="flex items-center justify-center pt-8">
        {isBtnShowed &&
          (isLoadMoreDisabled ? (
            <SecondaryBtn text={t('btnCollapse')} onClick={showLessPhotos} />
          ) : (
            <SecondaryBtn text={t('btn')} onClick={loadMorePhotos} />
          ))}
      </div>
    </section>
  );
};

export default Gallery;