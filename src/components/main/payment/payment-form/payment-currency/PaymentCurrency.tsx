import { useAppDispatch, useAppSelector } from '@/store/hook';
import {
  setSelectedCurrency,
  setDonationAmount,
} from '@/store/slices/paymentFormSlice';
import { useEffect } from 'react';

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

const PaymentCurrency = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.paymentForm.selectedCurrency
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedCurrency === 'uah') dispatch(setDonationAmount('50'));
    else dispatch(setDonationAmount('5'));
  }, [selectedCurrency]);

  return (
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
            onChange={(e) => dispatch(setSelectedCurrency(e.target.value))}
          />
          <label
            htmlFor={item.value}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-lightVioletSecond text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-mainViolet peer-checked/:text-white max-custom:text-base max-custom:leading-none"
          >
            {item.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentCurrency;
