'use client';
import { useTranslations, useLocale } from 'next-intl';
import PaymentCurrency from './payment-currency/PaymentCurrency';
import PaymentDonateType from './payment-donate-type/PaymentDonateType';
import PaymentDonationAmount from './payment-donation-amount/PaymentDonationAmount';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import usePaymentHandler from '@/hooks/usePayment';
import {
  setDonationAmount,
  setIsCustomDonate,
} from '@/store/slices/paymentFormSlice';
import { MAX_DONATION_AMOUNT, REG_EXP_DONATION_AMOUNT } from '@/constants';

const PaymentForm = () => {
  const locale = useLocale();
  const t = useTranslations('Donate');
  const {
    donationAmount,
    selectedTypeOfDonate,
    selectedCurrency,
    isCustomDonate,
  } = useAppSelector((state) => state.paymentForm);
  const dispatch = useAppDispatch();

  const { handlePayment } = usePaymentHandler();

  const handleSubmit = async () => {
    if (isCustomDonate) dispatch(setIsCustomDonate(false));
    if (selectedCurrency === 'UAH') dispatch(setDonationAmount('50'));
    else dispatch(setDonationAmount('5'));
    handlePayment({
      currency: selectedCurrency,
      paymentAmount: donationAmount,
      type: selectedTypeOfDonate,
      lang: locale,
    });
  };

  const isValidate = (value: string, regex: RegExp) => {
    if (!regex.test(value)) return false;

    const amount = parseInt(value, 10);
    if (amount > MAX_DONATION_AMOUNT || amount < 1) return false;

    return true;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex basis-full flex-col items-center gap-8 sm:items-start ml:max-w-[666px] lg:max-w-[636px] lg:items-end 4xl:max-w-[830px]"
    >
      <PaymentCurrency />
      {/* <div className="w-[830px] max-4xl:w-[636px] max-lg:w-[540px] max-ml:w-[666px] max-md:w-full"> */}
      <div className="w-full">
        <PaymentDonateType />
        <PaymentDonationAmount isValidate={isValidate} />
      </div>
      <button
        type="submit"
        className="basic-transition cursor-pointer whitespace-nowrap rounded-[32px] bg-red px-[34px] py-5 text-xl font-bold text-bgWhite disabled:cursor-not-allowed disabled:bg-btnDisabledBg disabled:text-btnDisabledText"
        disabled={!isValidate(donationAmount, REG_EXP_DONATION_AMOUNT)}
      >
        {t('support_btn')}
      </button>
    </form>
  );
};

export default PaymentForm;
