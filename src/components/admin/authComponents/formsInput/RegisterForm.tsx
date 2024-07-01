'use client';

import axios, { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import { passwordRegisterSchema } from './passwordSchema';
import Image from 'next/image';
import Loader from '@/components/shared/loader/Loader';

import { useDispatch } from 'react-redux';
import { openAlert } from '@/store/slices/alertSlice';
import { useState } from 'react';

interface IFormInput {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

function RegisterForm() {
  const [isLoader, setIsLoader] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    resolver: zodResolver(passwordRegisterSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setIsLoader(true);
      const res = await axios.post('/api/register', {
        email: data.email,
        password: data.confirmNewPassword,
      });
      if (res.status === 201) {
        dispatch(
          openAlert({
            data: { message: 'Реєстрація відбулася успішно', state: 'success' },
          })
        );
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          dispatch(
            openAlert({
              data: {
                message: 'Користувач з таким логіном вже існує',
                state: 'error',
              },
            })
          );
        } else if (error.response?.status === 422) {
          dispatch(
            openAlert({
              data: {
                message: 'Ви ввели не вірні дані для реєєстрації',
                state: 'error',
              },
            })
          );
        } else {
          dispatch(
            openAlert({
              data: {
                message: 'Сталася помилка під час реєстрації',
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
    <section className="flex min-h-screen items-center justify-center bg-[#F3F4EE]">
      <form onSubmit={handleSubmit(onSubmit)} className="ml-auto mr-auto ">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex gap-4">
            <h1 className="font-['Raleway',_sans-serif] text-2xl font-bold leading-[45px] text-[#50439f]">
              Реєстрація адміністратора
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
                Вкажіть e-mail
              </label>
              <input
                className={clsx(
                  'peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]',
                  !errors.email && 'text-[#177e3a]',
                  errors.email && 'text-[#ff4004]'
                )}
                id="email"
                type="email"
                placeholder="Введіть e-mail"
                {...register('email')}
              />
              {errors.email ? (
                <span className="text-[#ff4004]">{errors.email.message}</span>
              ) : (
                <span className="text-[#4d4d4d]">
                  Ваш e-mail буде Вашим логіном
                </span>
              )}
            </div>

            <div className="mt-4">
              <label
                className="text-base font-medium text-[#0a0a0a]"
                htmlFor="newPassword"
              >
                Вкажіть пароль
              </label>
              <div className="relative">
                <input
                  className={clsx(
                    'peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]',
                    !errors.newPassword && 'text-[#177e3a]',
                    errors.newPassword && 'text-[#ff4004]'
                  )}
                  id="newPassword"
                  type="password"
                  placeholder="Введіть пароль"
                  {...register('newPassword')}
                />
                {errors.newPassword && (
                  <span className="mb-0 mt-0 text-left text-[14px] font-normal text-[#ff4004]">
                    {errors.newPassword.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label
                className="text-base font-medium text-[#0a0a0a]"
                htmlFor="confirmNewPassword"
              >
                Повторіть пароль
              </label>
              <div className="relative">
                <input
                  className={clsx(
                    'peer block w-full rounded-xl border-[2px] border-[#50439f] py-[8px] pl-[9px] text-base font-medium outline-none placeholder:text-[#949398] placeholder-shown:border-[#949398]',
                    !errors.confirmNewPassword && 'text-[#177e3a]',
                    errors.confirmNewPassword && 'text-[#ff4004]'
                  )}
                  id="confirmNewPassword"
                  type="password"
                  placeholder="Введіть пароль ще раз"
                  {...register('confirmNewPassword', {
                    required: 'Confirm Password is required',
                  })}
                />
                {errors.confirmNewPassword && (
                  <span className="mb-0 mt-0 text-left text-[14px] font-normal text-[#ff4004]">
                    {errors.confirmNewPassword.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            disabled={!isValid}
            type="submit"
            className={clsx(
              'ml-auto mr-auto rounded-[32px] px-6 py-[18px] text-xl font-bold',
              isValid
                ? 'bg-[#e93405] text-[#ffffff]'
                : 'bg-[#e3e3e4] text-[#97979a]'
            )}
          >
            Зареєструватись
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;
