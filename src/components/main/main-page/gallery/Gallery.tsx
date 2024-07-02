'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '../../shared/SectionTitle';
import SecondaryBtn from '../../shared/SecondaryBtn';

import GalleryList from './galleryCard/GalleryList';
import { useGetAllPhotoQuery } from '@/store/api/photoApi';
import { IPhoto } from '@/types/photo';
import { useMediaQuery } from 'react-responsive';
import { decorativeElements } from './Items';

const Gallery = () => {
  const t = useTranslations('Gallery');
  const { data, isFetching, isError } = useGetAllPhotoQuery();
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

  const items = data?.data?.filter((el) => el.location === 'gallery');
  const limit = isLargeDesktop ? 10 : 7;

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

  const isLoadMoreDisabled = items && items.length === photos.length;

  return (
    <section className="container bg-inherit  pb-[120px] ">
      <SectionTitle title={t('title')} />
      {isFetching && <p className="container">Loading...</p>}
      {isError && <p className="container">Something went wrong!</p>}

      {!isFetching && items && (
        <GalleryList
          images={photos}
          decorativeElements={decorativeElements}
          limit={limit}
        />
      )}
      <div className="flex items-center justify-center pt-12">
        <SecondaryBtn
          text={t('btn')}
          onClick={loadMorePhotos}
          disabled={isLoadMoreDisabled}
        />
      </div>
    </section>
  );
};

export default Gallery;
