'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from '../formsInput/LoginForm';
import Loader from '@/components/shared/loader/Loader';

export default function LoginPage() {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);
  const [isErrorComponent, setIsErrorComponent] = useState<boolean>(false);

  useEffect(() => {
    setIsLoader(true);
    const fetchUsers = async () => {
      try {
        const userList = await axios.get('/api/users');
        if (userList.status === 200) {
          setIsLoginPage(true);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsErrorComponent(true);
      } finally {
        setIsLoader(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoader) {
    return <Loader />;
  }
  return (
    <>
      {isLoginPage && <LoginForm />}
      {isErrorComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-sm">
          <div
            className="relative flex min-h-[120px] w-[492px] flex-col items-center justify-center rounded-md border bg-white p-[56px]"
            role="alert"
          >
            <span className="block text-[1.3rem] font-normal sm:inline">
              Виникла зовнішня проблема,
            </span>
            <a
              href="/admin"
              className="ml-2 text-[1.3rem] font-normal text-blue-500 underline"
            >
              спробуйте перезавантажити сторінку
            </a>
            <span className="block text-[1.3rem] font-normal sm:inline">
              або пізніше.
            </span>
          </div>
        </div>
      )}
    </>
  );
}
