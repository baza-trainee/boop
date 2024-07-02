'use client';

import { openAlert } from '@/store/slices/alertSlice';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Loader from '@/components/shared/loader/Loader';

interface IFormInput {
  email: string;
  password: string;
}

function LoginForm() {
  const dispatch = useDispatch();
  const [isLoader, setIsLoader] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoader(true);
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    console.log(res);

    if (res?.status === 200) {
      setIsLoader(false);
      dispatch(
        openAlert({
          data: { message: 'Ви успішно увійшли в систему', state: 'success' },
        })
      );
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
        className="ml-auto mr-auto max-w-[346px]"
      >
        <div className="flex flex-col justify-center gap-10">
          <div className="flex gap-4">
            <h1 className="font-['Raleway',_sans-serif] text-2xl font-bold leading-[45px] text-[#50439f]">
              Вхід до акаунту
            </h1>
            <Image
              src="/images/logo.svg"
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
                className="peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]"
                id="email"
                type="text"
                placeholder="Введіть логін"
                {...register('email', { required: 'Email is required' })}
              />
            </div>

            <div className="mt-4">
              <label
                className="text-base font-medium text-[#0a0a0a]"
                htmlFor="password"
              >
                Пароль
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]"
                  id="password"
                  type="password"
                  placeholder="Введіть пароль"
                  {...register('password')}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="ml-auto mr-auto rounded-[32px] bg-[#e93405] px-6 py-4 text-xl font-bold text-[#fff]"
          >
            Увійти
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
