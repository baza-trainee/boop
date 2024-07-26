import { useTranslations } from 'next-intl';
import { useState } from 'react';

const TYPE_OF_DONATE = [
  {
    value: 'every-month',
    text: 'every_month',
  },
  {
    value: 'only-once',
    text: 'once',
  },
];

const PaymentDonateType = () => {
  const [selectedTypeOfDonate, setSelectedTypeOfDonate] =
    useState<string>('every-month');
  const t = useTranslations('Donate.form_btns.donation_type');

  return (
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
            className="inline-block w-full cursor-pointer border-2 border-solid border-yellow py-[22px] text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-yellow peer-checked/:text-white max-custom:text-sm max-custom:leading-none"
          >
            {t(item.text)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentDonateType;
