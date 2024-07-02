import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { IPhoto } from '@/types/photo';

interface GalleryCardProps {
  images: IPhoto[];
  decorativeElements: JSX.Element[][];
  limit: number;
}

const GalleryList: React.FC<GalleryCardProps> = ({
  images,
  decorativeElements,
  limit,
}) => {
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

  const combinedElements = [];
  const decorativeIndices = isLargeDesktop ? [1, 4, 6] : [1, 3, 4]; // Позиции, после которых следует вставлять декоративные элементы 1530

  let decorativeIndex = 0;

  for (let i = 0; i < images.length; i++) {
    combinedElements.push(
      <div
        key={`image-${i}`}
        className="relative h-[477px] min-w-[306px] flex-1"
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

    if (
      decorativeIndex < decorativeElements.length &&
      i % limit === decorativeIndices[decorativeIndex]
    ) {
      decorativeElements[decorativeIndex].map((el, index) =>
        combinedElements.push(
          <div
            key={`decorative-${decorativeIndex}-${index}`}
            className="min-w-[306px] flex-1"
          >
            {el}
          </div>
        )
      );

      decorativeIndex = (decorativeIndex + 1) % decorativeElements.length;
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4  4xl:grid-cols-5">
      {combinedElements.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};

export default GalleryList;
