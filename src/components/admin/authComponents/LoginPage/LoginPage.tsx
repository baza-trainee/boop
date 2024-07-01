'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from '../formsInput/LoginForm';
import RegisterForm from '../formsInput/RegisterForm';
import Loader from '@/components/shared/loader/Loader';

export default function LoginPage() {
  const [isLoader, setIsLoader] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isErrorComponent, setIsErrorComponent] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await axios.get('/api/users');
        if (userList.status === 200) {
          setIsLoginPage(true);
        } else if (userList.status === 400) {
          setIsAdmin(false);
        }
      } catch (error) {
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
      {/* <RegisterForm /> */}
      {!isAdmin && <RegisterForm />}
      {isLoginPage && <LoginForm />}
      {isErrorComponent && (
        <div
          className="backdrop-brightness-10 fixed inset-0 z-50 flex 
        items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-sm"
        >
          <div
            className={`relative flex min-h-[120px] w-[492px] flex-col items-center justify-center rounded-md border border-solid bg-white  p-[56px]`}
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
