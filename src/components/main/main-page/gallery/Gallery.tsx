import React from 'react';
import { galleryItems, decorativeElements } from './items';

import { useTranslations } from 'next-intl';
// import MissionCard from './missionCard/MIssionCard';
import SectionTitle from '../../shared/SectionTitle';
import SecondaryBtn from '../../shared/SecondaryBtn';
import GalleryCard from './galleryCard/GalleryCard';
import SecondGalleryCard from './galleryCard/SecondGalleryCard';
import ThirdGalleryCard from './galleryCard/ThirdGalleryCard';
import GalleryItem from './galleryCard/GalleryItem';
import GalleryList from './galleryCard/GalleryList';
// import GetMissionCardsInfo from './MissionCardsInfo';

const Gallery = () => {
  const t = useTranslations('Gallery');
  //   const missionCards = GetMissionCardsInfo();

  return (
    <section className="container bg-inherit  pb-[120px] ">
      <SectionTitle title={t('title')} />
      {/* <ul className="flex w-full items-center justify-between">
          {missionCards.map((el, index) => {
            return (
              <li key={index}>
                <MissionCard card={el} index={index} />
              </li>
            );
          })}
        </ul> */}
      {/* <div className="flex flex-col gap-6 pt-8">
        <GalleryCard image={'/images/missionSection/a_boy_in_a_mask.png'} />
        <SecondGalleryCard
          image={'/images/missionSection/a_girl_plays_with_a_toy_bear.png'}
        />
        <ThirdGalleryCard
          image={'/images/missionSection/a_girl_with_a_clown_nose.png'}
        />
      </div> */}
      {/* 
      <GalleryItem /> */}
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
