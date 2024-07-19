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
      <span className="relative whitespace-nowrap w-4 h-6 font-raleway -bottom-40 block transform -rotate-90 leading-[132%] text-textViolet">
       {name}
      </span>
      <div className="relative w-[318px] h-[415px] md:w-[204px] md:h-[282px] ml:w-[306px] ml:h-[447px]">
      <Image
        className="bg-yellow object-content"
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
