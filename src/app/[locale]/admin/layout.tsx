'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/admin/sidebar/Sidebar';
import { AlertWindow } from '@/components/admin/shared/AlertWindow';
import LoginPage from '@/components/admin/authComponents/LoginPage/LoginPage';
import { isUserLogined } from '@/components/admin/authComponents/ui/fetchSession';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userIsLogined, setUserIsLogined] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const logined = await isUserLogined();
      setUserIsLogined(logined);
    };

    checkLoginStatus();
  }, []);

  if (!userIsLogined) {
    return (
      <>
        <LoginPage />
        <AlertWindow />
      </>
    );
  }

  return (
    <div className="flex min-h-[100vh] w-full">
      <Sidebar />
      <div className="flex-1 bg-[#F3F4EE]">
        {children}
        <AlertWindow />
      </div>
    </div>
  );
}
