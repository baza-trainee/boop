import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '../../shared/SectionTitle';
import SecondaryBtn from '../../shared/SecondaryBtn';
import { galleryItems, decorativeElements } from './Items';
import GalleryList from './galleryCard/GalleryList';

const Gallery = () => {
  const t = useTranslations('Gallery');

  return (
    <section className="container bg-inherit  pb-[120px] ">
      <SectionTitle title={t('title')} />

      <GalleryList
        images={galleryItems}
        decorativeElements={decorativeElements}
      />

      <div className="flex items-center justify-center pt-12">
        <SecondaryBtn text={t('btn')} />
      </div>
    </section>
  );
};

export default Gallery;
