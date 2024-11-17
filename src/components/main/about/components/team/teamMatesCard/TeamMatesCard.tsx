'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';

interface TeamMatesCardProps {
  imageUrl: string;
  nameUa: string;
  nameEn: string;
  nameIt: string;
}

const TeamMatesCard = ({
  imageUrl,
  nameUa,
  nameEn,
  nameIt,
}: TeamMatesCardProps) => {
  const locale = useLocale();

  const name = locale === 'ua' ? nameUa : locale === 'en' ? nameEn : nameIt;

  return (
    <div className="flex flex-row">
      <span className="relative -bottom-40 block h-6 w-4 -rotate-90 transform whitespace-nowrap font-raleway leading-[132%] text-textViolet">
        {name}
      </span>
      <div className="relative h-[415px] w-[318px] md:h-[282px] md:w-[204px] ml:h-[447px] ml:w-[306px]">
        <Image
          className="bg-yellow object-cover"
          src={imageUrl}
          fill
          sizes="100%"
          alt={name}
        />
      </div>
    </div>
  );
};

export default TeamMatesCard;
