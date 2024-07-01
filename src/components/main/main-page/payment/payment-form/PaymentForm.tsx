'use client';
import { useState } from 'react';

//КОМПОНЕНТ НА ПАУЗЕ ДО УТОЧНЕНИЯ РЕКВИЗИТОВ И БАНКА, ВОЗМОЖНЫ ИЗМЕНЕНИЯ В ДИЗАЙНЕ
const PaymentForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('uah');
  const [selectedTypeOfDonate, setSelectedTypeOfDonate] =
    useState<string>('every-month');

  const CURRENCY = [
    {
      text: '₴',
      value: 'uah',
    },
    {
      text: '$',
      value: 'usd',
    },
    {
      text: '€',
      value: 'eur',
    },
  ];
  const TYPE_OF_DONATE = [
    {
      value: 'every-month',
      text: 'Щомісячна підписка',
    },
    {
      value: 'only-once',
      text: 'Одноразовий внесок',
    },
  ];
  // const DONATE_SUM = [
  //   {
  //     value: selectedCurrency === 'uah' ? 10 : 1,
  //     id: 'smallDonate',
  //     checked: true,
  //   },
  //   {
  //     value: selectedCurrency === 'uah' ? 50 : 5,
  //     id: 'mediumDonate',
  //     checked: false,
  //   },
  //   {
  //     value: selectedCurrency === 'uah' ? 100 : 10,
  //     id: 'hugeDonate',
  //     checked: false,
  //   },
  // ];

  return (
    <form action="" className="flex flex-col items-end gap-8">
      <div className="flex gap-2">
        {CURRENCY.map((item) => (
          <div className="relative" key={item.value}>
            <input
              checked={selectedCurrency === item.value}
              value={item.value}
              type="radio"
              name="currency-type"
              id={item.value}
              className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
              onChange={(e) => setSelectedCurrency(e.target.value)}
            />
            <label
              htmlFor={item.value}
              className="bg-lightVioletSecond peer-checked/:bg-mainViolet flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:text-white"
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
              key={item.value}
            >
              <input
                checked={selectedTypeOfDonate === item.value}
                value={item.value}
                type="radio"
                name="donate-type"
                id={item.value}
                className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
                onChange={(e) => setSelectedTypeOfDonate(e.target.value)}
              />
              <label
                htmlFor={item.value}
                className="inline-block w-full cursor-pointer border-2 border-solid border-yellow py-[22px] text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-yellow peer-checked/:text-white"
              >
                {item.text}
              </label>
            </div>
          ))}
        </div>
        <div className="flex">
          {/* {DONATE_SUM.map((item) => {
            return (
              <div
                className="flex-shrink-1 relative flex-grow-0 basis-1/5"
                key={item.value}
              >
                <input
                  checked={item.checked}
                  value={item.value}
                  type="radio"
                  name="donate-sum"
                  id={item.id}
                  className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
                  onChange={() => setDonateSum(item.value)}
                />
                <label
                  htmlFor={item.id}
                  className="inline-block w-full cursor-pointer border-2 border-solid border-yellow py-[22px] text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-yellow peer-checked/:text-white"
                >
                  {`${item.value} ${selectedCurrency}`}
                </label>
              </div>
            );
          })} */}
          {/* <FormRadioButton className="flex-shrink-1 flex-grow-0 basis-2/5">
            Введіть свою суму
          </FormRadioButton> */}
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
