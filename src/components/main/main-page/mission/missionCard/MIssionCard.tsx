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
  const subMissionsList = hoverText.split('. ');

  return (
    <div
      className=" bg-gray-[#D9D9D9] group relative h-[491px] w-[416px] cursor-pointer   bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="absolute bottom-[64px] left-0 h-[134px] w-full  p-8  pt-6 opacity-100 backdrop-blur-custom transition-opacity duration-[700ms]  ease-in-out group-hover:opacity-0"
        style={{ background: cardGradient }}
      >
        <h4
          className={`${index === 2 ? `w-[169px]` : index === 1 ? `w-[266px]` : `w-[306px]`} whitespace-pre-line font-raleway text-xl font-[500] leading-[132%] text-bgWhite`}
        >
          {text}
        </h4>
      </div>
      <div
        className={`absolute left-0 top-0 flex h-full  w-full flex-col gap-4 px-8 pb-6 pt-[72px] opacity-0  transition-opacity duration-[700ms] ease-in-out group-hover:opacity-100`}
        style={{ background: overlayGradient }}
      >
        <h3
          className={`${index === 2 ? `w-[178px]` : index === 1 ? `w-[330px]` : `w-[361px]`} whitespace-pre-line font-raleway text-2xl font-[500] leading-[120%] text-bgWhite`}
        >
          {text}
        </h3>
        <ul className="flex flex-col gap-2 whitespace-pre-line font-raleway text-xl leading-[130%] text-bgWhite">
          {subMissionsList.map((el, index) => {
            return (
              <li key={index}>
                <h4>{el}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MissionCard;
