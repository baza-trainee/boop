'use client';
import React, { useEffect, useState, useMemo } from 'react';
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

  const { limit, decorativeIndex } = useMemo(() => {
    if (isMobile) return { limit: 3, decorativeIndex: 4 };
    if (isTablet) return { limit: 8, decorativeIndex: 4 };
    if (isDesktop) return { limit: 11, decorativeIndex: 6 };
    return { limit: 14, decorativeIndex: 8 };
  }, [isMobile, isTablet, isDesktop]);

  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items?.length) {
      setPhotos(items.slice(0, limit));
      setCurrentIndex(limit);
    }
  }, [items, limit]);

  const loadMorePhotos = () => {
    if (items) {
      const nextIndex = currentIndex + limit;
      const nextPhotos = items.slice(currentIndex, nextIndex);
      setPhotos((prevPhotos) => [...prevPhotos, ...nextPhotos]);
      setCurrentIndex(nextIndex);
    }
  };

  const showLessPhotos = () => {
    if (items) {
      setPhotos(items.slice(0, limit));
      setCurrentIndex(limit);
      const gallerySection = document.getElementById('gallery');
      gallerySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isLoadMoreDisabled = items?.length === photos.length;
  const isBtnShowed = items?.length && items?.length > limit;

  return (
    <section id="gallery" className="container mx-auto mb-[70px] md:mb-[100px] xl:mb-[120px]">
      <SectionTitle title={t('title')} />
      {isError && <p className="container text-red-600">{t('error')}</p>}
      {isFetching && <p>loading</p>}
      {!isFetching && items && (
        <GalleryList images={photos} decorativeIndex={decorativeIndex} limit={limit} />
      )}
      {isBtnShowed && (
        <div className="flex items-center justify-center pt-8">
          <SecondaryBtn
            text={isLoadMoreDisabled ? t('btnCollapse') : t('btn')}
            onClick={isLoadMoreDisabled ? showLessPhotos : loadMorePhotos}
            aria-label={isLoadMoreDisabled ? t('btnCollapseAria') : t('btnAria')}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
