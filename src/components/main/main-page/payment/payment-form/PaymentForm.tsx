'use client';
import { useState } from 'react';

const PaymentForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('uah');

  const handleChange = (id: string) => {
    console.log(id);

    setSelectedCurrency(id);
  };

  const currency = [
    {
      text: '₴',
      id: 'uah',
    },
    {
      text: '$',
      id: 'usd',
    },
    {
      text: '€',
      id: 'eur',
    },
  ];

  return (
    <form action="" className="flex flex-col items-end gap-8">
      <div className="flex gap-2">
        {currency.map((item) => (
          <div className="relative" key={item.id}>
            <input
              checked={selectedCurrency === item.id}
              type="radio"
              name="currency-type"
              id={item.id}
              className="absolute left-0 top-0 h-0 w-0 opacity-0"
              onChange={() => handleChange(item.id)}
            />
            <label
              htmlFor={item.id}
              className="checked:bg-mainViolet bg-lightVioletSecond flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl font-bold leading-[1] text-textViolet checked:text-white"
            >
              {item.text}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default PaymentForm;
