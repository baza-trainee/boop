import React from 'react';

type MissionCardProps = {
  card: {
    image: string;
    text: string;
    cardGradient: string;
    overlayGradient: string;
    hoverText: string;
  };
  index: number;
};

const MissionCard = ({
  card: { hoverText, text, cardGradient, image, overlayGradient },
  index,
}: MissionCardProps) => {
  return (
    <div
      className=" group relative h-[491px] w-[416px] bg-gray-400   bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="absolute bottom-[64px] left-0 h-[134px] w-full  p-8  pt-6 opacity-100 backdrop-blur-custom transition-opacity duration-[700ms]  ease-in-out group-hover:opacity-0"
        style={{ background: cardGradient }}
      >
        <h4
          className={`${index === 2 ? `w-[169px]` : `w-[306px]`} whitespace-pre-line font-raleway text-xl font-[500] leading-[132%] text-bgWhite`}
        >
          {text}
        </h4>
      </div>
      <div
        className={`absolute left-0 top-0 h-full w-full  opacity-0 transition-opacity duration-[700ms] ease-in-out  group-hover:opacity-100`}
        style={{ background: overlayGradient }}
      >
        {hoverText}
      </div>
    </div>
  );
};

export default MissionCard;
