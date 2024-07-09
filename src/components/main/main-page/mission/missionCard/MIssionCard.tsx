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
      className="bg-gray-[#D9D9D9] group relative w-[280px] cursor-pointer bg-cover bg-no-repeat xs:h-[366px]  ml:w-full    lg:h-[491px] 4xl:h-[610px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="absolute bottom-0 left-0 h-[134px] w-full p-8  opacity-100 backdrop-blur-custom  transition-opacity duration-[700ms] ease-in-out group-hover:opacity-0 xs:px-4  lg:bottom-[64px] 2xl:pt-6"
        style={{ background: cardGradient }}
      >
        <h3
          className={`${index === 2 ? `w-[169px]` : index === 1 ? `w-[255px] 2xl:w-[266px]` : `w-[263px] lg:w-[306px]`} whitespace-pre-line font-raleway text-lg font-[500] leading-[132%] text-bgWhite 2xl:text-xl`}
        >
          {text}
        </h3>
      </div>
      <div
        className={`absolute left-0 top-0 flex h-full  w-full flex-col gap-4 p-4 pt-[50px] opacity-0 transition-opacity duration-[700ms] ease-in-out  group-hover:opacity-100 lg:px-6  xl:pt-[72px] 2xl:px-8 2xl:pb-6 4xl:p-[97px]`}
        style={{ background: overlayGradient }}
      >
        <h3
          className={`${index === 2 ? `w-[178px]` : index === 1 ? `w-[210px] lg:w-[330px]` : `lg:w-[300px] 2xl:w-[361px]`} whitespace-pre-line font-raleway text-[16px] font-[600] leading-[132%] text-bgWhite lg:text-2xl lg:font-[600] lg:leading-[120%]`}
        >
          {text}
        </h3>
        <ul className="flex flex-col gap-1 whitespace-pre-line font-raleway text-[16px] leading-[130%] text-bgWhite lg:gap-2 lg:text-xl">
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
