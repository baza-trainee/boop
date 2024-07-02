import axios, { AxiosError } from 'axios';
import { Session } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import { passwordSchema } from './passwordSchema';
import { useDispatch } from 'react-redux';
import { openAlert } from '@/store/slices/alertSlice';
import Loader from '@/components/shared/loader/Loader';

interface CustomSession extends Session {
  user: { email: string };
}

interface IFormInput {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

function FormChangePassword() {
  const [isLoader, setIsLoader] = useState(false);
  const [session, setSession] = useState<CustomSession | null>(null);

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
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    defaultValues: { oldPassword: '', newPassword: '', confirmNewPassword: '' },
    resolver: zodResolver(passwordSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setIsLoader(true);
      const response = await axios.post('/api/change-password', {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        email: session?.user.email,
      });

      if (response.status === 200) {
        dispatch(
          openAlert({
            data: { message: 'Пароль успішно змінений!', state: 'success' },
          })
        );
        signOut({ callbackUrl: '/admin' });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 400) {
          dispatch(
            openAlert({
              data: {
                message: 'Не всі дані введено',
                state: 'error',
              },
            })
          );
        } else if (status === 404) {
          dispatch(
            openAlert({
              data: {
                message: 'Користувача з таким логіном не знайдено',
                state: 'error',
              },
            })
          );
        } else if (status === 401) {
          dispatch(
            openAlert({
              data: {
                message: 'Старий пароль введено не вірно',
                state: 'error',
              },
            })
          );
        } else {
          dispatch(
            openAlert({
              data: {
                message: 'Сталася помилка під час зміни пароля',
                state: 'error',
              },
            })
          );
        }
      } else {
        dispatch(
          openAlert({
            data: {
              message: 'Сталася невідома помилка',
              state: 'error',
            },
          })
        );
      }
    } finally {
      setIsLoader(false);
    }
  };

  if (isLoader) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-[4px]">
      <div className="flex max-w-[292px] flex-col justify-between rounded-lg pb-4">
        <div className="w-full">
          <div className="mt-0">
            <label
              className={
                "mb-1 text-left font-['Raleway',_sans-serif] text-[16px] font-medium normal-case not-italic leading-[24px] tracking-[0px] text-[#0a0a0a]"
              }
              htmlFor="oldPassword"
            >
              Вкажіть дійсний пароль
            </label>
            <div className="relative">
              <input
                className={clsx(
                  "peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] font-['Raleway',_sans-serif] text-base not-italic  placeholder-[#949398] outline-none placeholder-shown:border-[#949398]",
                  !errors.oldPassword && 'text-[#177e3a]',
                  errors.oldPassword && 'text-[#ff4004]'
                )}
                id="oldPassword"
                type="password"
                autoComplete="false"
                placeholder="Введіть старий пароль"
                {...register('oldPassword')}
              />
            </div>
          </div>
          <div className="mt-3">
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
                type="password"
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
                type="password"
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

        <div className="relative mt-10 box-border flex w-full max-w-[296px] flex-col items-start justify-start gap-[12px]">
          <h3 className="mb-0 mt-0 text-left font-['Raleway',_sans-serif] text-[17px] font-medium normal-case not-italic leading-[26px] tracking-[0px] text-[#343333]">
            Змінити пароль?
          </h3>
          <div className="relative box-border flex w-full max-w-[296px] items-start justify-start gap-[20px]">
            <button
              type="submit"
              disabled={!isValid}
              className={clsx(
                'relative box-border flex w-full max-w-[127px] items-center justify-center gap-[8px] overflow-hidden rounded-[32px] bg-[#e3e3e4] px-[24px] py-[18px]',
                isValid && 'bg-[#e93405]'
              )}
            >
              <p
                className={clsx(
                  "mb-0 mt-0 text-center font-['Raleway',_sans-serif] text-[20px] font-bold normal-case not-italic leading-[20px] tracking-[0px] ",
                  isValid && 'text-[#ffffff]',
                  !isValid && 'text-[#97979a]'
                )}
              >
                Змінити
              </p>
            </button>
            <button
              onClick={() => reset()}
              type="button"
              disabled={!isValid}
              className={clsx(
                'relative box-border flex w-full max-w-[149px] items-center justify-center gap-[8px] overflow-hidden rounded-[32px] border-[2px]  px-[24px] py-[18px]',
                isValid && 'border-[#ffab0b]',
                !isValid && 'border-[#e3e3e4]'
              )}
            >
              <p
                className={clsx(
                  "mb-0 mt-0 text-center font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[20px] tracking-[0px] ",
                  isValid && 'text-[#2f245e]',
                  !isValid && 'text-[#97979a]'
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

export default FormChangePassword;
