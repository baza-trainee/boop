import Image from 'next/image';
import React from 'react';

type GalleryCardProps = {
  //   card: {
  image: string;
  text?: string;
  //   };
  index?: number;
};

const SecondGalleryCard = ({ text, image, index }: GalleryCardProps) => {
  //   const subGallerysList = hoverText.split('. ');

  return (
    <div className="flex justify-between gap-6">
      <Image
        src={image}
        alt=""
        width={306}
        height={477}
        className="flex-1 "
        objectFit="cover"
      />

      <div className="flex h-[477px] w-[306px] flex-1 items-center justify-center">
        <Image
          src="/images/gallerySection/bow_ties.svg"
          alt=""
          width={74}
          height={40}
          className=" "
          objectFit="cover"
        />
      </div>

      <Image
        src={image}
        alt=""
        width={306}
        height={477}
        className="flex-1 "
        objectFit="cover"
      />
      <div className="relative flex h-[477px] w-[306px] flex-1 items-end justify-center">
        <Image
          src="/images/gallerySection/yellow_man.svg"
          alt=""
          width={216}
          height={192}
          className="absolute -bottom-6 "
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default SecondGalleryCard;
