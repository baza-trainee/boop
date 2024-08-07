import React, { FC } from 'react';

interface ICloseButtonProps {
  onClick: () => void;
}
const CloseButton: FC<ICloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className=" absolute right-[20px] top-[20px] flex h-[32px] w-[32px] items-center justify-center"
    >
      <svg
        className=" h-[32px] w-[32px]  text-[#4D4D4D]   "
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.8259 8.00493C25.058 7.77504 25.058 7.40231 24.8259 7.17242C24.5937 6.94253 24.2174 6.94253 23.9853 7.17242L15.913 15.1675L8.0147 7.34481C7.78259 7.11492 7.40625 7.11492 7.17414 7.34481C6.94203 7.5747 6.94203 7.94743 7.17414 8.17732L15.0724 16L7.17409 23.8227C6.94197 24.0526 6.94197 24.4253 7.17409 24.6552C7.4062 24.8851 7.78253 24.8851 8.01465 24.6552L15.913 16.8325L23.9854 24.8276C24.2175 25.0575 24.5938 25.0575 24.8259 24.8276C25.058 24.5977 25.058 24.225 24.8259 23.9951L16.7535 16L24.8259 8.00493Z"
          fill="#4D4D4D"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
