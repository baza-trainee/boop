import React from 'react';

type MissionCardProps = {
  text: string;
  overlayText: string;
  cardGradient: string;
  overlayGradient: string;
};

const MissionCard = ({
  overlayText,
  text,
  cardGradient,
  overlayGradient,
}: MissionCardProps) => {
  return (
    <div className=" group relative h-[491px] w-[416px]  bg-gray-400 bg-[url('/icons/school/right-photo.png')] bg-cover bg-no-repeat">
      <div
        className="backdrop-blur-custom absolute bottom-[64px] left-0 h-[134px]  w-full  p-8 pt-6 opacity-100 transition-opacity duration-[700ms]  ease-in-out group-hover:opacity-0"
        style={{ background: cardGradient }}
      >
        <h4 className=" w-[266px] whitespace-normal text-balance break-words font-raleway text-xl font-[500] leading-[132%] text-bgWhite">
          {text}
        </h4>
      </div>
      <div
        className="bg-yellowOverlayGradient absolute left-0 top-0 h-full w-full opacity-0 transition-opacity duration-[700ms] ease-in-out  group-hover:opacity-100"
        style={{ background: overlayGradient }}
      >
        {overlayText}
      </div>
    </div>
  );
};

export default MissionCard;
