import React from 'react';
import { galleryItems } from '../items';
import GalleryCard from './GalleryCard';
import SecondGalleryCard from './SecondGalleryCard';
import ThirdGalleryCard from './ThirdGalleryCard';

type GalleryItemProps = {
  //   card: {
  image?: string;
  text?: string;
  //   };
  index?: number;
};

const GalleryItem = ({ text, image, index }: GalleryItemProps) => {
  const firstRow = galleryItems.slice(0, 3);
  const secondRow = galleryItems.slice(3, 5);
  const thirdRow = galleryItems.slice(5, 7);
  console.log('firstRow', firstRow);
  console.log('secondRow', secondRow);
  console.log('thirdRow', thirdRow);

  return (
    <div className="flex flex-col gap-6 pt-8">
      <GalleryCard items={firstRow} />
      <SecondGalleryCard
        image={'/images/missionSection/a_girl_plays_with_a_toy_bear.png'}
      />

      <ThirdGalleryCard
        image={'/images/missionSection/a_girl_with_a_clown_nose.png'}
      />
    </div>
  );
};

export default GalleryItem;
