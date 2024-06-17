import React from 'react';
import CountUp from 'react-countup';

interface CounterItemProps {
  number: number;
  text: string;
}

const CounterItem = ({ number, text }: CounterItemProps) => {
  return (
    <li className="font-groppleds relative h-[183px] odd:text-yellow even:text-violet">
      <div className="absolute left-0 top-0 h-[180px] w-[180px]"></div>
      <div className="max-w-[143px] pt-9 text-center font-bold">
        <div className="mb-2 text-5xl leading-[1.2]">
          <CountUp start={0} end={number} duration={3} enableScrollSpy />
        </div>
        <div className="text-xl leading-[1] text-textViolet">{text}</div>
      </div>
    </li>
  );
};

export default CounterItem;
