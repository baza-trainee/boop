import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


type PartnersCardProps = {
  url: string;
  img: string;
  name: string;
  width: number;
  height: number;
}
const PartnersCard: React.FC<PartnersCardProps> = ({url={}, img, width, height, name}) =>{

  return(
    <div className=" flex w-[196px] h-[87px] items-center  justify-center">
          <Link
            href={url}>
            <Image
            src={img}
            alt={name}
            width={width}
            height={height}/>
          </Link>
    </div>

  )
};

export default PartnersCard;