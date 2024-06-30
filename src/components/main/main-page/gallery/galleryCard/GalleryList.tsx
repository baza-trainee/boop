import React from 'react';
import Image from 'next/image';

interface ImageProps {
  image: string;
}

interface GalleryCardProps {
  images: ImageProps[];
  decorativeElements: JSX.Element[];
}

const GalleryList: React.FC<GalleryCardProps> = ({
  images,
  decorativeElements,
}) => {
  const combinedElements = [];

  const decorativeIndices = [1, 3, 4, 4, 4]; // Позиции, после которых следует вставлять декоративные элементы
  let decorativeIndex = 0;

  for (let i = 0; i < images.length; i++) {
    combinedElements.push(
      <div key={`image-${i}`} className="h-[477px] w-[306px]">
        <Image
          src={images[i].image}
          alt={`Gallery image ${i}`}
          width={306}
          height={477}
          className="h-full w-full"
        />
      </div>
    );

    //     while (
    //       decorativeIndex < decorativeIndices.length &&
    //       i === decorativeIndices[decorativeIndex]
    //     ) {
    //       combinedElements.push(
    //         <div
    //           key={`decorative-${decorativeIndex}`}
    //           className="h-[477px] w-[306px]"
    //         >
    //           {decorativeElements[decorativeIndex]}
    //         </div>
    //       );
    //       decorativeIndex++;
    //     }
    //   }

    //     if (
    //       decorativeIndex < decorativeElements.length &&
    //       i % 6 === decorativeIndices[decorativeIndex]
    //     ) {
    //       combinedElements.push(
    //         <div
    //           key={`decorative-${decorativeIndex}`}
    //           className="min-w-[306px] flex-1"
    //         >
    //           {decorativeElements[decorativeIndex]}
    //         </div>
    //       );
    //       decorativeIndex = (decorativeIndex + 1) % decorativeElements.length;
    //     }
    //   }

    if (i % 7 === 1) {
      combinedElements.push(
        <div key={`decorative-${0}`} className="min-w-[306px] flex-1">
          {decorativeElements[0]}
        </div>
      );
    } else if (i % 7 === 3) {
      combinedElements.push(
        <div key={`decorative-${i}`} className="min-w-[306px] flex-1">
          {decorativeElements[1]}
        </div>
      );
    } else if (i % 7 === 4) {
      combinedElements.push(
        <div key={`decorative-${i}`} className="min-w-[306px] flex-1">
          {decorativeElements[2]}
        </div>
      );
      combinedElements.push(
        <div key={`decorative-${i}`} className="min-w-[306px] flex-1">
          {decorativeElements[3]}
        </div>
      );
      combinedElements.push(
        <div key={`decorative-${i}`} className="min-w-[306px] flex-1">
          {decorativeElements[4]}
        </div>
      );
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
