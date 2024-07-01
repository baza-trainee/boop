import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface ImageProps {
  image: string;
}

interface GalleryCardProps {
  images: ImageProps[];
  decorativeElements: JSX.Element[][];
}

const GalleryList: React.FC<GalleryCardProps> = ({
  images,
  decorativeElements,
}) => {
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

  const combinedElements = [];
  const decorativeIndices = isLargeDesktop ? [1, 4, 6] : [1, 3, 4]; // Позиции, после которых следует вставлять декоративные элементы 1530
  const limit = isLargeDesktop ? 10 : 7;

  let decorativeIndex = 0;

  for (let i = 0; i < images.length; i++) {
    combinedElements.push(
      <div
        key={`image-${i}`}
        className="relative h-[477px] min-w-[306px] flex-1"
      >
        <Image
          src={images[i].image}
          alt={`Gallery image ${i}`}
          //   width={306}
          //   height={477}
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
      decorativeElements[decorativeIndex].map((el) =>
        combinedElements.push(
          <div
            key={`decorative-${decorativeIndex}`}
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
