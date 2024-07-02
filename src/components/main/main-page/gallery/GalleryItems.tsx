import Image from 'next/image';

export const GalleryItems = [
  {
    image: '/images/missionSection/a_boy_in_a_mask.png',
    text: `Світлина`,
  },
  {
    image: '/images/missionSection/a_girl_plays_with_a_toy_bear.png',
    text: `Світлина`,
  },
  {
    image: '/images/missionSection/a_girl_with_a_clown_nose.png',
    text: `Світлина`,
  },
  {
    image: '/images/missionSection/a_boy_in_a_mask.png',
    text: `Світлина`,
  },
  {
    image: '/images/missionSection/a_girl_plays_with_a_toy_bear.png',
    text: `Світлина`,
  },
  {
    image: '/images/missionSection/a_girl_with_a_clown_nose.png',
    text: `Світлина`,
  },
  {
    image: '/images/missionSection/a_boy_in_a_mask.png',
    text: `Світлина`,
  },
];

export const DecorativeElements = [
  [
    <div className="flex h-[477px] w-[306px] flex-1 items-center justify-center">
      <Image
        src="/images/gallerySection/purpul_triangulars.svg"
        alt=""
        width={64}
        height={51}
        className="h-auto"
      />
    </div>,
  ],
  [
    <div className="flex h-[477px] w-[306px] flex-1 items-center justify-center">
      <Image
        src="/images/gallerySection/bow_ties.svg"
        alt=""
        width={74}
        height={40}
        className=" "
      />
    </div>,
  ],
  [
    <div className="relative flex h-[477px] w-[306px] flex-1 items-end justify-center">
      <Image
        src="/images/gallerySection/yellow_man.svg"
        alt=""
        width={218}
        height={230}
        className="absolute -bottom-6 h-auto"
      />
    </div>,
    <div className="x-2 flex h-[477px] w-[636px] flex-shrink-0 items-end ">
      <Image
        src="/images/gallerySection/orange_man.svg"
        alt=""
        width={423}
        height={365}
        className=" relative bottom-[18px] left-[51px] "
      />
    </div>,
    <div className="h-[477px]  w-[306px] flex-1"></div>,
  ],
];
