import React from 'react';
import Image from 'next/image';

import { IPhoto } from '@/types/photo';

interface GalleryCardProps {
  images: IPhoto[];
  decorativeIndex: number;
  limit: number;
}

const GalleryList: React.FC<GalleryCardProps> = ({
  images,
  decorativeIndex,
  limit,
}) => {
  const combinedElements = [];

  for (let i = 0; i < images.length; i++) {
    combinedElements.push(
      <div
        key={`image-${i}`}
        className="relative h-[477px] min-w-[197px] flex-1 md:h-[287px] lg:h-[394px] xl:h-[415px] 3xl:h-[447px]"
      >
        <Image
          src={images[i].imageUrl}
          alt={`Gallery image ${i}`}
          fill
          style={{ objectFit: 'cover' }}
          className="h-full w-full"
          sizes="(max-width: 768px) 50vw,  306px"
        />
      </div>
    );

    if (i % limit === decorativeIndex) {
      combinedElements.push(
        <div className="min-w-[197px] flex-1">
          <div
            key={`yellow_man`}
            className="relative flex h-[477px] min-w-[197px]  flex-1 items-end justify-center md:h-[287px] lg:h-[394px] xl:h-[415px] 3xl:h-[447px]"
          >
            <Image
              src="/images/gallerySection/yellow_man.svg"
              alt=""
              width={218}
              height={230}
              className="absolute -bottom-6 h-auto md:h-auto md:w-[130px] ml:w-[164px] lg:w-[218px]"
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3 ml:grid-cols-4 4xl:grid-cols-5 ">
      {combinedElements.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};

export default GalleryList;
