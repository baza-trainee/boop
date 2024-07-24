import React from 'react';
import Image from 'next/image';

import { IPhoto } from '@/types/photo';
import AnimatedYellowMan from '../galleryAnimatedElement/AnimatedYellowMan';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({
    query: '(max-width: 767px) ',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1028px) and (max-width: 1919px)',
  });
  const isLargeScren = useMediaQuery({
    query: '(min-width: 1920px)',
  });

  const width = isLargeScren ? '250' : isDesktop ? '217' : '176';

  const combinedElements = [];

  for (let i = 0; i < images.length; i++) {
    combinedElements.push(
      <div
        key={`image-${i}`}
        className="relative h-[477px] min-w-[197px] flex-1 bg-mainViolet md:h-[287px] lg:h-[394px] xl:h-[415px] 3xl:h-[447px]"
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

    if (!isMobile && i === decorativeIndex) {
      combinedElements.push(
        <div className="relative min-w-[197px] flex-1">
          <div
            key={`yellow_man`}
            className="absolute -bottom-6 flex  h-[477px] min-w-[197px]  cursor-pointer items-end justify-end md:h-[287px] lg:left-6 lg:h-[394px] xl:h-[415px] 3xl:h-[447px]"
          >
            <AnimatedYellowMan width={width} />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="first:bg-red-500 nth-child(2n):bg-green-500 nth-child(3n):bg-blue-500 grid grid-cols-1 gap-6 pt-8 md:grid-cols-3 ml:grid-cols-4 4xl:grid-cols-5">
      {combinedElements.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};

export default GalleryList;
