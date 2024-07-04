/* eslint-disable @next/next/no-img-element */
import React from 'react';
import UniversalButton from '../shared/UniversalButton';
import './CounterPage.css';

interface CounterModalBodyProps {
  text: string;
  textBtn: string;
  onClick: () => void;
}

const CounterModalBody: React.FC<CounterModalBodyProps> = ({
  text,
  textBtn,
  onClick,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-[32px ] absolute right-[-40px] top-[-40px] flex h-[32px] items-center justify-center">
        <UniversalButton onClick={onClick}>
          <img src="/icons/admin/close.svg" alt="close" />
        </UniversalButton>
      </div>
      <p className="mb-[16px] text-center text-[20px] font-medium leading-[150%] text-[#0A0A0A] ">
        {text}
      </p>
      <UniversalButton
        type="button"
        onClick={onClick}
        className={`flex h-[56px] items-center justify-center gap-2 rounded-[32px] bg-[#E93405]  px-[24px] py-[18px] text-white `}
      >
        {textBtn}
      </UniversalButton>
      {/* <button className='flex h-[56px] '>{textBtn}</button> */}
    </div>
  );
};

export default CounterModalBody;
