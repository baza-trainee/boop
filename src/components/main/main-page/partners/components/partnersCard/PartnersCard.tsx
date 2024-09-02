import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PartnersCardProps = {
  url: string;
  imgSrc: string;
  name: string;
  width: number;
  height: number;
  id?: number;
};
const PartnersCard = ({
  imgSrc,
  name,
  url,
  width,
  height,
}: PartnersCardProps) => {
  return (
    <div className="flex h-[63px] w-[152px] items-center justify-center md:h-[68px] md:w-[130px] ml:h-[87px] ml:w-[160px] xl:h-[87px] xl:w-[196px]">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image src={imgSrc} alt={name} width={width} height={height} />
      </Link>
    </div>
  );
};

export default PartnersCard;
