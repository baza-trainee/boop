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
    <div className="flex  items-center  justify-between gap-3 md:gap-6 3xl:gap-[38px]  4xl:gap-12">
      <div className="relative h-[147px] w-[145px] rounded-full bg-bgYellow after:absolute after:inset-0 after:bottom-[2px] after:left-[2px] after:rounded-full after:border-2 after:border-yellow after:content-['']       ml:h-[169px] ml:w-[169px] xl:w-[180px] 3xl:h-[180px]">
        <Image
          src={image}
          alt=""
          fill
          className="rounded-full object-cover"
          sizes="100%"
        />
      </div>
      <div
        className={`flex w-[190px] flex-col gap-4 md:w-[348px] ml:w-[245px] ml:self-start lg:w-[372px] xl:w-[389px]`}
      >
        <h5 className="title-gradient font-groppled text-xl  font-bold leading-[170%] md:text-2xl ml:leading-[150%]">
          {title}
        </h5>
        <p className=" whitespace-pre-line font-raleway text-lg  font-normal text-textViolet ml:leading-[132%] lg:text-xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
