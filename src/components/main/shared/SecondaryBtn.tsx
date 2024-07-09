import clsx from 'clsx';
import React from 'react';

type SecondaryBtnProps = {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const SecondaryBtn = ({
  text,
  className,
  onClick,
  disabled,
}: SecondaryBtnProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'inline-block rounded-[32px] border-2 border-solid border-yellow bg-inherit px-6 py-[18px] font-raleway text-xl font-medium leading-none text-textViolet transition-all duration-200 ease-linear hover:bg-[#FFFDEA] active:border-[#E27E00] active:bg-[#FFFDEA] disabled:cursor-not-allowed disabled:border-[#E3E3E4] disabled:bg-inherit disabled:text-[#97979A]',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SecondaryBtn;
