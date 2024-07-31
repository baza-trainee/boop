import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setSelectedTypeOfDonate } from '@/store/slices/paymentFormSlice';
import { useTranslations } from 'next-intl';

const TYPE_OF_DONATE = [
  {
    value: 'monthly',
    text: 'every_month',
  },
  {
    value: 'once',
    text: 'once',
  },
];

const PaymentDonateType = () => {
  const t = useTranslations('Donate.form_btns.donation_type');
  const selectedTypeOfDonate = useAppSelector(
    (state) => state.paymentForm.selectedTypeOfDonate
  );
  const dispatch = useAppDispatch();

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
            onChange={(e) => dispatch(setSelectedTypeOfDonate(e.target.value))}
          />
          <label
            htmlFor={item.value}
            className="basic-transition flex min-h-[70px] w-full cursor-pointer items-center justify-center border-2 border-solid border-yellow text-center text-xl font-bold leading-[1] text-textViolet peer-checked/:bg-yellow peer-checked/:text-white max-custom:text-sm max-custom:leading-none"
          >
            {t(item.text)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentDonateType;
