'use client';
import { useTranslations } from 'next-intl';
import PaymentCurrency from './payment-currency/PaymentCurrency';
import PaymentDonateType from './payment-donate-type/PaymentDonateType';
import PaymentDonationAmount from './payment-donation-amount/PaymentDonationAmount';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setDonationAmount } from '@/store/slices/paymentFormSlice';

const PaymentForm = () => {
  const t = useTranslations('Donate');
  const { donationAmount, selectedTypeOfDonate, selectedCurrency } =
    useAppSelector((state) => state.paymentForm);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    console.log(
      `${selectedCurrency}, ${selectedTypeOfDonate}, ${donationAmount}`
    );
    if (selectedCurrency === 'UAH') dispatch(setDonationAmount('50'));
    else dispatch(setDonationAmount('5'));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col items-end gap-8 max-ml:items-start"
    >
      <PaymentCurrency />
      <div className="w-[830px] max-3xl:w-[636px] max-lg:w-[540px] max-ml:w-[666px] max-md:w-full">
        <PaymentDonateType />
        <PaymentDonationAmount />
      </div>
      <button
        type="submit"
        className="cursor-pointer whitespace-nowrap rounded-[32px] bg-red px-[34px] py-5 text-xl font-bold text-bgWhite"
      >
        {t('support_btn')}
      </button>
    </form>
  );
};

export default PaymentForm;
