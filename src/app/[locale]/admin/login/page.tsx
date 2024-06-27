'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn, getSession } from 'next-auth/react';
import { Session } from 'next-auth';

interface CustomSession extends Session {
  user: {
    email: string;
    name?: string;
    image?: string;
  };
}

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [session, setSession] = useState<CustomSession | null>(null);

  const fetchSession = async () => {
    const session = await getSession();
    if (session && session.user && session.user.email) {
      setSession(session as CustomSession);
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      console.log(res.error);
    } else {
      fetchSession();
    }
  };

  return (
    <>
      {!session ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter your email address"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    {...register('password', {
                      required: 'Password is required',
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="mt-4 w-full">
              Log in
            </button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            ></div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col">
          <p>Welcome Admin, email: {session.user?.email}</p>
        </div>
      )}
    </>
  );
}
