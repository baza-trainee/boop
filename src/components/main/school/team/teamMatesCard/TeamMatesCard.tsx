// // import { useTranslations } from "next-intl";
import Image from "next/image";
import React from 'react';

interface TeamMatesCardProps {
  imgSrc: string;
  name: string;

}

const TeamMatesCard = ({
  imgSrc,
  name,

}: TeamMatesCardProps) => {
  // const t = useTranslations('Team');

  return (
    <div className="flex flex-row">
      <span className=" relative whitespace-nowrap w-4 h-6 font-raleway -bottom-40 block transform -rotate-90 leading-[132%]">
       {name}
      </span>
      <div className="relative w-[306px] h-[447px] ">
      <Image
        className="bg-yellow object-contain"
        src={imgSrc}
        fill
        sizes="100%"
        alt={name}
        />
    </div>
        </div>
  )
};

export default TeamMatesCard;
