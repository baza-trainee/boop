import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setDonationAmount } from '@/store/slices/paymentFormSlice';
import clsx from 'clsx';

const PaymentDonationAmount = () => {
  const { donationAmount, selectedCurrency } = useAppSelector(
    (state) => state.paymentForm
  );

  const dispatch = useAppDispatch();

  const DONATE_SUM = [
    {
      value: selectedCurrency === 'uah' ? '50' : '5',
      id: 'smallDonate',
      checked: true,
    },
    {
      value: selectedCurrency === 'uah' ? '100' : '10',
      id: 'mediumDonate',
      checked: false,
    },
    {
      value: selectedCurrency === 'uah' ? '200' : '20',
      id: 'hugeDonate',
      checked: false,
    },
    {
      value: 'Введіть свою сумму',
      id: 'customDonate',
      checked: false,
    },
  ];

  return (
    <div className="flex">
      {DONATE_SUM.map((item, idx) => {
        return (
          <div
            className={clsx(
              'flex-shrink-1 relative flex-grow-0 basis-1/5',
              idx === DONATE_SUM.length - 1 && 'basis-2/5'
            )}
            key={item.id}
          >
            <input
              checked={item.value === donationAmount}
              value={item.value}
              type="radio"
              name="donate-sum"
              id={item.id}
              className="peer absolute left-0 top-0 h-0 w-0 opacity-0"
              onChange={(e) => dispatch(setDonationAmount(e.target.value))}
            />
            <label
              htmlFor={item.id}
              className="inline-block w-full cursor-pointer border-2 border-solid border-yellow py-[22px] text-center text-xl font-bold leading-[1] text-textViolet transition-all duration-300 ease-linear peer-checked/:bg-yellow peer-checked/:text-white max-custom:text-sm max-custom:leading-none"
            >
              {idx === DONATE_SUM.length - 1
                ? item.value
                : `${item.value}${selectedCurrency === 'uah' ? '₴' : selectedCurrency === 'usd' ? '$' : '€'}`}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentDonationAmount;
