import Image from 'next/image';
import React from 'react';

type GalleryCardProps = {
  items: [
    {
      image: string;
      text?: string;
    },
  ];
  index?: number;
};

const GalleryCard = ({ items, index }: GalleryCardProps) => {
  //   const subGallerysList = hoverText.split('. ');

  return (
    <div className="flex justify-between gap-6">
      <Image
        src={items[0].image}
        alt=""
        width={306}
        height={477}
        className="flex-1 "
        objectFit="cover"
      />
      <Image
        src={items[1].image}
        alt=""
        width={306}
        height={477}
        className="flex-1 "
        objectFit="cover"
      />
      <div className="flex h-[477px] w-[306px] flex-1 items-center justify-center">
        <Image
          src="/images/gallerySection/purpul_triangulars.svg"
          alt=""
          width={64}
          height={50}
          className=" "
          objectFit="cover"
        />
      </div>

      <Image
        src={items[2].image}
        alt=""
        width={306}
        height={477}
        className="flex-1 "
        objectFit="cover"
      />
    </div>
  );
};

export default GalleryCard;
