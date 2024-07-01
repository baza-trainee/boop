import Image from 'next/image';
import React from 'react';

type GalleryCardProps = {
  //   card: {
  image: string;
  text?: string;
  //   };
  index?: number;
};

const ThirdGalleryCard = ({ text, image, index }: GalleryCardProps) => {
  //   const subGallerysList = hoverText.split('. ');

  return (
    <div className="relative flex  justify-between gap-6">
      <div className=" flex h-[477px]  flex-1 items-end ">
        <Image
          src="/images/gallerySection/orange_man.svg"
          alt=""
          width={423}
          height={365}
          className="absolute bottom-[18px] left-[51px] w-[423px]"
        />
      </div>
      <div className="flex-1"></div>
      {/* <div className="flex  justify-between gap-6"> */}
      <Image
        src={image}
        alt=""
        width={306}
        height={477}
        objectFit="cover"
        className=" flex-1"
      />
      <Image
        src={image}
        alt=""
        width={306}
        height={477}
        objectFit="cover"
        className="flex-1 "
      />
      {/* </div> */}
    </div>
  );
};

export default ThirdGalleryCard;
