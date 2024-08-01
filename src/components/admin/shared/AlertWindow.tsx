'use client';

import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { closeAlert } from '@/store/slices/alertSlice';
import { useState } from 'react';

const options = {
  error: { buttons: false },
  success: { buttons: false },
  confirm: { buttons: true },
};

export type TAlertInfoState = {
  state: keyof typeof options;
  message: string;
  func?: () => void;
};

export const AlertWindow: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const alertInfo = useAppSelector((state) => state.alerts.alertInfo);

  if (alertInfo === null) return;

  const { state, message, func } = alertInfo;
  const { buttons } = options[state];

  const confirmHandler = async (isAccepted: boolean) => {
    if (isAccepted && func) {
      setIsProcessing(true);
      await func();
      setIsProcessing(false);
    } else {
      dispatch(closeAlert());
    }
  };

  return (
    <div className="backdrop-brightness-10 fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="alert-window-title"
        className={`relative flex min-h-[120px] w-[492px] flex-col items-center justify-center rounded-md border border-solid bg-white p-[2.4rem] p-[56px]`}
      >
        <button
          onClick={() => dispatch(closeAlert())}
          className="absolute right-4 top-4"
        >
          <Image
            src="/icons/admin/close.svg"
            alt="close"
            width={30}
            height={30}
          />
        </button>
        <div className="flex w-full justify-between">
          <div className="w-full">
            <p className={`text-[1.3rem] font-normal`}>{message}</p>
          </div>
        </div>

        {state === 'success' && (
          <div className="mt-[1.7rem] flex gap-[20px]">
            <button
              className="flex items-center justify-center whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-[20px] text-white"
              onClick={() => confirmHandler(false)}
            >
              Ок
            </button>
          </div>
        )}

        {buttons && (
          <div className="mt-[1.7rem] flex gap-[20px]">
            <button
              className="flex min-w-[123px] items-center justify-center whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-[20px] text-white disabled:bg-gray-500"
              onClick={() => confirmHandler(true)}
            >
              {isProcessing ? 'Обробка запиту...' : 'Видалити'}
            </button>
            <button
              className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-[20px] text-violet"
              onClick={() => confirmHandler(false)}
            >
              Скасувати
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
