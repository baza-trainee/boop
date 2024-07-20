'use client';
import PaymentCurrency from './payment-currency/PaymentCurrency';
import PaymentDonateType from './payment-donate-type/PaymentDonateType';
import PaymentDonationAmount from './payment-donation-amount/PaymentDonationAmount';

const PaymentForm = () => {
  return (
    <form
      action=""
      className="flex flex-col items-end gap-8 max-ml:items-start"
    >
      <PaymentCurrency />
      <div className="w-[830px] max-3xl:w-[636px] max-lg:w-[540px]">
        <PaymentDonateType />
        <PaymentDonationAmount />
      </div>
      <button
        type="submit"
        className="cursor-pointer whitespace-nowrap rounded-[32px] bg-red px-[34px] py-5 text-xl font-bold text-bgWhite"
      >
        Підтримати проект
      </button>
    </form>
  );
};

export default PaymentForm;
