'use client';
import clsx from 'clsx';
import { useState } from 'react';
import FormRadioButton from './form-radio-button/FormRadioButton';

const CURRENCY = [
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
const TYPE_OF_DONATE = [
  {
    id: 'every-month',
    text: 'Щомісячна підписка',
  },
  {
    id: 'only-once',
    text: 'Одноразовий внесок',
  },
];

const PaymentForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('uah');
  const [selectedTypeOfDonate, setSelectedTypeOfDonate] =
    useState<string>('every-month');

  return (
    <form action="" className="flex flex-col items-end gap-8">
      <div className="flex gap-2">
        {CURRENCY?.map((item) => (
          <div className="relative" key={item.id}>
            <input
              checked={selectedCurrency === item.id}
              value={item.id}
              type="radio"
              name="currency-type"
              id={item.id}
              className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
              onChange={() => setSelectedCurrency(item.id)}
            />
            <label
              htmlFor={item.id}
              className={clsx(
                'peer-checked/:bg-mainViolet bg-lightVioletSecond flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:text-white'
              )}
            >
              {item.text}
            </label>
          </div>
        ))}
      </div>
      <div className="w-[636px]">
        <div className="mb-4 flex">
          {TYPE_OF_DONATE.map((item) => (
            <div
              className="flex-shrink-1 relative flex-grow-0 basis-1/2"
              key={item.id}
            >
              <input
                checked={selectedTypeOfDonate === item.id}
                value={item.text}
                type="radio"
                name="donate-type"
                id={item.id}
                className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
                onChange={() => setSelectedTypeOfDonate(item.id)}
              />
              <label
                htmlFor={item.id}
                className={clsx(
                  'inline-block w-full cursor-pointer border-2 border-solid border-yellow py-[22px] text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-yellow peer-checked/:text-white'
                )}
              >
                {item.text}
              </label>
            </div>
          ))}
        </div>
        <div className="flex">
          <FormRadioButton className="flex-shrink-1 flex-grow-0 basis-1/5">
            50 ₴
          </FormRadioButton>
          <FormRadioButton className="flex-shrink-1 flex-grow-0 basis-1/5">
            100 ₴
          </FormRadioButton>
          <FormRadioButton className="flex-shrink-1 flex-grow-0 basis-1/5">
            200 ₴
          </FormRadioButton>
          <FormRadioButton className="flex-shrink-1 flex-grow-0 basis-2/5">
            Введіть свою суму
          </FormRadioButton>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
