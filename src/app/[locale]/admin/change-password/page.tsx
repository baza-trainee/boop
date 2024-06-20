'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import axios from 'axios';
import Link from 'next/link';

interface CustomSession extends Session {
  user: {
    email: string;
    name?: string;
    image?: string;
  };
}

interface IFormInput {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ChangePasswordForm() {
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
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post('/api/change-password', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        email: session?.user.email,
      });

      if (response.status === 200) {
        console.log('Password updated successfully');
        signOut({ callbackUrl: '/admin' });
      } else {
        console.log('Failed to update password');
      }
    } catch (error) {
      console.log('Failed to update password', error);
    }
  };

  const newPassword = watch('newPassword', '');

  return (
    <>
      {!session ? (
        <Link href={'/admin/login'}>Pleause login!</Link>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className="mb-3 text-2xl">Change Password</h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="currentPassword"
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="currentPassword"
                    type="password"
                    placeholder="Enter your current password"
                    {...register('currentPassword', {
                      required: 'Current password is required',
                    })}
                  />
                  {errors.currentPassword && (
                    <span className="text-red-500">
                      {errors.currentPassword.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="newPassword"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    {...register('newPassword', {
                      required: 'New password is required',
                    })}
                  />
                  {errors.newPassword && (
                    <span className="text-red-500">
                      {errors.newPassword.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="confirmNewPassword"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="confirmNewPassword"
                    type="password"
                    placeholder="Confirm new password"
                    {...register('confirmNewPassword', {
                      required: 'Please confirm your new password',
                      validate: (value) =>
                        value === newPassword || 'Passwords do not match',
                    })}
                  />
                  {errors.confirmNewPassword && (
                    <span className="text-red-500">
                      {errors.confirmNewPassword.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="mt-4 w-full">
              Change Password
            </button>
          </div>
        </form>
      )}
    </>
  );
}
