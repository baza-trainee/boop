import Image from 'next/image';
import React from 'react';
import { RuleCardProps } from './FirstRuleCard';

const SecondRuleCard: React.FC<RuleCardProps> = ({ text }) => {
  return (
    <div className="flex justify-between gap-5 md:h-[471px] md:w-[242px] md:flex-col md:gap-4 ml:h-fit ml:w-[436px] ml:flex-row ml:gap-6 lg:w-full">
      <div className="flex-1 ">
        <Image
          src="/images/mainRules/image_2.png"
          alt="soothing hugs"
          width={402}
          height={450}
          className="min-h-[212px]   bg-mainViolet"
        />
      </div>
      <p className=" flex-1 ml:w-[206px] lg:w-[270px] 3xl:w-[306px]   4xl:box-border 4xl:w-[330px] ">
        {text}
      </p>
    </div>
  );
};

export default SecondRuleCard;
