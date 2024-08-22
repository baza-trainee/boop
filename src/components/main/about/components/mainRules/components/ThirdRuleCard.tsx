import Image from 'next/image';
import React from 'react';
import { RuleCardProps } from './FirstRuleCard';

const ThirdRuleCard: React.FC<RuleCardProps> = ({ text }) => {
  return (
    <div className="first-line: flex flex-col-reverse gap-6 md:absolute md:bottom-0 md:right-0 md:w-[708px] md:flex-row-reverse ml:static ml:flex-col lg:w-fit">
      <div className="md:w-[421px] ml:w-[436px] lg:w-full">
        <Image
          src="/images/mainRules/image_3.webp"
          alt="cloun and girl"
          width={2048}
          height={1346}
          className="relative z-10 bg-red"
        />
      </div>
      <p className="md:w-[243px] ml:w-[359px] lg:w-[380px] 4xl:w-[447px]">
        {text}
      </p>
    </div>
  );
};

export default ThirdRuleCard;
