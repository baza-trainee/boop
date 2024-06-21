import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface FormButtonProps {
  className?: string;
  children: ReactNode;
}

const FormButton = ({ className, children }: FormButtonProps) => {
  return (
    <div className={clsx('relative', className)}>
      <input
        // checked={selectedCurrency === item.id}
        // value={item.text}
        type="radio"
        name="currency-type"
        // id={item.id}
        className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
        // onChange={() => handleChange(item.id)}
      />
      <label
        // htmlFor={item.id}
        className={clsx(
          'peer-checked/:bg-mainViolet inline-block w-full border-2 border-solid border-yellow py-[22px] text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:text-white'
        )}
      >
        {children}
      </label>
    </div>
  );
};

export default FormButton;
