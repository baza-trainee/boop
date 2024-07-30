import { useAppDispatch, useAppSelector } from '@/store/hook';
import {
  setDonationAmount,
  setIsCustomDonate,
} from '@/store/slices/paymentFormSlice';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { ChangeEvent } from 'react';

const PaymentDonationAmount = () => {
  const { donationAmount, selectedCurrency, isCustomDonate } = useAppSelector(
    (state) => state.paymentForm
  );
  const dispatch = useAppDispatch();
  const t = useTranslations('Donate.form_btns');

  const handleRadioInputChange = (value: string) => {
    dispatch(setDonationAmount(value));
    if (isCustomDonate) dispatch(setIsCustomDonate(false));
  };

  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      dispatch(setDonationAmount(value));
    }
  };

  const handleCustomAmountFocus = () => {
    dispatch(setDonationAmount(''));
    dispatch(setIsCustomDonate(true));
  };

  const DONATE_SUM = [
    {
      value: selectedCurrency === 'UAH' ? '50' : '5',
      id: 'smallDonate',
      type: 'radio',
    },
    {
      value: selectedCurrency === 'UAH' ? '100' : '10',
      id: 'mediumDonate',
      type: 'radio',
    },
    {
      value: selectedCurrency === 'UAH' ? '200' : '20',
      id: 'hugeDonate',
      type: 'radio',
    },
    {
      value: t('custom_donation_amount'),
      id: 'customDonate',
      type: 'text',
    },
  ];

  return (
    <div className="flex">
      {DONATE_SUM.map((item) => {
        return (
          <div
            className={clsx(
              'flex-shrink-1 relative flex-grow-0 basis-1/5',
              item.type === 'text' && 'basis-2/5'
            )}
            key={item.id}
          >
            {item.type === 'radio' ? (
              <>
                <input
                  checked={item.value === donationAmount && !isCustomDonate}
                  value={item.value}
                  type="radio"
                  name="donate-sum"
                  id={item.id}
                  className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
                  onChange={() => handleRadioInputChange(item.value)}
                />
                <label
                  htmlFor={item.id}
                  className="flex min-h-[70px] w-full cursor-pointer items-center justify-center border-2 border-solid border-yellow text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-yellow peer-checked/:text-white max-custom:text-sm max-custom:leading-none"
                >
                  {selectedCurrency === 'UAH'
                    ? `${item.value} ₴`
                    : selectedCurrency === 'USD'
                      ? `$ ${item.value}`
                      : `€ ${item.value}`}
                </label>
              </>
            ) : (
              <>
                <input
                  value={
                    isCustomDonate
                      ? donationAmount
                      : t('custom_donation_amount')
                  }
                  placeholder={t('custom_donation_amount')}
                  type="text"
                  name="donate-sum"
                  // pattern="[0-9]"
                  id={item.id}
                  className={clsx(
                    'flex min-h-[70px] w-full cursor-pointer items-center justify-center border-2 border-solid border-yellow bg-transparent px-4 text-center text-xl font-bold leading-[1] text-textViolet placeholder-white outline-none transition-all duration-300 ease-linear max-custom:text-sm max-custom:leading-none',
                    isCustomDonate && 'bg-yellow text-white'
                  )}
                  onFocus={handleCustomAmountFocus}
                  onChange={(e) => handleCustomAmountChange(e)}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PaymentDonationAmount;
