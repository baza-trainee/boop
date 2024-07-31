'use client';

import { openAlert } from '@/store/slices/alertSlice';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Loader from '@/components/shared/loader/Loader';
import clsx from 'clsx';
import ButtonPWDType from './ButtonPWDType';

interface IFormInput {
  email: string;
  password: string;
}

function LoginForm() {
  const [isVisiblePWD, setIsVisiblePWD] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const toglePWDType = () => setIsVisiblePWD(!isVisiblePWD);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoader(true);
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.status === 200) {
      setIsLoader(false);
      window.location.reload();
    } else if (res?.status === 401) {
      setIsLoader(false);
      dispatch(
        openAlert({
          data: {
            message: 'Логін або пароль введено невірно!',
            state: 'error',
          },
        })
      );
    } else {
      setIsLoader(false);
      dispatch(
        openAlert({
          data: {
            message: 'Логін або пароль введено невірно!',
            state: 'error',
          },
        })
      );
    }
  };
  if (isLoader) {
    return <Loader />;
  }
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F3F4EE]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ml-auto mr-auto max-w-[350px]"
      >
        <div className="flex flex-col justify-center gap-10">
          <div className="flex gap-4">
            <h1 className="font-['Raleway',_sans-serif] text-[32px] font-bold leading-[45px] text-[#50439f]">
              Вхід до акаунту
            </h1>
            <Image
              src="/icons/header/ua-logo.svg"
              alt="Бюро усмішок і підтримки"
              width={82}
              height={48}
            />
          </div>
          <div className="ml-auto mr-auto flex w-[292px] flex-col justify-center gap-3">
            <div className="relative">
              <label
                className="mb-1 text-base font-medium text-[#0a0a0a]"
                htmlFor="email"
              >
                Логін
              </label>
              <input
                className={clsx(
                  'peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]',
                  !errors.email?.message && 'text-[#177e3a]'
                )}
                id="email"
                type="text"
                placeholder="Введіть логін"
                {...register('email', {
                  required: 'Введіть дійсну електронну адресу',
                })}
              />{' '}
              {errors.email && (
                <p className="mt-1 font-['Raleway',_sans-serif] text-[14px] font-normal leading-[18px] text-[#ff4004]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                className="text-base font-medium text-[#0a0a0a]"
                htmlFor="password"
              >
                Пароль
              </label>
              <div>
                <div className="relative">
                  <input
                    className={clsx(
                      'peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] pr-9 text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]',
                      !errors.password?.message
                        ? 'text-[#177e3a]'
                        : 'text-[#e93405]'
                    )}
                    id="password"
                    type={isVisiblePWD ? 'text' : 'password'}
                    placeholder="Введіть пароль"
                    {...register('password', {
                      required: 'Введіть дійсний пароль',
                      minLength: {
                        value: 8,
                        message: 'Введіть дійсний пароль',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Введіть дійсний пароль',
                      },
                    })}
                  />
                  <ButtonPWDType
                    isVisiblePWD={isVisiblePWD}
                    toglePWDType={toglePWDType}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 font-['Raleway',_sans-serif] text-[14px] font-normal leading-[18px] text-[#ff4004]">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            disabled={!isValid}
            type="submit"
            className={clsx(
              'ml-auto mr-auto rounded-[32px] bg-[#e3e3e4] px-6 py-4 text-xl font-bold text-[#97979a]',
              isValid && 'bg-[#e93405] text-[#fff]'
            )}
          >
            Увійти
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
