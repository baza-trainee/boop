import axios from 'axios';
import { Session } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import { passwordSchema } from './passwordSchema';
import { useDispatch } from 'react-redux';
import { openAlert } from '@/store/slices/alertSlice';

interface CustomSession extends Session {
  user: { email: string };
}

interface IFormInput {
  newPassword: string;
  confirmNewPassword: string;
}

const delayedSignOut = () => {
  setTimeout(() => {
    signOut({ callbackUrl: '/admin' });
  }, 2000);
};

function FormPassword() {
  const [session, setSession] = useState<CustomSession | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session && session.user && session.user.email) {
        setSession(session as CustomSession);
      }
    };

    fetchSession();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    resolver: zodResolver(passwordSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post('/api/change-password', {
        newPassword: data.newPassword,
        email: session?.user.email,
      });

      if (response.status === 200) {
        dispatch(
          openAlert({
            data: { message: 'Пароль успішно змінений!', state: 'success' },
          })
        );
        delayedSignOut();
      } else {
        dispatch(
          openAlert({
            data: { message: 'Не вдалося змінити пароль!', state: 'error' },
          })
        );
      }
    } catch (error) {
      dispatch(
        openAlert({
          data: { message: 'Не вдалося змінити пароль!', state: 'error' },
        })
      );
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      const newPassword = value.newPassword;
      const confirmNewPassword = value.confirmNewPassword;

      if (
        newPassword &&
        confirmNewPassword &&
        newPassword.length >= 8 &&
        newPassword.length <= 30 &&
        newPassword === confirmNewPassword
      ) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-[4px]">
      <div className="flex h-96 max-w-[292px] flex-col justify-between rounded-lg pb-4">
        <div className="w-full">
          <div className="mt-0">
            <label
              className={
                "mb-1 text-left font-['Raleway',_sans-serif] text-[16px] font-medium normal-case not-italic leading-[24px] tracking-[0px] text-[#0a0a0a]"
              }
              htmlFor="newPassword"
            >
              Вкажіть новий пароль:
            </label>
            <div className="relative">
              <input
                className={clsx(
                  "peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] font-['Raleway',_sans-serif] text-base not-italic  placeholder-[#949398] outline-none placeholder-shown:border-[#949398]",
                  !errors.newPassword && 'text-[#177e3a]',
                  errors.newPassword && 'text-[#ff4004]'
                )}
                id="newPassword"
                type="text"
                autoComplete="false"
                autoFocus
                placeholder="Введіть новий пароль"
                {...register('newPassword')}
              />
              {errors.newPassword?.message && (
                <span className="mb-0 mt-0 text-left font-['Raleway',_sans-serif] text-[14px] font-normal normal-case not-italic leading-[18px] tracking-[0px] text-[#ff4004]">
                  {errors.newPassword.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-3">
            <label
              className="mb-1 mt-0 text-left font-['Raleway',_sans-serif] text-[16px] font-medium normal-case not-italic leading-[24px] tracking-[0px] text-[#0a0a0a]"
              htmlFor="confirmNewPassword"
            >
              Повторіть новий пароль:
            </label>
            <div className="relative">
              <input
                className={clsx(
                  "peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] font-['Raleway',_sans-serif] text-base not-italic  placeholder-[#949398] outline-none placeholder-shown:border-[#949398]",
                  !errors.confirmNewPassword && 'text-[#177e3a]',
                  errors.confirmNewPassword && 'text-[#ff4004]'
                )}
                id="confirmNewPassword"
                type="text"
                autoComplete="false"
                placeholder="Введіть новий пароль ще раз"
                {...register('confirmNewPassword')}
              />
              {errors.confirmNewPassword && (
                <span className="mb-0 mt-0 text-left font-['Raleway',_sans-serif] text-[14px] font-normal normal-case not-italic leading-[18px] tracking-[0px] text-[#ff4004]">
                  {errors.confirmNewPassword.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="relative box-border flex w-full max-w-[296px] flex-col items-start justify-start gap-[12px]">
          <h3 className="mb-0 mt-0 text-left font-['Raleway',_sans-serif] text-[17px] font-medium normal-case not-italic leading-[26px] tracking-[0px] text-[#343333]">
            Змінити пароль?
          </h3>
          <div className="relative box-border flex w-full max-w-[296px] items-start justify-start gap-[20px]">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={clsx(
                'relative box-border flex w-full max-w-[127px] items-center justify-center gap-[8px] overflow-hidden rounded-[32px] bg-[#e3e3e4] px-[24px] py-[18px]',
                !isButtonDisabled && 'bg-[#e93405]'
              )}
            >
              <p
                className={clsx(
                  "mb-0 mt-0 text-center font-['Raleway',_sans-serif] text-[20px] font-bold normal-case not-italic leading-[20px] tracking-[0px] ",
                  !isButtonDisabled && 'text-[#ffffff]',
                  isButtonDisabled && 'text-[#97979a]'
                )}
              >
                Змінити
              </p>
            </button>
            <button
              onClick={() => reset()}
              type="button"
              disabled={isButtonDisabled}
              className={clsx(
                'relative box-border flex w-full max-w-[149px] items-center justify-center gap-[8px] overflow-hidden rounded-[32px] border-[2px]  px-[24px] py-[18px]',
                !isButtonDisabled && 'border-[#ffab0b]',
                isButtonDisabled && 'border-[#e3e3e4]'
              )}
            >
              <p
                className={clsx(
                  "mb-0 mt-0 text-center font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[20px] tracking-[0px] ",
                  !isButtonDisabled && 'text-[#2f245e]',
                  isButtonDisabled && 'text-[#97979a]'
                )}
              >
                Скасувати
              </p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormPassword;
