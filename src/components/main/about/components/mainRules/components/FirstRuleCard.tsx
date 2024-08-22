import Image from 'next/image';
import React from 'react';

export interface RuleCardProps {
  text: string;
  isIt?: boolean;
}

const FirstRuleCard: React.FC<RuleCardProps> = ({ text, isIt }) => {
  return (
    <div className="flex flex-col-reverse gap-6 md:w-[421px] md:flex-col md:gap-4   ml:w-auto ml:flex-1 ml:gap-6">
      <p
        className={`md:w-[332px] md:pt-12 ml:w-[400px] ml:pt-0 lg:w-[420px] lg:pt-2 3xl:w-[420px] 3xl:pt-10 ${isIt && 'md:w-[352px] lg:w-[490px] 3xl:w-[500px]'}`}
      >
        {text}
      </p>
      <div className="md:w-[421px] ml:w-auto">
        <Image
          src="/images/mainRules/image_1.webp"
          alt="cloun plays with child"
          width={960}
          height={640}
          className="relative bg-yellow"
        />
      </div>
    </div>
  );
};

export default FirstRuleCard;
