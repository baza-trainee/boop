import React from 'react';

const Caret = ({
  isDisabled,
  className,
}: {
  isDisabled: boolean;
  className?: string;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.83997 7.41L13.42 12L8.83997 16.59L10.25 18L16.25 12L10.25 6L8.83997 7.41Z"
        fill={isDisabled ? '#f3f4ee' : '#50439F'}
      />
    </svg>
  );
};

export default Caret;
