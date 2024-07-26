import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



type PartnersCardProps = {
  url: string;
  imgSrc: string;
  name: string;
  width: number;
  height: number;
  id: number;
}
  const PartnersCard = ({ id, imgSrc, name, url, width, height }: PartnersCardProps) => {

  return(
    <div className="flex w-[152px] h-[63px] items-center  justify-center md:w-[130px] h-[68px] ml:w-[160px] h-[87px]  xl:w-[196px] h-[87px] ">
          <Link
            href={url}
            target="_blank" rel="noopener noreferrer"
            >
            <Image
            src={imgSrc}
            alt={name}
            width={width}
            height={height}
            />
          </Link>
    </div>

  )
};

export default PartnersCard;