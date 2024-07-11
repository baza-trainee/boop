import Image from 'next/image';
import React from 'react';

type TeamCardProps = {
  card: { title: string; text: string; image: string };
  index: number;
  locale: string;
};

const TeamCard = ({
  card: { title, text, image },
  index,
  locale,
}: TeamCardProps) => {
  return (
    <div className="flex items-center justify-between gap-[38px]">
      <div className="relative h-[180px] w-[180px] rounded-full bg-bgYellow after:absolute after:inset-0 after:bottom-[2px] after:left-[2px]       after:rounded-full after:border-2 after:border-yellow after:content-['']">
        <Image src={image} alt="" fill className="rounded-full object-cover" />
      </div>
      <div className={`flex w-[389px] flex-col gap-4`}>
        <h5 className="title-gradient font-groppled text-2xl font-bold leading-[150%]">
          {title}
        </h5>
        <p className=" whitespace-pre-line font-raleway text-xl font-normal leading-[132%] text-textViolet">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
