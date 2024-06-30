import clsx from 'clsx';
import React from 'react';

type SecondaryBtnProps = {
  text: string;
  className?: string;
};

const SecondaryBtn = ({ text, className }: SecondaryBtnProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'inline-block rounded-[32px] border-2 border-solid border-yellow bg-inherit px-6 py-[18px] font-raleway text-xl font-medium leading-none text-textViolet transition-all duration-200 ease-linear hover:bg-[#FFFDEA] active:border-[#E27E00] active:bg-[#FFFDEA]',
        className
      )}
    >
      {text}
    </button>
  );
};

export default SecondaryBtn;
