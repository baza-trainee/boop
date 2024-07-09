import React from 'react';

interface IUniversalButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  btnTextStyle?: string;
}

const UniversalButton: React.FC<IUniversalButtonProps> = ({
  onClick,
  children,
  className,
  type = 'button',
  disabled,
  btnTextStyle = '',
}) => {
  const finalClassName = `${btnTextStyle} ${className} `;

  return (
    <button
      onClick={onClick}
      type={type}
      className={finalClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default UniversalButton;

// const UniversalButton: React.FC<UniversalButtonProps> = ({
//   onClick,
//   children,
//   className = '',
//   type = 'button',
//   disabled = false,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={className}
//       type={type}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// export default UniversalButton;
