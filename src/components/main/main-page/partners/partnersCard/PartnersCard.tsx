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
    <div className=" flex w-[196px] h-[87px] items-center  justify-center">
          <Link
            href={url}>
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