import { useAppDispatch, useAppSelector } from '@/store/hook';
import {
  setSelectedCurrency,
  setDonationAmount,
  setIsCustomDonate,
} from '@/store/slices/paymentFormSlice';
import clsx from 'clsx';
import { useEffect } from 'react';

const CURRENCY = [
  {
    text: '₴',
    value: 'UAH',
  },
  {
    text: '$',
    value: 'USD',
  },
  {
    text: '€',
    value: 'EUR',
  },
];

interface PaymentCurrencyProps {
  className?: string;
}

const PaymentCurrency = ({ className }: PaymentCurrencyProps) => {
  const { selectedCurrency, isCustomDonate } = useAppSelector(
    (state) => state.paymentForm
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCustomDonate) dispatch(setIsCustomDonate(false));
    if (selectedCurrency === 'UAH') dispatch(setDonationAmount('50'));
    else dispatch(setDonationAmount('5'));
  }, [selectedCurrency]);

  return (
    <div className={clsx('flex gap-2', className)}>
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
            className="basic-transition flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-lightVioletSecond text-xl font-bold leading-[1] text-textViolet peer-checked/:bg-mainViolet peer-checked/:text-white max-custom:text-base max-custom:leading-none"
          >
            {item.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentCurrency;
